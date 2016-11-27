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

function generateMethod(method)
    {
    var methodTS = "";
    var newName = method.name.replace(".", "_");
    var params = "params: any";
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

function writeMethodsInTSFile(filename, pointer, methods)
    {
    var tsTemplate = fs.readFileSync(filename, 'utf8');
    var generated = tsTemplate.replace(pointer, methods);
    console.log(generated);
    fs.writeFileSync("vk.d.ts", generated);
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
    writeMethodsInTSFile("vk.d.tstempl", "/*ALL_METHODS*/", methodsTS);
    }

