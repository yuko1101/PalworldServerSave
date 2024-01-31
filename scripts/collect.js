const fs = require("fs");
require("dotenv").config();

const palServerSavePath = `${process.env.STEAM_PATH}/steamapps/common/PalServer/Pal/Saved`;

const gameUserSettingsPath = `${palServerSavePath}/Config/WindowsServer/GameUserSettings.ini`;
const dedicatedServerName = fs.readFileSync(gameUserSettingsPath, "utf8").match(/^DedicatedServerName=([0-9A-F]+)$/m)[1];

const saveGamePath = `${palServerSavePath}/SaveGames/0/${dedicatedServerName}`;
fs.cpSync(saveGamePath, "save", { recursive: true });

const userDir = process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"];

const localDataPath = `${userDir}/AppData/Local/Pal/Saved/SaveGames/${process.env.STEAM_USER_ID}/${dedicatedServerName}/LocalData.sav`;
fs.cpSync(localDataPath, "save/LocalData.sav");


