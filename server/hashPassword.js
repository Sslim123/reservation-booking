const bcrypt = require("bcrypt");

(async () => {

    console.log(await bcrypt.hash("Admin123!",10));

    console.log(await bcrypt.hash("Manager123!",10));

    console.log(await bcrypt.hash("Reception123!",10));

    console.log(await bcrypt.hash("House123!",10));

})();