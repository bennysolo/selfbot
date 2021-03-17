/*
* Thanks For 𝗠𝗵𝗮𝗻𝗸𝗕𝗮𝗿𝗕𝗮𝗿
*/

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64');
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const speed = require('performance-now')
const speedTest = require('@lh2020/speedtest-net');
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')

prefix = '#'
fake = '*LitRHap-SELF*'
numbernye = '0'
targetprivate = '918119971193'
blocked = []            
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `-[ 𝙍𝙐𝙉𝙏𝙄𝙈𝙀 ]-\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}

function clamp(value, min, max) {
	return Math.min(Math.max(min, value), max)
}

function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] scan oniichan`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

/*client.on('message-update', json => {
	console.log(json)
	client.reply(json, MessageType.text)
})*/

//client.on('user-presence-update', json => console.log(json.id + 'Status => ' + json.type)) || console.log(`${time}: Bot`)

//client.on('chat-update', json => console.log(json.id + 'WWhat?' + json.type)) || console.log(`${time}: Bot`)

client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]} Welcome to group *${mdata.subject}* Jangan lupa intro...Betah-betah yah di sini🖤`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, teks, MessageType.text)
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara🥳 @${num.split('@')[0]} Al-fatihah buat yang left/terkick!.`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, teks, MessageType.text)
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	//
client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	


	client.on('message-new', async (mek) => {
		try { 
			if (!mek.message) return client.sendMessage('status@broadcast', 'NGEWE ENAK NIH', extendedText)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return client.sendMessage('status@broadcast', 'NGEWE ENAK NIH', extendedText)
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const barbarkey = 'APIKEY_LU'
			const vhtearkey = 'APIKEY_LU'
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			anu = benny.chats.all()
			for (let o of anu) {
			benny.sendMessage(o.jid, 'NGEWE ENAK NIH', text)
						}
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'chotto matte oniichan',
				success: 'haik oniichan',
				error: {
					stick: 'baka! ini video iniichan',
					Iv: 'Linknya mokad:v'
				},
				only: {
					group: 'cuman di group oniichan...',
					ownerG: 'khusus owner group oniichan...',
					ownerB: 'oniichan siapa?',
					admin: 'baka! khusus admin group oniichan...',
					Badmin: 'baka! bukan admin gimana mau command'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["918119971193@s.whatsapp.net"] // ganti nomer lu
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const totalchat = await client.chats.all()
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		
			switch(command) {
				case 'hidetag1':
				case 'hidetag':
					members_id = []
					teks = (args.length > 1) ? body.slice(9).trim() : `${body.slice(8)}`
					for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true) 
					break
				case 'shota':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					var selepbot = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					{
						var items = ['shota anime', 'anime shota'];
						var nime = items[Math.floor(Math.random() * items.length)];
						var url = "https://api.fdci.se/rep.php?gambar=" + nime;
					
						axios.get(url)
						  .then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nimek = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nimek)
							.then(
								(response) => {
						var buf = Buffer.from(response, 'base64');
						client.sendMessage(from, mess.wait, MessageType.text, selepbot)
						client.sendMessage(from, buf, MessageType.image, { caption: `*SHOTA!*`, quoted: mek })
						   
								}
							)
							.catch(
								(error) => {
									console.log(error);
								}
							)
						
						});
						}
					break
				case 'hidetag2':
					var value = text.replace(text.split(' ')[0], `${body.slice(9)}`)
					var group = await client.groupMetadata(jid)
					var member = group['participants']
					var ids = []
					member.map( async adm => {
					ids.push(adm.jid.replace('c.us', 's.whatsapp.net'))
					})
					var optionsss = {
					text: value,
					contextInfo: { mentionedJid: ids },
					quoted: m
					}
					client.sendMessage(jid, optionsss, MessageType.text)
					break
				case 'brainly':
					var teks = body.slice(9)
					axios.get(`https://api.vhtear.com/branly?query=${teks}&apikey=${vhtearkey}`).then((res) => {
					 let hasil = ` ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ${res.data.result.data}`;
						client.sendMessage(from, hasil ,MessageType.text, { quoted: mek } );
					})
				break
				case 'group':
				case 'grup':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const groupp = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					if (!isGroup) return reply(mess.only.group)
					if (args[0] === 'open') {
					client.sendMessage(from, `「 *SUCCES OPEN GRUP* 」`, MessageType.text, groupp)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
					await client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					client.sendMessage(from, `「 *SUCCES CLOSE GRUP* 」`, MessageType.text, groupp)
					}
					break
				case 'wiki':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `*𝐖𝐈𝐊𝐈*`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const wimki = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					var teks = body.slice(6)
					axios.get(`https://alfians-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
						client.sendMessage(from, '[ WAIT ] Searching...⏳ silahkan tunggu', MessageType.text, wimki)
						let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
						client.sendMessage(from, hasil ,MessageType.text, wimki);
					})
					break
				case 'gcname':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const gcname = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					await client.groupUpdateSubject(from, `${body.slice(8)}`)
					client.sendMessage(from, `「 *CHANGE TO ${body.slice(8)}* 」`, MessageType.text, gcname)
					break
				case 'gcdesk':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const gcdesk = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					await client.groupUpdateDescription(from, `${body.slice(8)}`)
					client.sendMessage(from, `「 *CHANGE TO ${body.slice(8)}* 」`, MessageType.text, gcdesk)
					break
				case 'tinyurl':
					const tinyurl = body.slice(9)
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const srotlink = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					axios.get(`https://tobz-api.herokuapp.com/api/tinyurl?url=${tinyurl}&apikey=BotWeA`).then((res) => {
						let hasil = `${res.data.result}`;
						client.sendMessage(from, hasil, MessageType.text, srotlink)
				})
				break
				case 'runtime':
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					client.sendMessage(from, `${teks}`, MessageType.text, rtimebro)
					break
					case 'joox':
						var itsme = `${numbernye}@s.whatsapp.net`
						var split = `𝙋𝙡𝙖𝙮 𝙎𝙤𝙣𝙜 𝙁𝙧𝙤𝙢 𝙅𝙤𝙤𝙭`
						var selepbot = {
						contextInfo: {
						participant: itsme,
						quotedMessage: {
						extendedTextMessage: {
						text: split,
										}
									}
								}
							}
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
					teks = '-「 *Play Music From Joox* 」-\n'
					const joox = data.result
						teks += `\n- *Judul* : ${joox.title}\n- *Album* : ${joox.album}\n- *Publish At* : ${joox.dipublikasi}\n\n-「 *SELF-BOT* 」-`
					thumb = await getBuffer(joox.thumb)
					client.sendMessage(from, mess.wait, MessageType.text, selepbot)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(joox.mp3)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted: mek})
					break
					case 'play':
						var itsme = `${numbernye}@s.whatsapp.net`
						var split = `𝙋𝙡𝙖𝙮 𝙎𝙤𝙣𝙜 𝙁𝙧𝙤𝙢 𝙔𝙤𝙪𝙩𝙪𝙗𝙚`
						var selepbot = {
						contextInfo: {
						participant: itsme,
						quotedMessage: {
						extendedTextMessage: {
						text: split,
										}
									}
								}
							}
						data = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtearkey}`, {method: 'get'})
						teks = '-「 *Play Music From Youtubes* 」-\n'
						const play = data.result
							teks += `\n- *Judul* : ${play.title}\n- *Durasi* : ${play.duration}\n- *Size* : ${play.size}\n\n-「 *SELF-BOT* 」-`
						thumb = await getBuffer(play.image)
						client.sendMessage(from, mess.wait, MessageType.text, selepbot)
						client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
						buffer = await getBuffer(play.mp3)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play.title}.mp3`, quoted: mek})
						break
						case 'pinterest':
							var itsme = `${numbernye}@s.whatsapp.net`
							var split = `𝙎𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜 𝙄𝙢𝙖𝙜𝙚 𝙁𝙧𝙤𝙢 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩`
							var selepbot = {
							contextInfo: {
							participant: itsme,
							quotedMessage: {
							extendedTextMessage: {
							text: split,
											}
										}
									}
								}
							const papapale = body.slice(11)
							data = await fetchJson(`https://api.vhtear.com/pinterest?query=${body.slice(11)}&apikey=${vhtearkey}`, {method: 'get'})
							if (data.error) return reply(data.error)
							for (let i of data.result) {
								const amsulah = data.result
								const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
								thumb = await getBuffer(pimterest)
							}
							client.sendMessage(from, mess.wait, MessageType.text, selepbot)
							client.sendMessage(from, thumb, image, { quoted: mek, caption: `- *Pinterest* : `+papapale})
							break
						case 'ytmp4':
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv?url=${args[0]}`, {method: 'get'})
							if (anu.error) return reply(anu.error)
							teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
							thumb = await getBuffer(anu.thumb)
							client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
							buffer = await getBuffer(anu.result)
							client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
							break
                case 'truth':
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
				case 'setreply':
				case 'setfake':
					if (args.length < 1) return
					fake = args[0]
					reply(`berhasil ubah Fake reply menjadi : ${fake}`)
					break
				case 'setnumber':
					if (args.length < 1) return
					numbernye = args[0]
					reply(`berhasil ubah Number reply menjadi : ${numbernye}`)
					break
				case 'cr1':
						// licensed by aex-bot -> namabotnte
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const target = {
				contextInfo: {
				participant: taged,
				quotedMessage: {
				extendedTextMessage: {
				text: split[0]
									}
								}
							}
						}
				client.sendMessage(from, `${split[1]}`, MessageType.text, target)
				break
				case 'settarget':
					if (args.length < 1) return
					targetprivate = args[0]
					reply(`Succes Mengganti target Privte Fake Reply : ${targetprivate}`)
					break
				case 'cr2':
					jids = `${targetprivate}@s.whatsapp.net` // nomer target
					var split = args.join(' ').replace(/@|\d/gi, '').split('|')
					var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const options = {
					contextInfo: {
					quotedMessage: {
					extendedTextMessage: {
					text: split[0]
										}
									}
								}
							}
					const responye = await client.sendMessage(jids, `${split[1]}`, MessageType.text, options)
					await client.deleteMessage (jids, {id: responye.messageID, remoteJid: jids, fromMe: true})
					break
					case 'kbbi':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const kbbigan = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					var kbbi = body.slice(6)
					axios.get(`https://tobz-api.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=BotWeA`).then((res) => {
						let hasil = `「 *HASIL* 」\n${res.data.result}`;
						client.sendMessage(from, '_Otewe Nyet!_', MessageType.text)
						client.sendMessage(from, hasil, MessageType.text, kbbigan);
					})
				break
				case 'linkgc':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
						// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						const linkgcgan = {
						contextInfo: {
						participant: itsme,
						quotedMessage: {
						extendedTextMessage: {
						text: split,
										}
									}
								}
							}
				if (!isGroup) return reply(mess.only.group)
				const linkgc = await client.groupInviteCode (from) 
				client.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, MessageType.text, linkgcgan)
				break 
				case 'logowolf':
					var gh = body.slice(11)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}logowolf anjay|ohh`)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'loli':
						{
							var items = ["anime loli"];
							var nime = items[Math.floor(Math.random() * items.length)];
							var url = "https://api.fdci.se/rep.php?gambar=" + nime;
							
							axios.get(url)
							  .then((result) => {
								var n = JSON.parse(JSON.stringify(result.data));
								var nimek =  n[Math.floor(Math.random() * n.length)];
								imageToBase64(nimek) 
								.then(
									(response) => {
										client.sendMessage(from, '_Otewe Nyet!_', MessageType.text, { quoted: mek } )
							var buf = Buffer.from(response, 'base64'); 
							client.sendMessage(from, buf ,MessageType.image, { caption: `LOMLI`, quoted: mek } )
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
							});
							}
						 break
				 case 'tahta':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `𝙃𝘼𝙍𝙏𝘼 𝙏𝘼𝙃𝙏𝘼 𝘼𝙋𝘼`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const tahta = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					var teks = encodeURIComponent(body.slice(7))
					if (!teks) return client.sendMessage(from, 'Input teks yang ingin di tulis', msgType.text, {quoted: mek})
				var buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtearkey}`)
				client.sendMessage(from, `_Otewe Nyet!_`, MessageType.text, tahta)
				client.sendMessage(from, buffer, MessageType.image, { caption: `HARTA TAHTA ${teks}`, quoted: mek })
				 break
				 case 'map':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const maping = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					var teks = body.slice(5)
					axios.get('https://mnazria.herokuapp.com/api/maps?search='+teks)
					.then((res) => {
					  imageToBase64(res.data.gambar)
						.then(
						  (ress) => {
							client.sendMessage(from, '_Otewe Nyet!_', MessageType.text, maping)
							var buf = Buffer.from(ress, 'base64')
							client.sendMessage(from, buf, MessageType.image, { caption: `${teks}`, quoted: mek })
						})
					})
					break
				 case 'thunder':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const thunder = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					var teks = encodeURIComponent(body.slice(9))
					if (!teks) return client.sendMessage(from, 'Teksnya mana block!', MessageType.text, {quoted: mek})
				var buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${teks}&apikey=${vhtearkey}`)
				client.sendMessage(from, `_Otewe Nyet!_`, MessageType.text, thunder)
				client.sendMessage(from, buffer, MessageType.image, { caption: `THUNDER : ${teks}`, quoted: mek })
					 break
					 case 'otakulast':
						anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${vhtearkey}`, {method: 'get'})
						if (anu.error) return reply(anu.error)
						teks = '=================\n\n'
						for (let i of anu.result.data) {
							teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
						}
						reply(teks.trim())
						break
				case 'randomhentai':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					var selepbot = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					gatauda = body.slice(6)
					client.sendMessage(from, mess.wait, MessageType.text, selepbot)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, { caption: `RANDOM HENTAI!`, quoted: mek })
					break
				case 'nsfwneko':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					var selepbot = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					gatauda = body.slice(6)
					client.sendMessage(from, mess.wait, MessageType.text, selepbot)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, { caption: `NSFW NEKO!`, quoted: mek })
					break
				case 'nsfwtrap':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					var selepbot = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					gatauda = body.slice(6)
					client.sendMessage(from, mess.wait, MessageType.text, selepbot)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, { caption: `NSFW TRAP!`, quoted: mek })
					break
				case 'nsfwblowjob':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					var selepbot = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					gatauda = body.slice(6)
					client.sendMessage(from, mess.wait, MessageType.text, selepbot)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, { caption: `BLOWJOB!`, quoted: mek })
					break
