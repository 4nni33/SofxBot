let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*@lunita_2art* ${pesan}`
let teks = `*¡ATENCIÓN!*\n\n ${oi}\n ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
teks += `─ ⋯ ─ ⋯ ─ ⋯ ─ ⋯ ─ `
for (let mem of participants) {
teks += `🫧໋᳝݊▹֛◌  @${mem.id.split('@')[0]}\n`}
  teks += `─ ⋯ ─ ⋯ ─ ⋯ ─ ⋯ ─ `
teks += `🌸ɞ  𝗦𝗼𝗳𝘅𝗕𝗼𝘁 ✨ ⤾·˚ ༘*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
