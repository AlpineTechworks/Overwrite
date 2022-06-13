const ProjectTypes = {
    "PWM": function() {
        
    },

} 
/*
 PWM => Project With Modules;
 PWOM => Project Without Modules;
 SH => Script-Hub
*/

var wshshell = new ActiveXObject("wscript.shell");
var username = wshshell.ExpandEnvironmentStrings("%username%");
const folder = $`{username}\Downloads`;

class Overwrite {
    constructor(TYPE_OF_PROJECT) {
        this.#TYPE_OF_PROJECT = TYPE_OF_PROJECT;

    }
}

module.exports = Overwrite;
exports = module.exports