case 'animehuggif':
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `${fake}`
	var selepbot = {
	contextInfo: {
	participant: itsme,
	quotedMessage: {
	extendedTextMessage: {
	text: split,
				}
			}
		}
	}
	gatauda = body.slice(6)
	client.sendMessage(from, mess.wait, MessageType.text, selepbot)
	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
	buffer = await getBuffer(anu.result)
	client.sendMessage(from, buffer, image, {quoted: mek})
	break
case 'waifu':
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `${fake}`
	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
	var selepbot = {
	contextInfo: {
	participant: itsme,
	quotedMessage: {
	extendedTextMessage: {
	text: split,
				}
		    }
		}
	}
	axios.get(`https://docs-jojo.herokuapp.com/api/waifu2`).then((res) => {
	imageToBase64(res.data.img)
	.then(
	(ress) => {
	var buf = Buffer.from(ress, 'base64')
	client.sendMessage(from, mess.wait, MessageType.text, selepbot)
	client.sendMessage(from, buf, MessageType.image)
		})
	})
	break
case 'menu':
case 'help':
	client.sendMessage(from, `「 *SELFBOT - WA* 」
*│◪* Isya
*│◪* Rabu, 17 Maret 2021
*│◪* 19:50:56 Wib

*◪* *Informasi User*
*│◪* Nama: ${pushname}
*│◪* Tag: @${sender.split('@')[0]}
*│◪* Level: 5
*│◪* XP: 3647
*│◪* Role: Master IV
*│◪* Status: ${isOwner ? 'Owner' : 'User'}

*◪* *Informasi BOT*
*│◪* Ver : Termux
*│◪* Prefix : 「 ${prefix} 」
*│◪* Host : Desktop
*│◪* WA Version : 2.21.135.2
*│◪* Device : Lenovo
*│◪* Version : 10
*│◪* Total hit : 0
*│◪* Total user : 132
*│◪* Creator : Benny
*│◪* Script : https://github.com/bennybotwa/self-bot
*│◪* TUTOR : Ketik ${prefix}tutorial

*◪* *Commands*

*◪* *Heck Command*
*│◪* ${l++}. • ${prefix}deface <link>
*│◪* ${l++}. • ${prefix}hekweb <link>
  
*◪* *Helper Command*
*│◪* ${l++}. • ${prefix}lapor <bugnya>
*│◪* ${l++}. • ${prefix}forward <pesan>
*│◪* ${l++}. • ${prefix}readmore <pesan>
*│◪* ${l++}. • ${prefix}getdesc <groupid>
*│◪* ${l++}. • ${prefix}findhost <url>
*│◪* ${l++}. • ${prefix}cekping <host>
*│◪* ${l++}. • ${prefix}santet <target>
*│◪* ${l++}. • ${prefix}cekdns <url>
*│◪* ${l++}. • ${prefix}getdesc <groupid>
*│◪* ${l++}. • ${prefix}getppgc <groupid>
*│◪* ${l++}. • ${prefix}getpp <nomor>
  
*◪* *Audio Command*
*│◪* ${l++}. • ${prefix}tupai <reply vn>
*│◪* ${l++}. • ${prefix}robot <reply vn>
*│◪* ${l++}. • ${prefix}balikin <reply vn>
*│◪* ${l++}. • ${prefix}cepetin <reply vn>
*│◪* ${l++}. • ${prefix}volume <reply vn>
*│◪* ${l++}. • ${prefix}kencengin <reply vn>
*│◪* ${l++}. • ${prefix}gemuk <reply vn>
*│◪* ${l++}. • ${prefix}bass <reply vn>
*│◪* ${l++}. • ${prefix}gemuk <reply vn>
*│◪* ${l++}. • ${prefix}slowmo <reply vn>
  
*◪* *Group Command*
*│◪* ${l++}. • ${prefix}kickarea on
*│◪* ${l++}. • ${prefix}kickarea off
*│◪* ${l++}. • ${prefix}hidetag1 <text>
*│◪* ${l++}. • ${prefix}hidetag2 <text>
*│◪* ${l++}. • ${prefix}grup close|open
*│◪* ${l++}. • ${prefix}bot on|off
*│◪* ${l++}. • ${prefix}antidelete aktif
*│◪* ${l++}. • ${prefix}antidelete mati
*│◪* ${l++}. • ${prefix}antilink enable
*│◪* ${l++}. • ${prefix}antilink disable
*│◪* ${l++}. • ${prefix}antivirus on
*│◪* ${l++}. • ${prefix}antivirus off
*│◪* ${l++}. • ${prefix}antikasar on
*│◪* ${l++}. • ${prefix}antikasar off
*│◪* ${l++}. • ${prefix}modesimi on
*│◪* ${l++}. • ${prefix}modesimi off
*│◪* ${l++}. • ${prefix}gcname <text>
*│◪* ${l++}. • ${prefix}gcdesk <text>
*│◪* ${l++}. • ${prefix}afk <reason>
*│◪* ${l++}. • ${prefix}add 62xxx
*│◪* ${l++}. • ${prefix}kick 62xx
*│◪* ${l++}. • ${prefix}headshot <@tag>
*│◪* ${l++}. • ${prefix}kickall
*│◪* ${l++}. • ${prefix}demote @tag
*│◪* ${l++}. • ${prefix}promote @tag
*│◪* ${l++}. • ${prefix}tagall
*│◪* ${l++}. • ${prefix}ownergc
*│◪* ${l++}. • ${prefix}ingfogc
*│◪* ${l++}. • ${prefix}leave

*◪* *Image Command*
*│◪* ${l++}. • ${prefix}imagetourl <reply>
*│◪* ${l++}. • ${prefix}thumbtoimage <reply>
*│◪* ${l++}. • ${prefix}urltoimage <reply>
*│◪* ${l++}. • ${prefix}imagepencil <reply>
*│◪* ${l++}. • ${prefix}imagetobase64 <reply>
*│◪* ${l++}. • ${prefix}imagetopdf <reply>
*│◪* ${l++}. • ${prefix}fakethumb <reply>
*│◪* ${l++}. • ${prefix}sendfakethumb <reply&nomor>
*│◪* ${l++}. • ${prefix}imagecartoon <reply>
*│◪* ${l++}. • ${prefix}imagejail <reply>
*│◪* ${l++}. • ${prefix}imagedistortion <reply>
*│◪* ${l++}. • ${prefix}imagecomic <reply>
*│◪* ${l++}. • ${prefix}imagefisheye <reply>
*│◪* ${l++}. • ${prefix}imageburik <reply>
*│◪* ${l++}. • ${prefix}imageinvert <reply>
*│◪* ${l++}. • ${prefix}imagenv <reply>
*│◪* ${l++}. • ${prefix}imagewasted <reply>
*│◪* ${l++}. • ${prefix}imagedelete <reply>
*│◪* ${l++}. • ${prefix}imagefire <reply>
*│◪* ${l++}. • ${prefix}imagegrafitti <reply>
*│◪* ${l++}. • ${prefix}imagenegative <reply>

*◪* *Downloader Command*
*│◪* ${l++}. • ${prefix}play <query>
*│◪* ${l++}. • ${prefix}play2 <query>
*│◪* ${l++}. • ${prefix}play3 <query>
*│◪* ${l++}. • ${prefix}ytmp4 <link>
*│◪* ${l++}. • ${prefix}ytmp42 <link>
*│◪* ${l++}. • ${prefix}ytmp43 <link>
*│◪* ${l++}. • ${prefix}ytmp44 <link>
*│◪* ${l++}. • ${prefix}ytmp45 <link>
*│◪* ${l++}. • ${prefix}ytmp3 <link>
*│◪* ${l++}. • ${prefix}ytmp32 <link>
*│◪* ${l++}. • ${prefix}ytmp33 <link>
*│◪* ${l++}. • ${prefix}ytmp34 <link>
*│◪* ${l++}. • ${prefix}ytmp35 <link>
*│◪* ${l++}. • ${prefix}ig <link>
*│◪* ${l++}. • ${prefix}ig2 <link>
*│◪* ${l++}. • ${prefix}igvid <link>
*│◪* ${l++}. • ${prefix}tiktok <linknya>
*│◪* ${l++}. • ${prefix}tiktokmusic <linknya>
*│◪* ${l++}. • ${prefix}cocofun <link>
*│◪* ${l++}. • ${prefix}soundcloud <query>
*│◪* ${l++}. • ${prefix}joox <query>
 
*◪* *Game Command*
*│◪* ${l++}. • ${prefix}tebakgambar 
*│◪* ${l++}. • ${prefix}math
*│◪* ${l++}. • ${prefix}truth
*│◪* ${l++}. • ${prefix}dare

*◪* *News Command*
*│◪* ${l++}. • ${prefix}berita
*│◪* ${l++}. • ${prefix}cnnindo
*│◪* ${l++}. • ${prefix}merdeka
*│◪* ${l++}. • ${prefix}antaranews
*│◪* ${l++}. • ${prefix}liputan6
*│◪* ${l++}. • ${prefix}tribunnews
*│◪* ${l++}. • ${prefix}foxnews
*│◪* ${l++}. • ${prefix}palingmurah

*◪* *Stalker Command*
*│◪* ${l++}. • ${prefix}igstalk <nama>
*│◪* ${l++}. • ${prefix}igstalk2 <nama>
*│◪* ${l++}. • ${prefix}igstalk3 <nama>
*│◪* ${l++}. • ${prefix}ytstalk <nama>
*│◪* ${l++}. • ${prefix}ttstalk <nama>
  
*◪* *Search Command*
*│◪* ${l++}. • ${prefix}ytsearch <query>
*│◪* ${l++}. • ${prefix}igsearch <query>
*│◪* ${l++}. • ${prefix}lk21 <query>
*│◪* ${l++}. • ${prefix}film <query>
*│◪* ${l++}. • ${prefix}movie <query>
*│◪* ${l++}. • ${prefix}komik <query>
*│◪* ${l++}. • ${prefix}drakor
*│◪* ${l++}. • ${prefix}google <query>
*│◪* ${l++}. • ${prefix}shopee <query>
*│◪* ${l++}. • ${prefix}images <query>
*│◪* ${l++}. • ${prefix}infoalamat <query>
*│◪* ${l++}. • ${prefix}gambar <query>
*│◪* ${l++}. • ${prefix}bioskop <kota>
*│◪* ${l++}. • ${prefix}wallpaper <query>
*│◪* ${l++}. • ${prefix}wallpaper2 <query>
*│◪* ${l++}. • ${prefix}wallpaper3 <query>
*│◪* ${l++}. • ${prefix}pinterest <query>
*│◪* ${l++}. • ${prefix}jalantikus <query>
*│◪* ${l++}. • ${prefix}wiki <query>
*│◪* ${l++}. • ${prefix}kbbi <query>
*│◪* ${l++}. • ${prefix}spekhp <query>
*│◪* ${l++}. • ${prefix}heroml <query>
*│◪* ${l++}. • ${prefix}jadwalsholat <kotanya>
*│◪* ${l++}. • ${prefix}brainly <query>
  
*◪* *Text Maker Command*
*│◪* ${l++}. • ${prefix}ytcomment
*│◪* ${l++}. • ${prefix}phcomment
*│◪* ${l++}. • ${prefix}rip
*│◪* ${l++}. • ${prefix}bikinmeme

*◪* *Anime Command*
*│◪* ${l++}. • ${prefix}loli
*│◪* ${l++}. • ${prefix}nsfwblowjob
*│◪* ${l++}. • ${prefix}nsfwneko
*│◪* ${l++}. • ${prefix}nsfwtrap
*│◪* ${l++}. • ${prefix}neko
*│◪* ${l++}. • ${prefix}neonime
*│◪* ${l++}. • ${prefix}dewabatch <query>
*│◪* ${l++}. • ${prefix}kusonime <query>
*│◪* ${l++}. • ${prefix}wattpad <query>
*│◪* ${l++}. • ${prefix}nhentaipdf <id>
*│◪* ${l++}. • ${prefix}otakulast
*│◪* ${l++}. • ${prefix}naruto
*│◪* ${l++}. • ${prefix}minato
*│◪* ${l++}. • ${prefix}boruto
*│◪* ${l++}. • ${prefix}hinata
*│◪* ${l++}. • ${prefix}sasuke
*│◪* ${l++}. • ${prefix}sakura
*│◪* ${l++}. • ${prefix}kaneki
*│◪* ${l++}. • ${prefix}toukachan
*│◪* ${l++}. • ${prefix}rize
*│◪* ${l++}. • ${prefix}akira
*│◪* ${l++}. • ${prefix}itori
*│◪* ${l++}. • ${prefix}kurumi
*│◪* ${l++}. • ${prefix}miku
*│◪* ${l++}. • ${prefix}waifu
*│◪* ${l++}. • ${prefix}randomhentai
*│◪* ${l++}. • ${prefix}shota
  
*◪* *Gabut Command*
*│◪* ${l++}. • ${prefix}apakah <query>
*│◪* ${l++}. • ${prefix}kapan <query>
*│◪* ${l++}. • ${prefix}halah <query>
*│◪* ${l++}. • ${prefix}hilih <query>
*│◪* ${l++}. • ${prefix}huluh <query>
*│◪* ${l++}. • ${prefix}heleh <query>
*│◪* ${l++}. • ${prefix}holoh <query>
*│◪* ${l++}. • ${prefix}balikhuruf <query>
*│◪* ${l++}. • ${prefix}bapakfont <query>
*│◪* ${l++}. • ${prefix}bisakah <query>
  
*◪* *18+ Only Command*
*│◪* ${l++}. • ${prefix}xnxx <query>
*│◪* ${l++}. • ${prefix}xvideos <query>
*│◪* ${l++}. • ${prefix}xnxxdl <link>
*│◪* ${l++}. • ${prefix}xvideosdl <link>
  
*◪* *Islamic Menu*
*│◪* ${l++}. • ${prefix}quran
*│◪* ${l++}. • ${prefix}listsurah
*│◪* ${l++}. • ${prefix}doaharian
*│◪* ${l++}. • ${prefix}doatahlil
*│◪* ${l++}. • ${prefix}kisahnabi
*│◪* ${l++}. • ${prefix}niatshalat
*│◪* ${l++}. • ${prefix}ayatkursi
*│◪* ${l++}. • ${prefix}doawirid
*│◪* ${l++}. • ${prefix}asmaulhusna
*│◪* ${l++}. • ${prefix}jadwalshalat <kota>
*│◪* ${l++}. • ${prefix}hadits <nomor>
*│◪* ${l++}. • ${prefix}randomsurah
  
*◪* *Spammer Command*
*│◪* ${l++}. • ${prefix}spamcall
*│◪* ${l++}. • ${prefix}spamsms
  
*◪* *Sticker Command*
*│◪* ${l++}. • ${prefix}ngif
*│◪* ${l++}. • ${prefix}nsfw_neko_gif
*│◪* ${l++}. • ${prefix}random_hentai_gif
*│◪* ${l++}. • ${prefix}sticker <ReplyImg>
*│◪* ${l++}. • ${prefix}stickerwm <ReplyImg>
*│◪* ${l++}. • ${prefix}stickmeme <teks1|teks2>
*│◪* ${l++}. • ${prefix}sticktag <ReplyImg>
*│◪* ${l++}. • ${prefix}sticktourl <ReplyStick>
*│◪* ${l++}. • ${prefix}takestick wm|wm
*│◪* ${l++}. • ${prefix}sticknowm <ReplyStick>
*│◪* ${l++}. • ${prefix}semoji <emoji>
*│◪* ${l++}. • ${prefix}ttp <Text>
*│◪* ${l++}. • ${prefix}ttp2 <Text>
*│◪* ${l++}. • ${prefix}attp <Text>
*│◪* ${l++}. • ${prefix}hug <@Tag>
*│◪* ${l++}. • ${prefix}cry 
*│◪* ${l++}. • ${prefix}sfire <ReplyImg>
*│◪* ${l++}. • ${prefix}sulap <ReplyImg>
*│◪* ${l++}. • ${prefix}triggered <ReplyImg>
  
*◪* *Text Maker Command*
*│◪* ${l++}. • ${prefix}shadow
*│◪* ${l++}. • ${prefix}cup
*│◪* ${l++}. • ${prefix}cup1
*│◪* ${l++}. • ${prefix}romance
*│◪* ${l++}. • ${prefix}smoke
*│◪* ${l++}. • ${prefix}burnpaper
*│◪* ${l++}. • ${prefix}lovemessage
*│◪* ${l++}. • ${prefix}undergrass
*│◪* ${l++}. • ${prefix}love
*│◪* ${l++}. • ${prefix}coffe
*│◪* ${l++}. • ${prefix}woodheart
*│◪* ${l++}. • ${prefix}woodenboard
*│◪* ${l++}. • ${prefix}summer3d
*│◪* ${l++}. • ${prefix}wolfmetal
*│◪* ${l++}. • ${prefix}nature3d
*│◪* ${l++}. • ${prefix}underwater
*│◪* ${l++}. • ${prefix}golderrose
*│◪* ${l++}. • ${prefix}summernature
*│◪* ${l++}. • ${prefix}letterleaves
*│◪* ${l++}. • ${prefix}glowingneon
*│◪* ${l++}. • ${prefix}fallleaves
*│◪* ${l++}. • ${prefix}flamming
*│◪* ${l++}. • ${prefix}harrypotter
*│◪* ${l++}. • ${prefix}carvedwood
*│◪* ${l++}. • ${prefix}wetglass
*│◪* ${l++}. • ${prefix}multicolor3d
*│◪* ${l++}. • ${prefix}watercolor
*│◪* ${l++}. • ${prefix}luxurygold
*│◪* ${l++}. • ${prefix}galaxywallpaper
*│◪* ${l++}. • ${prefix}lighttext
*│◪* ${l++}. • ${prefix}beautifulflower
*│◪* ${l++}. • ${prefix}puppycute
*│◪* ${l++}. • ${prefix}royaltext
*│◪* ${l++}. • ${prefix}heartshaped
*│◪* ${l++}. • ${prefix}birthdaycake
*│◪* ${l++}. • ${prefix}galaxystyle
*│◪* ${l++}. • ${prefix}hologram3d
*│◪* ${l++}. • ${prefix}greenneon
*│◪* ${l++}. • ${prefix}glossychrome
*│◪* ${l++}. • ${prefix}greenbush
*│◪* ${l++}. • ${prefix}metallogo
*│◪* ${l++}. • ${prefix}noeltext
*│◪* ${l++}. • ${prefix}glittergold
*│◪* ${l++}. • ${prefix}textcake
*│◪* ${l++}. • ${prefix}starsnight
*│◪* ${l++}. • ${prefix}wooden3d
*│◪* ${l++}. • ${prefix}textbyname
*│◪* ${l++}. • ${prefix}writegalacy
*│◪* ${l++}. • ${prefix}galaxybat
*│◪* ${l++}. • ${prefix}snow3d
*│◪* ${l++}. • ${prefix}birthdayday
*│◪* ${l++}. • ${prefix}goldplaybutton
*│◪* ${l++}. • ${prefix}silverplaybutton
*│◪* ${l++}. • ${prefix}freefire
*│◪* ${l++}. • ${prefix}blackpink
*│◪* ${l++}. • ${prefix}neon
*│◪* ${l++}. • ${prefix}greenneon
*│◪* ${l++}. • ${prefix}advanceglow
*│◪* ${l++}. • ${prefix}futureneon
*│◪* ${l++}. • ${prefix}sandwriting
*│◪* ${l++}. • ${prefix}sandsummer
*│◪* ${l++}. • ${prefix}sandengraved
*│◪* ${l++}. • ${prefix}metaldark
*│◪* ${l++}. • ${prefix}neonlight
*│◪* ${l++}. • ${prefix}holographic
*│◪* ${l++}. • ${prefix}text1917
*│◪* ${l++}. • ${prefix}minion
*│◪* ${l++}. • ${prefix}deluxesilver
*│◪* ${l++}. • ${prefix}newyearcard
*│◪* ${l++}. • ${prefix}bloodfrosted
*│◪* ${l++}. • ${prefix}halloween
*│◪* ${l++}. • ${prefix}jokerlogo
*│◪* ${l++}. • ${prefix}fireworksparkle
*│◪* ${l++}. • ${prefix}natureleaves
*│◪* ${l++}. • ${prefix}bokeh2
*│◪* ${l++}. • ${prefix}toxic
*│◪* ${l++}. • ${prefix}strawberry
*│◪* ${l++}. • ${prefix}box3d
*│◪* ${l++}. • ${prefix}roadwarning
*│◪* ${l++}. • ${prefix}breakwall
*│◪* ${l++}. • ${prefix}icecold
*│◪* ${l++}. • ${prefix}luxury
*│◪* ${l++}. • ${prefix}cloud
*│◪* ${l++}. • ${prefix}summersand
*│◪* ${l++}. • ${prefix}horrorblood
*│◪* ${l++}. • ${prefix}thunder2
*│◪* ${l++}. • ${prefix}christmas
*│◪* ${l++}. • ${prefix}quoteit [teks]
*│◪* ${l++}. • ${prefix}quoteit2 [teks]
*│◪* ${l++}. • ${prefix}nulisbuku [teks]
*│◪* ${l++}. • ${prefix}nulisfolio [teks]
*│◪* ${l++}. • ${prefix}tahta [teks]
*│◪* ${l++}. • ${prefix}customtahta [teks]
*│◪* ${l++}. • ${prefix}surga [teks]
*│◪* ${l++}. • ${prefix}jamet [teks]
*│◪* ${l++}. • ${prefix}jamet [teks]
*│◪* ${l++}. • ${prefix}youtuber [teks]
*│◪* ${l++}. • ${prefix}avengers [teks]
*│◪* ${l++}. • ${prefix}phlogo [teks]
*│◪* ${l++}. • ${prefix}matrix [teks]
*│◪* ${l++}. • ${prefix}wolflogo [teks]
*│◪* ${l++}. • ${prefix}party [teks]
*│◪* ${l++}. • ${prefix}tolol [teks]
*│◪* ${l++}. • ${prefix}coding [teks]
*│◪* ${l++}. • ${prefix}thunder [teks]
*│◪* ${l++}. • ${prefix}blood [teks]
*│◪* ${l++}. • ${prefix}bokeh [teks]
*│◪* ${l++}. • ${prefix}bakar [teks]
  
*◪* *Media Command*
*│◪* ${l++}. • ${prefix}qrmaker [teks]
*│◪* ${l++}. • ${prefix}ssweb <linknya>
*│◪* ${l++}. • ${prefix}tomp3 <reply video>
*│◪* ${l++}. • ${prefix}meme
*│◪* ${l++}. • ${prefix}truth
*│◪* ${l++}. • ${prefix}dare
*│◪* ${l++}. • ${prefix}map [optional]
*│◪* ${l++}. • ${prefix}kbbi <optional>
*│◪* ${l++}. • ${prefix}tinyurl <link>
  
*◪* *Random Command*
*│◪* ${l++}. • ${prefix}wpff
*│◪* ${l++}. • ${prefix}wpml
*│◪* ${l++}. • ${prefix}wppubg
*│◪* ${l++}. • ${prefix}wphacker
*│◪* ${l++}. • ${prefix}wpcode
*│◪* ${l++}. • ${prefix}wpmuslim
*│◪* ${l++}. • ${prefix}randomwallpaper
*│◪* ${l++}. • ${prefix}wpprogrammer
*│◪* ${l++}. • ${prefix}wpgunung
*│◪* ${l++}. • ${prefix}wpcyberspace
*│◪* ${l++}. • ${prefix}chiisaihentai
*│◪* ${l++}. • ${prefix}trap
*│◪* ${l++}. • ${prefix}blowjob
*│◪* ${l++}. • ${prefix}yaoi
*│◪* ${l++}. • ${prefix}ecchi
*│◪* ${l++}. • ${prefix}hentai
*│◪* ${l++}. • ${prefix}ahegao
*│◪* ${l++}. • ${prefix}quotesislami
*│◪* ${l++}. • ${prefix}wallpaperislami
*│◪* ${l++}. • ${prefix}hololewd
*│◪* ${l++}. • ${prefix}sideoppai
*│◪* ${l++}. • ${prefix}animefeets
*│◪* ${l++}. • ${prefix}animebooty
*│◪* ${l++}. • ${prefix}animethighss
*│◪* ${l++}. • ${prefix}hentaiparadise
*│◪* ${l++}. • ${prefix}animearmpits
*│◪* ${l++}. • ${prefix}hentaifemdom
*│◪* ${l++}. • ${prefix}lewdanimegirls
*│◪* ${l++}. • ${prefix}biganimetiddies
*│◪* ${l++}. • ${prefix}animebellybutton
*│◪* ${l++}. • ${prefix}hentai4everyone
*│◪* ${l++}. • ${prefix}art
*│◪* ${l++}. • ${prefix}bts
*│◪* ${l++}. • ${prefix}exo
*│◪* ${l++}. • ${prefix}elf
*│◪* ${l++}. • ${prefix}loli2
*│◪* ${l++}. • ${prefix}neko2
*│◪* ${l++}. • ${prefix}waifu
*│◪* ${l++}. • ${prefix}shota2
*│◪* ${l++}. • ${prefix}husbu
*│◪* ${l++}. • ${prefix}sagiri
*│◪* ${l++}. • ${prefix}shinobu
*│◪* ${l++}. • ${prefix}megumin
*│◪* ${l++}. • ${prefix}wallnime
*│◪* ${l++}. • ${prefix}ero
*│◪* ${l++}. • ${prefix}cum
*│◪* ${l++}. • ${prefix}feet
*│◪* ${l++}. • ${prefix}yuri
*│◪* ${l++}. • ${prefix}trap
*│◪* ${l++}. • ${prefix}lewd
*│◪* ${l++}. • ${prefix}feed
*│◪* ${l++}. • ${prefix}eron
*│◪* ${l++}. • ${prefix}solo
*│◪* ${l++}. • ${prefix}gasm
*│◪* ${l++}. • ${prefix}poke
*│◪* ${l++}. • ${prefix}anal
*│◪* ${l++}. • ${prefix}holo
*│◪* ${l++}. • ${prefix}tits
*│◪* ${l++}. • ${prefix}kuni
*│◪* ${l++}. • ${prefix}kiss2
*│◪* ${l++}. • ${prefix}erok
*│◪* ${l++}. • ${prefix}smug
*│◪* ${l++}. • ${prefix}baka
*│◪* ${l++}. • ${prefix}solog
*│◪* ${l++}. • ${prefix}feetg
*│◪* ${l++}. • ${prefix}lewdk
*│◪* ${l++}. • ${prefix}waifu
*│◪* ${l++}. • ${prefix}pussy
*│◪* ${l++}. • ${prefix}femdom
*│◪* ${l++}. • ${prefix}cuddle
*│◪* ${l++}. • ${prefix}hentai
*│◪* ${l++}. • ${prefix}eroyuri
*│◪* ${l++}. • ${prefix}cum_jpg
*│◪* ${l++}. • ${prefix}blowjob
*│◪* ${l++}. • ${prefix}erofeet
*│◪* ${l++}. • ${prefix}holoero
*│◪* ${l++}. • ${prefix}classic
*│◪* ${l++}. • ${prefix}erokemo
*│◪* ${l++}. • ${prefix}fox_girl
*│◪* ${l++}. • ${prefix}futanari
*│◪* ${l++}. • ${prefix}lewdkemo
*│◪* ${l++}. • ${prefix}wallpaper
*│◪* ${l++}. • ${prefix}pussy_jpg
*│◪* ${l++}. • ${prefix}kemonomimi
*│◪* ${l++}. • ${prefix}nsfw_avatar
*│◪* ${l++}. • ${prefix}randombokep
*│◪* ${l++}. • ${prefix}cersex
*│◪* ${l++}. • ${prefix}ceritahorror
*│◪* ${l++}. • ${prefix}cerpen
*│◪* ${l++}. • ${prefix}fakta
*│◪* ${l++}. • ${prefix}bucin
*│◪* ${l++}. • ${prefix}bucin2
*│◪* ${l++}. • ${prefix}fml
*│◪* ${l++}. • ${prefix}motivasi
*│◪* ${l++}. • ${prefix}quotesnime
*│◪* ${l++}. • ${prefix}quotes
*│◪* ${l++}. • ${prefix}quotesimage
*│◪* ${l++}. • ${prefix}estetik
*│◪* ${l++}. • ${prefix}katabijak
*│◪* ${l++}. • ${prefix}katadilan
*│◪* ${l++}. • ${prefix}katasenja
*│◪* ${l++}. • ${prefix}anjing
*│◪* ${l++}. • ${prefix}fake
*│◪* ${l++}. • ${prefix}pantun
*│◪* ${l++}. • ${prefix}darkjokes
*│◪* ${l++}. • ${prefix}kartukredit
*│◪* ${l++}. • ${prefix}howak
  
*◪* *Convert Command*
*│◪* ${l++}. • ${prefix}bitly <link>
*│◪* ${l++}. • ${prefix}pastebin <query>
*│◪* ${l++}. • ${prefix}tinyurl <link>
*│◪* ${l++}. • ${prefix}ebase64 <query>
*│◪* ${l++}. • ${prefix}dbase64 <query>
*│◪* ${l++}. • ${prefix}addsticker <optional>
*│◪* ${l++}. • ${prefix}getsticker <optional>
*│◪* ${l++}. • ${prefix}stickerlist
*│◪* ${l++}. • ${prefix}addvn <optional>
*│◪* ${l++}. • ${prefix}getvn <optional>
*│◪* ${l++}. • ${prefix}vntobase64 <replyVn>
*│◪* ${l++}. • ${prefix}tourl <replyMedia>
*│◪* ${l++}. • ${prefix}listvn
*│◪* ${l++}. • ${prefix}addvideo <optional>
*│◪* ${l++}. • ${prefix}getvideo <optional>
*│◪* ${l++}. • ${prefix}listvideo
*│◪* ${l++}. • ${prefix}addimage <optional>
*│◪* ${l++}. • ${prefix}getimage <optional>
*│◪* ${l++}. • ${prefix}listimage
*│◪* ${l++}. • ${prefix}forward <pesan>
 
*◪* *Owner Command*
*│◪* ${l++}. • ${prefix}listuser
*│◪* ${l++}. • ${prefix}upswteks
*│◪* ${l++}. • ${prefix}upswimage <replyImg>
*│◪* ${l++}. • ${prefix}upswvideo <replyVid>
*│◪* ${l++}. • ${prefix}clearall
*│◪* ${l++}. • ${prefix}bc
*│◪* ${l++}. • ${prefix}premium add/del
*│◪* ${l++}. • ${prefix}ban add/del
*│◪* ${l++}. • ${prefix}buffer <link>
*│◪* ${l++}. • ${prefix}chat nomor|pesan
*│◪* ${l++}. • ${prefix}forwardto nomor|pesan
*│◪* ${l++}. • ${prefix}self
*│◪* ${l++}. • ${prefix}block <@member>
*│◪* ${l++}. • ${prefix}unblock <@member>
*│◪* ${l++}. • ${prefix}blockir
*│◪* ${l++}. • ${prefix}unblockir
*│◪* ${l++}. • ${prefix}settarget
*│◪* ${l++}. • ${prefix}setprefix  
*│◪* ${l++}. • ${prefix}setname 
*│◪* ${l++}. • ${prefix}setnumber 
*│◪* ${l++}. • ${prefix}setreply 
*│◪* ${l++}. • ${prefix}setstatus  
*│◪* ${l++}. • ${prefix}setgroup 
*│◪* ${l++}. • ${prefix}setbotname 
*│◪* ${l++}. • ${prefix}online  
*│◪* ${l++}. • ${prefix}offline 
*│◪* ${l++}. • ${prefix}public
 
*◪* *Other Command*
*│◪* ${l++}. • ${prefix}spamcall [812xx]
*│◪* ${l++}. • ${prefix}jadwaltv [channel]
*│◪* ${l++}. • ${prefix}antidelete ctaktif
*│◪* ${l++}. • ${prefix}antidelete ctmati
*│◪* ${l++}. • ${prefix}antidelete banct 628xxx
*│◪* ${l++}. • ${prefix}readmore text|text
*│◪* ${l++}. • ${prefix}payment
*│◪* ${l++}. • ${prefix}cr1 @tag text|text
*│◪* ${l++}. • ${prefix}cr2 <versi private>
*│◪* ${l++}. • ${prefix}hidetag1 <text>
*│◪* ${l++}. • ${prefix}hidetag2 <text>
*│◪* ${l++}. • ${prefix}runtime
*│◪* ${l++}. • ${prefix}hitung
*│◪* ${l++}. • ${prefix}bilangangka <angka>
*│◪* ${l++}. • ${prefix}artinama
*│◪* ${l++}. • ${prefix}infogempa
*│◪* ${l++}. • ${prefix}cuaca
*│◪* ${l++}. • ${prefix}cuaca2
*│◪* ${l++}. • ${prefix}quotes
*│◪* ${l++}. • ${prefix}quotesnime
*│◪* ${l++}. • ${prefix}status
*│◪* ${l++}. • ${prefix}term <exec>
*│◪* ${l++}. • ${prefix}ping
*│◪* ${l++}. • ${prefix}blocklist
*│◪* ${l++}. • ${prefix}tagme
*│◪* ${l++}. • ${prefix}cekchat
  

*Catatan:*\nJangan pakai bot di private chat karna tidak akan dibalas oleh bot kecuali kamu user *premium*!\n\nKalau menemukan bug segera lapor owner dengan ketik:\n${prefix}lapor bug <bug nya>\nContoh: ${prefix}lapor tahta bug\n*Terima Kasih ${pushname}*`)
break
case 'tomp3':
    client.updatePresence(from, Presence.composing) 
	if (!isQuotedVideo) return reply('itu video bruh?:V')
	reply(mess.wait)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp4')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('Yahh emrror bruh:(')
	buffer = fs.readFileSync(ran)
    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
	fs.unlinkSync(ran)
	})
	break
