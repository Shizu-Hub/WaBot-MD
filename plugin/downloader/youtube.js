let { monospace } = require('../../lib/function')

module.exports = {
  name: "play",
  alias: ["play","video","audio"],
  category: "downloader",
  use: "<query> / <link>",
  async run({msg,conn},{q,args, map}){
   let { prefix } = map;
   let { from, reply, sender, command} = msg;
   if(!q) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣.  𝙀𝙟𝙚𝙢𝙥𝙡𝙤 : .${command} bad bunny - am`
   try {
     switch(command){
       case "play":
         await reply(respon.wait)
         require('yt-search').search(q).then(async i => {
         result = i.all[0]
         let y = await sc.youtube("mp3",result.url, "265")
         txt = "*▶️𝘿𝙟 𝙗𝙤𝙩▶️*\n\n"
         txt += "📌 𝗧𝗶𝘁𝘂𝗹𝗼: " + y.title + "\n"
         txt += "👭 𝙂𝙚𝙣𝙚𝙧𝙤 : " + y.genre + "\n"
         txt += "⚖️ 𝙏𝙖𝙢𝙖𝙣̃𝙤 : " + y.size + "\n"
         p = await tool.formatRupiah(`${y.views}`, ".")
         txt += "👀 *𝗩𝗶𝘀𝘁𝗮𝘀 : " + p + "\n"
         txt += "✨ 𝘾𝙖𝙡𝙞𝙙𝙖𝙙 : " + y.quality + "\n"
         txt += "⌚ 𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻 : " + y.seconds + " segundos " + ` ( ${y.timestamp} ) ` + "\n"
         txt += "✅ 𝙎𝙪𝙗𝙞𝙙𝙤: " + y.uploadDate + ` ( ${y.ago} ) ` + "\n"
         txt += " 𝑼𝑹𝑳 : " + y.url + ""
         const buttons = [
           { buttonId: `${prefix}audio ${result.url} ${sender}`,buttonText:{displayText: 'Audio'}, type : 1},
           { buttonId: `${prefix}video ${result.url} ${sender}`,buttonText:{displayText: 'Video'}, type : 1}
           ]
        const buttonMessage = {
           image: {url: y.thumb},
           caption: txt,
           footer: global.footer,
           buttons: buttons,
           headerType: 1
         }
       conn.sendMessage(msg.from, buttonMessage, {quoted : msg})
         })
         break;
         
       case "audio":
         if(sender != args[1])return msg.reply("No ha solicitado una canción, solicítela primero...")
         await reply(respon.wait)
         let audio = await sc.youtube("mp3",q, "265")
         conn.sendFile(msg.from, audio.link, "yt.mp3","", msg)
         break;
         
       case "video":
         if(sender != args[1])return msg.reply("No ha solicitado un video, solicítelo primero...")
         await reply(respon.wait)
         let video = await sc.youtube("mp4",q, "480")
         conn.sendFile(msg.from, video.link, "","", msg)
         break;
      
         
     }
   } catch (e){
     global.error(command, e, msg)
   }
  }
}
