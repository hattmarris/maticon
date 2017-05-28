const https = require("https");
const fs = require("fs");
const readline = require("readline");
const xml2js = require("xml2js");
const alph = require("alphabetize");

CONFIG = require("../config/config.json");

class MatIcon {
  constructor(iconName) {
		const { HOSTNAME, PORT, PATH, COLOR, SIZE, FILE } = CONFIG;

    this.iconName = this.underScore(iconName);
    this.options = {
      hostname: HOSTNAME,
      port: PORT,
      path: `${PATH}_${this.iconName}_${COLOR}_${SIZE}px.svg`,
      method: "GET"
    };
    this.icon = {};
    this.parsedPath = "";
    this.ICONS = require(FILE);
  }

  underScore(name = "") {
    if (!name) throw Error("Cant underscore delimit empty string...");
    return name.replace(/\s/g, "_");
  }

  request() {
    const req = https.get(this.options, res => {
      // console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);
      let xmlString = "";
      res.setEncoding("utf8");
      res.on("data", d => {
        xmlString += d;
      });
      res.on("end", () => {
        xml2js.parseString(xmlString, (err, result) => {
          if (err) throw new Error(err);
          this.icon = result;
          this.parsedPath = this.parsePath(result);
          this.savePath(this.parsedPath);
        });
      });
    });

    req.on("error", e => {
      console.error(e);
    });

    req.end();
  }

  /**
	 * Default to instance parsedPath
	 */
  savePath(path = this.parsedPath) {
    if (!path) throw Error("No path to save passed and no path in memory.");
    var upCased = this.iconName.toUpperCase();
    if (this.ICONS.hasOwnProperty(upCased)) {
      this.prompt("This Icon is already stored, do you want to replace it? (y/n)");
    }
    this.insertPath(upCased);
		this.saveToFile();
  }

  insertPath(upCased) {
 		this.ICONS[upCased] = this.parsedPath;
		this.ICONS = alph.order(this.ICONS);
  }

	saveToFile() {
		fs.writeFileSync(CONFIG.FILE, JSON.stringify(this.ICONS), "utf-8");
	}

  prompt(text) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(text, answer => {
      switch (answer) {
        case "y":
          console.log("sweet, lets do it.");
          rl.close();
					this.insertPath(this.iconName.toUpperCase());
					this.saveToFile();
          break;
        case "n":
          console.log("okay, cool. exiting.");
          rl.close();
          process.exit();
          break;
        default:
          console.log('Sorry just type "y" or "n" lowercase, only input allowed for now.');
          rl.close();
          this.prompt(text); // re-prompt...
          break;
      }
    });
  }

  parsePath(icon) {
    const paths = icon.svg.path;
    for (let i = 0; i < paths.length; i++) {
      let path = paths[i];
      if (path.$.d != "M0 0h24v24H0z" && !path.$.hasOwnProperty("fill")) {
        return path.$.d;
      }
    }
  }
}

module.exports = MatIcon;