case 'getsticker':
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `*𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙁𝙍𝙊𝙈 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀*`
	var selepbot = {
		contextInfo: {
		participant: itsme,
		quotedMessage: {
		extendedTextMessage: {
		text: split,
					}
				}
			}
		}
	namastc = body.slice(12)
	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
	client.sendMessage(from, result, sticker, selepbot)
	break
case 'stickerlist':
case 'liststicker':
	teks = 'Sticker List :\n'
	for (let awokwkwk of setiker) {
		teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${setiker.length}`
	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": setiker}})
	break
case 'addsticker':
	if (!isQuotedSticker) return reply('Reply stiker nya')
	svst = body.slice(12)
	if (!svst) return reply('Nama sticker nya apa?')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await client.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
	client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: mek})
	break
case 'addvn':
	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
	svst = body.slice(7)
	if (!svst) return reply('Nama audionya apa su?')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await client.downloadMediaMessage(boij)
	audionye.push(`${svst}`)
	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
	client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, {quoted: mek})
	break
case 'getvn':
	namastc = body.slice(7)
	buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
	client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt:true})
	break
case 'listvn':
case 'vnlist':
	teks = 'List Vn:\n'
	for (let awokwkwk of audionye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${audionye.length}`
	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": audionye}})
	break
case 'addimage':
	if (!isQuotedImage) return reply('Reply imagenya blokk!')
	svst = body.slice(10)
	if (!svst) return reply('Nama imagenya apa su?')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await client.downloadMediaMessage(boij)
	imagenye.push(`${svst}`)
	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
	client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, {quoted: mek})
	break
