const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true" || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_44_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTE1CUUxlT0pRSmhvc2NpeGpaZWFSNEF0RGdlcEJsTVI2MjRmOXh0TUMzTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODQxNDU4NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYwMEZDMEJBQTkyRTk2RDQ2NzU3ODcyNjM4RDA4MDM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTA5MTQ5MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2emZNRjFDVlFvYVZqRkV6VTk4enBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5Mjk0NjU0LWJkNWMtNDYxZC05MWM0LTRjZjYyYjNiN2EwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAzOSxcbiAgICAgIDIzOCxcbiAgICAgIDIxNSxcbiAgICAgIDE1OCxcbiAgICAgIDE3MCxcbiAgICAgIDI0OSxcbiAgICAgIDE1MyxcbiAgICAgIDI1MSxcbiAgICAgIDI0MCxcbiAgICAgIDAsXG4gICAgICAxNjgsXG4gICAgICAxNjQsXG4gICAgICAxMDAsXG4gICAgICAyMzAsXG4gICAgICAxMjAsXG4gICAgICAxNTksXG4gICAgICAyNCxcbiAgICAgIDE4NixcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAyNSxcbiAgICAgIDkwLFxuICAgICAgNzksXG4gICAgICAyNTEsXG4gICAgICAyMixcbiAgICAgIDE5MixcbiAgICAgIDE1OCxcbiAgICAgIDAsXG4gICAgICAxMDgsXG4gICAgICAxOTQsXG4gICAgICAxNTQsXG4gICAgICAxNjAsXG4gICAgICAyMjQsXG4gICAgICAxMDUsXG4gICAgICA4MixcbiAgICAgIDIxOSxcbiAgICAgIDQxLFxuICAgICAgMTQ0LFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNQU1FWRTRNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODQxNDU4NjE6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MzM4NTMyMDY4MTcyMDoxN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMZWUgQm95XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUd3bGRnQ0VKcTR1YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzbms5UFhWT3kwMzdxMUduSVFmTnFCcUkrdmhHVnM5ZVNRSTJ4RmsvOWdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIis0eWR0eUNsOUlqMWFKb0FNcEp3eGYwTEtwTzlGbTZ2VGhkMjJBSzY0MGFUUmpnY21ISFEvTkliOU4yK0ZaZ0VEbXhZcWExMTZCcXdJcWpjNEtRbkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxMcDl5a1ZiVVNWTnZmcUhmbEhmL3YvV3kzeTE0N1FjNXBqc2pvd294dTExbzdYVnZTUm5SVDNWc3hKc0JLek5KM2lpaWR3bGxSVGsyRjdldmNzUmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NDE0NTg2MToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwOTE0ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOQnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5CdS5qc29uIjogIntcImtleURhdGFcIjpcImh4Qk5iQUxPUTBSSktUOHNnbDl5YVRnUldYK3o2NUcwaEdTN1RPc3ZCbWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzIxNzcwNTYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEwODkyNjMxOThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "leoman",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
