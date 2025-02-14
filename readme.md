# PasswordGrid

NPM Package to Generate Password Grid.

## Stay Secure with 2FA Passcode Grid

A password grid, also called a "passcode grid," is a table with rows and columns containing unique letters or numbers where you select specific combinations to authenticate, essentially acting as a visual password by choosing specific coordinates on the grid to form your login credentials; to use it, you would typically be presented with a grid, then asked to enter the letters or numbers from specific grid positions (like "A3, B2, C1") to log in, usually requiring you to save or print the grid for future use as it's unique to your account.

## Key points about using a password grid:

### Access your grid:

While designing a authentication system, you can ask your users to enter the values in the Password grid as a 2FA passcode.
The user will be prompted to access your grid, which you should generate and show them.
The password grid can be generated at the time of user signin and they should save it for future use. so that the user can use the grid for 2FA authentication.

### Select coordinates:

The system will ask the user to enter the letters or numbers from specific grid positions, usually indicated by a combination of a column letter and row number (e.g., "B2", A8, etc).

### Enter the code:

The user will enter the values from the requested grid coordinates into the 2FA login field to authenticate.

## Benefits of a password grid:

### Enhanced security:

Since the user selects multiple characters from a grid, it's harder for someone to guess your password compared to a simple text-based password.

### Shoulder surfing resistant:

Less susceptible to "shoulder surfing" attacks where someone observes your password entry because the grid doesn't reveal the exact password sequence.

### Accessibility for some users:

Can be easier for people who struggle with remembering complex passwords.

## Usage

```javascript
const passwordGrid = require("passwordGrid");
var grid = new passwordGrid();
var gridStr = grid.generateGrid();
console.log(gridStr);
```

This will generate a password grid similar to

```
     1   2   3   4   5   6   7   8
   +-------------------------------+
A  | ) | s | h | > | # | o | # | + |
   |-------------------------------|
B  | ` | s | ? | j | o | g | [ | ' |
   |-------------------------------|
C  | r | ? | @ | & | ? | k | ] | < |
   |-------------------------------|
D  | - | , | p | > | ! | + | = | z |
   |-------------------------------|
E  | i | g | < | l | + | e | s | ? |
   |-------------------------------|
F  | + | q | ' | i | j | # | + | a |
   |-------------------------------|
G  | } | r | b | r | i | @ | = | @ |
   |-------------------------------|
H  | ` | r | z | % | < | @ | ; | ~ |
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
});
```

The generated grid size is 8x8.

If everything is set to _false_ as below, then it is invalid, so grid parameters will be set to default.

```javascript
grid.gridConfig({
  numbers: false,
  alphaUpper: false,
  alphaLower: false,
  symbols: false,
});
```