case 'getimage':
	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
	client.sendMessage(from, buffer, image, {quoted: mek, caption: `*Result From Database* : ${namastc}.jpeg`})
	break
case 'imagelist':
case 'listimage':
	teks = 'List Video:\n'
	for (let awokwkwk of imagenye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${imagenye.length}`
	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": imagenye}})
	break
case 'addvideo':
	if (!isQuotedVideo) return reply('Reply videonya blokk!')
	svst = body.slice(10)
	if (!svst) return reply('Nama videonya apa su?')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await client.downloadMediaMessage(boij)
	videonye.push(`${svst}`)
	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
	client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, {quoted: mek})
	break
case 'getvideo':
	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
	client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
	break
case 'listvideo':
case 'videolist':
	teks = 'List Video:\n'
	for (let awokwkwk of videonye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${videonye.length}`
	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": videonye}})
	break
case 'howax':
case 'hoax':
case 'howak':
case 'hoak':
	client.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
	teks = '────────────────────\n\n'
	for (let i of data.result) {
		teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n────────────────────\n`
	}
	reply(teks.trim())
	break
case 'leave':
	anu = await client.groupLeave(from, 'See you........', groupId)
	break
case 'ssweb':
	if (args.length < 1) return reply('Urlnya mana om')
	teks = body.slice(7)
	reply(mess.wait)
	anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
	buff = await getBuffer(anu.gambar)
	client.sendMessage(from, buff, image, {caption: `Result : ${teks}`, quoted: mek})
	break
case 'chatlist':
case 'cekchat':
	client.updatePresence(from, Presence.composing)
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `*𝘾𝙀𝙆 𝘼𝙇𝙇-𝘾𝙃𝘼𝙏*`
	var selepbot = {
		contextInfo: {
		participant: itsme,
		quotedMessage: {
		extendedTextMessage: {
		text: split,
					}
				}
			}
		}
	//teks = 'This is list of chat number :\n'
	// for (let all of totalchat) {
	//teks += `~> @${totalchat}\n`
	//}
	teks = `Total : ${totalchat.length}`
	client.sendMessage(from, teks, MessageType.text, selepbot)
	break
case 'speed':
case 'ping':
	const timestamp = speed();
	const latensi = speed() - timestamp
	exec(`neofetch --stdout`, (error, stdout, stderr) => {
	const child = stdout.toString('utf-8')
	const teks = child.replace(/Memory:/, "Ram:")
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `*𝙋𝙞𝙣𝙜!*`
	const pingbro = {
	contextInfo: {
	participant: itsme,
	quotedMessage: {
	extendedTextMessage: {
	text: split,
				}
			}
		}
	}
	const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} _Second_`
	client.sendMessage(from, `${teks}\nSpeed: ${latensi.toFixed(4)} _Second_`, MessageType.text, pingbro)
	})
	break
