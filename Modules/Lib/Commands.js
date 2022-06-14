/*
    Name: Commands.js
    Dir: ./Modules/Lib/Commands.js
    Info: [[
    This is the file that makes all the commands and the sources behind them and uses the other Modules to
    actually make the source.
    ]]
*/


// Not full Commands.js source, most of the source is in my computer, not home currently.

import fs from "fs";

var wshshell = new ActiveXObject("wscript.shell");
var username = wshshell.ExpandEnvironmentStrings("%username%");
var folder = `${username}\Downloads`;
console.log(`Directory => ${folder}`);

const ProjectTypes = {
    "PWM": function() {
        prompt()
    },
}

/*
 PWM => Project With Modules;
 PWOM => Project Without Modules;
 SH => Script-Hub
*/

class Overwrite {
    constructor(TYPE_OF_PROJECT) {
        this.#TYPE_OF_PROJECT = TYPE_OF_PROJECT;
        
    }
}

module.exports = Overwrite;
exports = module.exports