const child_process = require("child_process");

require("./collect");

child_process.execSync("git add save");
child_process.execSync(`git commit -m "Backup save @ ${new Date().toISOString()}"`);

require("./clean");