case 'term':
	const cmd = body.slice(6)
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `*𝙀𝙓𝙀𝘾𝙐𝙏𝙊𝙍*`
	const term = {
	contextInfo: {
	participant: itsme,
	quotedMessage: {
	extendedTextMessage: {
	text: split,
				}
			}
		}
	}
	exec(cmd, (err, stdout) => {
	if(err) return client.sendMessage(from, `root@MrG3P5:~ ${err}`, text, { quoted: mek })
	if (stdout) {
	client.sendMessage(from, stdout, text, term)
		}
	})
	break
case 'payment':
case 'payments':
	var itsme = `${numbernye}@s.whatsapp.net`
	var split = `*𝙎𝙀𝙇𝙁-𝘽𝙊𝙏*`
	var selepbot = {
	contextInfo: {
	participant: itsme,
	quotedMessage: {
	extendedTextMessage: {
	text: split,
				}
			}
		}
	}
	client.sendMessage(from, `──「 *PAYMENT* 」──\n\n- Gopay : 0895-2325-8649\n- Pulsa : 0895-2325-8649 (+5K)\n\n──「 *SELF-BOT* 」──`, MessageType.text, selepbot)
	break
case 'neko':
	{
	var items = ["anime neko"];
	var nime = items[Math.floor(Math.random() * items.length)];
	var url = "https://api.fdci.se/rep.php?gambar=" + nime;
		
	axios.get(url)
	.then((result) => {
	var n = JSON.parse(JSON.stringify(result.data));
	var nimek =  n[Math.floor(Math.random() * n.length)];
	imageToBase64(nimek) 
	.then(
	(response) => {
	client.sendMessage(from, '_Otewe Nyet!_', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
	client.sendMessage(from, buf ,MessageType.image, { caption: `_Neko!_`, quoted: mek } )
		}
	)
	.catch(
	(error) => {
	console.log(error);
				}
			)
		});
	}
	break
case 'blocklist': 
	teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
	for (let block of blocked) {
	teks += `┣➢ @${block.split('@')[0]}\n`
	}
	teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
	break
case 'ocr': 
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await client.downloadAndSaveMediaMessage(encmedia)
	reply(mess.wait)
	await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
	.then(teks => {
	reply(teks.trim())
	fs.unlinkSync(media)
	})
	.catch(err => {
	reply(err.message)
	fs.unlinkSync(media)
	})
	} else {
	reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
	}
	break
					case 's':
					case 'stiker':
					case 'sticker':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									reply(mess.error.stick)
								})
								.on('end', function () {
									console.log('Finish')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							reply(mess.wait)
							await ffmpeg(`./${media}`)
								.inputFormat(media.split('.')[1])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
									reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
								})
								.on('end', function () {
									console.log('Finish')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ranw = getRandom('.webp')
							ranp = getRandom('.png')
							reply(mess.wait)
							keyrmbg = 'Your-ApiKey'
							await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
								fs.unlinkSync(media)
								let buffer = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffer, (err) => {
									if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
								})
								exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
									fs.unlinkSync(ranp)
									if (err) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
								})
							})
						/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.on('start', function (cmd) {
									console.log('Started :', cmd)
								})
								.on('error', function (err) {
									fs.unlinkSync(media)
									console.log('Error :', err)
								})
								.on('end', function () {
									console.log('Finish')
									fs.unlinkSync(media)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)*/
						} else {
							reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
						}
						break
				case 'gtts':	
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Diperlukan Code bahasa kak, Contoh ${prefix}gtts id [text kakak](•‿•)', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'setprefix':
					if (args.length < 1) return
					prefix = args[0]
					reply(`𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝘂𝗯𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 : ${prefix}`)
					break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'dare':
	    client.updatePresence(from, Presence.composing) 
		client.chatRead (from)
	    dare = [
        'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
    ]
