const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/vkdisanayakaofficial-netizen/test12/blob/main/images/vishu4.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 VISHU-BoT Is Alive Now😍*",
BOT_OWNER: '94789651586',  // Replace with the owner's phone number



};
