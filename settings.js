//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : Juvi-XMD 
// @author : Juvi 
// @telegram : http://t.me/official_kango
// @github : Officialjuvi
// @whatsapp : +8765159077

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"oEHJORE/Cg/CR8rc8aC+ZqHJD0YN8aL1XpFA9F2Smko="},"public":{"type":"Buffer","data":"+iHhp38AvzDQif2qa2MsJF9euryTL2/Uh/huEyugCXg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OCyFaWhAqARLUn8dOenjbRtRv332BSUzAtDLJMIpPlc="},"public":{"type":"Buffer","data":"15asLjiAg3UTcgJZUSF8vBWqeCmTGwicLCoqq4Cck28="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aHSadtHjJ3jRa1ARple5gkSy5TQfRYKewuYPi8QSP2E="},"public":{"type":"Buffer","data":"mF5F3LJBFYW95nQzRD7FTGP6qWhK4qd68XZsZQIn+nI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WGAd5sp8yJeg0V8d33DadUVq/cVwQGhPJ8a6/OxfyGM="},"public":{"type":"Buffer","data":"E/h0O+HQOWJPGCbHjgAyFsjbVuZpOWXg0GJafJhjXQs="}},"signature":{"type":"Buffer","data":"Vq0swuOQ1cgGJ13654r1ften6CPFvJSzlx+IkugmOBePr5NsVctFWzYVAquvSPZDbkO8JHe23+JJVpd74pv6gA=="},"keyId":1},"registrationId":208,"advSecretKey":"OY9pA+X6a8iqdDRqR0Y+f7sWFnFsTfhUa6fNBXECxrU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"SRDT2NC1","me":{"id":"18765159077:33@s.whatsapp.net","name":"Juvi","lid":"155937830637686:33@lid"},"account":{"details":"CPXgw5YDEI2HsMsGGAQgACgA","accountSignatureKey":"opUqEYcmPAly2tzduT8NLAGTnGN9j4igj0gxNyOa/1o=","accountSignature":"mO9qxvB0C2sL3flQFDisxs8hi05LdnTJL4hMRy/+9G5OUsq6UIF6+kE3/lVLc9M6jTv7Vwc2QMlADJRQhRoIBA==","deviceSignature":"Z2ojGz82nvFFIbbKvLd25+mekB0FhU1Jx/1w2KSnO6WkGiGF+arsCXGnxAgy8FfjmYRJr2NREgLCMSXvkSXdgQ=="},"signalIdentities":[{"identifier":{"name":"18765159077:33@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaKVKhGHJjwJctrc3bk/DSwBk5xjfY+IoI9IMTcjmv9a"}}],"platform":"smbi","routingInfo":{"type":"Buffer","data":"CAgIAggF"},"lastAccountSyncTimestamp":1768686486,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAAMn1","preKeys":{"private":{"type":"Buffer","data":"8Fg5J2QHGS1T48prB0DQW2xgafRzt1DT5A+Iav+u0W0="},"public":{"type":"Buffer","data":"w23Yq3+0eMvq7+9d5p8C6ryyOkXYxORQ5QIK0BdGDRU="}},"senderKeys":{},"timestamp":"2026-01-17T21:48:13.701Z"}' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'juvi-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '8765159077' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
