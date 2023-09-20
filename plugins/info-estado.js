/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE GATABOT-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM GATABOT-MD, THANK YOU **/
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let uptime = clockString(_uptime)
let estado = `╭┈┈  ৎ 👑 ׂ ⬫ *Estado*  ָ࣪  ۰ . ¡! 
│💗 *¡Hola!* ${name}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
│▹ *Versión de Thezero*
│▹ ${vs}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *Activo Durante | Active During* 
│▹ ${uptime}
│▹ *Usuario(s) | Users* 
│▹ ${Object.keys(global.db.data.users).length} 
│▹ *Chat(s) Prohibido(s) | Forbidden Chats*
│▹ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
│▹ *Usuario(s) Prohibido(s) | Prohibited Urs*
│▹ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰───────────────๑🫧๑`
await conn.sendFile(m.chat, picture, 'gata.mp4', estado, fkontak)
/*let estado =`
╭┈┈  ৎ 👑 ׂ ⬫ *Estado*  ָ࣪  ۰ . ¡! 
│💗 *¡Hola!* ${name}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
│▹ *Versión de GeriPium*
│▹ ${vs}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *Activo Durante | Active During* 
│▹ ${uptime}
│▹ *Usuario(s) | Users* 
│▹ ${Object.keys(global.db.data.users).length} 
│▹ *Chat(s) Prohibido(s) | Forbidden Chats*
│▹ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
│▹ *Usuario(s) Prohibido(s) | Prohibited Urs*
│▹ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰───────────────๑🫧๑`.trim()

conn.sendHydrated(m.chat, estado, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, picture, 'https://www.instagram.com/lunita_2art', 'SofxBot', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪', '.allmenu'],
['𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙎𝙥𝙚𝙚𝙙', '/ping'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)}*/
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