drre = dare[Math.floor(Math.random() * (dare.length))]
client.sendMessage(from, drre, text, {quoted: mek})
                break
                                case 'memeindo': 
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
                                case 'tagme':
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} Ku tag kau sayang❤️🗿!`,
					contextInfo: { mentionedJid: [nom] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('𝗰𝗹𝗲𝗮𝗿 𝗮𝗹𝗹 𝘀𝘂𝗸𝘀𝗲𝘀 𝘆𝗮𝗵 𝘁𝗼𝗱 :)')
					break
			       case 'block':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝗹𝗼𝗸𝗶𝗿 ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 ${body.slice(9)}@c.us`, text)
				break
				case 'leave': 
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				await client.client.leaveGroup(from, '𝗕𝘆𝗲𝗲', groupId)
	
                    break
				case 'bc': 
					if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?') 
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						anu = await client.chats.all()
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*SYAHRI Broadcast!!*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break	
										case 'add':
											if (!isGroup) return reply(mess.only.group)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (args.length < 1) return reply('Yang mau di add jin ya?')
											if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
									   try {
											num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
											client.groupAdd(from, [num])
											} catch (e) {
											console.log('Error :', e)
											return reply('Diprivate asu:v')
											}
											break
									   case 'kick':
											if (!isGroup) return reply(mess.only.group)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
											mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
											if (mentioned.length > 1) {
											teks = 'Perintah di terima, Menendang\n'
											for (let _ of mentioned) {
											teks += `@${_.split('@')[0]}\n`
											}
											mentions(teks, mentioned, true)
											client.groupRemove(from, mentioned)
											} else {
											mentions(`Success menendang ~> @${mentioned[0].split('@')[0]}`, mentioned, true)
											client.groupRemove(from, mentioned)
											}
											break  
											case 'promote':
												if (!isGroup) return reply(mess.only.group)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
												mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Promote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												client.groupMakeAdmin(from, mentioned)
												} else {
												mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												client.groupMakeAdmin(from, mentioned)
												}
												break
											case 'demote':
												if (!isGroup) return reply(mess.only.group)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
												mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Demote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												client.groupDemoteAdmin(from, mentioned)
												} else {
												mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												client.groupDemoteAdmin(from, mentioned)
												}
												break
				case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
					if (!isQuotedSticker) return reply('stickernya mana anjeng')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Error om')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Dah jdi nih nyet'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗸𝘀 𝗹𝗮𝗵 𝘁𝗼𝗱!!!')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝘀𝗶𝗺𝗶𝗵 𝟭')
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝗻𝘀𝗳𝘄 𝟭')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah lu nyalain pantek:v')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Success Enable Welcome!')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Success Disable Welcome!')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝟭')
					}
					break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
					}
					break
