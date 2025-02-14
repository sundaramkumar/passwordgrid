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
    };

    if (config.gridSize != 8) config.gridSize = 8;

    //if everything is set false, then it is invalid, so set to default
    if (
      config.numbers == false &&
      config.alphaUpper == false &&
      config.alphaLower == false &&
      config.symbols == false
    ) {
      config = defaultConfig;
    }

    Object.assign(this, defaultConfig, config);
  }

  generateGrid() {
    var usableChars = this.getUsableChars();
    var str = "";

    var topHeaderLabels = ["1", "2", "3", "4", "5", "6", "7", "8"];
    var sideHeaderLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var headr = "   +" + Array(this.gridSize * 4).join("-") + "+\n";
    var topheader = "     ";

    var divr = "   |" + Array(this.gridSize * 4).join("-") + "|\n";

    str += topheader;

    for (var x = 0; x < this.gridSize; x++) {
      str += topHeaderLabels[x] + "   ";
    }
    str += "\n";
    str += headr;
    for (var y = 0; y < this.gridSize; y++) {
      str += sideHeaderLabels[y] + " ";
      for (var c = 0; c < this.gridSize; c++) {
        str += " | " + this.randomChar(usableChars) + "";
        if (c == this.gridSize - 1) str += " |";
      }
      if (y != this.gridSize - 1) str += "\n" + divr;
      if (y == this.gridSize - 1) str += "\n";
    }

    str += headr;

    return str;
  }
}

module.exports = passwordGrid;
