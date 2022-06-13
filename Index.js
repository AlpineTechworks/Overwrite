var wshshell = new ActiveXObject("wscript.shell");
var username = wshshell.ExpandEnvironmentStrings("%username%");
var folder = `${username}\Downloads`;
console.log(`Directory => ${folder}`);

const ProjectTypes = {
    "PWM": function() {
    }
},

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