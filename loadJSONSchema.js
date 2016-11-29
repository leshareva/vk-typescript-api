"use strict";

var protocol = "http";

var http = require(protocol);
var fs = require('fs');

function loadFromGithub(filename, callback)
    {
    http.get(protocol+"://localhost:8000/"+filename, function(response)
        {
        var content = "";
        response.on("data", function(chunk)
            {
            content+=chunk;
            });
        response.on("end", function(chunk)
            {
            callback(content);
            });
        });
    }

function loadFileList(names, callback, allcontent)
    {
    if(!allcontent) { allcontent = {}; }
    
    var cur_file = names[names.length-1];
    var other_files = names.slice(0,-1);
    process.stdout.write("load "+cur_file+"...");
    
    loadFromGithub(cur_file, function(content)
        {
        process.stdout.write(" [OK]\n");
        allcontent[cur_file] = content;
        if (other_files.length === 0)
            {
            callback(allcontent);
            }
        else
            {
            loadFileList(other_files, callback, allcontent);
            }
        });
    }

loadFileList(["methods.json", "objects.json", "responses.json"], generateTypescript);

function getParamType(schemaType)
    {
    if(schemaType === "number") { return "number"; }
    if(schemaType === "integer") { return "number"; }
    if(schemaType === "string") { return "string"; }
    if(schemaType === "array") { return "string"; /* TODO "Array<any>" */;  }
    if(schemaType === "boolean") { return "0 | 1"; }
    console.log("cannot find type for "+schemaType);
    return "any";
    }

function parseParams(params)
    {
    if(!params) { return "params: any"; }
    var paramsTS = [];
    for(var param of params)
        {
        var reqSym = "?";
        if(param.required) { reqSym = ""; }
        paramsTS.push(
            param.name+
            reqSym+
            ": "+
            getParamType(param.type));
        }
    return "params: {\n\t"+paramsTS.join(",\n\t")+"\n\t}";
    }

function generateMethod(method)
    {
    var methodTS = "";
    var newName = method.name.replace(".", "_");
    var params = parseParams(method.parameters);
    return newName+" ("+params+", callback?: Function): void;";
    }

function generateAllMethods(methodsSchema)
    {
    var allmethods = [];
    for(var method of methodsSchema)
        {
        allmethods.push(generateMethod(method));
        }
    return allmethods.join("\n");
    }

function replaceInFile(filein, fileout, pointer, replaceData)
    {
    var template = fs.readFileSync(filein, 'utf8');
    var generated = template.replace(pointer, replaceData);
    fs.writeFileSync(fileout, generated);
    }

var templ_folder = "templates";
var gen_filder = "generated";

function writeMethodsInTSFile(methods)
    {
    replaceInFile(templ_folder+"/vk.d.tstempl",
                  gen_filder  +"/vk.d.ts", "/*ALL_METHODS*/", methods);
    }

function writeDynamicLoadMethods(methods)
    {
    replaceInFile(templ_folder+"/vk-type-methods.jstempl",
                  gen_filder  +"/vk-type-methods.js", "/*METHODS_LIST*/", methods);
    }

function writeLoadSafeMethods(methods)
    {
    replaceInFile(templ_folder+"/vk-safe-wrapper.jstempl",
                  gen_filder  +"/vk-safe-wrapper.js", "/*METHODS_JSON*/", methods);
    }


function getMethodsList(methods)
    {
    var allMethods = [];
    for(var method of methods)
        {
        allMethods.push("\""+method.name+"\"");
        }
    return allMethods.join(", ");
    }

function toDict(array, field)
    {
    var newDict = {};
    for(var item of array)
        {  
        newDict[item[field]] = item;
        }
    return newDict;
    }

function removeParamsDescription(params)
    {
    if(!params) { return; }
    for(var param of params)
        {  
        delete param.description;
        }
    }

function convertToDynamicCheck(methods)
    {
    for(var method of methods)
        {
        delete method.description;
        delete method.errors;
        delete method.responses;
        
        if (!method.parameters)
            {
            method.parameters = {};
            continue;
            }
        removeParamsDescription(method.parameters);
        method.parameters = toDict(method.parameters, "name");
        }
    methods = toDict(methods, "name");
    return JSON.stringify(methods);
    }
function generateTypescript(files)
    {
    console.log("all loaded");
    for(var file in files)
        {
        console.log(file);
        }
    var methodsFileSchema = JSON.parse(files["methods.json"]);
    var methodsSchema = methodsFileSchema.methods;
    var methodsTS = generateAllMethods(methodsSchema);
    writeMethodsInTSFile(methodsTS);
    writeDynamicLoadMethods(getMethodsList(methodsSchema));
    writeLoadSafeMethods(convertToDynamicCheck(methodsSchema));
    }