case 'groupinfo':
case 'ingfogc':
case 'gcingfo':
	client.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await client.getProfilePicture(from) // leave empty to get your own
	buffer = await getBuffer(ppUrl)
	client.sendMessage(from, buffer, image, {quoted: mek, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
case 'ownergrup':
case 'ownergroup':
case 'ownergc':
	client.updatePresence(from, Presence.composing) 
	var itsme = `${numbernye}@s.whatsapp.net`
	hayukkkk = {
	participant: itsme,
	text: `This Group Has been create by @${groupOwner.split("@")[0]}`,
						
	contextInfo: { mentionedJid: [groupOwner] }
	}
	client.sendMessage(from, hayukkkk, text, {quoted: { key: { fromMe: false, participant: `${itsme}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${fake}` }}})
	break
					case 'fitnah':
					var gh = body.slice(8)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						var replace = gh.split("|")[0];
						var targets = gh.split("|")[1];
						var bot = gh.split("|")[2];
						client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
						break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗼𝗰𝗿')
					}
					break
				default:
			if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[SELF-BOT]','green'), 'Any Message ? ', color(sender.split('@')[0]))
					}
				}
        } catch (e) {
			console.log('Message : %s', color(e, 'green'))
		}
	})

                     
/*
*Thanks For 𝗠𝗵𝗮𝗻𝗸𝗕𝗮𝗿𝗕𝗮𝗿
*/

