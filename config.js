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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221705059739";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_49_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM210UUhsV1UyYzZoMHNSbUtaSmN2L3ljaDMvL2llVUlMQk5qR0FBKzIzWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3MDUwNTk3MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdBMzMwREFGQzU1RkVCMjcwRDE5RkQ1MTcyQjY0OTY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU5MDU3MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMTcwNTA1OTczOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzI2RjI3Q0QyNDJENDcyNjBGMDMyMkI5REQ1RjFDREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTkwNTcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzA1MDU5NzM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQUIzOTlDNDc4MkMyMjlCRDY3MDlERUUzNzMyQ0MzQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1OTA1NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3MDUwNTk3MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMyNzhFQ0FCRDY4RDY4OUIyNkU2RkZDODIwNkI3QTE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU5MDU3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzQ08zSDJnTVM4aUcycGpwS1BFY1dBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4NDdiZjIxLTQzZjgtNDEwYy05ZTRhLWVjOTYwODU5MjUwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE1LFxuICAgICAgMjEwLFxuICAgICAgMTU1LFxuICAgICAgMTc0LFxuICAgICAgMCxcbiAgICAgIDEwNSxcbiAgICAgIDEwOCxcbiAgICAgIDE2NyxcbiAgICAgIDI0NSxcbiAgICAgIDE4NCxcbiAgICAgIDExMSxcbiAgICAgIDE3MSxcbiAgICAgIDgsXG4gICAgICAyMDMsXG4gICAgICAxNTksXG4gICAgICAxMDgsXG4gICAgICA0OCxcbiAgICAgIDUsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDIyNCxcbiAgICAgIDI0MSxcbiAgICAgIDMsXG4gICAgICAyNTEsXG4gICAgICAxNTYsXG4gICAgICAxOTMsXG4gICAgICAxOTIsXG4gICAgICAyOCxcbiAgICAgIDIxOSxcbiAgICAgIDIyMSxcbiAgICAgIDEsXG4gICAgICAzLFxuICAgICAgMTA5LFxuICAgICAgMTUsXG4gICAgICAwLFxuICAgICAgMjM2LFxuICAgICAgMTU0LFxuICAgICAgMjQyLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY0RloyMUQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3MDUwNTk3Mzk6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb3QgQnkgTWVcIixcbiAgICBcImxpZFwiOiBcIjIwOTM0NTgzMjg1MzY0OToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTG9nUElERU9YQnVMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlYvY01GNTZyR05vSTVBQmZHYkpqaVV3RThja3NQTmdMUFVGZTJ1Q2c5Um89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN0V4cFNvTVg1aFY2dkg2T3pwQjNOQUFKVzVvUlpFTjQ2SjBlMDRQNG15dEllYitPdUN2NVdzYTVKOU91elYwOGJla1dKN25vbFhYeDFEYnEvamNZRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDh6YzhGZDkrdlZPdVZnVGEyMmFnbUZpVzBsVkxxY0FzZkRpOUwyeUp0VXd4QlV3eDYwUDJmWGI4Ny9vanR0Q2pxSGNBWmY5Y1pWNGRTU2Roc0tURHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzA1MDU5NzM5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTkwNTY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWMzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNYzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuN1pDc2puQXJEQTV5VHhCNFU1UkE2ZjQ0ZkZqMFduM1BKV0pzQ29EbmdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNDQzOTUwNDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDU5MDU3MDgxMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "IsoBot",
  ownername:process.env.OWNER_NAME|| "Ismail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
