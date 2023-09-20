import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let vn = './media/infobot.mp3'
let grupos = [nna, nn, nnn, nnntt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'The LoliBot-MD', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let old = performance.now()
  //await m.reply('_Realizando test_')
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let speed = neww - old

let info = `╭┈┈  ৎ 👑 ׂ ⬫[ ${gt} ] ָ࣪  ۰ . ¡! 
│▹ *CREADOR | CREATOR*
│▹ *Zero*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CONTACTO | CONTACT* 
│▹ *${ig}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *VERSIÓN ACTUAL | VERSION*
│▹ ${vs}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *PREFIJO | PREFIX*
│▹ *${usedPrefix}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CHATS PRIVADOS | PRIVATE CHAT*
│▹ *${chats.length - groups.length}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CHATS DE GRUPOS | GROUP CHAT*
│▹ *${groups.length}* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CHATS EN TOTAL | TOTAL CHATS*
│▹ *${chats.length}* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *ACTIVIDAD | ACTIVITY*
│▹ *${uptime}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *USUARIOS | USERS*
│▹ *${totalreg}* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *VELOCIDAD | SPEED*
│▹  *${speed}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *BOT SECUNDARIOS ACTIVOS | ACTIVE SECONDARY BACKS*
│▹ *${totaljadibot.length}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *AUTOREAD*
│▹ ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *RESTRICT* 
│▹ ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
│
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ]━━⬣`
await conn.sendFile(m.chat, pp, 'gata.mp4', info, fkontak)
/*let info = `
╭┈┈  ৎ 👑 ׂ ⬫[ ${gt} ] ָ࣪  ۰ . ¡! 
│
│▹ *CREADORA | CREATOR*
│▹ *Sofiii*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CONTACTO | CONTACT* 
│▹ *${ig}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *VERSIÓN ACTUAL | VERSION*
│▹ ${vs}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *PREFIJO | PREFIX*
│▹ *${usedPrefix}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CHATS PRIVADOS | PRIVATE CHAT*
│▹ *${chats.length - groups.length}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CHATS DE GRUPOS | GROUP CHAT*
│▹ *${groups.length}* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *CHATS EN TOTAL | TOTAL CHATS*
│▹ *${chats.length}* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *ACTIVIDAD | ACTIVITY*
│▹ *${uptime}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *USUARIOS | USERS*
│▹ *${totalreg}* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *VELOCIDAD | SPEED*
│▹  *${speed}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *BOT SECUNDARIOS ACTIVOS | ACTIVE SECONDARY BACKS*
│▹ *${totaljadibot.length}*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *BATERIA | DRUMS*
│▹ *${conn.battery ? `${conn.battery.value}%* *${conn.battery.live ? '🔌 Cargando...*' : '⚡ Desconectado*'}` : 'Desconocido*'}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *AUTOREAD*
│▹ ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│▹ *RESTRICT* 
│▹ ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
│
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ]━━⬣`.trim()

conn.sendHydrated(m.chat, info, wm, pp, 'https://www.instagram.com/lunita_2art', 'SofxBot', null, null, [
['𝙑𝙚𝙧 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙎𝙚𝙚 𝙂𝙧𝙤𝙪𝙥𝙨', '#grupolista'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '.menu']
], m,)*/
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
