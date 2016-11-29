# vk-typescript-api

Обертка над JavaScript SDK, которая поможет в написании и тестировании приложения на TypeScript/JavaScript для вконтакте.

### Как использовать: ###
#### Для TypeScript: ####
Положите `add-type-methods.js` и `vk.d.ts` из папки `generate` в папку с вашим проектом на TypeScript.
Подключите `add-type-methods.js` после стандартного файла SDK `xd_connection.js`
```
  <script src="https://vk.com/js/ap/xd_connection.js"  type="text/javascript"></script>
  <script src="add-type-methods.js"  type="text/javascript"></script>
```
Пишите новые вызовы методов и заменяйте старые так:
```
VK.wall_get({...}, callback);
```
вместо стандартного(который тоже работает):
```
VK.api("wall.get", {...}, callback);
```
Названия отличаются только заменой точек на подчеркивания.
#### Для JavaScript и/или TypeScript: ####
Подключите в приложение `vk-safe-wrapper.js` после стандартного файла SDK `xd_connection.js`
```
  <script src="https://vk.com/js/ap/xd_connection.js"  type="text/javascript"></script>
  <script src="vk-safe-wrapper.js"  type="text/javascript"></script>
```
Больше ничего делать не надо - это автоматически включит динамическую проверку типов и значений пареметров, передаваемых в метод `VK.api()`

Можно комбинировать с использованием обертки для TypeScript - в вызовах типа `VK.wall_get({...}, callback)` параметры тоже будут проверяться. 
