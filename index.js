ALPHA_LOWER_CHARS = "abcdefghijklmnopqrstwvuxyz";
ALPHA_UPPER_CHARS = "ABCDEFGHIJKLMNOPQRSTWVUXYZ";
NUMBER_CHARS = "1234567890";
SYMBOL_CHARS = "~`!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/";

class passwordGrid {
  constructor() {
    this.alphaUpper = true;
    this.alphaLower = true;
    this.numbers = true;
    this.symbols = true;
    this.gridSize = 8;
  }

  randomChar = (str) => {
    var c = str.charAt(Math.floor(Math.random() * str.length));
    if (c == "") return " ";
    return c;
  };

  getUsableChars = () => {
    var str = "";
    if (this.alphaUpper) str += ALPHA_UPPER_CHARS;
    if (this.alphaLower) str += ALPHA_LOWER_CHARS;
    if (this.numbers) str += NUMBER_CHARS;
    if (this.symbols) str += SYMBOL_CHARS;
    return str;
  };

  gridConfig(config = {}) {
    const defaultConfig = {
      numbers: true,
      alphaUpper: true,
      alphaLower: true,
      symbols: true,
      gridSize: 8,
    };

    Object.assign(this, defaultConfig, config);
  }

  generateGrid() {
    var usableChars = this.getUsableChars();
    var str = "";
    var headr = "+" + Array(this.gridSize * 4).join("-") + "+\n";
    var divr = "|" + Array(this.gridSize * 4).join("-") + "|\n";

    str += headr;
    for (var y = 0; y < this.gridSize; y++) {
      for (var c = 0; c < this.gridSize; c++) {
        str += "| " + this.randomChar(usableChars) + " ";
        if (c == this.gridSize - 1) str += "|";
      }
      if (y != this.gridSize - 1) str += "\n" + divr;
      if (y == this.gridSize - 1) str += "\n";
    }

    str += headr;

    return str;
  }
}

module.exports = passwordGrid;
