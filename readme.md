# PasswordGrid

NPM Package to Generate Password Grid

## Usage

```javascript
const passwordGrid = require("passwordGrid");
var grid = new passwordGrid();
var gridStr = grid.generateGrid();
console.log(gridStr);
```

This will generate a password grid similar to

```
+-------------------------------+
| | | ! | e | p | : | { | : | 0 |
|-------------------------------|
| Y | < | R | \ | ^ | , | A | _ |
|-------------------------------|
| W | X | I | q | % | g | = | l |
|-------------------------------|
| 1 | d | g | _ | K | > | a | & |
|-------------------------------|
| @ | < | + | e | ] | [ | K | $ |
|-------------------------------|
| 9 | , | % | S | w | 2 | J | 2 |
|-------------------------------|
| D | 3 | M | 0 | t | E | 7 | X |
|-------------------------------|
| ! | E | H | - | I | b | 6 | Z |
+-------------------------------+
```

### Grid Configuration

While generating grid, you can configure the grid generation parameters.

```javascript
grid.gridConfig({
  numbers: false,
  alphaUpper: false,
  alphaLower: true,
  symbols: true,
  gridSize: 8,
});
```

Max gridSize is 16 and min is 8.

If everything is set to false, then it is invalid, so parameters will be set to default.

```javascript
grid.gridConfig({
  numbers: false,
  alphaUpper: false,
  alphaLower: true,
  symbols: true,
});
```
