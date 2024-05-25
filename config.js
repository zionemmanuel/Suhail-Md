const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035471427";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_37_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1RUOFRsV1BkQTNxTmpFQy9DamNqQTJ4dmgxSHY2M0I2NGJCSUR0dVJhZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM1NDcxNDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUIzNjVFOTU4QzI5M0MwOTIwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2NTE0MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM1NDcxNDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTcyNTFBRjQxRUFBNUMyMzAxQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2NTE0MzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSEc0TUt4SkRRZC1VTHQtSHU2WjEtd1wiLFxuICBcInBob25lSWRcIjogXCI0NmYxZTVjMi0xNmNiLTQxZGUtOTczYy05ZWFjYjlhODQ2YWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxNzMsXG4gICAgICAxMTIsXG4gICAgICA4NCxcbiAgICAgIDE4NCxcbiAgICAgIDIyMCxcbiAgICAgIDE2LFxuICAgICAgMTI2LFxuICAgICAgMjM4LFxuICAgICAgMTEzLFxuICAgICAgMTk2LFxuICAgICAgMTk5LFxuICAgICAgMTUyLFxuICAgICAgMTQ1LFxuICAgICAgMTY3LFxuICAgICAgMTIxLFxuICAgICAgMjM5LFxuICAgICAgMjUwLFxuICAgICAgMjE2LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTc2LFxuICAgICAgMjE0LFxuICAgICAgOTcsXG4gICAgICA0MixcbiAgICAgIDE3OCxcbiAgICAgIDIzNSxcbiAgICAgIDEyLFxuICAgICAgOTcsXG4gICAgICAxNSxcbiAgICAgIDExLFxuICAgICAgMjUsXG4gICAgICAyNDksXG4gICAgICAxMzQsXG4gICAgICA5NSxcbiAgICAgIDc1LFxuICAgICAgMTI2LFxuICAgICAgMjA4LFxuICAgICAgMTk5LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RU5HVkFLUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNTQ3MTQyNzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1vdmVmaXJldXBcIixcbiAgICBcImxpZFwiOiBcIjQ0Njg5MzAyNTQwMzY2OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyRjRJNFBFS1NMeUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSkloVGY3N2VseTJTbXNDR0lKeTl2TW9qWWRyQnlRUWErMzIwUGUyZHV3ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwTld1WENFTlgyaTBKbXBiVFF3d21qSUpxckVHTHBlUEZsK3dJN0I2THJoaTY0QW4yL1g0SEdHQ0ppT0s3Q1ZIWnd4WXhCRTkrbXRTMUN4UU0zcVpCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvY1BjdDdwZkwvTTIvNnpuRHJMZFZXa1o3MlhVSGg1eHNFeHhGdEx1Q3hYQjBhNTZYU0FmdnZYSU1ramw2QS9jdGR0M1U0Tk0rckovNXcvUGk4bkNBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM1NDcxNDI3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY1MTQzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNPUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ09QLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3BTeUlVNndRVlQyTVZrM0lKMnYzZElVQS9RTEh5ZG11cjQwWHVsUFVOUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDU3NDczNzA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2NTE0MzQ5OTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
