require('dotenv').config()
const fs = require('fs');

// Delete existing Contract
const path = `./pacts/${process.env.CONSUMER_NAME}-${process.env.PROVIDER_NAME}.json`;

module.exports = async function() {
    if (fs.existsSync(path)) {
        fs.unlink(path, (err) => {
            if (err) {
                throw err;
            }
            console.log("The existing Contract is deleted.");
        });
    }
}
