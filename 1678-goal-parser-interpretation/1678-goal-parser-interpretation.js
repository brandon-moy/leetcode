/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let output = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "(") {
            if (command[i + 1] === ")") {
                output += "o";
                i++;
            } else {
                output += "al";
                i += 3;
            }
        } else {
            output += command[i];
        }
    }
    return output;
};