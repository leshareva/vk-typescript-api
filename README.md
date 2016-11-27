# vk-typescript-api
VK API with TypeScript definitions

### USAGE: ###
Put `add_methods.js` and `vk.d.ts` file in folder with TypeScript sources

Iclude `add_methods.js` after standard VK `xd_connection.js` file
```
  <script src="https://vk.com/js/ap/xd_connection.js"  type="text/javascript"></script>
  <script src="add_methods.js"  type="text/javascript"></script>
```
call methods like this:
```
VK.wall_get({...}, callback);
```
instead of this way:
```
VK.api("wall.get", {...}, callback);
```
