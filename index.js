const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const ms = require('parse-ms')
const toMs = require('ms')
const crypto = require('crypto')
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const translate = require('@vitalets/google-translate-api')
const { help } = require('./lib/help')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const os = require('os')
const xnxx = require('express').Router();
const { wait, simih, getBaper, uploadImages, kepo, generateMessageID, getGroupAdmins, getRandom, banner, halah, hilih, huluh, heleh, holoh, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const igdl = require('instagram-scraping')
const igdls = require('instagram-url-direct')
const infotlp = require('no-telp')
const ytdl = require('ytdownload')
const ytsearch = require('scrape-youtube').default;
const brainly = require('brainly-scraper')
const axios = require("axios")
const request = require('request')
const igstalk = require('instatouch')
const sID = process.env.sID;
const rumus = require('rumus-bdr')
const style = require('unicode/category/So')
const angkab = require('@develoka/angka-terbilang-js')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64');
const base64ToImage = require('base64-to-image');
var base64Img = require('base64-img');
const { removeBackgroundFromImageFile, RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } = require('remove.bg')
const kasar = JSON.parse(fs.readFileSync('./src/antibadword.json'))
const virus = JSON.parse(fs.readFileSync('./src/antivirus.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autosticker.json'))
const kotor = JSON.parse(fs.readFileSync('./src/kasar.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const register = require('./functions/register')
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const level = require('./functions/level')
const anlink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const _premium = JSON.parse(fs.readFileSync('./src/premium.json'))
const _sewa = JSON.parse(fs.readFileSync('./src/sewa.json'))
const kickarea = JSON.parse(fs.readFileSync('./src/kickarea.json'))
const _ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const _bot = JSON.parse(fs.readFileSync('./src/bot.json'))
const _afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const limit = require('./functions/limit')
const _limit = JSON.parse(fs.readFileSync('./src/limit.json'))
const botHit = JSON.parse(fs.readFileSync('./src/botHit.json'))
const hit = require('./functions/hit')
const _hit = JSON.parse(fs.readFileSync('./src/userhit.json'))
const premium = require('./functions/premium')
const sewa = require('./functions/sewa')
const afk = require('./functions/afk')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const Math_js = require('mathjs')
const speed = require('performance-now')
const speedTest = require('@lh2020/speedtest-net');
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const cron = require('node-cron')
const exect = require('await-exec')
const webp = require('webp-converter')
let int

prefix = '#'
prefix2 = '#'
numbernye = '0@s.whatsapp.net'
fake = '*SELFBOT*'
namabot = 'SELFBOT'
namastc = `./src/iri.mp3`
targetprivate = '0'
blocked = []            
banChats = true
banChat = false
setgrup = "6289636006352-1606097314@g.us"
alasanoff = 'Mengtidur'
monospace = '```'
totalhit = 0
setthumb = `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uisFUPPPPPPPPPPPPC0KF/AuZwGcKgAAJfg1U+PPPPPPPPPPPPPwq14hdBQFgwQWjUfQ11gvPPPPPPPPPPPPgq1wFI7ZjTgGgYwPQ11lfPPPPPPPPPPPPQq1wUIuLLOm/wA8Eb4NdZTzzzzzzzzzzzy16JewEK5lEE8kIMf4NtsHzzzzzzzzzzzwzqmbX7zn333323375InEXzzzzzzzzzzzzzl5XaG4X77777777rUqHzzzzzzzzzzzzzzyjD7z73777777763rzzzzzzzzzzzzzzzzzznDz77777777bkBzzzzzzzzzzzzzzzzzzzz8txrHnXHN0iLDzzzzzzzzzzzzzzzzzzzzzw2j+157k/zzzzzzzzzzzzzzzzzzzzzzzzwiS2fJ2wcHzzzzzzzzzzzzzzzzzzzzy53EX7/AOs//pyxG0888888888888888888wZDDDDDDDDDDD1d888888888888888888lCAAAAAAAAAAARy888888888888888888JDDDDCbmlDDDDH1888888888888888888HLDDDSJcSDDDDW1888888888888888888yoDDDTdlTDDDDAC888888888888888888LMPPPP+OuPPPPb5888888888888888888CU/wDvvvvvvvvvsa/PPPPPPPPPPPPPPPPPLH/uuttsuuttr1vPPPPPPPPPPPPPPPPPPHls8888888888xx/PPPPPPPPPPPPPPPPPPIQAAAAAAAAAAA/PPPPPPPPPP/xAAtEQABAgQEBgMAAgMBAAAAAAACAAMBBBESEBQyUiAhMDEzQBMiQiNBNFBicf/aAAgBAgEBPwD/AFLbZOOUgoAyGoE6wJjcHBXjYZv5xVjMewJ9mz7w0+lKeZG2USUEfMiwBsi/ChKuEss5dRZT/tRkzRMOj+FHl3wlvDRA3QlM+H0oRISrBMv3p5/8ioNOH2TEt9rzX1h2VOEgA9QJ6WIdCbcJol8g/H8icdI/Tk9RoJcbzMl9R5Qwi8IqMyUey+cl8xIX6d0MwJK7B1kXOaKFJT1JVsh+0cDMQ7o3iPSq8QGUEDwn3wchVsxRQjDv6TDd5YGYgNYojI+/REkw5XkeEy1cN4+kyFjeDzlS6YlamzvGuDwWOU9BlgiLng+do8FCVCVCVCVCVCVCxYOhUwmWSPmKiJD360syJfaO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7WNGMm4KmgZTxNY37nj8GWCGYeMjDtKNkUZzOH3Udm0bMet36cayeDa1Jd49o6H/AOqjqTTVDJM3raECCLx7LrbShpcW+fyQprWrZP1MAcTUaioOWeTtFa/Pz0naK1+fnpO0U573b5xdpN6BIN4Ny16fnX9pa9Nzr+0ten51/aWvT86/tLXpudf2lr03Ov7RWvTc6/tFa9Nzr+0Vr03Ov7RWvTc6/tFa9Pzr+0ten51/aWvTc6/tIyynLI8/fU16bnX9orX5+ek7RWvz89J2imVlWzJUSdaprckBunbeOUFHKyRocxwIOT2LX1Wxacvz5G6U5znuLnG8k41TWQ5wwpnFvwjKtqqLkHrK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaKfY9Kd7hN71VUctM7dZMzlZdaaeYMJ8W84+g8fsW3pPGws4m39asqFslTecjBf6VVQiankYeLFp1KV+HTQvOdgPsS3m/9EJ+BWUbp3fQryryryryryryryryryryryryryryryryryryryryryryryryrynuIY435jqUQuo6cfLb7Et8cHP1Kzj/0jQfSqg3QS/QdSIYMTB8I9iW+PEQn41Qn/qj8pJNFFv3gI2nT/F1JlfTO9e7T5StN1LLoTRe4DjPsW3B/xDoeFSm6oh+seTravWRgt357k5znG9xvKZR1Txe2B92hSRyRm6Rjm6QqarkgPG3OEx7XtDmnEfJWif8AldpCphfUwD5jfz7FtcX0EvRce9Rm6Rh+IeSJuUshkkc85yrJoGYAqJBeTvB/epLDHKwskbeFW0ppZyzNlboVly76P7jyVpnxDfrVni+tp/r/AB7FtIX0NR9Hk6jg8v0HUhAEUYGTBF2rb13/AD8e6Vm8KGg+StU7iMdJVki+vh6L/wAexatuFSzjjjdqRG+KM/CPIubhAjjCewsc5pyg3Kya1skQhcd2wYukajnNa0lxuAzq0avZVQXDeNxNVlxY3yfbyVqnHF91YgvrdEZ9iuF7XDjGpSm+ni+keSrqQy+MZvs441jaeIplq1zRdrt+kKer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`
waktuafk = `${time}`
reason = 'Nothing'
txtwl = ''
const limitCount = 25
const hitCount = 0
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
  return `-[ _*RUNTIME*_ ]-\n${pad(hours)}*Jam* ${pad(minutes)}*Menit* ${pad(seconds)}*Detik*`
}
function tek(seconds){
  function tok(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${tok(hours)} Jam, ${tok(minutes)} Menit, ${tok(seconds)} Detik lalu`
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
waktuoff = `${time}`
const { exec, spawn } = require("child_process")

const benny = new WAConnection()

benny.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready`)
})

benny.on('credentials-updated', () => {
   const authInfo = benny.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./benny.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./benny.json') && benny.loadAuthInfo('./benny.json')

benny.connect();

benny.on('group-participants-update', async (anu) => {
		try {
			console.log(anu)
			if (anu.action == 'add') {
				const mdata = await benny.groupMetadata(anu.jid)
				if (kickarea.includes(anu.jid)) {
					num = anu.participants[0]
	if (num.startsWith != 62) 
	bule = `${num.split('@')[0]}`
		console.log(color('[KICK]', 'red'), color('Received a foreign participant', 'yellow'))
		teks = `*Sorry bro this group only +62!*`
		benny.sendMessage(mdata.id, teks, MessageType.text)
				 benny.groupRemove(anu.jid, [num])
	}
	if (!welkom.includes(anu.jid)) return
				num = anu.participants[0]
				global.txtwl
				txtwl = `*Hai* *@${num.split('@')[0]}*\n*◪* *Welcome in group:*\n*├─* *${mdata.subject}*\n*│*\n*├─* *Intro dulu*\n*├─ ❏* *Nama:* \n*├─ ❏* *Umur:* \n*├─ ❏* *Asal kota:* \n*├─ ❏* *Kelas:* \n*├─ ❏* *Jenis kelamin:* \n*└─ ❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*\n${mdata.desc}`
				try {
					ppimg = await benny.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `${txtwl}`
				let buff = await getBaper(ppimg)
				benny.sendMessage(mdata.id, buff, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: txtwl, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*Welcome*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				} else if (anu.action == 'remove') {
					if (!welkom.includes(anu.jid)) return
					const mdata = await benny.groupMetadata(anu.jid)
				num = anu.participants[0]
				try {
					ppimg = await benny.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*◪* *Goodbye* *@${num.split('@')[0]}*\n*◪* *Leave from group:*\n*${mdata.subject}*\n*│*\n*└─ ❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*GoodBye~~*`
				let buff = await getBaper(ppimg)
				benny.sendMessage(mdata.id, buff, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: teks})
		} else if (anu.action == 'promote') {
			if (!welkom.includes(anu.jid)) return
			const mdata = await benny.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await benny.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBaper(ppimg)
			teks = `*◪* *PROMOTE DETECT*\n*├─* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*└─ ❏* *@${num.split('@')[0]}*`
			benny.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*PROMOTE*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			if (!welkom.includes(anu.jid)) return
			num = anu.participants[0]
			const mdata = await benny.groupMetadata(anu.jid)
			try {
					ppimg = await benny.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBaper(ppimg)
			teks = `*◪* *DEMOTE DETECT*\n*├─* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*└─ ❏* *@${num.split('@')[0]}*`
			benny.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*DEMOTE*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

	//
	benny.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	

benny.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (sender == undefined) sender = benny.user.jid
if (messageStubType == 'REVOKE' && isRevoke) {
	sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		if (sender == undefined) sender = benny.user.jid
	try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				    buffer = await getBaper(ppimg)
                    const from = hurtz.key.remoteJid
                    const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
                    sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
					if (sender == undefined) sender = benny.user.jid
                    let int
                    let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
                    const id_deleted = hurtz.key.id
                    const conts = hurtz.key.fromMe ? benny.user.jid : benny.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                    const pushname = hurtz.key.fromMe ? benny.user.name : conts.notify || conts.vname || conts.name || '-'
                   if (pushname == undefined) pushname = '-'
					for (let i = 0; i < infoMSG.length; i++) {
                         if (infoMSG[i].key.id == id_deleted) {
                              const dataInfo = infoMSG[i]
                              const type = Object.keys(infoMSG[i].message)[0]
                              const timestamp = infoMSG[i].messageTimestamp
                              int = {
                                   no: i,
                                   type: type,
                                   timestamp: timestamp,
                                   data: dataInfo

                              }
                         }
                    }
                    const index = Number(int.no)
                    const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
                    const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
                    if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                         const strConversation = `\*◪* *ANTIDELETE*\n*│*
*│* *Nama* : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*│* *Tipe* : Text
*│* *Waktu* : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
*│* *Pesan* : ${body ? body : '-'}`

                         benny.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: [sender], isForwarded: true, forwardingScore: 300}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    } else if (int.type == 'stickerMessage') {
                         const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                         const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
                         const strConversation = `*◪* *ANTIDELETE*\n*│*\n*│* Nama: ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Sticker\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
				const buff = fs.readFileSync(savedFilename)
				benny.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               benny.sendMessage(from, buff, MessageType.sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               // console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*◪* *ANTIDELETE*\n*│*\n*│* Nama : ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Image\n*│* Pesan: ${body ? body : '-'}\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         benny.sendMessage(from, buff, MessageType.image, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                 fs.unlinkSync(savedFilename)
			} else if (int.type == 'audioMessageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*◪* *ANTIDELETE*\n*│*\n*│* Nama : ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Audio\n*│* Pesan: ${body ? body : '-'}\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         benny.sendMessage(from, buff, MessageType.audio, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                   fs.unlinkSync(savedFilename)
                         
                    }
               }
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

benny.on('message-new', async (ben) => {
	try {
		const txt = ben.message.conversation
		if (!ben.message) return
		if (ben.key && ben.key.remoteJid == 'status@broadcast') return 
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(ben)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan > 5000) {
			infoMSG.splice(0, 5000)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
		global.prefix
		global.blocked
		const content = JSON.stringify(ben.message)
		const from = ben.key.remoteJid
		const type = Object.keys(ben.message)[0]
		const barbarkey = '--'
		const naufalkey = 'pendekin'
		const vhtearkey = 'pendekin'
		const hujankey = 'AdelwinNL'
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && ben.message.conversation.startsWith(prefix)) ? ben.message.conversation : (type == 'imageMessage') && ben.message.imageMessage.caption.startsWith(prefix) ? ben.message.imageMessage.caption : (type == 'videoMessage') && ben.message.videoMessage.caption.startsWith(prefix) ? ben.message.videoMessage.caption : (type == 'extendedTextMessage') && ben.message.extendedTextMessage.text.startsWith(prefix) ? ben.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const commando = body.slice(1)
		var Link = budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		const messageLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith('#')
		const createSerial = require('./src/serial')
		const q = args.join(' ')
		
		var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
                case 0: waktoo = "  Tengah Malam🌚 - *Tidur Kak*:)"; break;
                case 1: waktoo = "  Tengah Malam🌚 - *Tidur Kak*:)"; break;
                case 2: waktoo = "  Dini Hari🌒 - *Tidur Kak*:)"; break;
                case 3: waktoo = "  Dini Hari🌓 - *Tidur Kak*:)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi🌝"; break;
                case 7: waktoo = "Selamat Pagi🌝"; break;
                case 8: waktoo = "Selamat Pagi🌝"; break;
                case 9: waktoo = "Selamat Pagi"; break;
                case 10: waktoo = "Selamat Pagi🌞"; break;
                case 11: waktoo = "Selamat Siang🌞"; break;
                case 12: waktoo = "Selamat Siang🌞"; break;
                case 13: waktoo = "Selamat Siang🌞"; break;
                case 14: waktoo = "Selamat Siang🌞"; break;
                case 15: waktoo = "Selamat Sore🌝"; break;
                case 16: waktoo = "Selamat Sore🌝"; break;
                case 17: waktoo = "Selamat Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚 - *Tidur Kak*:)"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilHari = "" + waktoo;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib"; 
		

		mess = {
			wait: '[ WAIT ] Sedang di proses ...⏳',
			success: 'Berhasil!',
			levelon: '❬ ✔ ❭ *enable leveling*',
		    leveloff: ' ❬ X ❭  *disable leveling*',
		    levelnoton: '❬ X ❭ *leveling not aktif*',
			levelnol: '*LEVEL KAKAK MASIH* 0 °-°',
			error: {
				stick: 'Maaf, terjadi kesalahan saat convert gambar ke sticker',
				Iv: 'Linknya mokad:v'
			},
			only : {
				pc: 'Perintah ini hanya bisa digunakan di private chat saja!',
				Registered: `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix2}daftar*\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`,
				group: 'Grup only bruh...',
				ownerG: 'Owner grup only bruh...',
				ownerB: 'Lu siapa?',
				admin: 'Mimin grup only bruh...',
				premium: `Premium user only bruh...\nMau jadi user premium?\nChat wa.me/6289636006352`,
				Badmin: 'Jadiin gw admin dlu su!'
			}
		}

		const botNumber = benny.user.jid
		const ownerNumber = ["6289636006352@s.whatsapp.net","6281317635610@s.whatsapp.net"] // ganti nomer lu
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? ben.participant : ben.key.remoteJid
		const totalchat = await benny.chats.all()
		pushname = benny.contacts[sender] != undefined ? benny.contacts[sender].vname || benny.contacts[sender].notify : undefined
		const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isRegistered = register.checkRegisteredUser(sender, _registered)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isAntilink = isGroup ? anlink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isKasar = isGroup ? kasar.includes(from) : false
		const isBot = isGroup ? _bot.includes(from) : false
		const isVirus = isGroup ? virus.includes(from) : false
		const isAutoSticker = isGroup ? autostick.includes(from) : false
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isSimi = isGroup ? samih.includes(from) : false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isBanned = _ban.includes(sender)
		const isAfk = _afk.includes(sender)
		const isPremium = premium.checkPremiumUser(sender, _premium)
		const isSewa = sewa.checkPremiumUser(from, _sewa)
        const chats = type == 'conversation' || type == 'extendedTextMessage'
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		
		const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					benny.sendMessage(to, media, type, { quoted: ben, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
			if (banChats == false) fake = 'PUBLICBOT'
			if (banChats == true) fake = 'SELFBOT'
		const reply = (teks) => {
			benny.sendMessage(from, teks, text, { quoted: ben })
		}
		const cheat = (teks) => {
			benny.sendMessage(from, teks, text, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		const bisnis = (teks) => {
		benny.sendMessage(from, teks, text, { quoted: {
    "key": {
      "remoteJid": setgrup,
      "fromMe": false,
	  "participant": numbernye,
      "id": "0D5EAADD1166F55012EB42395DE58D61"
    },
    "message": {
      "productMessage": {
        "product": {
          "productImage": {
            "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc",
            "mimetype": "image/jpeg",
        "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=",
        "fileLength": "19247",
        "height": 416,
        "width": 416,
        "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=",
        "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=",
        "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8",
        "mediaKeyTimestamp": "1613162019",
        "jpegThumbnail": setthumb
		},
          "productId": "3958959877488517",
          "title": fake,
          "description": "Kepoluah",
          "currencyCode": "USD",
          "priceAmount1000": "99999",
          "retailerId": "Kepolu",
          "url": "https://youtube.com/c/bennyhidayat",
          "productImageCount": 2
        },
        "businessOwnerJid": "6289636006352@s.whatsapp.net"
      }
    },
    "messageTimestamp": "1613442626",
    "status": "PENDING"
					}})
	}
		const sendMess = (hehe, teks) => {
			benny.sendMessage(hehe, teks, text, { quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*BROADCAST*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		const acak = (teks) => {
			teks[Math.floor(Math.random() * teks.length)]
		}
		const sendPesan = (hehe, teks) => {
			benny.sendMessage(hehe, teks, text, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? benny.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : benny.sendMessage(from, teks.trim(), extendedText, { quoted: ben, contextInfo: { "mentionedJid": memberr } })
		}
		const sendPtt = (teks) => {
			  benny.sendMessage(from, audio, mp3, {quoted: ben, ptt: true})
        }
		// Functions
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
		
		const getUserLimit = (userId) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].limitCount
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
				const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
			if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 50
                const requiredXp = 50 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
				}
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 100, level: 1}
            _level.push(obj)
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
        }
		
		function bokep(QUERY) {
	return new Promise((resolve, reject) => {
		try {
			const baseurl = 'https://www.xnxx.com'
			axios.get(`${baseurl}/search/${QUERY}/${Math.floor(Math.random() * 3)}`)
			.then(async req => {
				let $ = cheerio.load(req.data, {
					xmlMode: false
				});
				let title = [];
				let url = [];
				let desc = [];
				let results = [];

				$('div.mozaique').each(function(a, b) {
					$(b).find('div.thumb').each(function(c, d) {
						url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
					})
				})
				$('div.mozaique').each(function(a, b) {
					$(b).find('div.thumb-under').each(function(c, d) {
						title.push($(d).find('p.title').text())
						desc.push($(d).find('p.metadata').text())
					})
				})
				for (let i = 0; i < title.length; i++) {
					results.push({
						title: title[i],
						info: desc[i],
						link: url[i]
					})
				}
				resolve({
					status: 200,
					result: results
				})
			})
			.catch((err) => {
				reject(err)
			})
		} catch(err) {
			reject(err)
		}
	})
}
		
		function addMetadata(packname, author) {	
				if (!packname) packname = 'Ig: N@nd0-BOT'; if (!author) author = 'N@nd0-BOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
		
		//Leveling function
		if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 50
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
					console.log(`*「 LEVEL UP 」*\n➸ *Name*: ${pushname} ➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🎉🎉`)
                     cheat(`*◪* *「 LEVEL UP 」*\n*│*\n*├─ ❏* *Name:* ${pushname}\n*├─ ❏* *XP:* ${getLevelingXp(sender)}\n*└─ ❏* *Level:* ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🎉🎉`)
					 }
            } catch (err) {
                console.error(err)
            }
        }
		
offline = process.uptime()
waktuoff = `${tek(offline)}`
		
		const isMedip = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImages = type === 'extendedTextMessage' && content.includes('imageMessage')
		
		if (isGroup && isAutoSticker) {
			if (isMedip || isQuotedImages) {
							const encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								exec(`webpmux -set exif ${addMetadata(pushname, sender.replace('@s.whatsapp.net', ''))} ${ran} -o ${ran}`, async (error) => {
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
			}
		}
			
		const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            var role = 'Copper IV'
        } else if (levelRole <= 10) {
            var role = 'Copper III'
        } else if (levelRole <= 15) {
            var role = 'Copper II'
        } else if (levelRole <= 20) {
            var role = 'Copper I'
        } else if (levelRole <= 25) {
            var role = 'Silver V'
        } else if (levelRole <= 30) {
            var role = 'Silver IV'
        } else if (levelRole <= 35) {
            var role = 'Silver III'
        } else if (levelRole <= 40) {
            var role = 'Silver II'
        } else if (levelRole <= 45) {
            var role = 'Silver I'
        } else if (levelRole <= 50) {
            var role = 'Gold V'
        } else if (levelRole <= 55) {
            var role = 'Gold IV'
        } else if (levelRole <= 60) {
            var role = 'Gold III'
        } else if (levelRole <= 65) {
            var role = 'Gold II'
        } else if (levelRole <= 70) {
            var role = 'Gold I'
        } else if (levelRole <= 75) {
            var role = 'Platinum V'
        } else if (levelRole <= 80) {
            var role = 'Platinum IV'
        } else if (levelRole <= 85) {
            var role = 'Platinum III'
        } else if (levelRole <= 90) {
            var role = 'Platinum II'
        } else if (levelRole <= 95) {
            var role = 'Platinum I'
        } else if (levelRole <= 100) {
            var role = 'Exterminator'
	    } else if (levelRole <= 999) {
            var role = 'Master'
        }

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedText = type === 'extendedTextMessage'
		const isQuotedLink = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	
	    //Ignore ban user
		if (isBanned && !isGroup && !isCmd) console.log(color('[BAN]', 'red'), time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (!isCmd && isBanned && isGroup) console.log(color('[BAN]', 'red'), time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		
		//Message & Using
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color(txt), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color(txt), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (isOwner && ben.key.fromMe) console.log(color('Owner lewat', 'cyan'))
		
	if (isGroup && isAntilink) {
	if (txt.includes("://chat.whatsapp.com/")) {
		if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
		reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim link grup lain? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 benny.groupRemove(from, [kic])
}
	}
	
	if (isGroup && banChat === true) {
			for (let ment of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === "6289636006352@s.whatsapp.net"){
			cheat(`*Mohon Maaf Benny Sedang Offline!*\n\n• *Alasan:* ${alasanoff}\n• *Sejak:* ${waktuoff}\n\nSilahkan hubungi lagi setelah *10 menit*`)
					}
			}
			}
	
			
		//Anti virus function
		if (isGroup && !isGroup && !ben.key.fromMe && isKasar && isBotGroupAdmins) {
		    if (txt.length > 300) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('tol')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('anjing')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (!isGroup) {
				if (isSimi) {
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}&lang=in`, {method: 'get'})
					if (anu.error) return cheat('Simi ga tau kak')
					reply(anu.success)
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('babi')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('tot')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('bokep')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('jing')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword text!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('tit')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('bangsat')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			
			if (!ben.key.fromMe && txt.includes('benny')) {
				if (ben.key.fromMe) return sendMess(`6289636006352@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${body.slice(1)}`)
				sendMess(`6289636006352@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
			
			if (!ben.key.fromMe && txt.includes('Benny')) {
				if (ben.key.fromMe) return sendMess(`6289636006352@s.whatsapp.net`, `Dari wa.me/${botNumber.replace('@s.whatsapp.net', '')}\nKatanya: ${body.slice(1)}`)
				sendMess(`6289636006352@s.whatsapp.net`, `*Nama* : ${pushname}\nwa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${txt}`)
				}
					
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('goblok')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('gblk')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('ajg')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
			if (isGroup && !ben.key.fromMe && isVirus && isBotGroupAdmins) {
		    if (txt.includes('anjg')) {
				if (isGroupAdmins) return cheat('Kamu admin grup jadi ngga di kick :)')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 cheat(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
				 benny.groupRemove(from, [kic])
				}
			}
			
if (!isCmd) {
	buffer = fs.readFileSync(`./src/audio/${txt}.mp3`)
	benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ben, ptt: true})
	}
			
			//Public&Self Function
		    if (!isOwner && !ben.key.fromMe && banChats === true) return 
			
			if (!isBot && banChats == false && banChat == false) {
		    if (txt.includes('Iri')) {
			buffer = fs.readFileSync('./src/iri.mp3')
	benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: ben})
				}
			}
			
			
			if (!ben.key.fromMe && txt.includes('Assalamualaikum')) {
			cheat(`Waalaikumsalam\n[BOT]`)
			}
			
			if (!ben.key.fromMe && txt.includes('makasih')) {
			reply(`Sama-sama\n[BOT]`)
			}
			
			if (!ben.key.fromMe && txt.includes('kasih')) {
			reply(`Sama-sama\n[BOT]`)
			}
			
			if (!ben.key.fromMe && txt.includes('assalamualaikum')) {
			reply(`Waalaikumsalam\n[BOT]`)
			}
			
			
			if (!isBot && banChat == false && banChats == false) {
			if (txt.includes('iri')) {
			buffer = fs.readFileSync(`./src/iri.mp3`)
	benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
      "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
			}
			}
		
	        // Automate
             premium.expiredCheck(_premium)
			 cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Resetting user limit...')
            fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })
		 
		 
		//On off function
		if (isGroup && isBot) {
			if (!isGroupAdmins && !ben.key.fromMe) return 
		}
		    //Ban function
			if (isCmd && isBanned && !isOwner && !ben.key.fromMe) return
			if (isGroup) {
				if (mentionedJid) {
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
				teks = `*Sssttt jangan diganggu!* ${mentioned} *Sedang AFK!*\n\n*Sejak:* ${waktuafk}\n*Alasan:* ${reason}`
				if (mentioned.includes(_afk.id)) return benny.sendMessage(from, teks, text, {quoted: ben})
			}
				}
			// AFK by Slavyan
            if (isGroup) {
            if (afk.checkAfkUser(sender, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./src/afk.json', JSON.stringify(_afk))
						   cheat(`*@${sender.split('@')[0]}* telah kembali dari AFK! Selamat datang kembali~`)
            }
        }
			
			//On off function
			if (isGroup && isCmd && !isGroupAdmins && !isOwner && !ben.key.fromMe && isSimi) return reply(`*Kalau mau pakai bot minta tolong admin untuk mematikan modesimi\n*Contoh:* ${prefix2}modesimi off*`)
			if (isCmd) {
		  hit.addHit(sender, _hit)
			}
		  if (pushname == undefined) pushname = '-'
		   
		   if (isCmd) {
		  botHit.push(sender)
		  fs.writeFileSync('./src/botHit.json', JSON.stringify(botHit))
		   }
		   
			switch(command) {
				case 'math':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
			tengahan = ['+','x',':','-']
		kali = tengahan[Math.floor(Math.random() * tengahan.length)]
					if (args[0] == 'easy') {
						esy = Math.floor(Math.random() * 100)
						easy = Math.floor(Math.random() * 100)
						soalan = esy + kali + easy
						reply(`Berapa Hasil dari ${soalan} ?`)
					} else if (args[0] == 'medium') {
						esy = Math.floor(Math.random() * 1000)
						easy = Math.floor(Math.random() * 1000)
						soalan = esy + kali + easy
						reply(`Berapa Hasil dari ${soalan} ?`)
					} else if (args[0] == 'hard') {
						esy = Math.floor(Math.random() * 10000)
						easy = Math.floor(Math.random() * 10000)
						soalan = esy + kali + easy
						reply(`Berapa Hasil dari ${soalan} ?`)
					} else if (args[0] == 'extreme') {
						esy = Math.floor(Math.random() * 100000)
						easy = Math.floor(Math.random() * 100000)
						soalan = esy + kali + easy
						reply(`Berapa Hasil dari ${soalan} ?`)
					}
						jawabnya = await Math_js.evaluate(soalan)
						if (txt.includes(jawabnya)) {
						reply('Bener XP kamu tambah 100')
						} else if (txt.includes(jawabnya)) {
							reply('Salah!')
						}
					break
				case 'daftar':
                if (isRegistered) return cheat('Nomor kamu sudah tedaftar')
				umur = Math.floor(Math.random() * 100)
				try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
				serial = crypto.randomBytes(15).toString('hex').slice(0, 15)
				teks = `*◪* *REGISTER*\n*│*\n*├─ ❏* *Nama:* ${pushname}\n*├─ ❏* *Umur:* ${umur}\n*├─ ❏* *Tag:* @${sender.split('@')[0]}\n*├─ ❏* *Nomor:* ${sender.replace('@s.whatsapp.net', '')}\n*├─ ❏* *ID:* wa.me/${sender.replace('@s.whatsapp.net', '')}\n*└─ ❏* *SN:* ${serial}\n\n*Catatan:*\nJangan pernah menyebarkan data *serial* ke pada siapapun!\n\nKetik *${prefix2}rules* terlebih dahulu ya~`
                register.addRegisteredUser(sender, pushname, umur, time, serial, _registered)
                benny.sendMessage(from, buffer, image, { contextInfo: {mentionedJid: [sender]}, caption: teks, quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "0792D61AFA7327F144E824890B5DAA15"
    },
    "message": {
      "audioMessage": {
		"mimetype": "image/jpeg",
		"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAEBAQEBAQEAAAAAAAAAAAAABQQDAgEGAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA/TAJujHxqN/rNmDXSlVVQJuPbI1K98pN42vsvMVasxKqNojVy6gicrc6o8e82gPNR1VAmAYcmrhfNy9Z9bjtQmU46gVAGCYVmDmhSI1Af//EACwQAAIBBAAFAQcFAAAAAAAAAAECAwAEERIQEyAxUgUUFSEiMjNRQWFicoH/2gAIAQEAAT8A4XdxJFIApwKNyiIpc4JFG+gH617VG6MYzlgO1WlxLK5DfEdPqMo+VF+oGorZnAaQmvZYfGpbRk+eM16dKMMh+ronl5MZbFIGa52lI8qf1OBSQATXvSHxNJ6nA7AU26XWYyPKoJedGGxxvvtf6KmDEsF76GlK6FT3oWuIOZzVoldcDvUYIdAe/LFWP2j/AG4zRrKhQ1JBLDMhD5yKNqHkG0A/civd9t40ljbRtsErktPcvq2AFxUMSxIFHRLEsq6tUwmtxkSBvwDQvJ9C2i5/FQGa47uF/IqKJYlwvTdyuhRVONj3po9nDGViRRhTbJkO1CLD7iVs1azOZXjY5AGQem+H2j/LgQckanfb4NwsxmeZum/DGEajJBrmT+FcyfwrmT+Fenh9XLjBJ4//xAAbEQACAwEBAQAAAAAAAAAAAAAAARARITECEv/aAAgBAgEBPwArDB9hFFIfJs0ufKwofZTo+hx//8QAHhEBAAICAgMBAAAAAAAAAAAAAQACEBESIQMTIjH/2gAIAQMBAT8Aiu3U3aV/MPQytniM2yi87GeIYAM+W9q20RvY19SitRc3oWe56qwNGsf/2Q==",
         "fileLength": "217894",
        "seconds": 359996400,
        "ptt": true
      }
    },
    "messageTimestamp": "1614071400",
    "status": "PENDING"
  }
				})
			  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Age:', color(umur, 'cyan'), color(serial, 'cyan'))
            break
					case 'randombokep':
				 if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				 data = JSON.parse(fs.readFileSync('./src/18.json')) 
				 datas = JSON.parse(fs.readFileSync('./src/18img.json')) 
                 randIndex = data[Math.floor(Math.random() * data.length)]
                 randIndexs = datas[Math.floor(Math.random() * datas.length)]
                 randBokep = await getBaper(randIndexs)
                 reply(mess.wait)
                 benny.sendMessage(from, randBokep, image, {quoted: ben, caption: randIndex})
				break

			case 'wa.me':
				  case 'wame':
  benny.updatePresence(from, Presence.composing) 
      const palal = {
          text: `「 SELF WHATSAPP 」\n\n_Request by_ : @${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    benny.sendMessage(from, palal, text,{ caption: text,contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_WA ME_*' } } }) 
				break
			case 'tampar':
            		ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBaper('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return cheat(mess.error.stick)
						buffern = fs.readFileSync(rano)
						benny.sendMessage(from, buffern, sticker, { contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_TAMPAR_*' } } }) 
						fs.unlinkSync(rano)
					})
					break
		case 'dadu':
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return cheat(mess.error.stick)
						buffer = fs.readFileSync(rano)
						benny.sendMessage(from, buffer, sticker, { contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_DADU_*' } } }) 
						fs.unlinkSync(rano)
					})
					break
		case 'return':
				return benny.sendMessage(from, JSON.stringify(eval(args.join(''))), text, {quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "0792D61AFA7327F144E824890B5DAA15"
    },
    "message": {
      "audioMessage": {
		  "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAEBAQEBAQEAAAAAAAAAAAAABQQDAgEGAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA/TAJujHxqN/rNmDXSlVVQJuPbI1K98pN42vsvMVasxKqNojVy6gicrc6o8e82gPNR1VAmAYcmrhfNy9Z9bjtQmU46gVAGCYVmDmhSI1Af//EACwQAAIBBAAFAQcFAAAAAAAAAAECAwAEERIQEyAxUgUUFSEiMjNRQWFicoH/2gAIAQEAAT8A4XdxJFIApwKNyiIpc4JFG+gH617VG6MYzlgO1WlxLK5DfEdPqMo+VF+oGorZnAaQmvZYfGpbRk+eM16dKMMh+ronl5MZbFIGa52lI8qf1OBSQATXvSHxNJ6nA7AU26XWYyPKoJedGGxxvvtf6KmDEsF76GlK6FT3oWuIOZzVoldcDvUYIdAe/LFWP2j/AG4zRrKhQ1JBLDMhD5yKNqHkG0A/civd9t40ljbRtsErktPcvq2AFxUMSxIFHRLEsq6tUwmtxkSBvwDQvJ9C2i5/FQGa47uF/IqKJYlwvTdyuhRVONj3po9nDGViRRhTbJkO1CLD7iVs1azOZXjY5AGQem+H2j/LgQckanfb4NwsxmeZum/DGEajJBrmT+FcyfwrmT+Fenh9XLjBJ4//xAAbEQACAwEBAQAAAAAAAAAAAAAAARARITECEv/aAAgBAgEBPwArDB9hFFIfJs0ufKwofZTo+hx//8QAHhEBAAICAgMBAAAAAAAAAAAAAQACEBESIQMTIjH/2gAIAQMBAT8Aiu3U3aV/MPQytniM2yi87GeIYAM+W9q20RvY19SitRc3oWe56qwNGsf/2Q==",
        "fileLength": "217894",
        "seconds": 999999999,
        "ptt": true
      }
    },
    "messageTimestamp": "1614071400",
    "status": "PENDING"
  }
				})
				break
		case 'ttg':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBaper(`https://api.vhtear.com/textxgif?text=${teks}&apikey=${vhtearkey}`)
					exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return cheat(mess.error.stick)
						buffer = fs.readFileSync(rano)
						benny.sendMessage(from, buffer, sticker, {quoted: ben})
						fs.unlinkSync(rano)
					})
					break
			case 'rules':
			if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			cheat(`-----[ RULES ]-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix2}menu* untuk memulai!
    `)
	break
				case 'donasi':
				case 'donate':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `*_TERIMAKASIH SUDAH MAU DONASI_*`
					var donat = `┏━━━━━━━━━━━━━━━━━━━━
┃          𝗗𝗢𝗡𝗔𝗦𝗜  
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱ 𝗗𝗢𝗡𝗔𝗦𝗜 𝗕𝗢𝗦𝗤𝗨𝗘 ❉⊰━━✿
┃  
┣➥ *OVO* : -
┣➥ *PULSA* : 0813-8728-9617
┣➥ *GOPAY* : 089636006352
┃
┣━━━━━━━━━━━━━━━━━━━━
┃ _*POWERED BY BENNY*_
┗━━━━━━━━━━━━━━━━━━━━`
                    benny.sendMessage(from, `${donat}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: setgrup } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*_TERIMAKASIH SUDAH MAU DONASI_* ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
					break
				case 'hidetag':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					members_id = []
					teks = (args.length > 1) ? body.slice(9).trim() : `${body.slice(8)}`
					for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true) 
					break
					case 'kickbot':
					members_id = []
					for (let mem of groupMembers){
					members_id.push(mem.jid)
					console.log(mem)
					if (pushname.includes('BOT')) {
						reply('Terdeteksi ada bot disini segera di kick!')
					anu = `${sender.split("@")[0]}`
				benny.groupRemove(from, [anu])
            }
        }
					break
				case 'shota':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
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
						benny.sendMessage(from, buf, MessageType.image, { caption: `*SHOTA!*`, quoted: ben })
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
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var value = text.replace(text.split(' ')[0], `${body.slice(9)}`)
					var group = await benny.groupMetadata(from)
					var member = group['participants']
					var ids = []
					member.map( async adm => {
					ids.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionsss = {
					text: value,
					contextInfo: { mentionedJid: ids },
					quoted: ben
					}
					benny.sendMessage(from, optionsss, MessageType.text)
					break
				case 'brainly':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(9)
					anu = await brainly(teks)
					teks = `*BRAINLY*\n\n`
					for (let o of anu.data) {
					for (let i of o.jawaban) {
						teks += `Pertanyaan: ${o.pertanyaan}\nJawaban: ${i.text}\n==============================\n`
					}
					}
					console.log(anu)
					cheat(teks.trim())
				break
				case 'group':
				case 'grup':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (args[0] === 'open') {
					cheat(`「 *SUCCES OPEN GRUP* 」`)
					benny.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
					await benny.groupSettingChange(from, GroupSettingChange.messageSend, true)
					cheat(`「 *SUCCES CLOSE GRUP* 」`)
					}
					break
				case 'infogempa':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				anu = await fetchJson(`https://api-jojo.herokuapp.com/api/infogempa`, {method: 'get'})
				teks = `*${anu.waktu}*\n📍 *Lokasi* : *${anu.lokasi}*\n〽️ *Kedalaman* : *${anu.kedalaman}*\n💢 *Magnitude* : *${anu.magnitude}*\n🔘 *Potensi* : *${anu.potensi}*\n📍 *Koordinat* : *${anu.koordinat}*`
				buffer = await getBaper(anu.map)
				benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
				break
				case 'cuaca':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return reply('Masukan nama kota!')
				tekss = body.slice(7)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${tekss}?apikey=pendekin`, {method: 'get'})
				   teks = `*◪* *CUACA*\n*│*\n*├─ ❏* *Kota:* ${anu.result.tempat}\n*├─ ❏* *Cuaca:* ${anu.result.cuaca}\n*├─ ❏* *Suhu:* @${anu.result.suhu}\n*├─ ❏* *Kelembapan:* ${anu.result.kelembapan}\n*├─ ❏* *Angin:* ${anu.result.angin}\n*├─ ❏* *Latitude:* ${anu.result.latitude}\n*└─ ❏* *Longitude:* ${anu.result.longitude}`
                   cheat(teks)
		break
		case 'covid':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/${body.slice(7)}`, {method: 'get'})
				   p = anu
				   teks = `*◪* *INFO COVID ${body.slice(7)}*\n*│*\n*├─ ❏* *Positif:* ${p.cases}\n*├─ ❏* *Sembuh:* ${p.recovered}\n*├─ ❏* *Meninggoy:* ${p.deaths}\n*└─ ❏* *Dirawat:* ${p.testsPerOneMillion}`
                   cheat(teks)
		break
		case 'covidindo':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=pendekin`, {method: 'get'})
				   p = anu.result
				   teks = `*◪* *INFO COVID*\n*│*\n*├─ ❏* *Positif:* ${p.positif}\n*├─ ❏* *Sembuh:* ${p.sembuh}\n*├─ ❏* *Meninggoy:* ${p.meninggal}\n*└─ ❏* *Dirawat:* ${p.dirawat}`
                   cheat(teks)
		break
		case 'upswteks':
		if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
					benny.updatePresence(from, Presence.composing)
					benny.sendMessage('status@broadcast', `${body.slice(10)}`, extendedText)
					cheat(`Sukses Up story wea teks ${q}`)
					break
				case 'upswimage':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, image, { caption: `${body.slice(11)}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					benny.sendMessage(from, bur, text, { quoted: ben })
					break
				case 'upswvideo':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, video, { caption: `${body.slice(11)}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${body.slice(11)}`
					benny.sendMessage(from, bur, text, { quoted: ben })
					break  						
		case 'buffer':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			      if (args.length < 1) return reply('Mau buffer apa jir')
				teks = body.slice(8)
				anu = await getBaper(teks)
				benny.sendMessage(from, anu, image, {quoted: ben})
				break
				case 'get':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			      if (args.length < 1) return reply('Mau get apa jir')
				teks = body.slice(8)
				anu = await fetchJson(`${teks}`, {method: 'get'})
				cheat(anu)
				break
		case 'cuaca2':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://mnazria.herokuapp.com/api/bmkg-cuaca`, {method: 'get'})
				   teks = `*◪* *${anu.result.title}*\n*│*\n`
				   for (let o of anu.result.desc) {
					   teks += `*├─ ❏* *Info:* ${o.info}\n======================\n`
				   }
				   cheat(teks.trim())
		break
		case 'quotesislami':
		case 'quotesislam':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/randomquote/muslim?apikey=undefined`, {method: 'get'})
		cheat(anu.result.text_id)
		break
		case 'quotesimage':
				case 'qoutesimage':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await getBaper(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=pendekin`)
				   bisnis(mess.wait)
				   benny.sendMessage(from, anu, image, {contextInfo: {mentionedJid: [sender]}, quoted: ben, caption: 'Neh..'})
		break
		case 'darkjokes':
		case 'darkjoke':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)=
				   bisnis(mess.wait)
					anu = await fetchJson(`https://naufalhoster.xyz/tools/darkjokes?apikey=${naufalkey}`, {method: 'get'})
					buffer = await getBaper(anu.result.joke)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Dark Jokes'})
		break
		case 'estetik':
		case 'aestetik':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)=
				   bisnis(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
					buffer = await getBaper(anu.result.result)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Estetik'})
		break
		case 'puisiimage':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)=
				   bisnis(mess.wait)
					buffer = await getBaper(`https://api.vhtear.com/puisi_image&apikey=pendekin`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Estetik'})
		break
				  case 'pantun':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/api/pantun?apikey=pais`, {method: 'get'})
				   teks = `- *Pantun* : ${anu.pantun}`
				   cheat(teks)
		break
				  case 'fakta':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://videfikri.com/api/fakta/`, {method: 'get'})
				   teks = `- *Fakta* : ${anu.result.fakta}`
				   cheat(teks)
		break
		case 'style':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				teks = body.slice(7)
				   anu = await style.charCodeAt(teks)
				   console.log(anu)
		break
		case 'findhost':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/hostsearch/${teks}`, {method: 'get'})
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   cheat(anu.hasil)
		break
		case 'cekping':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/nping/${teks}`, {method: 'get'})
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   cheat(anu.hasil)
		break
		case 'cekdns':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/dnslookup/${teks}`, {method: 'get'})
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   cheat(anu.hasil)
		break
		case 'bioskop':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 tekss = body.slice(9)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/bioskop?kota=${tekss}&apikey=undefined`, {method: 'get'})
				teks = `*◪* *BIOSKOP*\n\n`
				for (let o of anu.result) {
					 teks += `*Nama:* ${o.title}\n*Alamat:* ${o.alamat}\n*Bintang:* ${o.bintang}\n*Link:* ${o.url}\n============================\n`
				buffer = await getBaper(o.img)
				}
				  benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'kisahnabi':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 tekss = body.slice(11)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/kisahnabi?nabi=${tekss}&apikey=undefined`, {method: 'get'})
				if (anu.status == false) return reply(`Masukan nama nabi yang benar! jangan main-main!`)
				nabi = anu.result.nabi
				buffer = await getBaper(nabi.image)
				teks = `*◪* *KISAH NABI*\n*├─ ❏* *Nama* : ${nabi.nabi}\n*├─ ❏* *Lahir* : ${nabi.lahir}\n*├─ ❏* *Umur* : ${nabi.umur}\n*├─ ❏* *Kota* : ${nabi.tempat}\n*└─ ❏* *Kisah* : ${nabi.kisah}\n`
                 benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
		break
		case 'niatshalat':
		case 'niatsholat':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/niatshalat?apikey=undefined`, {method: 'get'})
				   teks = `*◪* *NIAT SHALAT*\n\n`
				   for (let o of anu.result) {
					  teks += `*${o.name}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.terjemahan}\n=============================\n`
				   }
				   cheat(teks)
		break
		case 'cnnindo':
		case 'cnnindonesia':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=pendekin`, {method: 'get'})
				   teks = `*◪* *CNN INDONESIA*\n\n\n===========================\n`
				   for (let o of anu.result) {
					   buffer = await getBaper(o.poster)
					  teks += `*${o.judul}*\n*Tipe:* ${o.tipe}\n*Waktu:* ${o.waktu}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'merdeka':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`, {method: 'get'})
				   teks = `*◪* *MERDEKA DOT COM*\n\n\n===========================\n`
				   g = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${g++}. ${o.judul}*\n*Waktu:* ${o.uptime}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'liputan6':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
				   teks = `*◪* *LIPUTAN6 NEWS*\n\n\n===========================\n`
				   j = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${j++}. ${o.title}*\n*Ket:* ${o.ket}\n*Kategori:* ${o.category}\n*Waktu:* ${o.time}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'foxnews':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
				   teks = `*◪* *FOX NEWS*\n\n\n===========================\n`
				   v = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${v++}. ${o.title}*\n*Ket:* ${o.content}\n*Negara:* ${o.country}\n*Waktu:* ${o.time}\n*Link:* ${o.url}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'neonime':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/neonimeongoing?apikey=BotWeA`, {method: 'get'})
				   teks = `*◪* *FOX NEWS*\n\n\n===========================\n`
				   v = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.image)
					  teks += `*${v++}. ${o.title}*\n*Desc:* ${o.desc}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'tribunnews':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
				   teks = `*◪* *TRIBUN NEWS*\n\n\n===========================\n`
				   h = 1
				   for (let o of anu.result) {
					  teks += `*${h++}. ${o.title}*\n*Ket:* ${o.ket}\n*Waktu:* ${o.time}\n*Link:* ${o.url}\n=============================\n`
				   }
				   cheat(teks.trim())
		break
		case 'antaranews':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`, {method: 'get'})
				   teks = `*◪* *ANTARA NEWS*\n\n\n===========================\n`
				   h = 1
				   for (let o of anu.result) {
					  teks += `*${h++}. ${o.title}*\n*Info:* ${o.uptime}\n*Link:* ${o.link}\n=============================\n`
				   }
				   cheat(teks.trim())
		break
		case 'palingmurah':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`, {method: 'get'})
				   teks = `*◪* *MERDEKA DOT COM*\n\n\n===========================\n`
				   y = 1
				   for (let o of anu.result) {
					  teks += `*${y++}. ${o.barang}*\n*Harga:* ${o.harga}\n*Penjual:* ${o.penjual}\n*Link:* ${o.url}\n=============================\n`
				   }
				   cheat(teks.trim())
		break
		case 'berita':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=pendekin`, {method: 'get'})
				   teks = `*◪* *BERITA TERBARU*\n\n`
				   p = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.urlToImage)
					  teks += `*${p++}. ${o.source.name}*\n*Judul:* ${o.title}\n*Deskripsi:* ${o.description}\n*Author:* ${o.author}\n*Waktu:* ${o.publishedAt}\n*Link:* ${o.url}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'shopee':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				tekss = body.slice(8)
				   anu = await fetchJson(`https://api.vhtear.com/shopee?query=${tekss}&count=10&apikey=pendekin`, {method: 'get'})
				   teks = `*◪* *SOPE ID*\n\n`
				   p = 1
				   for (let o of anu.result.items) {
					  teks += `*${p++}. ${o.nama}*\n*Harga:* ${o.harga}\n*Terjual:* ${o.terjual}\n*Lokasi toko:* ${o.shop_location}\n*Link:* ${o.link_product}\n===========================\n`
				   }
				   cheat(teks.trim())
		break
		case 'doaharian':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/doaharian?apikey=undefined`, {method: 'get'})
				   teks = `*◪* *DOA HARIAN*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.title}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   cheat(teks)
		break
		case 'doatahlil':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/tahlil?apikey=undefined`, {method: 'get'})
				   teks = `*◪* *DOA TAHLIL*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.title}*\n*Arab:* ${o.arabic}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   cheat(teks)
		break
		case 'bacaanshalat':
		case 'bacaansholat':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/bacaanshalat?apikey=undefined`, {method: 'get'})
				   teks = `*◪* *BACAAN SHALAT*\n\n`
				   for (let o of anu.result) {
					  teks += `*${o.name}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   cheat(teks)
		break
		case 'asmaulhusna':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/asmaulhusna?apikey=undefined`, {method: 'get'})
				   teks = `*◪* *ASMAUL HUSNA*\n\n`
				   p = 1
				   for (let o of anu.result.data) {
					  teks += `*${p++}. ${o.latin}*\n*Arab:* ${o.arabic}\n*Arti:* ${o.translation_id}\n=============================\n`
				   }
				   cheat(teks.trim())
		break
		case 'doawirid':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/wirid?apikey=undefined`, {method: 'get'})
				   teks = `*◪* *DOA WIRID*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.id}* ${o.arabic}\n=============================\n`
				   }
				   cheat(teks)
		break
		case 'hadits':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!Number(args[0])) return reply('Hadits berupa nomor!')
				tekss = body.slice(8)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/hadits?kitab=bukhari&nomor=${tekss}&apikey=undefined`, {method: 'get'})
				    o = anu.result.data
					teks = `*◪* *H.R BUKHORI*\n\n*${o.name}*\n*Arab:* ${o.contents.arab}\n*Latin:* ${o.contents.id}\n=============================\n`
				   cheat(teks)
		break
		case 'ayatkursi':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				tekss = body.slice(8)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/ayatkursi?apikey=undefined`, {method: 'get'})
				    o = anu.result.data
					teks = `*◪* *AYAT KURSI*\n\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}`
				   cheat(teks)
		break
		case 'tolol':
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		teks = body.slice(7)
		anu = await getBaper(`http://api.lolhuman.xyz/api/toloserti?apikey=pendekin&name=${teks}`)
		benny.sendMessage(from, anu, image, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": anu, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break
		case 'youtuber':
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		teks = body.slice(10)
		anu = await getBaper(`http://www.rzky.net/docs/api/YoutuberSerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": anu, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break
		case 'jamet':
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		teks = body.slice(7)
		anu = await getBaper(`http://www.rzky.net/docs/api/GoodBoySerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": anu, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break
		case 'surga':
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		teks = body.slice(7)
		anu = await getBaper(`http://www.rzky.net/docs/api/SurgaSerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": anu, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break
		case 'badboy':
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		teks = body.slice(8)
		anu = await getBaper(`http://www.rzky.net/docs/api/BadBoySerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, { quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": anu, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break
		case 'bucin':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=pendekin`, {method: 'get'})
				   teks = `*${anu.result}*`
				   cheat(teks)
		break
		case 'bucin2':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=pendekin`, {method: 'get'})
				   teks = `*${anu.result}*`
				   cheat(teks)
		break
		case 'kodepos':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('*Kelurahan nya mana?*')
				 tekss = body.slice(9)
				   anu = await fetchJson(`https://videfikri.com/api/kodepos/?query=${tekss}`, {method: 'get'})
				   teks = `*◪* *KODE POS*\n*│*\n*├─ ❏* *Kelurahan:* ${anu.result.kelurahan}\n*├─ ❏* *Kecamatan:* ${anu.result.kelurahan}\n*├─ ❏* *Kode pos:* ${anu.result.kodepos}\n*├─ ❏* *Provinsi:* ${anu.result.provinsi}\n*└─ ❏* *Kota:* ${anu.result.kota}`
				   cheat(teks)
		break
		case 'balikhuruf':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('*Hurufnya mana?*')
				 tekss = body.slice(12)
				   anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${tekss}`, {method: 'get'})
				   teks = `*◪* *HURUF TERBALIK*\n*│*\n*├─ ❏* *Huruf:* ${tekss}\n*└─ ❏* *Kebalik:* ${anu.result.kata}`
				   cheat(teks)
		break
		case 'dewabatch':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('*Hurufnya mana?*')
				 tekss = body.slice(11)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${tekss}`, {method: 'get'})
				   teks = `${anu.sinopsis}`
				   buffer = await getBaper(anu.thumb)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
			break
			case 'kusonime':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('*Hurufnya mana?*')
				 tekss = body.slice(10)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/kuso?q=${tekss}`, {method: 'get'})
				   teks = `${anu.title}\n${anu.sinopsis}`
				   buffer = await getBaper(anu.thumb)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
			break
			case 'wattpad':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('*Judulnya apa?*')
				 tekss = body.slice(9)
				 o = 1
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${tekss}`, {method: 'get'})
				   teks = `*◪* *WATTPAD SEARCH*\n\n`
	         for (let ok of anu.result) {
				 buffer = await getBaper(ok.thumb)
				   teks += `*${o++}. ${ok.title}*\n*Dibaca:* ${ok.reads}\n*Votes:* ${ok.votes}\n===========================\n`
			 }
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
			break
			case 'drakor':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 t = 1
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=pendekin`, {method: 'get'})
				   teks = `*◪* *DERAMA KOREA*\n\n`
	         for (let o of anu.result) {
				 buffer = await getBaper(o.thumbnail)
				   teks += `*${t++}. ${o.title}*\n*Episode:* ${o.total_episode}\n*Genre:* ${o.genre}\n*Tahun:* ${o.year}\n===========================\n`
			 }
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
			break
		case 'ceritahorror':
		case 'ceritahoror':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=${naufalkey}`, {method: 'get'})
				   teks = `*◪* *CERITA HORROR*\n*│*\n*├─ ❏* *Judul:* ${anu.result.title}\n*└─ ❏* *Cerita:* ${anu.result.story}`
				   cheat(teks)
		break
		case 'fml':
		case 'fuckmylife':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`, {method: 'get'})
				   anu1 = await fetchJson(`https://hujanapi.herokuapp.com/api/translate?lang=en&tr=id&query=${anu.result}&apikey=AdelwinNL`, {method: 'get'})
				   teks = `- *Fuck my life* : ${anu1.result.output}`
				   cheat(teks)
		break
		case 'motivasi':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/api/motivasi?apikey=pais`, {method: 'get'})
				   teks = `- *Fakta* : ${anu.message}`
				   cheat(teks)
		break
				 case 'quotesnime':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				   anu = await fetchJson(`https://api-zefian.glitch.me/api/quotesnime/random`, {method: 'get'})
				   teks = `- *Anime* : ${anu.data.anime}\n- *Karakter* : ${anu.data.character}\n- *Quotes* : ${anu.data.quote} `
				   cheat(teks)
		break
				case 'wiki':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(6)
					fetchJson(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
						bisnis(mess.wait)
					let hasil = `Menurut Wikipedia:\n\n${res.result}`;
						cheat(hasil)
					})
					break
					case 'find':
					const part = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
					cheat('[WAIT] Sedang mencari partner...')
					matane = body.slice(15)
					nihsu = part.includes(matane)
					teks = '*TES*'
					for (let o of part) {
                       teks += `\n${o.participant}\n`
					}
					benny.sendMessage(from, teks.trim(), text, {contextInfo: { mentionedJid: [matane] }, quoted: ben })
					break
					case 'ebase64':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 tekss = body.slice(9)
					anu = await fetchJson(`https://naufalhoster.xyz/utils/base64?apikey=${naufalkey}&type=encode&string=${tekss}`, {method: 'get'})
			teks = `*Encode*\n➸ *String* : ${tekss}\n➸ *Result* : ${anu.result.encrypt}`
	         cheat(teks)
				break
				case 'dbase64':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 tekss = body.slice(9)
					anu = await fetchJson(`https://naufalhoster.xyz/utils/base64?apikey=${naufalkey}&type=decode&string=${tekss}`, {method: 'get'})
			teks = `*Encode*\n➸ *String* : ${tekss}\n➸ *Result* : ${anu.result.encrypt}`
	         cheat(teks)
				break
				case 'kartukredit':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method: 'get'})
			teks = `「 *KARTU KREDIT* 」\n\n*Card* : \n➸ *Network* : ${anu.result.card.network}\n➸ *Number* : ${anu.result.card.number}\n➸ *CVV* : ${anu.result.card.cvv}\n➸ *PIN* : ${anu.result.card.pin}\n➸ *Balance* : ${anu.result.card.balance}\n\n*Customer* :\n➸ *Name* : ${anu.result.customer.name}\n➸ *Address* : ${anu.result.customer.address}\n➸ *Country* : ${anu.result.customer.country}`
			cheat(teks)
			break
			     case 'cerpen':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					fetchJson('https://masgi.herokuapp.com/api/cerpen').then((res) => {
						bisnis(mess.wait)
					let hasilnya = `Cerpen:\n${res.data}`;
						cheat(hasilnya)
					 })
					break
				case 'lirik':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				tekss = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tekss}`, {method: 'get'})
				teks = `- *Lagu* : ${tekss}\n- *Lirik* : ${anu.result.lirik}`
				cheat(teks)
					break
				case 'chord':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				tekss = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tekss}`, {method: 'get'})
				teks = `- *Lagu* : ${tekss}\n- *Lirik* : ${anu.result.lirik}`
				cheat(teks)
					break
				case 'katasenja':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					anu = await fetchJson(`https://pencarikode.xyz/api/katasenja?apikey=pais`, {method: 'get'})
					teks = `*Kata-kata senja:*\n${anu.message}`
					cheat(teks)
					break
				case 'katadilan':
				anu = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=pendekin`, {method: 'get'})
				cheat(anu.result)
				break
				case 'katabijak':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					fetchJson('https://pencarikode.xyz/api/katabijak?apikey=pais').then((res) => {
						cheat('[ WAIT ] Searching...⏳ silahkan tunggu')
						hasilnya = `*Katabijak* : ${res.message}`;
						cheat(hasilnya)
					})
		break
				case 'gcname':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					await benny.groupUpdateSubject(from, `${body.slice(8)}`)
					cheat(`「 *CHANGE TO ${body.slice(8)}* 」`)
					break
					benny.contactReport
				case 'gcdesk':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					await benny.groupUpdateDescription(from, `${body.slice(8)}`)
					cheat(`「 *CHANGE TO ${body.slice(8)}* 」`)
					break
				case 'images':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(7)}`, {method: 'get'})
				bisnis(mess.wait)
						const imgs = anu[Math.floor(Math.random() * anu.length)]
				buffer = await getBaper(imgs)
				benny.sendMessage(from, buffer, image, {quoted: ben})
				break
			case 'gambar':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('Gambar apa?')
				teks = body.slice(8)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=${teks}`)
				bisnis(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Gambar: ${teks}`})
				break
				case 'wallpaper':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('Wallpaper apa?')
				teks = body.slice(1)
				wallpap = body.slice(11)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=wallpaper+${wallpap}`)
				bisnis(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Wallpaper: ${wallpap}`})
				break
				case 'wallpaper2':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('Wallpaper apa?')
				wallpap = body.slice(12)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=wallpaper+${wallpap}`)
				bisnis(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Wallpaper: ${wallpap}`})
				break
				case 'wallpaper3':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('Wallpaper apa?')
				teks = body.slice(1)
				wallpap = body.slice(12)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=pendekin&query=&query=wallpaper+${wallpap}`, {method: 'get'})
		let aof = anu.result[Math.floor(Math.random() * anu.result.length)]
		buffer = await getBaper(aof)
		benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Wallpaper: ${wallpap}`})
				break
				case 'naruto':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=naruto`)
					benny.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: ben })
					break 
				case 'minato':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=minato`)
					benny.sendMessage(from, nye, image, { caption: 'minato!!', quoted: ben })
					break 
				case 'boruto':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=Boruto`)
					benny.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: ben })
					break 
				case 'hinata':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=Hinata`)
					benny.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: ben })
					break 
				case 'sasuke':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=sasuke`)
					benny.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: ben })
					break 
				case 'sakura':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=sakura`)
					benny.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: ben })
					break 

				case 'kaneki':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=kaneki`)
					benny.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: ben })
					break 
				case 'toukachan':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anime+touka`)
					benny.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: ben })
					break 
				case 'rize':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anime+rize`)
					benny.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: ben })
					break 
				case 'akira':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anime+akira`)
					benny.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: ben })
					break 
				case 'itori':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anime+itori`)
					benny.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: ben })
					break 
				case 'kurumi':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anime+karumi`)
					benny.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: ben })
					break 
				case 'miku':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anime+miku`)
					benny.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: ben })
					break 
// akhir fitur anime

				case 'anjing':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=pendekin&query=anjing`)
					reply(mess.wait)
					benny.sendMessage(from, pok, image, { quoted: ben })
					break
				case 'forward':
                const msk = body.slice(9)
                await benny.sendMessage(from, msk, text, { "contextInfo": {"forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				break
				case 'readmore':
                const mskp = body.slice(9)
                await benny.sendMessage(from, `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${mskp}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`, text, { quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				break
				case 'artinama':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return reply('Nama nya mana?')
				var tkst = body.slice(10)
				anu = await fetchJson(`https://scrap.terhambar.com/nama?n=${tkst}`)
				teks = `➸ *Nama* : ${tkst} \n\n\n➸ *Memiliki arti* : ${anu.result.arti}\n`
				benny.sendMessage(from, teks, text, {quoted: ben})
				break
				case 'emojisticker':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				var emojis = body.slice(14)
				buffer = await getBaper(`https://api.vhtear.com/emojitopng?code=${emojis}&apikey=${vhtearkey}`)
				benny.sendMessage(from, buffer, sticker, {quoted: ben})
				break
				case 'runtime':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					runtime = process.uptime()
					teks = `${tek(runtime)}`
					cheat(teks)
					break
		 case 'asupan':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
		  anu = JSON.parse(fs.readFileSync('./src/asupan.json')) 
		  let asupan = anu[Math.floor(Math.random() * anu.length)]
		  buffer = await getBaper(asupan)
		  bisnis(mess.wait)
					benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${asupan}.mp4`, quoted: ben, caption: 'Neh..'})
							break
					case 'spamcall':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
					if (args[0].startsWith('62')) return cheat('Salah! contoh: 81234567890')
					if (!isOwner && args[0].startsWith('89636006352')) return cheat('Tidak bisa spam call owner!')
					anu = await fetchJson(`https://api-jojo.herokuapp.com/api/spamcall?no=${body.slice(10)}`)
					anu = await fetchJson(`https://api-jojo.herokuapp.com/api/spamcall?no=${body.slice(10)}`)
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${body.slice(10)}`)
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${body.slice(10)}`)
					cheat(anu.logs)
					break
					case 'spamsms':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
					if (args[0].startsWith('08')) return cheat('Salah! contoh: 6281234567890')
					if (!isOwner && !ben.key.fromMe && args[0].startsWith('6289636006352')) return cheat('Tidak bisa spam call owner!')
					toti = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=pendekin&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=pendekin&nomor=${toti}`)
					cheat(anu.result)
					break
					case 'phcomment':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
									 var gos = body.slice(11)
					var namalu = gos.split("|")[0];
					var komenlu = gos.split("|")[1];
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://turuapi.org/textmaker/phcomment_custom?apikey=${naufalkey}&url=${teks}&nama=${namalu}&comment=${komenlu}`)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagewanted':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
									 var gos = body.slice(13)
					var teksn = gos.split("|")[0];
					var teksp = gos.split("|")[1];
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${teks}&text1=${teksn}&text2=${teksp}`)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	   "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
					case 'bikinmeme':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
									 var gos = body.slice(11)
					var teksn = gos.split("|")[0];
					var teksp = gos.split("|")[1];
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://turuapi.org/tools/meme?apikey=${naufalkey}&text1=${teksn}&text2=${teksp}&url=${teks}`)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'semoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=pendekin`)
                    benny.sendMessage(from, buffer, sticker, { quoted: ben })
                    break
					case 'semoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=pendekin`)
                    benny.sendMessage(from, buffer, sticker, { quoted: ben })
                    break
					case 'gtav':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (args.length < 1) return cheat('Nama file nya mau apa?')
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben, caption: 'nih'})
										 }
										break
										case 'gambarhitung':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (args.length < 1) return cheat('Nama file nya mau apa?')
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`naufalhoster.xyz/tools/photomath?apikey=pendekin&url=${teks}`, {method: 'get'})
										teksk = `*Pertanyaan:* ${anuan.result.question}\n*Jawaban:* ${anuan.result.solution}`
										cheat(teksk)
										 }
										break
					case 'imagetopdf':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (args.length < 1) return cheat('Nama file nya mau apa?')
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {

                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/imagepdf?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.pdf)
										benny.sendMessage(from, buffer, document, { mimetype: 'application/pdf', filename: `${body.slice(12)}`, caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'nhentaipdf':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (args.length < 1) return cheat('Nama file nya mau apa?')
									if (!Number(args[0])) return reply('Harus angka!')
									if (Number(args[0].length < 6)) return reply('Harus 6 digit!')
									teks = body.slice(12)
										anuan = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${teks}?apikey=pendekin`, {method: 'get'})
										buffer = await getBaper(anuan.result)
										benny.sendMessage(from, buffer, document, { mimetype: 'application/pdf', filename: `${teks}`, caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										break
										case 'imagecartoon':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_cartoon?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagecomic':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_comic?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagefire':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_fire?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagepencil':
										case 'imagepensil':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/pencil?apikey=pendekin&img=${teks}`)
										benny.sendMessage(from, anuan, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imageburik':
										case 'image8bit':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/pixelate?apikey=pendekin&img=${teks}`)
										benny.sendMessage(from, anuan, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imageinvert':
										case 'invertimage':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/invert?apikey=pendekin&img=${teks}`)
										benny.sendMessage(from, anuan, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'listonline':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (!isGroup) return reply(mess.only.group)
        		if (!isOwner && !ben.key.fromMe) return
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(benny.chats.get(ido).presences), benny.user.jid]
			    benny.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: ben,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
										case 'imagejail':
										case 'imagepenjara':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://naufalhoster.xyz/textmaker/jail?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, anuan, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagedelete':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://naufalhoster.xyz/textmaker/windows_delete_file?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, anuan, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagewasted':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                       bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://naufalhoster.xyz/textmaker/gta?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
							case 'imagefisheye':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/fisheye?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
      "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
							case 'imagegrafitti':
							case 'imagegrafiti':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_grafitti?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'imagenegative':
							case 'imagenegatif':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/negative?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
										case 'randomwallpaper':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/randomwall.json'))
	anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpcyberspace':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/cyberspace.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpgunung':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallgunung.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpneon':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallneon.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpml':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallml.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wphacker':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallhack.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'quotes':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = fs.readFileSync('./src/quotes.json')
jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
 randKey = jsonData[randIndex]
										cheat(`*Author:* ${randKey.by}\n*Quotes:* ${randKey.quote}`)
										break
										case 'waifu':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = fs.readFileSync('./src/waifu.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  buffer = await getBaper(randKey.image)
  teks = `*${randKey.teks}*`
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
										break
										case 'wpcode':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallcode.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpff':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallff.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wppubg':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallpubg.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpprogrammer':
										case 'wprogrammer':
										case 'wpprogram':
										case 'wprogram':
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
										ono = JSON.parse(fs.readFileSync('./src/wallprogram.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
							case 'imagedistortion':
							case 'imagedt':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/distortion?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
							case 'imagenightvision':
							case 'imagenv':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                       bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/night_vision?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
					case 'rip':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {

                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://naufalhoster.xyz/textmaker/rip?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
										 }
										break
					case 'imagetourl':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										cheat(teks)
										 }
										break
										case 'tomp4':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                    if ((isQuotedSticker && ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)) {
                    encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await benny.downloadAndSaveMediaMessage(encmedia)
                    ranw = getRandom('.mp4')
                        exec(`ffmpeg -i ${media} -pix_fmt yuv420p ${ranw}`, (err) => {
                            if (err) return reply('error')
                            benny.sendMessage(from, fs.readFileSync(ranw), video, {quoted:ben, mimetype: 'video/gif'})
                            fs.unlinkSync(media)
                            fs.unlinkSync(ranw)
                    })
				}
										break
										case 'stickmeme':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
									 var ghs = body.slice(11)
					var teks3 = ghs.split("|")[0]
					var teks4 = ghs.split("|")[1]
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        bisnis(mess.wait)
										ran = getRandom('.webp')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://turuapi.org/tools/meme?apikey=pendekin&text1=${teks3}&text2=${teks4}&url=${teks}`)
							await ffmpeg(`${buffer}`)
								.input(buffer)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(buffer)
									cheat(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '')} ${ran} -o ${ran}`, async (error) => {
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(buffer)	
									fs.unlinkSync(ran)	
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
										break
										case 'tourl':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
									 if (isQuotedAudio) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
									 } else if (isQuotedImage) {
										 ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
									cheat(teks)
									 } else if (isQuotedVideo) {
										 ger = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
			} else if (isQuotedSticker) {
				ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
			}
							break
										case 'sticktourl':
										case 'stickertourl':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                                     var imgbb = require('imgbb-uploader')
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										cheat(teks)
										break
					case 'joox':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
					teks = '-「 *Play Music From Joox* 」-\n'
					const joox = data.result
						teks += `\n- *Judul* : ${joox.title}\n- *Album* : ${joox.album}\n- *Publish At* : ${joox.dipublikasi}\n\n-「 *SELF-BOT* 」-`
					thumb = await getBaper(joox.thumb)
					bisnis(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
					buffer = await getBaper(joox.mp3)
					benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted: ben})
					break
					case 'soundcloud':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						data = await fetchJson(`https://naufalhoster.xyz/dl/scdlplay?apikey=pendekin&query=${body.slice(12)}`, {method: 'get'})
						teks = '-「 *Play Music From Sound cloud* 」-\n'
						const pler = data.result
							teks += `\n- *Judul* : ${pler.title}\n- *Durasi* : ${pler.duration}\n- *Size* : ${pler.filesize}\n\n`
						thumb = await getBaper(pler.thumbnail)
						bisnis(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
						buffer = await getBaper(pler.music)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${pler.title}.mp3`, quoted: ben})
						break
					case 'play':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						data = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtearkey}`, {method: 'get'})
						teks = '-「 *Play Music From Youtubes* 」-\n'
						const play = data.result
							teks += `\n- *Judul* : ${play.title}\n- *Durasi* : ${play.duration}\n- *Size* : ${play.size}\n\n-「 *N@nd0-BOT* 」-`
						thumb = await getBaper(play.image)
						bisnis(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
						buffer = await getBaper(play.mp3)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play.title}.mp3`, quoted: ben})
						break
						case 'play2':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						data = await fetchJson(`https://naufalhoster.xyz/dl/ytplayaudio?apikey=${naufalkey}&query=${body.slice(7)}`, {method: 'get'})
						teks = '-「 *Play Music From Youtubes* 」-\n'
						const play2 = data.result
							teks += `\n- *Judul* : ${play2.title}\n- *Durasi* : ${play2.duration}\n- *Size* : ${play2.filesize}\n\n-「 *N@nd0-BOT* 」-`
						thumb = await getBaper(play2.thumbnail)
						bisnis(mess.wait)
						buffer = await getBaper(play2.audio)
						cheat(teks)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play2.title}.mp3`, quoted: ben})
						break
						case 'play3':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=pendekin&query=${body.slice(7)}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.uploader}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.view}\n`
                    txt += `Like : ${get_info.like}\n`
                    txt += `Dislike : ${get_info.dislike}\n`
                    txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBaper(get_info.thumbnail)
                    benny.sendMessage(from, buffer, image, { quoted: ben, caption: txt })
                    get_audio = await getBaper(get_result.audio[3].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: ben })
                    break
						case 'pinterest':
						case 'pinteres':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
							const papapale = body.slice(11)
							data = await fetchJson(`https://api.vhtear.com/pinterest?query=${body.slice(11)}&apikey=${vhtearkey}`, {method: 'get'})
							if (data.error) return cheat(data.error)
							for (let i of data.result) {
								const amsulah = data.result
								const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
								thumb = await getBaper(pimterest)
							}
							bisnis(mess.wait)
					benny.sendMessage(from, thumb, image, { quoted: ben, caption: `- *Pinterest* : `+papapale})
							break
						case 'igstalk':
						case 'stalkig':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Username nya mana?')
							tekss = body.slice(9)
							const optionso = {
  // Number of posts to scrape: {int default: 0}
  count: 0,
  // Media type to scrape: ["image", "video", "all"]: {string default: 'all'}
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};
							anu = await igstalk.getUserMeta(tekss, optionso)
							console.log(anu)
							bisnis(mess.wait)
							plor = anu.graphql.user
					teks = `*Username* : ${plor.username}\n*Fullname* : ${plor.full_name}\n*Followers* : ${plor.edge_followed_by.count}\n*Following* : ${plor.edge_follow.count}\n*Biodata* : ${plor.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(plor.profile_pic_url_hd)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'igstalk2':
						case 'stalkig2':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Username nya mana?')
							tekss = body.slice(10)
							anu = await igdl.scrapeUserPage(tekss)
							bisnis(mess.wait)
							console.log(anu)
					plor = anu.result
					teks = `*Username* : ${anu.user.username}\n*Fullname* : ${anu.user.full_name}\n*Followers* : ${anu.user.edge_followed_by.count}\n*Following* : ${anu.user.edge_follow.count}\n*Biodata* : ${anu.user.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(anu.user.profile_pic_url_hd)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ig3':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Username nya mana?')
							tekss = body.slice(5)	
							anu = await igdl.scrapeUserPage(tekss)
							teks = `*◪* *IG SEARCH*\n\n`
							for (let o of anu.medias) {
								teks += `*Caption:* ${o.text}\n*Jumlah like:* ${o.like_count}\n============================\n`
							    buffer = await getBaper(o.thumbnail)
							}
							bisnis(mess.wait)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'igstalk3':
						case 'stalkig3':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Username nya mana?')
							tekss = body.slice(10)
							anu = await fetchJson(`https://naufalhoster.xyz/dl/igstalk?apikey=${naufalkey}&username=${tekss}`, {method: 'get'})
							bisnis(mess.wait)
					plor = anu.result
					teks = `*Username* : ${plor.username}\n*Fullname* : ${plor.fullName}\n*Followers* : ${plor.followerCount}\n*Following* : ${plor.followingCount}\n*Jumlah post* : ${plor.postCount}\n*Biodata* : ${plor.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(plor.profile_picture.resolution_hd)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ttstalk':
						case 'stalktt':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Username nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/tstalk?apikey=${naufalkey}&username=${body.slice(9)}`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Nickname* : ${anu.result.user.nickname}\n*Loves* : ${anu.result.stats.heartCount}\n*Followers* : ${anu.result.stats.followerCount}\n*ID* : ${anu.result.user.id}`
							buffer = await getBaper(anu.result.user.avatarLarger)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ytstalk':
						case 'stalkyt':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Username nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/ytstalk?apikey=${naufalkey}&username=${body.slice(9)}`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Username* : ${anu.result.channel.username}\n*Channel Name* : ${anu.result.channel.displayname}\n*Subcribers* : ${anu.result.channel.subs}\n*Country* : ${anu.result.channel.country}\n*Views Total* : ${anu.result.channel.views}\n*Created at* : ${anu.result.channel.created_at}\n*Channel type* : ${anu.result.channel.channeltype}`
							buffer = await getBaper(anu.result.channel.avatar)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
						case 'ig':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Link nya mana?')
							lino = body.slice(4)
							anu = await igdls(lino)
							console.log(anu)
							bisnis(mess.wait)
					buffer = await getBaper(anu.url_list[0])
							benny.sendMessage(from, buffer, image, {quoted: ben})
							break
							case 'igvid':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Link nya mana?')
							lino = body.slice(4)
							anu = await igdls(lino)
							console.log(anu)
							bisnis(mess.wait)
					buffer = await getBaper(anu.url_list[0])
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben})
							break
							case 'ig2':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Link nya mana?')
							const optionse = {
  // Number of posts to scrape: {int default: 0}
  count: 0,
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};
							anu = await igstalk.getPostMeta(args[0], optionse)
							console.log(anu)
							opc = anu.graphql.shortcode_media.display_url
					buffer = await getBaper(opc)
							benny.sendMessage(from, buffer, image, {quoted: ben})
							break
							case 'lk21':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Film apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=pendekin&query=${body.slice(6)}`, {method: 'get'})
							bisnis(mess.wait)
							plor = anu.result
							teks = `*◪* *LAYAR KACA 21*\n*│*\n*├─ ❏* *Judul:* ${plor.title}\n*├─ ❏* *Desc:* ${plor.desc}\n*├─ ❏* *Genre:* ${plor.genre}\n*├─ ❏* *Durasi:* ${plor.duration}\n*├─ ❏* *Rating:* ${plor.rating}\n*├─ ❏* *Link:* ${plor.link}\n*├─ ❏* *Lokasi:* ${plor.location}\n*├─ ❏* *Bahasa:* ${plor.language}\n*├─ ❏* *Tanggal rilis:* ${plor.date_release}\n*└─ ❏* *Actors:* ${plor.actors}\n\n`
                	buffer = await getBaper(plor.thumbnail)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'infoalamat':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Film apa?')
							anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=pendekin`, {method: 'get'})
							bisnis(mess.wait)
							plor = anu.result
							teks = `${plor.data}\n*Desc:* ${plor.deskripsi}`
							cheat(teks)
							break
							case 'google':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Film apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=pendekin&query=${body.slice(8)}`, {method: 'get'})
							bisnis(mess.wait)
							teks = `*◪* *GOOGLE SEARCH*\n`
							o = 1
							for (let plor of anu.result) {
							teks += `*${o++}. ${plor.title}*\n*Desc:* ${plor.desc}\n*Link:* ${plor.link}\n==============================\n`
							}
							cheat(teks.trim())
							break
							case 'komik':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Film apa?')
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${body.slice(7)}&apikey=BotWeA`, {method: 'get'})
							bisnis(mess.wait)
							teks = `*◪* *KOMIK*\n\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumbnail)
							teks += `*${o++}. Judul:* ${plor.judul}\n*Konsep:* ${plor.konsep_cerita}\n*Pengarang: ${plor.pengarang}*\n*Rating:* ${plor.rating}\n*Link:* ${plor.link}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'film':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Film apa?')
							anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
							if (anu.status == false) return reply(anu.message)
							bisnis(mess.wait)
							teks = `*◪* *FILM*\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumb)
							teks += `*${o++}. Judul:* ${plor.title}\n*Link:* ${plor.url}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'movie':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Film apa?')
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film?q=${body.slice(7)}&apikey=BotWeA`, {method: 'get'})
							if (anu.status == false) return reply(anu.message)
							bisnis(mess.wait)
							teks = `*◪* *FILM*\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumb)
							teks += `*${o++}.* ${plor.judul}\n*Rating:* ${plor.rating}\n*Genre:* ${plor.genre_negara}\n*Link:* ${plor.link}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'cocofun':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						    if (args.length < 1) return cheat('Link nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/cocofun?apikey=${naufalkey}&url=${args[0]}`, {method: 'get'})
							bisnis(mess.wait)
							bufer = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, bufer, image, {quoted: ben, caption: '*Mohon tunggu sebentar video sedang didownload!'})
					buffer = await getBaper(anu.result.video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', caption: anu.result.caption, quoted: ben})
							break
							case 'tiktokmusic':
							case 'tiktokmusik':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
							if (args.length < 1) return cheat('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							buffer = await getBaper(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=pendekin&url=${args[0]}`)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ben})
							break
						case 'tiktok':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
							if (args.length < 1) return cheat('Linknya mana um?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${args[0]}`, {method: 'get'})
							if (anu.error) return cheat(anu.error)
							bisnis(mess.wait)
					teks = `*Username* : ${anu.result.username}\n*Nickname* : ${anu.result.nickname}\n*Caption* : ${anu.result.caption}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.videoNoWatermark)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: ben, caption: teks})
							break
					case 'playstore':
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${body.slice(11)}`, {method: 'get'})
					if (anu.error) return cheat(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.appid}\n*Developer* : ${i.developer}\n*Price* : ${i.price}\n*Link* : ${kepo(i.url)}\n=================\n`
					}
					cheat(teks.trim())
					break
					case 'igsearch':
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return cheat(anu.error)
					bisnis(mess.wait)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Username* : ${i.username}\n*Fullname* : ${i.full_name}\n=================\n`
						buffer = await getBaper(i.profile_pic)
					}
					benny.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: ben})
					break
					case 'jalantikus':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (args.length < 1) return reply('Yang mau dicari apa?')
					tekss = body.slice(12)
					anu = await fetchJson(`https://pencarikode.xyz/news/sjalantikus?search=${tekss}&apikey=pais`, {method: 'get'})
					bisnis(mess.wait)
					teks = `*Jalan tikus* : ${tekss}\n`
					for (let i of anu.result) {
						teks += `\n*Judul:* ${i.title}\n*Link:* ${i.link}\n`
						buffer = await getBaper(i.thumb)
					}
					benny.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: ben})
					break
					case 'ytsearch':
					if (!isRegistered) return cheat(mess.only.Registered)
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await ytsearch.search(body.slice(10))
					bisnis(mess.wait)
					teks = '*YOUTUBE SEARCH*\n\n'
					for (let i of anu.videos) {
						teks += `*Judul* : ${i.title}\n*Id* : ${i.id}\n*Channel* : ${i.channel.name}\n*Link Channel* : ${i.channel.link}\n*Duration* : ${i.duration} menit\n*Views* : ${i.views}\n============================\n`
					buffer = await getBaper(i.thumbnail)
					}
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
					break
					case 'xvideos':
					if (!isRegistered) return cheat(mess.only.Registered)
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideos?query=${body.slice(9)}&apikey=${hujankey}`, {method: 'get'})
					if (anu.error) return cheat(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Duration* : ${i.duration}\n*Channel* : ${i.channel}\n*Link* : ${i.url}\n=================\n`
					}
					bisnis(mess.wait)
					cheat(teks.trim())
					break
					case 'xnxx':
					if (!isRegistered) return cheat(mess.only.Registered)
					if (args.length < 1) return cheat('Yang mau di cari apaan?')
					anu = await xnxx(`${body.slice(6)}`)
					console.log(anu)
					if (anu.error) return cheat(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Duration* : ${i.duration}\n*Link* : ${i.url}\n=================\n`
					}
					cheat(teks.trim())
					break
					case 'tebakgambar':
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`, {method: 'get'})
					ngebuff = await getBaper(anu.result.soal)
					tebak = `❏ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					benny.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					benny.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					benny.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					benny.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					benny.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: ben }) // ur cods
					}, 0) // 1000 = 1s,
						break
						case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/random2/${command}?apikey=pendekin`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/random/${command}?apikey=pendekin`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=pendekin`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break					
					case 'jadwalsholat':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${sholat}&apikey=BotWeA`, {method: 'get'})
					reply(mess.wait)
					jsol = `*◪* *JADWAL SHOLAT*\n*│*\n*├─ ❏* *Kota* : ${sholat}\n*├─ ❏* *Subuh* :  ${anu.result.subuh}\n*├─ ❏* *Dzuhur* : ${anu.result.dzuhur}\n*├─ ❏* *Ashar* : ${anu.result.ashar}\n*├─ ❏* *Maghrib* : ${anu.result.maghrib}\n*└─ ❏* *Isya* : ${anu.result.isha}`
					cheat(jsol)
					break 
					case 'xvideosdl':
					if (!isRegistered) return cheat(mess.only.Registered)
					if (!isPremium && !ben.key.fromMe) return cheat(mess.only.premium)
					if (args.length < 1) return cheat('Linknya mana om?')
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideosdl?url=${body.slice(11)}&apikey=AdelwinNL`, {method: 'get'})
					bisnis(mess.wait)
					buffer = await getBaper(anu.vid)
					teks = `➸ *Judul* : ${anu.judul}\n➸ *Size* : ${anu.size}\n➸ *Link download* :\n${anu.vid}`
					benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben, caption: teks})
					break
					case 'xnxxdl':
					if (!isRegistered) return cheat(mess.only.Registered)
					if (!isPremium && !ben.key.fromMe) return cheat(mess.only.premium)
					if (args.length < 1) return cheat('Linknya mana om?')
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xnxxdl?url=${body.slice(8)}&apikey=${hujankey}`, {method: 'get'})
					bisnis(mess.wait)
					buffer = await getBaper(anu.vid)
					teks = `➸ *Judul* : ${anu.judul}\n➸ *Size* : ${anu.size}\n➸ *Link download* :\n${anu.vid}`
					benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben, caption: teks})
					break
					case 'ytmp4':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://naufalhoster.xyz/dl/youtube?apikey=${naufalkey}&url=${args[0]}`, {method: 'get'})
							if (anu.error) return cheat(anu.error)
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.video.url)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: ben})
							break
							case 'ytmp42':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.thumb)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: ben})
							break
							case 'ytmp43':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${args[0]}`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.judul}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.imgUrl)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.urlVideo)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.judul}.mp4`, quoted: ben})
							break
							case 'ytmp44':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=apivinz`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
							 case 'ytmp45':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4/2?url=${args[0]}&apikey=apivinz`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
						case 'ytmp3':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://naufalhoster.xyz/dl/youtube?apikey=${naufalkey}&url=${args[0]}`, {method: 'get'})
							if (anu.error) return cheat(anu.error)
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.audio.url)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
							 case 'ytmp32':
							 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await ytdl(`${args[0]}`)
							console.log(anu)
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.thumb)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: ben})
						     break
							 case 'ytmp33':
							 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://videfikri.com/api/ytmp3/?url=${args[0]}`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.judul}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: ben})
						     break
							 case 'ytmp34':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3?url=${args[0]}&apikey=apivinz`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_audio)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
							  case 'limit':
							  case 'ceklimit':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
							 teks= `*Limit anda tersisa:* ${limit.getLimit(sender, _limit, limitCount)}\n\n*NOTE:*\nLimit akan direset tiap jam 11 malam!`
							 cheat(teks)
							 break
							 case 'ytmp35':
						if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return cheat('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return cheat(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${args[0]}&apikey=apivinz`, {method: 'get'})
							bisnis(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_audio)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
				case 'spekhp':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				hp = body.slice(8)
	    anu = await fetchJson(`https://api.vhtear.com/gsmarena?query=${hp}&apikey=${vhtearkey}`, {method: 'get'})
	    buffer = await getBaper(anu.result.image)
		bisnis(mess.wait)
							teks = `*Spekifikasi Hp ${hp}* \n➸ *Nama HP* : ${anu.result.title} \n➸ *Spekifikasi* : ${anu.result.spec}`
		benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
		break
				case 'heroml':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	                        if (args.length < 1) return cheat('Heronya mana bang?')
                          bisnis(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/herodetail?query=${body.slice(8)}&apikey=${vhtearkey}`, {method: 'get'})
		                    teks = `➸ *Hero* : ${anu.result.title} \n➸ *Quotes* : ${anu.result.quotes}\n➸ *Info* : ${anu.result.info}\n➸ *Attributes* : ${anu.result.attributes}`
							buffer = await getBaper(anu.result.pictHero)
		                    benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks}) 
							 break
                case 'truth':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBaper(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					benny.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: ben })
					break
				case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBaper(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					benny.sendMessage(from, tod, image, { quoted: ben, caption: '*Dare*\n\n'+ der })
					break
				case 'cersex':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					cers = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`, {method: 'get'})
					buffer = await getBaper(cers.result.image)
					bisnis(mess.wait)
					benny.sendMessage(from, buffer, MessageType.image, { caption: cers.result.cerita, quoted: ben })
					break
				case 'setreply':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					fake = body.slice(10)
					cheat(`berhasil ubah Fake reply menjadi : ${fake}`)
					break
					case 'addchat':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					var opo = body.slice(9)
					var oposu = opo.split("|")[0]
					var oposi = opo.split("|")[1]
			orang = `${oposu}`
			orangn = `${oposi}`
					await benny.chatAdd(orang, orangn)
					teks = `*Nomor* : ${orang.replace('@s.whatsapp.net', '')}\n*Nama* : ${orangn}`
					cheat(teks)
					break
					case 'getstatus':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
			orang = `${args[0]}@s.whatsapp.net`
					var nihstat = await benny.getStatus(orang)
					teks = `*Nomor* : ${orang.replace('@s.whatsapp.net', '')}\n*Status* : ${nihstat}`
					cheat(teks)
					break
					case 'setbotname':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					namabot = body.slice(12)
					await benny.updateProfileName(namabot)
					cheat(`berhasil ubah nama bot menjadi : ${namabot}`)
					break
					case 'reset':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					prefix = '#'
fake = '*SELFBOT*'
numbernye = '0@s.whatsapp.net'
banChats = true
setgrup = "6289636006352-1606097314@g.us"
setthumb = `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uisFUPPPPPPPPPPPPC0KF/AuZwGcKgAAJfg1U+PPPPPPPPPPPPPwq14hdBQFgwQWjUfQ11gvPPPPPPPPPPPPgq1wFI7ZjTgGgYwPQ11lfPPPPPPPPPPPPQq1wUIuLLOm/wA8Eb4NdZTzzzzzzzzzzzy16JewEK5lEE8kIMf4NtsHzzzzzzzzzzzwzqmbX7zn333323375InEXzzzzzzzzzzzzzl5XaG4X77777777rUqHzzzzzzzzzzzzzzyjD7z73777777763rzzzzzzzzzzzzzzzzzznDz77777777bkBzzzzzzzzzzzzzzzzzzzz8txrHnXHN0iLDzzzzzzzzzzzzzzzzzzzzzw2j+157k/zzzzzzzzzzzzzzzzzzzzzzzzwiS2fJ2wcHzzzzzzzzzzzzzzzzzzzzy53EX7/AOs//pyxG0888888888888888888wZDDDDDDDDDDD1d888888888888888888lCAAAAAAAAAAARy888888888888888888JDDDDCbmlDDDDH1888888888888888888HLDDDSJcSDDDDW1888888888888888888yoDDDTdlTDDDDAC888888888888888888LMPPPP+OuPPPPb5888888888888888888CU/wDvvvvvvvvvsa/PPPPPPPPPPPPPPPPPLH/uuttsuuttr1vPPPPPPPPPPPPPPPPPPHls8888888888xx/PPPPPPPPPPPPPPPPPPIQAAAAAAAAAAA/PPPPPPPPPP/xAAtEQABAgQEBgMAAgMBAAAAAAACAAMBBBESEBQyUiAhMDEzQBMiQiNBNFBicf/aAAgBAgEBPwD/AFLbZOOUgoAyGoE6wJjcHBXjYZv5xVjMewJ9mz7w0+lKeZG2USUEfMiwBsi/ChKuEss5dRZT/tRkzRMOj+FHl3wlvDRA3QlM+H0oRISrBMv3p5/8ioNOH2TEt9rzX1h2VOEgA9QJ6WIdCbcJol8g/H8icdI/Tk9RoJcbzMl9R5Qwi8IqMyUey+cl8xIX6d0MwJK7B1kXOaKFJT1JVsh+0cDMQ7o3iPSq8QGUEDwn3wchVsxRQjDv6TDd5YGYgNYojI+/REkw5XkeEy1cN4+kyFjeDzlS6YlamzvGuDwWOU9BlgiLng+do8FCVCVCVCVCVCVCxYOhUwmWSPmKiJD360syJfaO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7WNGMm4KmgZTxNY37nj8GWCGYeMjDtKNkUZzOH3Udm0bMet36cayeDa1Jd49o6H/AOqjqTTVDJM3raECCLx7LrbShpcW+fyQprWrZP1MAcTUaioOWeTtFa/Pz0naK1+fnpO0U573b5xdpN6BIN4Ny16fnX9pa9Nzr+0ten51/aWvT86/tLXpudf2lr03Ov7RWvTc6/tFa9Nzr+0Vr03Ov7RWvTc6/tFa9Pzr+0ten51/aWvTc6/tIyynLI8/fU16bnX9orX5+ek7RWvz89J2imVlWzJUSdaprckBunbeOUFHKyRocxwIOT2LX1Wxacvz5G6U5znuLnG8k41TWQ5wwpnFvwjKtqqLkHrK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaKfY9Kd7hN71VUctM7dZMzlZdaaeYMJ8W84+g8fsW3pPGws4m39asqFslTecjBf6VVQiankYeLFp1KV+HTQvOdgPsS3m/9EJ+BWUbp3fQryryryryryryryryryryryryryryryryryryryryryryryryrynuIY435jqUQuo6cfLb7Et8cHP1Kzj/0jQfSqg3QS/QdSIYMTB8I9iW+PEQn41Qn/qj8pJNFFv3gI2nT/F1JlfTO9e7T5StN1LLoTRe4DjPsW3B/xDoeFSm6oh+seTravWRgt357k5znG9xvKZR1Txe2B92hSRyRm6Rjm6QqarkgPG3OEx7XtDmnEfJWif8AldpCphfUwD5jfz7FtcX0EvRce9Rm6Rh+IeSJuUshkkc85yrJoGYAqJBeTvB/epLDHKwskbeFW0ppZyzNlboVly76P7jyVpnxDfrVni+tp/r/AB7FtIX0NR9Hk6jg8v0HUhAEUYGTBF2rb13/AD8e6Vm8KGg+StU7iMdJVki+vh6L/wAexatuFSzjjjdqRG+KM/CPIubhAjjCewsc5pyg3Kya1skQhcd2wYukajnNa0lxuAzq0avZVQXDeNxNVlxY3yfbyVqnHF91YgvrdEZ9iuF7XDjGpSm+ni+keSrqQy+MZvs441jaeIplq1zRdrt+kKer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`
					cheat(`*Berhasil reset fake reply seperti semula*`)
					break
					case 'setname':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					jing = body.slice(9)
					await benny.groupUpdateSubject('6289636006352-1606097314@g.us', jing)
					cheat(`*Berhasil ubah Fake reply name menjadi:* ${jing}`)
					break
				case 'setnumber':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					numbernye = `${args[0]}@s.whatsapp.net`
					cheat(`*Berhasil ubah Number reply menjadi:* ${numbernye.replace('@s.whatsapp.net', '')}`)
					break
				case 'cr1':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						// licensed by aex-bot -> namabotnte
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				cheat(`${split[1]}`)
				break
				case 'settarget':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					targetprivate = args[0]
					benny.sendMessage(from, `Succes Mengganti target Privte Fake Reply : ${targetprivate}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: setgrup } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": " _*SELFBOT - BEN*_ ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
					break
				case 'cr2':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					jids = `${targetprivate}@s.whatsapp.net` // nomer target
					var split = args.join(' ').replace(/@|\d/gi, '').split('|')
					var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const options = {
					contextInfo: {
					quotedMessage: {
					extendedTextMessage: {
					text: split[0]
										}
									}
								}
							}
					const responye = await benny.sendMessage(jids, `${split[1]}`, MessageType.text, options)
					await benny.deleteMessage (jids, {id: responye.messageID, remoteJid: jids, fromMe: true})
					break
					case 'kbbi':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var kbbi = body.slice(6)
					axios.get(`https://tobz-api.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=BotWeA`).then((res) => {
						let hasil = `「 *HASIL* 」\n${res.data.result}`;
						bisnis(mess.wait)
					    cheat(hasil)
					})
				break
				case 'linkgc':
				case 'linkgroup':
				case 'linkgrup':
				case 'grouplink':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isGroup) return cheat(mess.only.group)
				const linkgc = await benny.groupInviteCode (from) 
				cheat(`https://chat.whatsapp.com/${linkgc}`)
				break 
				case 'ytcomment':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat(`Block nih contoh\n${prefix2}ytcomment benny|woi subscribe gw`)
					var gh = body.slice(11)
					var namalu = gh.split("|")[0];
					var komenlu = gh.split("|")[1];
				anu = await fetchJson(`https://naufalhoster.xyz/textmaker/ytcomment?apikey=${naufalkey}&nama=${namalu}&comment=${komenlu}`, {method: 'get'})
				buffer = await getBaper(anu.result.image)
				benny.sendMessage(from, buffer, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	   "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
				case 'wolflogo':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var gh = body.slice(10)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return cheat(`Block nih contoh\nketik : ${prefix2}wolflogo anjay|ohh`)
					bisnis(mess.wait)
					buffer = await getBaper(`https://api.vhtear.com/avatarwolf?text1=${teks1}&text2=${teks2}&apikey=${vhtearkey}`)
					benny.sendMessage(from, buffer, image, {quoted: ben})
					break
		        case 'coding':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var ghst = body.slice(8)
					if (args.length < 1) return cheat(`Block nih contoh\nketik : ${prefix2}codelogo nih heker`)
					bisnis(mess.wait)
					buffer = await getBaper(`https://carbonnowsh.herokuapp.com/?code=${ghst}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
					break
				case 'phlogo':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					gh = body.slice(8)
					teks1 = gh.split("|")[0];
					teks2 = gh.split("|")[1];
					if (args.length < 1) return cheat(`Block nih contoh\nketik : ${prefix2}phlogo anjay|ohh`)
					bisnis(mess.wait)
					buffer = await getBaper(`https://naufalhoster.xyz/textmaker/pornhub?apikey=${naufalkey}&text1=${teks1}&text2=${teks2}`)
					benny.sendMessage(from, buffer, image, {quoted: ben})
					break
				case 'cekjodoh':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
				var asu = body.slice(10)
					var teks5 = asu.split("|")[0];
					var teks6 = asu.split("|")[1];
					anu = await fetchJson(`http://scrap.terhambar.com/jodoh?n1=${teks5}&n2=${teks6}`, {method: 'get'})
					teks = `*Pasangan dengan data:*\n- *Nama cowok* : ${anu.result.nama_anda}\n- *Nama cewek* : ${anu.result.nama_pasangan}\n\n*Sisi:*\n- *Positif* : ${anu.result.sisi.positif}\n- *Negatif* : ${anu.result.sisi.negatif}`
			buffer = await getBaper(anu.result.gambar)
			benny.sendMessage(from, buffer, image, { caption: teks, quoted: {
    "key": {
      "remoteJid": setgrup,
      "fromMe": false,
	  "participant": numbernye,
      "id": "0D5EAADD1166F55012EB42395DE58D61"
    },
    "message": {
      "productMessage": {
        "product": {
          "productImage": {
            "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc",
            "mimetype": "image/jpeg",
        "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=",
        "fileLength": "19247",
        "height": 416,
        "width": 416,
        "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=",
        "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=",
        "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8",
        "mediaKeyTimestamp": "1613162019",
        "jpegThumbnail": setthumb
	   },
          "productId": "3958959877488517",
          "title": "@N@nd0-BOT",
          "description": "Kepoluah",
          "currencyCode": "USD",
          "priceAmount1000": "999999999",
          "retailerId": "Kepolu",
          "url": "https://youtube.com/c/bennyhidayat",
          "productImageCount": 2
        },
        "businessOwnerJid": "6289636006352@s.whatsapp.net"
      }
    },
    "messageTimestamp": "1613442626",
    "status": "PENDING"
					}})
					break
					case 'avengers':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
				var ghs = body.slice(10)
					var teks3 = ghs.split("|")[0];
					var teks4 = ghs.split("|")[1];
					if (args.length < 1) return cheat(`Block nih contoh\nketik : ${prefix2}customtahta anjay|ohh|aja`)
					bisnis(mess.wait)
					anu = await getBaper(`https://naufalhoster.xyz/textmaker/avenger?apikey=pendekin&text1=${teks3}&text2=${teks4}`)
					benny.sendMessage(from, anu, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "3A198B69DB172A44D67D5FAB00D1625B"
    },
    "message": {
      "contactMessage": {
        "displayName": "_*N@nd0-BOT*_",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:_*N@nd0-BOT*_;_*N@nd0-BOT*_;;;\nFN:_*N@nd0-BOT*_\nitem1.TEL;waid=6281387289617:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    "messageTimestamp": "1614116469",
    "status": "ERROR"
  }
					})
					break
				case 'customtahta':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
				var ghs = body.slice(13)
					var teks3 = ghs.split("|")[0];
					var teks4 = ghs.split("|")[1];
					var teks5 = ghs.split("|")[2];
					if (args.length < 1) return cheat(`Block nih contoh\nketik : ${prefix2}customtahta anjay|ohh|aja`)
					bisnis(mess.wait)
					anu = await getBaper(`https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=${naufalkey}&text1=${teks3}&text2=${teks4}&text3=${teks5}`)
					benny.sendMessage(from, anu, image, { caption: 'Neh..', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "3A198B69DB172A44D67D5FAB00D1625B"
    },
    "message": {
      "contactMessage": {
        "displayName": "_*N@nd0-BOT*_",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:_*N@nd0-BOT*_;_*N@nd0-BOT*_;;;\nFN:_*N@nd0-BOT*_\nitem1.TEL;waid=6281387289617:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    "messageTimestamp": "1614116469",
    "status": "ERROR"
  }
					})
					break
					case 'loli2':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
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
										bisnis(mess.wait)
					var buf = Buffer.from(response, 'base64'); 
							benny.sendMessage(from, buf ,MessageType.image, { caption: `LOMLI`, quoted: ben } )
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
						 case 'bokeh2':
						 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			tekss = body.slice(8)
			buffer = await getBaper(`https://naufalhoster.xyz/textmaker/bokeh?apikey=${naufalkey}&text=${tekss}`)
			teks = `BOKEH ${tekss}`
			bisnis(mess.wait)
					   benny.sendMessage(from, buffer, image, { caption: teks, quoted: ben })
				 break
			
				 case 'tahta':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(7)
					if (!teks) return benny.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, {quoted: ben})
				var buffer = await getBaper(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtearkey}`)
				bisnis(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { caption: `HARTA TAHTA ${teks}`, quoted: ben })
				 break
				 case 'blood':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			    teks = body.slice(7)
				 blood = await getBaper(`https://naufalhoster.xyz/textmaker/blood?apikey=${naufalkey}&text=${teks}`)
				bisnis(mess.wait)
					   benny.sendMessage(from, blood, MessageType.image, { caption: `BLOOD ${teks}`, quoted: ben })
				 break
				 case 'matrix':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			    teks = body.slice(8)
				 blood = await getBaper(`https://naufalhoster.xyz/textmaker/matrix?apikey=${naufalkey}&text=${teks}`)
				bisnis(mess.wait)
					   benny.sendMessage(from, blood, MessageType.image, { caption: `MATRIX ${teks}`, quoted: ben })
				 break
				 case 'party':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(7)
					if (!teks) return benny.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, {quoted: ben})
				var buffer = await getBaper(`https://api.vhtear.com/partytext?text=${teks}&apikey=${vhtearkey}`)
				bisnis(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { caption: `PARTY ${teks}`, quoted: ben })
				 break
			 case 'profile':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 try {
					anu = await benny.getProfilePicture(sender)
				} catch {
					anu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				 stat = await benny.getStatus(sender)
				 console.log(stat)
				 teks = `*◪* *USER INFO*\n*│*\n*├─ ❏* *Nama:* ${pushname}\n*├─ ❏* *Status:* ${stat.status}\n*├─ ❏* *Premium:*  ${isPremium ? 'YES' : 'NO'}\n*└─ ❏* *Admin:*  ${isGroupAdmins ? 'YES' : 'NO'}\n\n================\n\nYour progress:\n*├─ ❏* *Level:*  ${getLevelingLevel(sender)}\n*├─ ❏* *Limit:*  ${limit.getLimit(sender, _limit, limitCount)}\n*├─ ❏* *XP:*  ${getLevelingXp(sender)}\n*└─ ❏* *Role:*  ${role}`
				 buffer = await getBaper(anu)
				 benny.sendMessage(from, buffer, image, { caption: teks, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `_*PROFILE: ${pushname}*_`, "fileLength": "36", "pageCount": 0, "fileName": `_*PROFILE: ${pushname}*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break 
		 case 'limit':
                if (isPremium || isOwner) return reply('⤞ Limit left: ∞ (UNLIMITED)')
                reply(`⤞ Limit left: ${limit.getLimit(sender, _limit, limitCount)} / 25\n\n*_Limit direset pada pukul 00:00 WIB_*`)
            break
	        case 'bakar':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 if (args.length < 1) return cheat('Teksnya mana??')
					var teksna = body.slice(7)
				buffer = await getBaper(`https://videfikri.com/api/textmaker/burnpaper/?text=${teksna}`)
bisnis(mess.wait)
					benny.sendMessage(from, buffer, MessageType.image, { caption: `BAKAR ${teksna}`, quoted: ben })
				 break
				 case 'quoteit2':
				 case 'qouteit2':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(10)
				 buffer = await getBaper(`https://naufalhoster.xyz/textmaker/quoteslife?apikey=${naufalkey}&quotes=${teks}`)
				 bisnis(mess.wait)
					benny.sendMessage(from, buffer, image, { caption: 'Block bucin', quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	   "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
				 case 'nulisbuku':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(11)
				var buffer = await getBaper(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
				bisnis(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { quoted: ben })
				 break
				 case 'nulisfolio':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var teks = body.slice(12)
				var buffer = await getBaper(`https://api.vhtear.com/write?text=${body.slice(12)}&apikey=${vhtearkey}`)
				bisnis(mess.wait)
					     benny.sendMessage(from, buffer, MessageType.image, { quoted: ben })
				 break
				 case 'hitung':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				 var mtk = body.slice(8)
				 teks = `「 *KALKULATOR* 」\n\nHasil dari:\n${mtk} = ${Math_js.evaluate(mtk)}`
				 cheat(teks)
				 break
				 case 'jadwaltv':
		    if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
            if (args.length < 1) return benny.cheat(dari, 'Kirim perintah *#jadwaltv [channel]*', id)
            tv = body.slice(10)
            anu = await fetchJson(`http://api.hurtzcrafter.xyz/jadwaltv?channel=${tv}`, {method: 'get'})
			if (anu.status === false) return cheat(anu.message)
			teks = `*Jadwal TV* : ${tv}\n`
			for (let i of anu.result) {
				teks += `\n*Acara:* ${i.tayang}\n*Waktu:* ${i.jam}\n`
			}
            cheat(teks.trim())
            break
			case 'music': // SEARCH MUSIC FROM YOUTUBE
        case 'musik':
           if (args.length === 0) return reply(`Kirim perintah ${prefix2}music judul lagu`)
           const querv2 = body.slice(7)
           reply(mess.wait)
           try {
               const resmusv2 = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=premi919`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix2}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix2}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix2}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await sendMediaURL(from, result[0].image, xixixai)
           } catch (err){
               console.log(err)
           }
           break
        case 'getmusik':
        case 'getmusic':
            try {
                if (isQuotedImage) {
                    if (args.length === 0) return reply(`Kirim perintah *${prefix2}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
                    
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah mekar.')
                    })

                } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (args.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah mekar._`)
            }
            break
        case 'getvideo':
            if (args.length < 1) return reply(`Kirim perintah *${prefix2}getvideo* _IdDownload_`)
            try {    
            if (isQuotedImage) {
                if (!Number(args[0])) return reply(`_Apabila reply hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getvideo _1_*`)
                const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                const pilur = dataDownmp3.split('(#)')
                console.log(pilur[args[0]])
                reply(mess.wait)
                ytv(`https://youtu.be/${pilur[args[0]]}`)
                    .then((res) => {
                        // console.log(res)
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })

                    })
                 
            } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah reply cok! hanya tag pesan berisi data hasil from penelusuran video._`)
            } else {
                if (args.length === 0) return reply(`Kirim perintah *${prefix2}getvideo _Id Video_*`)
                if (args[0] <= 25) return reply(`_Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!_`,)
                reply(mess.wait)
                ytv(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(mess.error.api)
            }
            break
			case 'searchmsg':
       if (args.length < 1) return reply(`Penggunaan : *!searchmsg <Kata>*\nContoh : *${prefix2}searchmsg ipul*`)
       const query = body.split(' ').slice(1).join(' ')
       const searched = await benny.searchMessages(query, from, 25, 1)
        if (searched.messages.length === 0){
          reply(`Kata *[ ${query} ]* tidak ditemukan!`)
             return
             }
          let katatemu = `*[ Message Search ]*\n\nDitemukan ${searched.messages.length - 1} pesan!\n`
          for (let i = 1; i < searched.messages.length - 1; i++) {
             let typeSrc = Object.keys(searched.messages[i].message)[0]
            typeSrc = typeSrc === 'extendedTextMessage' && searched.messages[i].message.extendedTextMessage.text.includes('@') ? typeSrc = 'mentionedText' : typeSrc
              const bodySrc = typeSrc == 'conversation' ? searched.messages[i].message.conversation : typeSrc == 'mentionedText' ? searched.messages[i].message.extendedTextMessage.text : typeSrc == 'extendedTextMessage' ? searched.messages[i].message.extendedTextMessage.text : typeSrc == 'imageMessage' ? searched.messages[i].message.imageMessage.caption : typeSrc == 'stickerMessage' ? 'Sticker' : typeSrc == 'audioMessage' ? 'Audio' : typeSrc == 'videoMessage' ? searched.messages[i].message.videoMessage.caption : typeSrc == 'documentMessage' ? 'document' : '[ PEPEK ]'//hurtz.message
                const senderSrc = isGroup ? searched.messages[i].participant : searched.messages[i].key.remoteJid
                 const jidSrc = senderSrc
                  const contsSrc = searched.messages[i].key.fromMe ? benny.user.jid : benny.contacts[senderSrc] || { notify: jidSrc.replace(/@.+/, '') }
                 const pushnameSrc = searched.messages[i].key.fromMe ? benny.user.name : contsSrc.notify || contsSrc.vname || contsSrc.name || '-'
 
                    katatemu += `
 
Pesan : ${bodySrc}
Type : ${typeSrc}
Pengirim : ${senderSrc.replace('@s.whatsapp.net', '')} ( ${pushnameSrc} )
`
               }
               reply(katatemu)
          break
			case 'qrmaker':
		    if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
            if (args.length < 1) return benny.cheat(dari, 'Kirim perintah *#jadwaltv [channel]*', id)
			qr = body.slice(9)
            buffer = await getBaper(`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${qr}`)
            benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*QR Dari* : ${qr}`})
            break
			case 'listsurah':
			if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
             cheat(`Berikut ini Daftar Nomor Surah
             
Untuk mencari ketik ${prefix2}quran 1

1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاسِ`)
break
				case 'randomsurah':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
				teks = `「 *RANDOM SURAH* 」\n\n\n- *Surah* : ${anu.result.nama}\n- *Arti* : ${anu.result.arti}\n- *Ayat* : ${anu.result.ayat}\n- *Asma* : ${anu.result.asma}\n- *Urut* : ${anu.result.urut}\n- *Nomor* : ${anu.result.nomor}\n- *Dari* : ${anu.result.type}\n- *Rukuk* : ${anu.result.rukuk}\n- *Ket* : ${anu.result.keterangan}\n`
				cheat(teks)
				break
				case 'quran':
				bisnis(mess.wait)
					surah = body.slice(7)
				   anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=apivinz`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: ${surah}\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
				   lagu = await getBaper(anu.audio)
				   benny.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', ptt:true})
				   cheat(quran.trim())
				   break
				case 'map':
					var teks = body.slice(5)
					axios.get('https://mnazria.herokuapp.com/api/maps?search='+teks)
					.then((res) => {
					  imageToBase64(res.data.gambar)
						.then(
						  (ress) => {
							benny.sendMessage(from, '_Otewe bang!_', MessageType.text, maping)
							var buf = Buffer.from(ress, 'base64')
							benny.sendMessage(from, buf, MessageType.image, { caption: `${teks}`, quoted: ben })
						})
					})
					break
				 case 'thunder':
				 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return benny.sendMessage(from, 'Teksnya mana block!', MessageType.text, {quoted: ben})
				teks = body.slice(9)
				var buffer = await getBaper(`https://naufalhoster.xyz/textmaker/thunder?apikey=${naufalkey}&text=${teks}`)
				bisnis(mess.wait)
				benny.sendMessage(from, buffer, MessageType.image, { caption: `THUNDER : ${teks}`, quoted: ben })
					 break
					 case 'otakulast':
					 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${vhtearkey}`, {method: 'get'})
						if (anu.error) return cheat(anu.error)
						teks = '=================\n\n'
						for (let i of anu.result.data) {
							teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
						}
						cheat(teks.trim())
						break
				case 'randomhentai':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					gatauda = body.slice(6)
					bisnis(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `RANDOM HENTAI!`, quoted: ben })
					break
				case 'nsfwneko':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					gatauda = body.slice(6)
					bisnis(mess.wait)
					 anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `NSFW NEKO!`, quoted: ben })
					break
				case 'groupid':
				cheat(from)
				break
				case 'nsfwtrap':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					gatauda = body.slice(6)
					bisnis(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `NSFW TRAP!`, quoted: ben })
					break
				case 'nsfwblowjob':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					gatauda = body.slice(6)
					bisnis(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `BLOWJOB!`, quoted: ben })
					break
case 'hug':                                                   
               ranp = getRandom('.gif') 
               rano = getRandom('.webp')
                      anu1 = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
                                         exec(`wget ${anu1.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(rano)
                                                benny.sendMessage(from, buffer, sticker,  { contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_HUG_*' } } })
                                                fs.unlinkSync(rano)
                                        })
                                             break
											 case 'cry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(mess.error.stick)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						benny.sendMessage(from, buffer, sticker, {quoted: ben})
						fs.unlinkSync(rano)
					})
					break
											 case 'attp':
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://api.xteam.xyz/attp?file&text=${teks}`, {method: 'get'})
					if (anu.error) return reply(mess.error.stick)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(`Errro gan!`)
						benny.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ben})
						fs.unlinkSync(rano)
					})
					break
case 'apakah':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					cheat('Pertanyaan : '+apakah+'\n\nJawaban : '+ kah)
					break
case 'kapan':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					cheat('Pertanyaan : '+kapankah+'\n\nJawaban : '+ koh)
					break
case 'bisakah':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					cheat('Pertanyaan : '+bisakah+'\n\nJawaban : '+ keh)
					break
		case 'getpp':
		if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
		if (args.length < 1) return reply('*Masukan nomor yang mau dicolong ppnya!*')
		anu = `${body.slice(7)}@s.whatsapp.net`
		if (Number(args[0].startsWith('62'))) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
				sendPesan(anu, `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [anu]}, quoted: ben, caption: `Ini kak pp nya @${anu.split('@')[0]}\nAku juga udah izin sama dia ^_^`})
		} else {
			reply(`*Block! Nih contoh:*\n${prefix2}getpp 6289636006352`)
		}
			  break
			  case 'getstory':
			  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			  if (args.length < 1) return reply('*Masukan nomor yang mau dicolong ppnya!*')
			ngontol = await benny.getStories(`${args[0]}@s.whatsapp.net`)
			console.log(ngontol)
			teks = `*STORY CHAT*\n\n`
			for (let i of ngontol) {
				for (let o of i.messages) {
					
				teks += `*Tidak dibaca:* ${i.unread}\n*Jumlah:* ${i.count}\n*Pesan:* ${i.messages[0]}\n==========================\n`
				}
			}
			cheat(teks.trim())
			break
			  case 'getppgc':
			  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			  if (args.length < 1) return reply('*Masukan id group yang mau dicolong ppnya!*')
		anu = `${body.slice(9)}`
		if (args[0].includes('@g.us')) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await benny.groupMetadata(anu)
				ano = await benny.getProfilePicture(anu)
				buffer = await getBaper(ano)
				benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Ini pp group ${metadete.subject}`})
		} else {
			reply(`*Block! Nih contoh:*\n${prefix2}getppgc 6289636006352-1606097314@g.us`)
		}
			  break
			  case 'getdesc':
			  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			  if (args.length < 1) return reply('*Masukan id group yang mau dicolong ppnya!*')
		anu = `${body.slice(9)}`
		if (args[0].includes('@g.us')) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await benny.groupMetadata(anu)
				benny.sendMessage(from, metadete.desc, text, {quoted: ben})
		} else {
			reply(`*Block! Nih contoh:\n${prefix2}getdesc 6289636006352-1606097314@g.us*`)
		}
			  break
			  case 'slowmo':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				benny.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
				case 'gemok':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'volume':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vntobase64':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = fs.readFileSync(media)
					todi = await ran.toString('base64')
					cheat(todi)
					break
				case 'robot':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'balikin':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'detikvn':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: ben})
						fs.unlinkSync(media)
				break
				case 'detikvideo':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ben})
						fs.unlinkSync(media)
				break
				case 'cepetin':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "rubberband=tempo=1.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'kencengin':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				if (!isRegistered) return reply(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
case 'menu':
case 'help':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (sender == undefined) sender = botNumber
if (prefix == '') prefix2 = '#'
l = 1
try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
	var itsme = `${numbernye}@s.whatsapp.net`
	spek = await benny.user.phone
	const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
	menunye = `「 *${fake} - WA* 」
*│◪* ${tampilHari}
*│◪* ${tampilTanggal}
*│◪* ${tampilWaktu}

*◪* *Informasi User*
*│◪* Nama: ${pushname}
*│◪* Tag: @${sender.split('@')[0]}
*│◪* Level: ${getLevelingLevel(sender)}
*│◪* XP: ${getLevelingXp(sender)}
*│◪* Role: ${role}
*│◪* Limit: ${isPremium ? 'Unlimited' : limit.getLimit(sender, _limit, limitCount)}
*│◪* Status: ${isOwner ? 'Owner' : 'User'}
*│◪* Premium: ${isPremium ? 'Premium' : 'Free'}

*◪* *Informasi BOT*
*│◪* Ver : Termux
*│◪* Prefix : 「 ${prefix2} 」
*│◪* Host : ${os.hostname}
*│◪* WA Version : ${spek.wa_version}
*│◪* Device : ${spek.device_manufacturer}
*│◪* Version : ${spek.os_version}
*│◪* Total hit : ${botHit.length}
*│◪* Total user : ${_registered.length}
*│◪* User hit : ${hit.getHit(sender, _hit, hitCount)}
*│◪* Creator : HAMBA ALLAH

*◪* *Commands*

*◪* *Heck Command*
*│◪* ${l++}. • ${prefix2}deface <link>
*│◪* ${l++}. • ${prefix2}hekweb <link>
  
*◪* *Helper Command*
*│◪* ${l++}. • ${prefix2}lapor <bugnya>
*│◪* ${l++}. • ${prefix2}forward <pesan>
*│◪* ${l++}. • ${prefix2}readmore <pesan>
*│◪* ${l++}. • ${prefix2}getdesc <groupid>
*│◪* ${l++}. • ${prefix2}findhost <url>
*│◪* ${l++}. • ${prefix2}cekping <host>
*│◪* ${l++}. • ${prefix2}santet <target>
*│◪* ${l++}. • ${prefix2}cekdns <url>
*│◪* ${l++}. • ${prefix2}getdesc <groupid>
*│◪* ${l++}. • ${prefix2}getppgc <groupid>
*│◪* ${l++}. • ${prefix2}getpp <nomor>
  
*◪* *Audio Command*
*│◪* ${l++}. • ${prefix2}tupai <reply vn>
*│◪* ${l++}. • ${prefix2}robot <reply vn>
*│◪* ${l++}. • ${prefix2}balikin <reply vn>
*│◪* ${l++}. • ${prefix2}cepetin <reply vn>
*│◪* ${l++}. • ${prefix2}volume <reply vn>
*│◪* ${l++}. • ${prefix2}kencengin <reply vn>
*│◪* ${l++}. • ${prefix2}gemuk <reply vn>
*│◪* ${l++}. • ${prefix2}bass <reply vn>
*│◪* ${l++}. • ${prefix2}gemuk <reply vn>
*│◪* ${l++}. • ${prefix2}slowmo <reply vn>
  
*◪* *Group Command*
*│◪* ${l++}. • ${prefix2}kickarea on
*│◪* ${l++}. • ${prefix2}kickarea off
*│◪* ${l++}. • ${prefix2}hidetag1 <text>
*│◪* ${l++}. • ${prefix2}hidetag2 <text>
*│◪* ${l++}. • ${prefix2}grup close|open
*│◪* ${l++}. • ${prefix2}bot on|off
*│◪* ${l++}. • ${prefix2}antidelete aktif
*│◪* ${l++}. • ${prefix2}antidelete mati
*│◪* ${l++}. • ${prefix2}antilink enable
*│◪* ${l++}. • ${prefix2}antilink disable
*│◪* ${l++}. • ${prefix2}antivirus on
*│◪* ${l++}. • ${prefix2}antivirus off
*│◪* ${l++}. • ${prefix2}antikasar on
*│◪* ${l++}. • ${prefix2}antikasar off
*│◪* ${l++}. • ${prefix2}modesimi on
*│◪* ${l++}. • ${prefix2}modesimi off
*│◪* ${l++}. • ${prefix2}gcname <text>
*│◪* ${l++}. • ${prefix2}gcdesk <text>
*│◪* ${l++}. • ${prefix2}afk <reason>
*│◪* ${l++}. • ${prefix2}add 62xxx
*│◪* ${l++}. • ${prefix2}kick 62xx
*│◪* ${l++}. • ${prefix2}headshot <@tag>
*│◪* ${l++}. • ${prefix2}kickall
*│◪* ${l++}. • ${prefix2}demote @tag
*│◪* ${l++}. • ${prefix2}promote @tag
*│◪* ${l++}. • ${prefix2}tagall
*│◪* ${l++}. • ${prefix2}ownergc
*│◪* ${l++}. • ${prefix2}ingfogc
*│◪* ${l++}. • ${prefix2}leave

*◪* *Image Command*
*│◪* ${l++}. • ${prefix2}imagetourl <reply>
*│◪* ${l++}. • ${prefix2}thumbtoimage <reply>
*│◪* ${l++}. • ${prefix2}urltoimage <reply>
*│◪* ${l++}. • ${prefix2}imagepencil <reply>
*│◪* ${l++}. • ${prefix2}imagetobase64 <reply>
*│◪* ${l++}. • ${prefix2}imagetopdf <reply>
*│◪* ${l++}. • ${prefix2}fakethumb <reply>
*│◪* ${l++}. • ${prefix2}sendfakethumb <reply&nomor>
*│◪* ${l++}. • ${prefix2}imagecartoon <reply>
*│◪* ${l++}. • ${prefix2}imagejail <reply>
*│◪* ${l++}. • ${prefix2}imagedistortion <reply>
*│◪* ${l++}. • ${prefix2}imagecomic <reply>
*│◪* ${l++}. • ${prefix2}imagefisheye <reply>
*│◪* ${l++}. • ${prefix2}imageburik <reply>
*│◪* ${l++}. • ${prefix2}imageinvert <reply>
*│◪* ${l++}. • ${prefix2}imagenv <reply>
*│◪* ${l++}. • ${prefix2}imagewasted <reply>
*│◪* ${l++}. • ${prefix2}imagedelete <reply>
*│◪* ${l++}. • ${prefix2}imagefire <reply>
*│◪* ${l++}. • ${prefix2}imagegrafitti <reply>
*│◪* ${l++}. • ${prefix2}imagenegative <reply>

*◪* *Downloader Command*
*│◪* ${l++}. • ${prefix2}play <query>
*│◪* ${l++}. • ${prefix2}play2 <query>
*│◪* ${l++}. • ${prefix2}play3 <query>
*│◪* ${l++}. • ${prefix2}ytmp4 <link>
*│◪* ${l++}. • ${prefix2}ytmp42 <link>
*│◪* ${l++}. • ${prefix2}ytmp43 <link>
*│◪* ${l++}. • ${prefix2}ytmp44 <link>
*│◪* ${l++}. • ${prefix2}ytmp45 <link>
*│◪* ${l++}. • ${prefix2}ytmp3 <link>
*│◪* ${l++}. • ${prefix2}ytmp32 <link>
*│◪* ${l++}. • ${prefix2}ytmp33 <link>
*│◪* ${l++}. • ${prefix2}ytmp34 <link>
*│◪* ${l++}. • ${prefix2}ytmp35 <link>
*│◪* ${l++}. • ${prefix2}ig <link>
*│◪* ${l++}. • ${prefix2}ig2 <link>
*│◪* ${l++}. • ${prefix2}igvid <link>
*│◪* ${l++}. • ${prefix2}tiktok <linknya>
*│◪* ${l++}. • ${prefix2}tiktokmusic <linknya>
*│◪* ${l++}. • ${prefix2}cocofun <link>
*│◪* ${l++}. • ${prefix2}soundcloud <query>
*│◪* ${l++}. • ${prefix2}joox <query>
 
*◪* *Game Command*
*│◪* ${l++}. • ${prefix2}tebakgambar 
*│◪* ${l++}. • ${prefix2}math
*│◪* ${l++}. • ${prefix2}truth
*│◪* ${l++}. • ${prefix2}dare

*◪* *News Command*
*│◪* ${l++}. • ${prefix2}berita
*│◪* ${l++}. • ${prefix2}cnnindo
*│◪* ${l++}. • ${prefix2}merdeka
*│◪* ${l++}. • ${prefix2}antaranews
*│◪* ${l++}. • ${prefix2}liputan6
*│◪* ${l++}. • ${prefix2}tribunnews
*│◪* ${l++}. • ${prefix2}foxnews
*│◪* ${l++}. • ${prefix2}palingmurah

*◪* *Stalker Command*
*│◪* ${l++}. • ${prefix2}igstalk <nama>
*│◪* ${l++}. • ${prefix2}igstalk2 <nama>
*│◪* ${l++}. • ${prefix2}igstalk3 <nama>
*│◪* ${l++}. • ${prefix2}ytstalk <nama>
*│◪* ${l++}. • ${prefix2}ttstalk <nama>
  
*◪* *Search Command*
*│◪* ${l++}. • ${prefix2}ytsearch <query>
*│◪* ${l++}. • ${prefix2}igsearch <query>
*│◪* ${l++}. • ${prefix2}lk21 <query>
*│◪* ${l++}. • ${prefix2}film <query>
*│◪* ${l++}. • ${prefix2}movie <query>
*│◪* ${l++}. • ${prefix2}komik <query>
*│◪* ${l++}. • ${prefix2}drakor
*│◪* ${l++}. • ${prefix2}google <query>
*│◪* ${l++}. • ${prefix2}shopee <query>
*│◪* ${l++}. • ${prefix2}images <query>
*│◪* ${l++}. • ${prefix2}infoalamat <query>
*│◪* ${l++}. • ${prefix2}gambar <query>
*│◪* ${l++}. • ${prefix2}bioskop <kota>
*│◪* ${l++}. • ${prefix2}wallpaper <query>
*│◪* ${l++}. • ${prefix2}wallpaper2 <query>
*│◪* ${l++}. • ${prefix2}wallpaper3 <query>
*│◪* ${l++}. • ${prefix2}pinterest <query>
*│◪* ${l++}. • ${prefix2}jalantikus <query>
*│◪* ${l++}. • ${prefix2}wiki <query>
*│◪* ${l++}. • ${prefix2}kbbi <query>
*│◪* ${l++}. • ${prefix2}spekhp <query>
*│◪* ${l++}. • ${prefix2}heroml <query>
*│◪* ${l++}. • ${prefix2}jadwalsholat <kotanya>
*│◪* ${l++}. • ${prefix2}brainly <query>
  
*◪* *Text Maker Command*
*│◪* ${l++}. • ${prefix2}ytcomment
*│◪* ${l++}. • ${prefix2}phcomment
*│◪* ${l++}. • ${prefix2}rip
*│◪* ${l++}. • ${prefix2}bikinmeme

*◪* *Anime Command*
*│◪* ${l++}. • ${prefix2}loli
*│◪* ${l++}. • ${prefix2}nsfwblowjob
*│◪* ${l++}. • ${prefix2}nsfwneko
*│◪* ${l++}. • ${prefix2}nsfwtrap
*│◪* ${l++}. • ${prefix2}neko
*│◪* ${l++}. • ${prefix2}neonime
*│◪* ${l++}. • ${prefix2}dewabatch <query>
*│◪* ${l++}. • ${prefix2}kusonime <query>
*│◪* ${l++}. • ${prefix2}wattpad <query>
*│◪* ${l++}. • ${prefix2}nhentaipdf <id>
*│◪* ${l++}. • ${prefix2}otakulast
*│◪* ${l++}. • ${prefix2}naruto
*│◪* ${l++}. • ${prefix2}minato
*│◪* ${l++}. • ${prefix2}boruto
*│◪* ${l++}. • ${prefix2}hinata
*│◪* ${l++}. • ${prefix2}sasuke
*│◪* ${l++}. • ${prefix2}sakura
*│◪* ${l++}. • ${prefix2}kaneki
*│◪* ${l++}. • ${prefix2}toukachan
*│◪* ${l++}. • ${prefix2}rize
*│◪* ${l++}. • ${prefix2}akira
*│◪* ${l++}. • ${prefix2}itori
*│◪* ${l++}. • ${prefix2}kurumi
*│◪* ${l++}. • ${prefix2}miku
*│◪* ${l++}. • ${prefix2}waifu
*│◪* ${l++}. • ${prefix2}randomhentai
*│◪* ${l++}. • ${prefix2}shota
  
*◪* *Gabut Command*
*│◪* ${l++}. • ${prefix2}apakah <query>
*│◪* ${l++}. • ${prefix2}kapan <query>
*│◪* ${l++}. • ${prefix2}halah <query>
*│◪* ${l++}. • ${prefix2}hilih <query>
*│◪* ${l++}. • ${prefix2}huluh <query>
*│◪* ${l++}. • ${prefix2}heleh <query>
*│◪* ${l++}. • ${prefix2}holoh <query>
*│◪* ${l++}. • ${prefix2}balikhuruf <query>
*│◪* ${l++}. • ${prefix2}bapakfont <query>
*│◪* ${l++}. • ${prefix2}bisakah <query>
  
*◪* *18+ Only Command*
*│◪* ${l++}. • ${prefix2}xnxx <query>
*│◪* ${l++}. • ${prefix2}xvideos <query>
*│◪* ${l++}. • ${prefix2}xnxxdl <link>
*│◪* ${l++}. • ${prefix2}xvideosdl <link>
  
*◪* *Islamic Menu*
*│◪* ${l++}. • ${prefix2}quran
*│◪* ${l++}. • ${prefix2}listsurah
*│◪* ${l++}. • ${prefix2}doaharian
*│◪* ${l++}. • ${prefix2}doatahlil
*│◪* ${l++}. • ${prefix2}kisahnabi
*│◪* ${l++}. • ${prefix2}niatshalat
*│◪* ${l++}. • ${prefix2}ayatkursi
*│◪* ${l++}. • ${prefix2}doawirid
*│◪* ${l++}. • ${prefix2}asmaulhusna
*│◪* ${l++}. • ${prefix2}jadwalshalat <kota>
*│◪* ${l++}. • ${prefix2}hadits <nomor>
*│◪* ${l++}. • ${prefix2}randomsurah
  
*◪* *Spammer Command*
*│◪* ${l++}. • ${prefix2}spamcall
*│◪* ${l++}. • ${prefix2}spamsms
  
*◪* *Sticker Command*
*│◪* ${l++}. • ${prefix2}ngif
*│◪* ${l++}. • ${prefix2}nsfw_neko_gif
*│◪* ${l++}. • ${prefix2}random_hentai_gif
*│◪* ${l++}. • ${prefix2}sticker <ReplyImg>
*│◪* ${l++}. • ${prefix2}stickerwm <ReplyImg>
*│◪* ${l++}. • ${prefix2}stickmeme <teks1|teks2>
*│◪* ${l++}. • ${prefix2}sticktag <ReplyImg>
*│◪* ${l++}. • ${prefix2}sticktourl <ReplyStick>
*│◪* ${l++}. • ${prefix2}takestick wm|wm
*│◪* ${l++}. • ${prefix2}sticknowm <ReplyStick>
*│◪* ${l++}. • ${prefix2}semoji <emoji>
*│◪* ${l++}. • ${prefix2}ttp <Text>
*│◪* ${l++}. • ${prefix2}ttp2 <Text>
*│◪* ${l++}. • ${prefix2}attp <Text>
*│◪* ${l++}. • ${prefix2}hug <@Tag>
*│◪* ${l++}. • ${prefix2}cry 
*│◪* ${l++}. • ${prefix2}sfire <ReplyImg>
*│◪* ${l++}. • ${prefix2}sulap <ReplyImg>
*│◪* ${l++}. • ${prefix2}triggered <ReplyImg>
  
*◪* *Text Maker Command*
*│◪* ${l++}. • ${prefix2}shadow
*│◪* ${l++}. • ${prefix2}cup
*│◪* ${l++}. • ${prefix2}cup1
*│◪* ${l++}. • ${prefix2}romance
*│◪* ${l++}. • ${prefix2}smoke
*│◪* ${l++}. • ${prefix2}burnpaper
*│◪* ${l++}. • ${prefix2}lovemessage
*│◪* ${l++}. • ${prefix2}undergrass
*│◪* ${l++}. • ${prefix2}love
*│◪* ${l++}. • ${prefix2}coffe
*│◪* ${l++}. • ${prefix2}woodheart
*│◪* ${l++}. • ${prefix2}woodenboard
*│◪* ${l++}. • ${prefix2}summer3d
*│◪* ${l++}. • ${prefix2}wolfmetal
*│◪* ${l++}. • ${prefix2}nature3d
*│◪* ${l++}. • ${prefix2}underwater
*│◪* ${l++}. • ${prefix2}golderrose
*│◪* ${l++}. • ${prefix2}summernature
*│◪* ${l++}. • ${prefix2}letterleaves
*│◪* ${l++}. • ${prefix2}glowingneon
*│◪* ${l++}. • ${prefix2}fallleaves
*│◪* ${l++}. • ${prefix2}flamming
*│◪* ${l++}. • ${prefix2}harrypotter
*│◪* ${l++}. • ${prefix2}carvedwood
*│◪* ${l++}. • ${prefix2}wetglass
*│◪* ${l++}. • ${prefix2}multicolor3d
*│◪* ${l++}. • ${prefix2}watercolor
*│◪* ${l++}. • ${prefix2}luxurygold
*│◪* ${l++}. • ${prefix2}galaxywallpaper
*│◪* ${l++}. • ${prefix2}lighttext
*│◪* ${l++}. • ${prefix2}beautifulflower
*│◪* ${l++}. • ${prefix2}puppycute
*│◪* ${l++}. • ${prefix2}royaltext
*│◪* ${l++}. • ${prefix2}heartshaped
*│◪* ${l++}. • ${prefix2}birthdaycake
*│◪* ${l++}. • ${prefix2}galaxystyle
*│◪* ${l++}. • ${prefix2}hologram3d
*│◪* ${l++}. • ${prefix2}greenneon
*│◪* ${l++}. • ${prefix2}glossychrome
*│◪* ${l++}. • ${prefix2}greenbush
*│◪* ${l++}. • ${prefix2}metallogo
*│◪* ${l++}. • ${prefix2}noeltext
*│◪* ${l++}. • ${prefix2}glittergold
*│◪* ${l++}. • ${prefix2}textcake
*│◪* ${l++}. • ${prefix2}starsnight
*│◪* ${l++}. • ${prefix2}wooden3d
*│◪* ${l++}. • ${prefix2}textbyname
*│◪* ${l++}. • ${prefix2}writegalacy
*│◪* ${l++}. • ${prefix2}galaxybat
*│◪* ${l++}. • ${prefix2}snow3d
*│◪* ${l++}. • ${prefix2}birthdayday
*│◪* ${l++}. • ${prefix2}goldplaybutton
*│◪* ${l++}. • ${prefix2}silverplaybutton
*│◪* ${l++}. • ${prefix2}freefire
*│◪* ${l++}. • ${prefix2}blackpink
*│◪* ${l++}. • ${prefix2}neon
*│◪* ${l++}. • ${prefix2}greenneon
*│◪* ${l++}. • ${prefix2}advanceglow
*│◪* ${l++}. • ${prefix2}futureneon
*│◪* ${l++}. • ${prefix2}sandwriting
*│◪* ${l++}. • ${prefix2}sandsummer
*│◪* ${l++}. • ${prefix2}sandengraved
*│◪* ${l++}. • ${prefix2}metaldark
*│◪* ${l++}. • ${prefix2}neonlight
*│◪* ${l++}. • ${prefix2}holographic
*│◪* ${l++}. • ${prefix2}text1917
*│◪* ${l++}. • ${prefix2}minion
*│◪* ${l++}. • ${prefix2}deluxesilver
*│◪* ${l++}. • ${prefix2}newyearcard
*│◪* ${l++}. • ${prefix2}bloodfrosted
*│◪* ${l++}. • ${prefix2}halloween
*│◪* ${l++}. • ${prefix2}jokerlogo
*│◪* ${l++}. • ${prefix2}fireworksparkle
*│◪* ${l++}. • ${prefix2}natureleaves
*│◪* ${l++}. • ${prefix2}bokeh2
*│◪* ${l++}. • ${prefix2}toxic
*│◪* ${l++}. • ${prefix2}strawberry
*│◪* ${l++}. • ${prefix2}box3d
*│◪* ${l++}. • ${prefix2}roadwarning
*│◪* ${l++}. • ${prefix2}breakwall
*│◪* ${l++}. • ${prefix2}icecold
*│◪* ${l++}. • ${prefix2}luxury
*│◪* ${l++}. • ${prefix2}cloud
*│◪* ${l++}. • ${prefix2}summersand
*│◪* ${l++}. • ${prefix2}horrorblood
*│◪* ${l++}. • ${prefix2}thunder2
*│◪* ${l++}. • ${prefix2}christmas
*│◪* ${l++}. • ${prefix2}quoteit [teks]
*│◪* ${l++}. • ${prefix2}quoteit2 [teks]
*│◪* ${l++}. • ${prefix2}nulisbuku [teks]
*│◪* ${l++}. • ${prefix2}nulisfolio [teks]
*│◪* ${l++}. • ${prefix2}tahta [teks]
*│◪* ${l++}. • ${prefix2}customtahta [teks]
*│◪* ${l++}. • ${prefix2}surga [teks]
*│◪* ${l++}. • ${prefix2}jamet [teks]
*│◪* ${l++}. • ${prefix2}jamet [teks]
*│◪* ${l++}. • ${prefix2}youtuber [teks]
*│◪* ${l++}. • ${prefix2}avengers [teks]
*│◪* ${l++}. • ${prefix2}phlogo [teks]
*│◪* ${l++}. • ${prefix2}matrix [teks]
*│◪* ${l++}. • ${prefix2}wolflogo [teks]
*│◪* ${l++}. • ${prefix2}party [teks]
*│◪* ${l++}. • ${prefix2}tolol [teks]
*│◪* ${l++}. • ${prefix2}coding [teks]
*│◪* ${l++}. • ${prefix2}thunder [teks]
*│◪* ${l++}. • ${prefix2}blood [teks]
*│◪* ${l++}. • ${prefix2}bokeh [teks]
*│◪* ${l++}. • ${prefix2}bakar [teks]
  
*◪* *Media Command*
*│◪* ${l++}. • ${prefix2}qrmaker [teks]
*│◪* ${l++}. • ${prefix2}ssweb <linknya>
*│◪* ${l++}. • ${prefix2}tomp3 <reply video>
*│◪* ${l++}. • ${prefix2}meme
*│◪* ${l++}. • ${prefix2}truth
*│◪* ${l++}. • ${prefix2}dare
*│◪* ${l++}. • ${prefix2}map [optional]
*│◪* ${l++}. • ${prefix2}kbbi <optional>
*│◪* ${l++}. • ${prefix2}tinyurl <link>
  
*◪* *Random Command*
*│◪* ${l++}. • ${prefix2}wpff
*│◪* ${l++}. • ${prefix2}wpml
*│◪* ${l++}. • ${prefix2}wppubg
*│◪* ${l++}. • ${prefix2}wphacker
*│◪* ${l++}. • ${prefix2}wpcode
*│◪* ${l++}. • ${prefix2}wpmuslim
*│◪* ${l++}. • ${prefix2}randomwallpaper
*│◪* ${l++}. • ${prefix2}wpprogrammer
*│◪* ${l++}. • ${prefix2}wpgunung
*│◪* ${l++}. • ${prefix2}wpcyberspace
*│◪* ${l++}. • ${prefix2}chiisaihentai
*│◪* ${l++}. • ${prefix2}trap
*│◪* ${l++}. • ${prefix2}blowjob
*│◪* ${l++}. • ${prefix2}yaoi
*│◪* ${l++}. • ${prefix2}ecchi
*│◪* ${l++}. • ${prefix2}hentai
*│◪* ${l++}. • ${prefix2}ahegao
*│◪* ${l++}. • ${prefix2}quotesislami
*│◪* ${l++}. • ${prefix2}wallpaperislami
*│◪* ${l++}. • ${prefix2}hololewd
*│◪* ${l++}. • ${prefix2}sideoppai
*│◪* ${l++}. • ${prefix2}animefeets
*│◪* ${l++}. • ${prefix2}animebooty
*│◪* ${l++}. • ${prefix2}animethighss
*│◪* ${l++}. • ${prefix2}hentaiparadise
*│◪* ${l++}. • ${prefix2}animearmpits
*│◪* ${l++}. • ${prefix2}hentaifemdom
*│◪* ${l++}. • ${prefix2}lewdanimegirls
*│◪* ${l++}. • ${prefix2}biganimetiddies
*│◪* ${l++}. • ${prefix2}animebellybutton
*│◪* ${l++}. • ${prefix2}hentai4everyone
*│◪* ${l++}. • ${prefix2}art
*│◪* ${l++}. • ${prefix2}bts
*│◪* ${l++}. • ${prefix2}exo
*│◪* ${l++}. • ${prefix2}elf
*│◪* ${l++}. • ${prefix2}loli2
*│◪* ${l++}. • ${prefix2}neko2
*│◪* ${l++}. • ${prefix2}waifu
*│◪* ${l++}. • ${prefix2}shota2
*│◪* ${l++}. • ${prefix2}husbu
*│◪* ${l++}. • ${prefix2}sagiri
*│◪* ${l++}. • ${prefix2}shinobu
*│◪* ${l++}. • ${prefix2}megumin
*│◪* ${l++}. • ${prefix2}wallnime
*│◪* ${l++}. • ${prefix2}ero
*│◪* ${l++}. • ${prefix2}cum
*│◪* ${l++}. • ${prefix2}feet
*│◪* ${l++}. • ${prefix2}yuri
*│◪* ${l++}. • ${prefix2}trap
*│◪* ${l++}. • ${prefix2}lewd
*│◪* ${l++}. • ${prefix2}feed
*│◪* ${l++}. • ${prefix2}eron
*│◪* ${l++}. • ${prefix2}solo
*│◪* ${l++}. • ${prefix2}gasm
*│◪* ${l++}. • ${prefix2}poke
*│◪* ${l++}. • ${prefix2}anal
*│◪* ${l++}. • ${prefix2}holo
*│◪* ${l++}. • ${prefix2}tits
*│◪* ${l++}. • ${prefix2}kuni
*│◪* ${l++}. • ${prefix2}kiss2
*│◪* ${l++}. • ${prefix2}erok
*│◪* ${l++}. • ${prefix2}smug
*│◪* ${l++}. • ${prefix2}baka
*│◪* ${l++}. • ${prefix2}solog
*│◪* ${l++}. • ${prefix2}feetg
*│◪* ${l++}. • ${prefix2}lewdk
*│◪* ${l++}. • ${prefix2}waifu
*│◪* ${l++}. • ${prefix2}pussy
*│◪* ${l++}. • ${prefix2}femdom
*│◪* ${l++}. • ${prefix2}cuddle
*│◪* ${l++}. • ${prefix2}hentai
*│◪* ${l++}. • ${prefix2}eroyuri
*│◪* ${l++}. • ${prefix2}cum_jpg
*│◪* ${l++}. • ${prefix2}blowjob
*│◪* ${l++}. • ${prefix2}erofeet
*│◪* ${l++}. • ${prefix2}holoero
*│◪* ${l++}. • ${prefix2}classic
*│◪* ${l++}. • ${prefix2}erokemo
*│◪* ${l++}. • ${prefix2}fox_girl
*│◪* ${l++}. • ${prefix2}futanari
*│◪* ${l++}. • ${prefix2}lewdkemo
*│◪* ${l++}. • ${prefix2}wallpaper
*│◪* ${l++}. • ${prefix2}pussy_jpg
*│◪* ${l++}. • ${prefix2}kemonomimi
*│◪* ${l++}. • ${prefix2}nsfw_avatar
*│◪* ${l++}. • ${prefix2}randombokep
*│◪* ${l++}. • ${prefix2}cersex
*│◪* ${l++}. • ${prefix2}ceritahorror
*│◪* ${l++}. • ${prefix2}cerpen
*│◪* ${l++}. • ${prefix2}fakta
*│◪* ${l++}. • ${prefix2}bucin
*│◪* ${l++}. • ${prefix2}bucin2
*│◪* ${l++}. • ${prefix2}fml
*│◪* ${l++}. • ${prefix2}motivasi
*│◪* ${l++}. • ${prefix2}quotesnime
*│◪* ${l++}. • ${prefix2}quotes
*│◪* ${l++}. • ${prefix2}quotesimage
*│◪* ${l++}. • ${prefix2}estetik
*│◪* ${l++}. • ${prefix2}katabijak
*│◪* ${l++}. • ${prefix2}katadilan
*│◪* ${l++}. • ${prefix2}katasenja
*│◪* ${l++}. • ${prefix2}anjing
*│◪* ${l++}. • ${prefix2}fake
*│◪* ${l++}. • ${prefix2}pantun
*│◪* ${l++}. • ${prefix2}darkjokes
*│◪* ${l++}. • ${prefix2}kartukredit
*│◪* ${l++}. • ${prefix2}howak
  
*◪* *Convert Command*
*│◪* ${l++}. • ${prefix2}bitly <link>
*│◪* ${l++}. • ${prefix2}pastebin <query>
*│◪* ${l++}. • ${prefix2}tinyurl <link>
*│◪* ${l++}. • ${prefix2}ebase64 <query>
*│◪* ${l++}. • ${prefix2}dbase64 <query>
*│◪* ${l++}. • ${prefix2}addsticker <optional>
*│◪* ${l++}. • ${prefix2}getsticker <optional>
*│◪* ${l++}. • ${prefix2}stickerlist
*│◪* ${l++}. • ${prefix2}addvn <optional>
*│◪* ${l++}. • ${prefix2}getvn <optional>
*│◪* ${l++}. • ${prefix2}vntobase64 <replyVn>
*│◪* ${l++}. • ${prefix2}tourl <replyMedia>
*│◪* ${l++}. • ${prefix2}listvn
*│◪* ${l++}. • ${prefix2}addvideo <optional>
*│◪* ${l++}. • ${prefix2}getvideo <optional>
*│◪* ${l++}. • ${prefix2}listvideo
*│◪* ${l++}. • ${prefix2}addimage <optional>
*│◪* ${l++}. • ${prefix2}getimage <optional>
*│◪* ${l++}. • ${prefix2}listimage
*│◪* ${l++}. • ${prefix2}forward <pesan>
 
*◪* *Owner Command*
*│◪* ${l++}. • ${prefix2}listuser
*│◪* ${l++}. • ${prefix2}upswteks
*│◪* ${l++}. • ${prefix2}upswimage <replyImg>
*│◪* ${l++}. • ${prefix2}upswvideo <replyVid>
*│◪* ${l++}. • ${prefix2}clearall
*│◪* ${l++}. • ${prefix2}bc
*│◪* ${l++}. • ${prefix2}premium add/del
*│◪* ${l++}. • ${prefix2}ban add/del
*│◪* ${l++}. • ${prefix2}buffer <link>
*│◪* ${l++}. • ${prefix2}chat nomor|pesan
*│◪* ${l++}. • ${prefix2}forwardto nomor|pesan
*│◪* ${l++}. • ${prefix2}self
*│◪* ${l++}. • ${prefix2}block <@member>
*│◪* ${l++}. • ${prefix2}unblock <@member>
*│◪* ${l++}. • ${prefix2}blockir
*│◪* ${l++}. • ${prefix2}unblockir
*│◪* ${l++}. • ${prefix2}settarget
*│◪* ${l++}. • ${prefix2}setprefix  
*│◪* ${l++}. • ${prefix2}setname 
*│◪* ${l++}. • ${prefix2}setnumber 
*│◪* ${l++}. • ${prefix2}setreply 
*│◪* ${l++}. • ${prefix2}setstatus  
*│◪* ${l++}. • ${prefix2}setgroup 
*│◪* ${l++}. • ${prefix2}setbotname 
*│◪* ${l++}. • ${prefix2}online  
*│◪* ${l++}. • ${prefix2}offline 
*│◪* ${l++}. • ${prefix2}public
 
*◪* *Other Command*
*│◪* ${l++}. • ${prefix2}spamcall [812xx]
*│◪* ${l++}. • ${prefix2}jadwaltv [channel]
*│◪* ${l++}. • ${prefix2}antidelete ctaktif
*│◪* ${l++}. • ${prefix2}antidelete ctmati
*│◪* ${l++}. • ${prefix2}antidelete banct 628xxx
*│◪* ${l++}. • ${prefix2}readmore text|text
*│◪* ${l++}. • ${prefix2}payment
*│◪* ${l++}. • ${prefix2}cr1 @tag text|text
*│◪* ${l++}. • ${prefix2}cr2 <versi private>
*│◪* ${l++}. • ${prefix2}hidetag1 <text>
*│◪* ${l++}. • ${prefix2}hidetag2 <text>
*│◪* ${l++}. • ${prefix2}runtime
*│◪* ${l++}. • ${prefix2}hitung
*│◪* ${l++}. • ${prefix2}bilangangka <angka>
*│◪* ${l++}. • ${prefix2}artinama
*│◪* ${l++}. • ${prefix2}infogempa
*│◪* ${l++}. • ${prefix2}cuaca
*│◪* ${l++}. • ${prefix2}cuaca2
*│◪* ${l++}. • ${prefix2}quotes
*│◪* ${l++}. • ${prefix2}quotesnime
*│◪* ${l++}. • ${prefix2}status
*│◪* ${l++}. • ${prefix2}term <exec>
*│◪* ${l++}. • ${prefix2}ping
*│◪* ${l++}. • ${prefix2}blocklist
*│◪* ${l++}. • ${prefix2}tagme
*│◪* ${l++}. • ${prefix2}cekchat
  

*Catatan:*\nJangan pakai bot di private chat karna tidak akan dibalas oleh bot kecuali kamu user *premium*!\n\nKalau menemukan bug segera lapor owner dengan ketik:\n${prefix2}lapor bug <bug nya>\nContoh: ${prefix2}lapor tahta bug\n*Terima Kasih ${pushname}* `
		buffer = await getBaper(ppimg)
		benny.sendMessage(from, menunye, text, { contextInfo: {mentionedJid: [sender]}, caption: menunye, quoted: { "key": { "participant": numbernye, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `_*Welcome: ${pushname}*_`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome ${pushname}*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break
		case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=pendekin`
                    exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        benny.sendMessage(from, buff, sticker, { quoted: ben })
                        fs.unlinkSync(rano)
                    })
                    break
case 'tomp3':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
    benny.updatePresence(from, Presence.composing) 
	if (!isQuotedVideo) return cheat('itu video bruh?:V')
	bisnis(mess.wait)
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await benny.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp4')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return cheat('Yahh emrror bruh:(')
	buffer = fs.readFileSync(ran)
    benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ben})
	fs.unlinkSync(ran)
	})
	break	
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder2':
                case 'christmas':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Nando`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=pendekin&text=${teks}`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break
	
case 'ttp': // Credits Ramlan ID
		if (!isRegistered) return cheat(mess.only.Registered)
		                    pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(5)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '089636006352')} ${webpng} -o ${webpng}`, async (error) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, { quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
      "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
							})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
							break	
							case 'ttp2':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Nando`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/ttp?apikey=pendekin&text=${teks}`)
                    benny.sendMessage(from, buffer, sticker, { quoted: ben })
                    break
case 'shadow':
                case 'cup':
				if (args.length == 0) return reply(`Usage: ${prefix}cup text\nExample: ${prefix}cup Nando`)
                    teks = body.slice(5)
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/photooxy1/cup?apikey=pendekin&text=${teks}`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Nando`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=pendekin&text=${teks}`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Nando`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=pendekin&text=${teks}`)
                    benny.sendMessage(from, buffer, image, { quoted: ben })
                    break							
case 'getsticker':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	namastc = body.slice(12)
	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
	benny.sendMessage(from, result, sticker, {quoted: ben})
	break
case 'sticktag':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isGroup) return reply(mess.only.group)
if (isQuotedSticker) {
	members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, sticker, {contextInfo: {"mentionedJid": members_id}})
} else if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									cheat(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pushname, sender.replace('@s.whatsapp.net', ''))} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
                                exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '@N@nd0-BOT')} ${ran} -o ${ran}`, async (error) => {
								 benny.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: {"mentionedJid": members_id}, quoted: ben})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if (txt.length > 8) {
							members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(10)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '089636006352')} ${webpng} -o ${webpng}`, async (error) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, {contextInfo: {"mentionedJid": members_id}, quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
      "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
							})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
						} else {
							cheat(`Reply sticker/gambar dengan tulisan\n${prefix2}`)
						}
	break
	case 'imagetag':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isGroup) return reply(mess.only.group)
if ((isMedia || isQuotedImage) && args.length === 0) {
	anu = body.slice(10)
	members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				ano = await imageToBase64(media)
				buffer = await Buffer.from(ano, 'base64')
				benny.sendMessage(from, buffer, image, {contextInfo: {"mentionedJid": members_id}})
}
	break
	case 'vntag':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					members_id = []
					for (let b of groupMembers) {
						members_id.push(b.jid)
					}
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {contextInfo: {"mentionedJid": members_id}, mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(media)
				break
case 'stickerlist':
case 'liststicker':
	teks = 'Sticker List :\n'
	for (let awokwkwk of setiker) {
		teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${setiker.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": setiker}})
	break
case 'addsticker':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if (!isQuotedSticker) return cheat('Reply stiker nya')
	svst = body.slice(12)
	if (!svst) return cheat('Nama sticker nya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
	benny.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix2}liststicker`, MessageType.text, {quoted: ben})
	break
case 'addvn':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if (!isQuotedAudio) return cheat('Reply vnnya blokk!')
	svst = body.slice(7)
	if (!svst) return cheat('Nama audionya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	audionye.push(`${svst}`)
	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
	benny.sendMessage(from, `Sukses Menambahkan Vn\nCek dengan cara ${prefix2}listvn`, MessageType.text, {quoted: ben})
	break
case 'getvn':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	namastc = body.slice(7)
	buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
	benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ben, ptt: true})
	break
case 'listvn':
case 'vnlist':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	teks = 'List Vn:\n'
	for (let awokwkwk of audionye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${audionye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": audionye}})
	break
case 'addimage':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if (!isQuotedImage) return cheat('Reply imagenya blokk!')
	svst = body.slice(10)
	if (!svst) return cheat('Nama imagenya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	imagenye.push(`${svst}`)
	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix2}listimage`, MessageType.text, {quoted: ben})
	break
case 'getimage':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
	benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Result From Database* : ${namastc}.jpeg`})
	break
case 'imagelist':
case 'listimage':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	teks = 'List Video:\n'
	for (let awokwkwk of imagenye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${imagenye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": imagenye}})
	break
case 'addvideo':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if (!isQuotedVideo) return cheat('Reply videonya blokk!')
	svst = body.slice(10)
	if (!svst) return cheat('Nama videonya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	videonye.push(`${svst}`)
	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix2}listvideo`, MessageType.text, {quoted: ben})
	break
case 'getvideo':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
	benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben})
	break
case 'listvideo':
case 'videolist':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	teks = 'List Video:\n'
	for (let awokwkwk of videonye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${videonye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": videonye}})
	break
case 'howax':
case 'hoax':
case 'howak':
case 'hoak':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	benny.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
	teks = '────────────────────\n\n'
	for (let i of data.result) {
		teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n────────────────────\n`
	}
	cheat(teks.trim())
	break
case 'deface':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
var gas = body.slice(8)
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var imgbb = require('imgbb-uploader')
					run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
fs.writeFileSync(`${run}`, ddatae, 'base64')
benny.sendMessage(from, linknya, text, { title: "Hacked by Benny", thumbnail: fs.readFileSync(`./${run}`), quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
       "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
case 'hekweb':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
var gas = body.slice(8)
if (isQuotedImage) {
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var descnya = gas.split("|")[2];
					var jadinya = gas.split("|")[3];
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
} else if (isQuotedSticker) {
	var linknya = body.slice(8)
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `https://youtube.com/c/bennyhidayat`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
}
break
case 'imagetobase64':
case 'imgtobase64':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isQuotedImage) return reply('Tag gambar nya!')
if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmedia = await benny.downloadAndSaveMediaMessage(ger)
const nihiya = await imageToBase64(ehgmedia)
	benny.sendMessage(from, nihiya, text, {quoted: ben})
	break
	case 'sticktobase64':
case 'stickertobase64':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if ((isMedia || isQuotedSticker) && args.length == 0) 
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const ehgmed = await benny.downloadAndSaveMediaMessage(ger)
plerlah = fs.readFileSync(ehgmed)
const niya = await plerlah.toString('base64')
	benny.sendMessage(from, niya, text, {quoted: ben})
	break
	case 'base64tostick':
case 'base64tosticker':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
tekss = `args[0]`
anu = await Buffer.from(tekss, 'base64')
	benny.sendMessage(from, anu, sticker, {quoted: ben})
	break
	case 'base64toimage':
	case 'base64toimg':
	if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if (args.length < 1) return reply('Mana base64 nya?')
const base64nih = args[0]
const nihiyak = await Buffer.from(base64nih, 'base64')
cheat(mess.wait)
	benny.sendMessage(from, nihiyak, image, {quoted: ben, caption: 'Neh..'})
	break
case 'aqul':
cheat(`"jpegThumbnail": "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"`)
break
case 'leave':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
					setTimeout( () => {
				    benny.groupLeave(from, 'See you........', groupId)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					cheat(`*Bye Group ${groupName}*`)
					}, 1000) // 1000 = 1s, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1s,
					cheat('*Bot Akan keluar dalam hitungan 10 detik*')
	break
case 'ssweb':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if (args.length < 1) return cheat('Urlnya mana om')
	teks = body.slice(7)
	bisnis(mess.wait)
						buffer = await getBaper(`https://hujanapi.herokuapp.com/api/ssweb?url=${teks}&apikey=${hujankey}`)
	benny.sendMessage(from, buffer, image, { quoted: ben, caption: 'Neh..'})
	break
case 'chatlist':
case 'cekchat':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	benny.updatePresence(from, Presence.composing)
	teks = `Total : ${totalchat.length}`
	cheat(teks)
	break
case 'speed':
case 'ping':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	const timestamp = speed();
	const latensi = speed() - timestamp
	exec(`neofetch --stdout`, (error, stdout, stderr) => {
	const child = stdout.toString('utf-8')
	const teks = child.replace(/Memory:/, "Ram:")
	cheat(`*${teks}Speed: ${latensi.toFixed(4)} _Detik_*`)
	})
	break
case 'quoteit':
	case 'qouteit':
	if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
    if (args.length < 1) return cheat('Teks nya mana??')
	const tqt = body.slice(9)
	bisnis(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${tqt}&author=Benny%20Hidayat&tipe=random&font=./font/font4.otf&size=55`, {method: 'get'})
	buffer = await getBaper(anu.result)
	benny.sendMessage(from, buffer, image, {quoted: ben})
	break
case 'term':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	const cmd = body.slice(6)
	exec(cmd, (err, stdout) => {
	if(err) return cheat(`root@Self:~ ${err}`)
	if (stdout) {
	cheat(stdout)
		}
	})
	break
case 'sulap':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				          var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://naufalhoster.xyz/textmaker/ryu_fighter?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										bofor = anu1ll.result.GIF
                                         exec(`wget ${bofor} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                fs.unlinkSync(ranpll)
                                                if (err) return cheat(mess.error.stick)
                                                nobgll = fs.readFileSync(ranoll)
                                                benny.sendMessage(from, nobgll, sticker, {quoted: ben}) 
                                                fs.unlinkSync(ranoll)
                                        })
                                    
                                             } else {
                                                 cheat('Gunakan foto!')
                                          }           
                                          break
										  case 'pptrigger':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
try {
					ppimg = await benny.getProfilePicture(`${args[0]}@s.whatsapp.net`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				          var imgbb = require('imgbb-uploader')
                                          bisnis(mess.wait)
										  owgi = await getBaper(ppimg)
										  datai = await imageToBase64(JSON.stringify(owgi).replace(/\"/gi, ''))
										  ckpsbr = await Buffer.from(datai, 'base64')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", ckpsbr)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://naufalhoster.xyz/textmaker/trigerred?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										bofor = anu1ll.result.image
                                         exec(`wget ${bofor} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                fs.unlinkSync(ranpll)
                                                if (err) return cheat(mess.error.stick)
                                                nobgll = fs.readFileSync(ranoll)
                                                benny.sendMessage(from, nobgll, sticker, {quoted: ben}) 
                                                fs.unlinkSync(ranoll)
                                        })
                                          break
case 'triggered':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				          var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://naufalhoster.xyz/textmaker/trigerred?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										bofor = anu1ll.result.image
                                         exec(`wget ${bofor} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                fs.unlinkSync(ranpll)
                                                if (err) return cheat(mess.error.stick)
                                                nobgll = fs.readFileSync(ranoll)
                                                benny.sendMessage(from, nobgll, sticker, {quoted: ben}) 
                                                fs.unlinkSync(ranoll)
                                        })
                                    
                                             } else if (isQuotedSticker) {
												 encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anus = fs.readFileSync(media)
											 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", anus)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://naufalhoster.xyz/textmaker/trigerred?apikey=${naufalkey}&url=${teks}`, {method: 'get'})
										bofor = anu1ll.result.image
                                         exec(`wget ${bofor} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                fs.unlinkSync(ranpll)
                                                if (err) return cheat(mess.error.stick)
                                                nobgll = fs.readFileSync(ranoll)
                                                benny.sendMessage(from, nobgll, sticker, {quoted: ben}) 
                                                fs.unlinkSync(ranoll)
                                        })
			} else {
                                                 cheat('Gunakan foto!')
                                          }           
                                          break
									case 'sfire':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (!isOwner && !ben.key.fromMe && !isPremium) return cheat(mess.only.premium)
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        bisnis(mess.wait)
					 owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://api.zeks.xyz/api/sfire?img=${teks}&apikey=apivinz`,{method:'get'})
                      exec(`wget ${anu1ll.result} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=9 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                      
                                                                fs.unlinkSync(ranpll)
                                                if (err) return cheat(mess.error.stick)
                                                buffer = fs.readFileSync(ranoll)
                                                benny.sendMessage(from, buffer, sticker, {quoted: ben})
                                                fs.unlinkSync(ranoll)
                                        })
                                    
                                             } else {
                                                 cheat('Gunakan foto!')
                                          }           
                                          break
									case 'bapakfont':
									if (!isRegistered && !ben.key.fromMe) return cheat (mess.only.Registered)
									tekss = body.slice(11)
									anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${tekss}`, {method: 'get'})
									cheat(`*${anu.text}*`)
									break
									case 'halah':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                    entah = body.slice(7)
                    imni = halah(entah)
                    cheat(imni)
                    break
					case 'tutorial':
					case 'tutor':
					cheat(`*1.* pkg install git\n*2.* pkg install bash\n*3.* pkg install ffmpeg\n*4.* pkg install nodejs\n*5.* git clone https://github.com/bennybotwa/self-bot\n*6.* bash install.sh\n*7.* node index.js\n*8.* Sqan QR`)
					break
									case 'hilih':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                    entah = body.slice(7)
                    imni = hilih(entah)
                    cheat(imni)
                    break
					case 'kapital':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                    entah = body.slice(9)
                    imni = entah.toUpperCase()
                    cheat(imni)
                    break
					case 'rumus':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (!Number(args[1])) return reply('Nomor harus berupa angka!')
									if (args[0] == 'persegi') {
									     entah = args[0]
                    imni = await rumus.datar.keliling.persegi(entah, true)
					console.log(imni)
                    cheat(imni) 
									} else if (args[0] == 'segitiga') {
										entah = body.slice
                    imni = await rumus.datar.keliling.segitiga(entah, true)
					console.log(imni)
                    cheat(imni) 
									}
                    break
					case 'infonomor':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									if (!Number(args[0])) return reply('Nomor harus berupa angka!')
									if (args[0].includes('-')) return reply(`Block nih contoh: ${prefix2}infonomor 6289636006352`)
                    entah = body.slice(11)
                    imni = await infotlp.getOperator(entah)
					teks = `*Operator:* ${imni.operator}\n*Kartu:* ${imni.card}`
                    cheat(teks)
                    break
					case 'bilangangka':
                  case 'angkabilang':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!Number(args[0])) return reply('Angkanya mana?')
                    entah = body.slice(13)
                    imni = await angkab(entah)
                    cheat(`*${imni}*`)
                    break
					case 'pastebin':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					reply(mess.wait)
					paste = body.slice(10)
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   benny.sendMessage(from, anu.result, text, {quoted: benny})			
                   break 
					case 'huluh':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                    entah = body.slice(7)
                    imni = huluh(entah)
                    cheat(imni)
                    break
					case 'heleh':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                    entah = body.slice(7)
                    imni = heleh(entah)
                    cheat(imni)
                    break
					case 'holoh':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                    entah = body.slice(7)
                    imni = holoh(entah)
                    cheat(imni)
                    break
									case 'bitly':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									teks = body.slice(7)
									anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${teks}&apikey=BotWeA`, {method: 'get'})
									shorti = `*Url Pendek dari* : ${teks}\n*Result* : ${anu.result}`
									cheat(shorti)
									break
									case 'sid':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									teks = body.slice(5)
									anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=https://api.zeks.xyz`, {method: 'get'})
									shorti = `*Url Pendek dari* : ${teks}\n*Result* : ${anu.short}`
									cheat(shorti)
									break
						case 'setstatus':
						if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		                setgrup = `status@broadcast`
						cheat(`*Sukses set fake reply menjadi status*`)
						break
case 'tinyurl':
									if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									/**
									
									* @param {String} url
 * @param {Object} options
 */
const fetchText = (url, optiono) => {
    return new Promise((resolve, reject) => {
        return fetch(url, optiono)
            .then(response => response.text())
            .then(text => resolve(text))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    })
}
									teks = body.slice(9)
									anu = await fetchText(`https://tinyurl.com/api-create.php?url=${args[0]}`)
									shorti = `*Url Pendek dari* : \n${teks}\n*Result* : ${anu}`
									cheat(shorti)
									break
case 'payment':
case 'payments':
	cheat(`──「 *PAYMENT* 」──\n\n- Gopay : 0896-3600-6352\n- Pulsa : 0813-8728-9617 (+5K)\n\n──「 *SELF-BOT* 」──`)
	break
case 'neko':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
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
	bisnis(mess.wait)
	var buf = Buffer.from(response, 'base64'); 
	benny.sendMessage(from, buf ,MessageType.image, { caption: `_Neko!_`, quoted: ben } )
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
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
	for (let block of blocked) {
	teks += `┣➢ @${block.split('@')[0]}\n`
	}
	teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": blocked}})
	break
case 'ban':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			const arx = body.split(' ')
                if (arx[1] == 'add') {
					   _ban.push(arx[2] + '@s.whatsapp.net')
                        fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        cheat(`Sukses ban ${arx[2]}`)
                } else if (arx[1] == 'del') {
                        _ban.splice(arx[2] + '@s.whatsapp.net', 1)
                        fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        cheat('Selesai~')
                } else {
                   cheat('Format salah!')
                }
            break
	case 'afk': // by Slavyan
                if (!isRegistered) return cheat(mess.only.Registered)
				if (isAfk) return reply(`*Kamu sudah afk!*\n\n*Sejak:* ${waktuafk}\n*Alasan:* ${reason}`)
                reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender, time, reason, _afk)
				if (pushname === undefined) return cheat(`Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: BOT\n➸ *Alasan*: ${reason}`)
                cheat(`*Fitur AFK berhasil diaktifkan!*\n\n*◪* *AFK*\n*│*\n*├─ ❏* *Nama:* ${pushname}\n*├─ ❏* *Alasan*: ${reason}`)
            break
	case 'premiumlist': 
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	teks = '_*PREMIUM LIST*_ :\n'
	for (let tod of _premium) {
	teks += `┣➢ +${_premium}\n`
	}
	teks += `𝗧𝗼𝘁𝗮𝗹 : ${_premium.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": [_premium]}})
	break
case 'ocr': 
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	const media = await benny.downloadAndSaveMediaMessage(encmedia)
	bisnis(mess.wait)
	await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
	.then(teks => {
	cheat(teks.trim())
	fs.unlinkSync(media)
	})
	.catch(err => {
	cheat(err.message)
	fs.unlinkSync(media)
	})
	} else {
	cheat('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix2}𝗼𝗰𝗿')
	}
	break
				case 'identitaspalsu':
				case 'fake':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				anu = await fetchJson(`https://pencarikode.xyz/api/faker?country=id_ID&apikey=pais`, {method: 'get'})
         		teks = `*◪* *IDENTITAS PALSU*\n  *├─ ❏* *Name* : ${anu.data.name.fullName}\n  *├─ ❏* *Birthday* : ${anu.data.date.birthday}\n  *└─ ❏* *Phone Number* : ${anu.data.phone.phone_number}`
				cheat(teks)
				break
				case 'creategc':
				const namagc = body.slice(10)
				todcul = []
				for (let o of ben)
		benny.groupCreate(namagc, ben.participant)
break
				 case 'telestick':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=pendekin&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await getBaper(ini_sticker[sticker_])
                        benny.sendMessage(from, buffer, sticker, {quoted: ben})
                    }
                    break
					case 'wpmuslim':
                    ono = JSON.parse(fs.readFileSync('./src/wallmuslim.json'))
	anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
				case 'stickerwm':
				  if (!isOwner && !ben.key.fromMe && !isPremium) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				    if (!q.includes('|')) return reply('*Masukan nama author|package*')
					if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 1) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						const media = await benny.downloadAndSaveMediaMessage(encmedia)
				 const itu = q.substring(0, q.indexOf('|') - 0)
                 const ini = q.substring(q.lastIndexOf('|') + 1)
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
								exec(`webpmux -set exif ${addMetadata(itu, ini)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && ben.message.videoMessage.seconds < 11 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 1) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						const media = await benny.downloadAndSaveMediaMessage(encmedia)
				 const itu = q.substring(0, q.indexOf('|') - 0)
                 const ini = q.substring(q.lastIndexOf('|') + 1)
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
								exec(`webpmux -set exif ${addMetadata(itu, ini)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						const media = await benny.downloadAndSaveMediaMessage(encmedia)
						const itu = q.substring(0, q.indexOf('|') - 0)
                 const ini = q.substring(q.lastIndexOf('|') + 1)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata(itu, ini)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									benny.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: ben})
									fs.unlinkSync(ranw)
								})
								//benny.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: ben})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						const media = await benny.downloadAndSaveMediaMessage(encmedia)
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
								benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix2}stickerwm author|package atau tag gambar yang sudah dikirim`)
					}
					break
	case 'takestick':
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
		 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					//  reply(mess.wait())
		anu = args.join(' ').split('|')
		 satu = anu[0] !== '' ? anu[0] : 'Benny'
		dua = typeof anu[1] !== 'undefined' ? anu[1] : '@Asek'
	require('./lib/exif.js').createExif(satu, dua)
	require('./lib/exif.js').modStick(media, benny, ben, from)
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							break
							case 'sticknowm':
							case 'stickernowm':
							case 'snowm':
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
			reply(mess.wait)
	require('./lib/exif.js').createExif('', '')
	require('./lib/exif.js').modStick(media, benny, ben, from)
							break
					case 's':
					case 'stiker':
					case 'sticker':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
						if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									cheat(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '')} ${ran} -o ${ran}`, async (error) => {
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && ben.message.videoMessage.seconds < 15 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							bisnis(mess.wait)
					await ffmpeg(`./${media}`)
								.inputFormat(media.split('.')[1])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
									cheat(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
								})
								.on('end', function () {
									console.log('Finish')
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ranw = getRandom('.webp')
							ranp = getRandom('.png')
							bisnis(mess.wait)
					keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
							await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
								fs.unlinkSync(media)
								let buffer = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffer, (err) => {
									if (err) return cheat('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
								})
								exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
									fs.unlinkSync(ranp)
									if (err) return cheat(mess.error.stick)
									benny.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: ben})
								})
							})
						} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
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
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if (txt.length > 7) {
       reply(mess.wait)
       anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(9)}&apikey=pendekin`, {method: 'get'})
       var tod = JSON.parse(JSON.stringify(anu.result.data))
       var nimel = tod[Math.floor(Math.random() * tod.length )];
       ranp = getRandom('.png')
       rano = getRandom('.webp')
      exec(`wget ${nimel} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						client.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)	
	   }) 
						} else {
							cheat(`Kirim gambar dengan caption ${prefix2}sticker atau tag gambar yang sudah dikirim`)
						}
						break
				case 'stickergif':
				case 'stikergif':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if ((isMedia && ben.message.videoMessage.seconds < 15 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 15) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							bisnis(mess.wait)
					await ffmpeg(`./${media}`)
								.inputFormat(media.split('.')[1])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
									cheat(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
								})
								.on('end', function () {
									console.log('Finish')
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						}
						break
				case 'tts':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return benny.sendMessage(from, 'Diperlukan Code bahasa kak, Contoh ${prefix2}gtts id [text kakak](•‿•)', text, {quoted: ben})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return benny.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, {quoted: ben})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? cheat('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return cheat('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							benny.sendMessage(from, buff, audio, {"quoted": ben, "duration": 359996400, "ptt":true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'public':
				   if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if (banChats === false) return
					banChats = false
					benny.sendMessage(from, `「 *PUBLICMODE* 」`, text, { quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "5D4EA43800AD02F5A1DE1A881A0B4C80"
    },
    "message": {
      "liveLocationMessage": {
        "degreesLatitude": -6.2607487,
        "degreesLongitude": 106.8668323,"caption": "_*N@nd0-BOT*_","jpegThumbnail": setthumb,"sequenceNumber": "0"}},"messageTimestamp": "1614068736","status": "PENDING","duration": 28800
  }
					})
					break
				case 'self':
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if (banChats === true) return
					banChats = true
					benny.sendMessage(from, `「 *SELFMODE* 」`, text, { quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "6DC12F684FE43FDB835CFE35CC6F5503"
    },
    "message": {
      "contactMessage": {
        "displayName": "N@nd0-BOT",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Telkomsel;Benny;;;\nFN:N@nd0-BOT\nitem1.TEL;waid=6281387289617:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    "messageTimestamp": "1614159034",
    "status": "ERROR"
  }
					})
  break
  case 'offline':
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if (args.length < 1) return reply('Apa alasan bot offline?')
					if (banChat === true) return
					banChat = true
					alasanoff = body.slice(9)
					waktuoff = `${time}`
				benny.sendMessage(from, `*Sucess offline!*\n*Alasan* : ${alasanoff}\n*Waktu:* ${waktuoff}`, text, { contextInfo: {mentionedJid: [sender]}, quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "6DC12F684FE43FDB835CFE35CC6F5503"
    },
    "message": {
      "contactMessage": {
        "displayName": "N@nd0-BOT",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Telkomsel;Benny;;;\nFN:N@nd0-BOT\nitem1.TEL;waid=6281387289617:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    "messageTimestamp": "1614159034",
    "status": "ERROR"
  }
					})
  break
  case 'setgrup':
  case 'setgroup':
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			       setgrup = `${args[0]}`
				   cheat(`*Berhasil mengubah fake reply grup!*`)
				   break
  case 'thumbtoimg':
  case 'thumbtoimage':
  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
  encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.extendedTextMessage.jpegThumbnail
  media = await Buffer.from(encmedia, 'base64')
  benny.sendMessage(from, media, image, {quoted: ben, caption: 'Neh..'})
  break
  case 'virstick':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isGroup) return reply(mess.only.group)
if (isQuotedSticker) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, sticker, {contextInfo: {"mentionedJid": members_id}})
} else if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									cheat(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pushname, sender.replace('@s.whatsapp.net', ''))} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
                                exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '@N@nd0-BOT')} ${ran} -o ${ran}`, async (error) => {
								 benny.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: {"mentionedJid": members_id}, quoted: ben})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if (txt.length > 8) {
							members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(10)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							exec(`webpmux -set exif ${addMetadata('N@nd0-BOT', '089636006352')} ${webpng} -o ${webpng}`, async (error) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, {contextInfo: {"mentionedJid": members_id}, quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
      "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
							})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
						} else {
							cheat(`Reply sticker/gambar dengan tulisan\n${prefix2}`)
						}
	break
  case 'virtex':
  nihyak = []
  for (let o of _level) {
  nihyak.push(o.jid)
			}
			benny.sendMessage(from, 'Virtex bang?', text, {contextInfo: {mentionedJid: nihyak}})
			break
  case 'fakethumb':
  case 'fakethumbnail':
  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
  if (!isQuotedImage) return reply('Reply gambarnya!')
				if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
case 'stickfakethumb':
  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
  if (!isQuotedSticker) return reply('Reply stickernya!') 
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await benny.downloadAndSaveMediaMessage(ger)
angel = fs.readFileSync("./src/bokep.jpg")
base64 = angel.toString('base64')
benny.sendMessage(from, fs.readFileSync(media), sticker, {jpegThumbnail: base64})
break
 case 'sendfakethumb':
 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if (isMedia || isQuotedImage)
			if (args[0].includes('-')) return reply('Block contoh: 6289636006352')
			if (args[0].includes('+')) return reply('Block contoh: 6289636006352')
			if (args[0].includes(' ')) return reply('Block contoh: 6289636006352')
			targeten = `${args[0]}@s.whatsapp.net`
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(targeten, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
  case 'setthumb':
  case 'setthumbnail':
  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmediab = await benny.downloadAndSaveMediaMessage(ger)
nihiyab = await imageToBase64(ehgmediab)
setthumb = `${nihiyab}` 
					cheat(`*Sukses mengubah thumbnail fake reply*`)
			} else if (isQuotedSticker) {
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
			setthumb = anu
			cheat(`*Sukses mengubah thumbnail fake reply*`)
			}
					break
					case 'setpp':
					case 'setppbot':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
benny.updateProfilePicture(botNumber, ehgmediabi)
cheat(`*Sukses mengubah profile picture*`)
break
  case 'online':
  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if (banChat === false) return
					banChat = false
				benny.sendMessage(from, `*Sucess online!*`, text, { quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "6DC12F684FE43FDB835CFE35CC6F5503"
    },
    "message": {
      "contactMessage": {
        "displayName": "N@nd0-BOT",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Telkomsel;Benny;;;\nFN:N@nd0-BOT\nitem1.TEL;waid=6281387289617:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    "messageTimestamp": "1614159034",
    "status": "ERROR"
  }
					})
  break
				case 'premium':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			const ar = body.split(' ')
                if (ar[1] == 'add') {
                        premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
                        cheat(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                } else if (ar[1] == 'del') {
					 _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
                        fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        cheat('Sudah selesai')
                } else {
                    cheat('Format salah!')
                }
            break
			case 'sewa':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                if (args[0] == 'add') {
                        sewa.addPremiumUser(from, args[1], _sewa)
                        cheat(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${from}\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)`)
                } else if (args[0] == 'del') {
					 _premium.splice(premium.getPremiumPosition(from, _premium), 1)
                        fs.writeFileSync('./src/sewa.json', JSON.stringify(_sewa))
                        cheat('Sudah selesai')
                } else {
                    cheat('Format salah!')
                }
            break
				case 'translate':
			if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			teks = body.slice(11)
			ok1 = teks.split('|')[0]
			ok2 = teks.split('|')[1]
			anu = await translate(ok2, {to: ok1})
			console.log(anu)
				    cheat(anu.text)
					break
					case 'buggc':
					benny.toggleDisappearingMessages(from, "🙄")
					cheat(`${groupName} telah menyalakan pesan sementara`)
					break
			case 'scraphtml':
			if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			teks = body.slice(11)
			anu = await fetchJson(`https://pencarikode.xyz/html?url=${teks}&apikey=pais`, {method: 'get'})
				    cheat(anu.html)
					break
					case 'urltostick':
				case 'urltosticker':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('Link nya mana block')
				anu = body.slice(10)
				buffer = await getBaper(anu)
				benny.sendMessage(from, buffer, sticker, {quoted: ben})
				break
				case 'urltoimg':
				case 'urltoimage':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (args.length < 1) return cheat('Link nya mana block')
				anu = body.slice(10)
				buffer = await getBaper(anu)
				benny.sendMessage(from, buffer, image, { quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": setgrup,
      "fromMe": false,
      "id": "B391837A58338BA8186C47E51FFDFD4A"
    },
    "message": {
      "documentMessage": {
      "jpegThumbnail": setthumb,
	  "mimetype": "application/octet-stream",
        "title": "_*N@nd0-BOT*_",
        "fileLength": "36",
        "pageCount": 0,
        "fileName": `${fake}`
      }
    },
    "messageTimestamp": "1614069378",
    "status": "PENDING"
  }
					})
					break
				case 'status':
				if (banChats == true) return cheat(`「 *SELFMODE* 」 \n *Status:* _*SELF*_`)
				if (banChats == false) return cheat(`「 *SELFMODE* 」 \n *Status:* _*PUBLIC*_`)
					break
					case 'setmultiprefix':
					case 'setmprefix':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			      	prefix = ''
					cheat('Prefix berhasil di set ke multi prefix!')
					break
				case 'setprefix':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			      	if (args.length < 1) return
					prefix = args[0]
					benny.sendMessage(from, `Prefix berhasil di ubah menjadi : ${prefix2}`, text, { quoted: {
    "key": {
	  "participant": numbernye,
      "remoteJid": `${setgrup}`,
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"jpegThumbnail": setthumb,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
					})
					break
				case 'join':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return
					benny.groupJoin(body.slice(6))
					cheat(`Otw Join Gan!`)
					break
				case 'meme':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					anj = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
					beffer = await getBaper(anj.result)
					benny.sendMessage(from, beffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: setgrup } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": " _*SELFBOT - BEN*_ ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
	                 break
				case 'dare':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	    benny.updatePresence(from, Presence.composing) 
		benny.chatRead (from)
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
benny.sendMessage(from, drre, text, {quoted: ben})
                break
                                case 'memeindo': 
								if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					memein = await kagApi.memeindo()
					buffer = await getBaper(`https://imgur.com/${memein.hash}.jpg`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: '.......'})
					break
                                case 'tagme':
								if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					const tag = {
					text: `@${sender.split('@')[0]} Test`,
					contextInfo: { mentionedJid: [sender] }
					}
					benny.sendMessage(from, tag, text, {quoted: ben})
					break
				case 'tagall':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'kickall':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
					if (!isBotGroupAdmins) return cheat(mess.only.Badmin)
					moms = []
					for (let i of groupMembers) {
                    moms.push(i.jid)
					}
					benny.groupRemove(from, [moms])
					break
				case 'clearall':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			anu = await benny.chats.all()
					benny.setMaxListeners(25)
					for (let _ of anu) {
						benny.deleteChat(_.jid)
					}
					cheat('clear all sukses :)')
					break
			       case 'block':
				   if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			benny.blockUser (`${body.slice(7)}@c.us`, "add")
					cheat(`Perintah Diterima, memblokir ${body.slice(7)}`)
					break
					case 'blockir':
				   if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			benny.blockUser (sender, "add")
					cheat(`Perintah Diterima, memblokir ${sender.replace('@s.whatsapp.net', '')}`)
					break
                    case 'unblock':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			benny.blockUser (`${body.slice(9)}@c.us`, "remove")
					cheat(`𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 ${body.slice(9)}@c.us`)
				break
				case 'unblockir':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			benny.blockUser (sender, "remove")
					cheat(`Perintah Diterima, membuka blokir ${sender.replace('@s.whatsapp.net', '')}`)
				break
				case 'chat': 
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				if (args.length < 1) return cheat('Apa pesan nya?')
					var cie = body.slice(6)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
					sendMess(`${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
					case 'forwardto':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				if (args.length < 1) return cheat('Apa pesan nya?')
					var cie = body.slice(11)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
                sendPesan(`${ajk}@s.whatsapp.net`, chatnya)
				break
				case 'report': 
				case 'lapor': 
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (args.length < 1) return cheat('Apa pesan nya?')
					var cie = body.slice(7)
					sendMess(`6289636006352@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nBUG: ${cie}`)
					break
				case 'bc': 
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			if (args.length < 1) return cheat('.......')
					anu = await benny.chats.all()
					if (isMedia && !ben.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						buff = await benny.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							benny.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": "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uisFUPPPPPPPPPPPPC0KF/AuZwGcKgAAJfg1U+PPPPPPPPPPPPPwq14hdBQFgwQWjUfQ11gvPPPPPPPPPPPPgq1wFI7ZjTgGgYwPQ11lfPPPPPPPPPPPPQq1wUIuLLOm/wA8Eb4NdZTzzzzzzzzzzzy16JewEK5lEE8kIMf4NtsHzzzzzzzzzzzwzqmbX7zn333323375InEXzzzzzzzzzzzzzl5XaG4X77777777rUqHzzzzzzzzzzzzzzyjD7z73777777763rzzzzzzzzzzzzzzzzzznDz77777777bkBzzzzzzzzzzzzzzzzzzzz8txrHnXHN0iLDzzzzzzzzzzzzzzzzzzzzzw2j+157k/zzzzzzzzzzzzzzzzzzzzzzzzwiS2fJ2wcHzzzzzzzzzzzzzzzzzzzzy53EX7/AOs//pyxG0888888888888888888wZDDDDDDDDDDD1d888888888888888888lCAAAAAAAAAAARy888888888888888888JDDDDCbmlDDDDH1888888888888888888HLDDDSJcSDDDDW1888888888888888888yoDDDTdlTDDDDAC888888888888888888LMPPPP+OuPPPPb5888888888888888888CU/wDvvvvvvvvvsa/PPPPPPPPPPPPPPPPPLH/uuttsuuttr1vPPPPPPPPPPPPPPPPPPHls8888888888xx/PPPPPPPPPPPPPPPPPPIQAAAAAAAAAAA/PPPPPPPPPP/xAAtEQABAgQEBgMAAgMBAAAAAAACAAMBBBESEBQyUiAhMDEzQBMiQiNBNFBicf/aAAgBAgEBPwD/AFLbZOOUgoAyGoE6wJjcHBXjYZv5xVjMewJ9mz7w0+lKeZG2USUEfMiwBsi/ChKuEss5dRZT/tRkzRMOj+FHl3wlvDRA3QlM+H0oRISrBMv3p5/8ioNOH2TEt9rzX1h2VOEgA9QJ6WIdCbcJol8g/H8icdI/Tk9RoJcbzMl9R5Qwi8IqMyUey+cl8xIX6d0MwJK7B1kXOaKFJT1JVsh+0cDMQ7o3iPSq8QGUEDwn3wchVsxRQjDv6TDd5YGYgNYojI+/REkw5XkeEy1cN4+kyFjeDzlS6YlamzvGuDwWOU9BlgiLng+do8FCVCVCVCVCVCVCxYOhUwmWSPmKiJD360syJfaO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7WNGMm4KmgZTxNY37nj8GWCGYeMjDtKNkUZzOH3Udm0bMet36cayeDa1Jd49o6H/AOqjqTTVDJM3raECCLx7LrbShpcW+fyQprWrZP1MAcTUaioOWeTtFa/Pz0naK1+fnpO0U573b5xdpN6BIN4Ny16fnX9pa9Nzr+0ten51/aWvT86/tLXpudf2lr03Ov7RWvTc6/tFa9Nzr+0Vr03Ov7RWvTc6/tFa9Pzr+0ten51/aWvTc6/tIyynLI8/fU16bnX9orX5+ek7RWvz89J2imVlWzJUSdaprckBunbeOUFHKyRocxwIOT2LX1Wxacvz5G6U5znuLnG8k41TWQ5wwpnFvwjKtqqLkHrK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaKfY9Kd7hN71VUctM7dZMzlZdaaeYMJ8W84+g8fsW3pPGws4m39asqFslTecjBf6VVQiankYeLFp1KV+HTQvOdgPsS3m/9EJ+BWUbp3fQryryryryryryryryryryryryryryryryryryryryryryryryrynuIY435jqUQuo6cfLb7Et8cHP1Kzj/0jQfSqg3QS/QdSIYMTB8I9iW+PEQn41Qn/qj8pJNFFv3gI2nT/F1JlfTO9e7T5StN1LLoTRe4DjPsW3B/xDoeFSm6oh+seTravWRgt357k5znG9xvKZR1Txe2B92hSRyRm6Rjm6QqarkgPG3OEx7XtDmnEfJWif8AldpCphfUwD5jfz7FtcX0EvRce9Rm6Rh+IeSJuUshkkc85yrJoGYAqJBeTvB/epLDHKwskbeFW0ppZyzNlboVly76P7jyVpnxDfrVni+tp/r/AB7FtIX0NR9Hk6jg8v0HUhAEUYGTBF2rb13/AD8e6Vm8KGg+StU7iMdJVki+vh6L/wAexatuFSzjjjdqRG+KM/CPIubhAjjCewsc5pyg3Kya1skQhcd2wYukajnNa0lxuAzq0avZVQXDeNxNVlxY3yfbyVqnHF91YgvrdEZ9iuF7XDjGpSm+ni+keSrqQy+MZvs441jaeIplq1zRdrt+kKerqZ/OSk9GZQQPmfc37lRRtjY1jcg8lah8c0fCrBH/AEyn5fsaQXSSDicVQG+kj+/k5qWGbfNx8YRspuaU9SZZkI3zi7uTWNY3Ba24eTtI/wDT/EKwBjqD9PsarF1VUD5rvyrNP/N/Iq9Xq9Xq9Xq9Xq9Xq9Xq9Xq9Xq9Xq9Xq9Xq9XquN9VJ9lYA8TMfj9jWkLq+o+r+lZh8S76vSak31Ev1FWGP+M9Lz7GtqLBrMLltH+KzpQ15YfWyekSSNjY5zsycS4klWbFrVFEDluv6/Y1o0myoLhvxjari03Zwqe0LsUuP4kKunP6oWyafnW9a2TT861bJp+db1rZNPzrVsmn51vWtk0/Ot61smn51q2TT863rWyafnWrZNPzretbJp+db1rZNPzrVsmn51vWtk0/OtWyafnW9a2TT863rWyafnWrZNPzretbJp+datk0/Ot60+up25DhHoVRUvmOPJmCs2iNTNjG4bvuno9j2xXP1w08ZuA35/r0qOWSJ4fG65wVFUipp2yZ846fY1dfsyov5wqgNLc/XcG+/FhLCoPk9ywqD5PcsKg+T3LCoPk9ywqD5PcsKg+T3LCoPk9ywqD5PcsKg+T3LCoPk9ywqD5PcsKg+T3LCoPk9ywqD5PcsKg+T3LCoPk9ywqD5PcsKg+T3LCoPk9ywqD5PcsKg+T3LCoPk9ywqD5Pcr7P8Ak9ykwdcfg73CNysHg8v7n9exrXs95fsiIX378f36VDDLM8MjbeVR0wpqdkY+56fY7qaneb3QsJ0LYVJ7vH2VsKk93j7K2FSe7x9lbCpPd4+ythUnu8fZWwqT3ePsrYVJ7vH2VsKk93j7K2FSe7x9lbCpPd4+ythUnu8fZWwqT3ePsrYVJ7vH2VsKk93j7K2FSe7x9lbCpPd4+ythUnu8fZWwqT3ePsrYVJ7vH2VsKk93j7K2FSe7x9lbCpPd4+ythUnu8fZWwqT3ePspkbGC5rQB0eif/8QAKxAAAQIDBgUFAQEAAAAAAAAAAQARITFREEFhcYHwUJGhwfEgQLHR4TBg/9oACAEBAAE/If8AJwUE6f2zp7IcEE2Ack3MufmJOREuOmw7I+MJgx5hPMICd7UdApX/AHUYl+FAAQ1yUQe6G3PLsp+BmwtGcbggYGJJkCC0TYBHbW1JPuOIovCKo4ZPSh/chETKJvQA4cRqSUcgz24oKfnHVEILgnIhBT3Ln0PAzmKXwX4ewusEcQC5CoKGCkCHJFfXN5F/B7CEsQGjFJjaqH8KLgvNGXrhnKww1eEFkVjnsIlMT8jwMyNI1Z9UQy8AUTBpUakg/wA2SiVSUcr3AxNsFoKCY8pqHnqnzKRbk7qjfUEFsj5YJxQLDOE0qmUTKBdW1CZ3Wn5pp0uPuoWGCOOaYn0J7IWfA1O8jZACoKEIQt6KAAF6urkDAL4Hhz8Dx6dPA4FCCu434jBMx1AQCIJJJNSVMjs0yanD0EEXTCe50SSJJJJmb1c+qYBGdLiX0WIaZlywiiUkmPhRJ9CPv5CUT1Zioj08rmsEQWKWxioP6+8FCKGMAdE6Z5NgzTmEc71xR1yuJkfieJ09kA4X2KZjDYDgmWPCC6w4MATI4ykN84GybUhVPpXkmtg7leqBwb4qKCWVRUrXzCjaJqSyh+QPtUbNB8tU+0Sbnwtj6EH8gUD8YR3R84Yk/wBKVh0gTBcEEtU76hH8j1nJAhEgIgiBCO/CH7Qsc7wjpwUwUOQPAJO6YlCDJ3Q8EASEuDbdWjQAOgOhHcj9iclElN3y59KGLhJk+83CnsCMKPMnQQ3kuUa6mIfHbLlcrkR7rswC8AFd5n+18lnSKnVOn8ygMjL5GUCwI5B5IcSA1FNEOJ2JFQcBOQrr7DIJrCG/QVC32K6n8OD7/WmzUYiE3l2yQo6JMJNywRogUqU+vYU2qAgElICaajgE+VXJqRdJIIMBAUQpp1QtzLMW5kTuZENywM0Dp2JYKPInYnWfhCY4kQYo4YT4O4UTMNmCEZ5NOgh5scAmEQbHsJRTXU/hwYADkwRUgSQNQSQAHM3BN9+RAMCldmR+WRMGY0XupGYtUDM4ICu/ixTCI3QQZ7p+EP6mYUqsyYkn2TuiyKedETvOTMhxXP0iCCxEfpBAxEA5jgrp0yrd7odUT0QKLOo1QXHjntmseRqSUNgB0o2uRDgEGT+wDgUKsWYuUTd8L/uEyDDq6YSA6P4nwMMQwd0e8/AuIQFLBx65cEgTJeCqNeiTUkoL9UXZUJIYTesQSZkugAGCcrx+1f8AJ7EgGBTQqFsw0xgms3UQTlUiFDOloap1hpdMR+XfFnwIeoAcqAJ7y5QU9agOoXqZ9KsSnhBHJzUmayJvzTETP2kJxIzCv2cRX9IejlDUIhpDnQKI3EdQVGm/wXhqn4C97aeavOETQINrCYZBOLG7+6vPMugr4+2AkIWBRQWjQG9PuXHuCdGbEhOPE5UIQ1zIhoE0fflgYAOTkjnZQOGSZ9GDIURLvICaA25WDNDPgzqfbkPNPYrpiLwmtxHByX1whCdCG8KevA0f5wA5NKcjNTphAaq7cTRMaYmiE6C3RKAYMPcNHEwmNfBm5RfE5hPoC75Xo70KGiI1Ahr71wndzWjmuQRQFkvNMIiQc06U52QRCIIDklgM0EneG8+6aWLCgKpyvTkG6DxkvhZGVaYiI1Qk88EnKqf3bf8Ausx3EGkEMpkoK/WS3X7UBogDMxitqvKBgHpDOAxLIiParwleErwleErwleErxleMrwleErwleErwlHmNwagQZF/TIOKgIkwzCGwKrBM4m+H7T4C0mTNA3CRDJ4zfej7e6Zu62coskklfeSUNEDEVHuCxtPtlfQCRaTFhHCKWO59I9Iak5t1Wq1Wq19Gq1Wq1sdGbGRANWpqEIKeQWkOt+qtirZejaAoq4FBkQ5Au94ITv3WyvcloSX0d0F3J/LYRcIq9Z/bK2gYZ5cR18cSsbuA6YUCgAjL0G7LwmTJlKIH8J7jyP0nYYIfvoA2mqJNbBsvKj4F+jt7nfKi1ExSmz+2VsKaxZMlMxu0CVp4NYDghStaHH0PF/EjzFb4T6ANrr6Qtwqfc75UW4mKU2f2ythRpv2X69DSqrItP8SwrQULZ/QTgfQ887ZSlZDmhT9BCPkEBEwYW4vFO1PmhA9RaJtdfSVu1T7nfKi3ExSmz+2VsI7/ee0JcwROgUoagN2JRrE1Rj9onixMpuvCyphqD6ITa+gXCwbjjyqRULAG4W+ULFxmBThoYXgNEBExGIytd6F8G0Ta6+kLf6n3O+VFuJilNn9srZvlLQC/lvIfqnpGJTwIohqveygQnqFo32jA2tAfQDghSRfogVUmzE0swgHi8LdvgtE2uvpC3up9zvlRbiYpTZ/bK2C2OW0QJTE6yP02553JocYIVRcgahJDPLrIwXr2QBJAAJJuC8gXmCPH5C86RAHIxmsFs6O/JkpCg3xEjXGxnrMYTSqGYT6FoN+4LRNrr6Qt7qfc75ULYMLJilNn9srZBe86H9tayBcFN9kZuHJbm6Jk+ELDQiSSSTk35p7KjtkegbvayZETI7kEIABOOvCATRHUUQmcUYaFCaYPymlks2ZHoczRLq/Vom119IW91Pud8qLUTFKbP7ZWw4gdpmOXoYWHA2JogkqDA5IIchtu96AMZFyysEOjA+qdS09KlCxYIBhaE2uvpK3mp9yJe3wRyVspilNn9sra6R3H4svSwFrRBqpINgQQOt8ipAQ0YKtd7+e5Xvaw6vqPDAIN8fQJtdfQG54OIY2+PuTA0XjyCtUgYGaO04HBq6IUMAXs/tlbRjIIl7o4Cefm1GPpk+y2Ooc3oMa2utrra6Zs3oHTiGAByU6HBHHBVNfSJtdULsCyEPoAOTRliogMBJXoofI9yJJzgYFO8tPqKhASXNGeXCyLsUJGSKMxEcAVEakAiD6C5PRL6SRo83F3Qd/pXj68fXj68fXj68fXj68fXj68fXj68fXj6OMc19VHB0w7lMIJERmLVX+jYqowIWvXo2a4KiAQfIxAVLT68hoMMDAe6MRMREcyR9z81URCBJjV0FYgYkbLkREgcxYlomcqg8qapKk/uWU3eUElDkakQ5J1Qp8OsKq+Mjfl7yIRRR3hmUgI7HmnDwBwIwNUIkHAAkYBOOBxRobk0uZi1WOsiYqAkXMRobPAr4pB7pjIvgcgUb1QsHQoD4AH+x7J2DrGj5igd2KqJqoux5o+C4EjF4Ced0Ca4qJsSIzQFEAGIcYp9Oc7Ek6J0e8F8NHuynugHWFcgY2CX+zjn+fZR9vgHGAfKYyE14fQcEL2aMfygmKC07/UEgSMZBBupUIGICYeyMkIlo3IvZwx/MOCsd7/9Kd4btReE8ifZe4ZRDfNTZF2oKLfF/wA8FOgOCGOLonALZDMIrcLyzVJQxg9tM2MSCREs7FICFzcqhgAMAGAGHBn1fSNQm4DhhyOdCpQRmoZ8FynI+zlNOxMORmVcISYAoMkXjFStxtRPCA92Yl6fnWnyRKGbhlIdq8iBYDxDdCpqRT6lF8vA/wBIvl4FJSKd4opxji/ROr7Q5Ahk13Do9mmJ8kFDDAC5uF5IGOyfjjzzLVgF2KOMYoYWdRFCleq3yV0c30oVCXeHdbM7rzj7RwK3RyfSp3ot8F1BUqAjBQXO4rW0doKOE9lesKGBPPiAAYAUSdyZloPNS3J95bPsLkbAjETJBMMWM5B154vHleeImAds87DADOG7E1lUE2I4L80AAYCHFBoQHIWARIPZcRqc5kdQ1GhmOKq8rR9ljlZ6z0Z/COJQCBJJgKkozokDFFANVPwhzTBjfd3FA6R3JKuOzmYpqUkBmKBgLTRkEODOD4QkicBIYi8EIAccHMv3YVBu8lBIEiVMyUJ0VXQFnRAIeWy+dob0CIQYEuIIUvmj/XEnRSRvD5k0l4o/qZRNrkiGmH7R2KJlAoYwKA2Rx31Ik9VmET2dfNMDibTUQA6D9rHkZEEKBUOKnDEPSSlrheKeBDAzVyVGoN/pZGyXzRLpD7ouIsVnokgAAAAAFw9LzLCAu7CwVOaCiODEG1+DuhD4oh3jciZAwA3WaLRe+q2h3W0O6Mgt0vsJ/MriCy82+1599rzb7Xm32vPvtb87rfndb87rfndb87rzb7Xm32vPvtBiAhmCbWAIAAgIAD7FtDutod0QfWGRyKEhspOoQPjuQv4KG98CpIll0IzJKExExHyKICE328ggggggggggggggggggggggJjLmzqgURnKkfpSLQDkcFGN3Jzm7Jhr8zuWnuRFTfhGSmjz4e1HBGq1vI/qKCDPuCxSsUrFKxSsUrFKxSsUrFKxSsUrFKxSsUrFKxSsUrFKxSsUrFKxSsUrFKxSn3IG5K5YcfFwSPlvhNCr7qee8hGRyWG4OQ4JktvMJrPI5j+gh8Bv5IEwejWHGaW6oEEAgu8Qf5vDAOZWDQOaAYAcEeJVJxbH/AJ0cIdyOTSTJLpzLU5k740aQzF3aMU4IA4P8mB1D1WLQuYcFz26VYVE5FH+IAJMAA50U/B7LBNlzJEAd1gcJ7iizLnEqSOXzL9v5NCqHwU3s3y4LqoeUU8EC4Br/ABM7WSMkClgFyWjH8EE7mXL+WZjcgtVvXwXAEdEJLGA3MfxAVkwdVedpopX+YGVgAoDkiwDJwJY07zqjPrg3Wf8AKE4FzUZqeoHBcfQc0JBOPcP5QxhGQHdQpBIDMQIIWn2RE80ygWMnIEHC+AL7WD+WUu8p+hZzP5wbD1cisgdx/nHuRinUFmh8HpRCgArh/NwxQHOK0+HzwbfjEoMUAmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYuUXRZvAchwZqZuYFQHdwPcvLcE2Wq4MSHgRqEK7DrD3Etq5VFOiS51RxaJ3OPgz7XXGmqJEgQRiKEJmBGgJ6oE41YWQ8zZDzNsIeZsh5m2EPM2Q8zbCHmbIeZssPOSJc+MmQQHMwdy/g7oYkCBJPwWVjrX2xzkoQmRMUKQT4MG/w8OiEu2yFtBdoLtBdoLtBdoLtBdoLtBdoLtBdoLtBdoLtBdoLtBdoLtBdoLtBdoLtBdwJ4iKfgycnBjOBoMTBMFD27orA/IPXBEqciNYpngzLHzxEleELwheELwheELwheELwheELwheELwheELwheELwheELwheELwheELwheELwhYCeAD49p//xAArEAEAAgAEBAYDAQEBAQAAAAABABEhMVFhEEFxkVCBobHw8SBAwTDR4WD/2gAIAQEAAT8Q/wDk7i4pKfrUlNZZdS14I5+r1AzKxZ0cwdzHsIR9iCfnYXlzU6Vz+qIOcJmysePpWPDRQo5WJn7JIPxrdto2ArDwNOAPRbPhm1q2rVM+eZVCMbu/AlFqnMiCPOdC5uok6ZD8F/jf+6sbadArI5YWDH3ReccK50uqEmCt02CHQFQMaYl06DRHEioto8+fwJYF6PbpMENWr15Mcr5RkAlRhgOzHSse6ialvf5TH42TDWYSlXcs1igozQJPRcDLi5ZPOYfgzLd9wmMkbXsXhjNMhuCUCfTKW71A7/q9jwJiJZdO0QXQtTRTSLyEh9JWW8eJFxbV5I5CK1bTeBasPkAJ49cW5CrLj6HFLvYC7zcYftJd6bSL48hKOtyC1AOolUxgpYsKVzqcilM/8Anp6X6JCADoO4lZTyNWw1Ei8L6X8+ksl8AqKbIyV0SKovEbPBNbkNaNhcut5OzjD+ba35bsRzzBHZmVe6wTGvOAo8DX8/zAnOTmenDAauTuGaC57YR0wtoVd75xOjzCT5aYhlcsq7lxnNKWJoCMbsKNpj9vXK7C0R29kL5mRBBPdwdgjVcmLbxzXmwbPtYRmZzfRM/TpX2qY+q1N6LPQfD/ACW4s5C+tHL86DzyYBNsl9wcSVej2hIVnA27+xS4QxVvMhNuoJZsQLueiqe3vDSYyVR3ghicjAcyA9ZemP8Aq4vgmjIgGtxzGY/AGuhh2JWRbdgcJgGMxwXuIHV0QBwxEkELYRsyz2SpRyj2bbshY1HK9yMDjkgd4Sod5O7IhYDT+ECZTWgnuploOn9lN9JnvwHII7QPU9yMF2c+lJSBTmPvcJu62wPniMUSmdMepkyrbVFSU4Nop1HMekPFwQBU+Ted+eiZjswLRKFYm9yjXy6VpYRVMC7FJaStqAAAaAeC6cFAHzccdxfmZt60SipRTuucxqu5Mn+IoAAFBptGAAbX15EdWzpTqiiasjZPNgA1dYebkS3dJ77Xifm5qJzQ6D3Xgx7NB9hCl9JQFVgzSlEJ5sXZxlxRzKB6jgzVQh95YMorxgYPVmJ5FcU/uHFmrJrvowC9KClHkQtwXLveJic8JQ+xo5eaRdPURr+WrCtVeRDT5i5a7GUIGQq30DNjDt4wNxEgZQrToBiwkRcbElO9IpKRpwBR0iTEd6gfK8pWHyEZA5oZBdc6xip25cesvkuQrHVUfNLVBumccvEHDomMSphgHKuzBBNG/wDJeoF5h/oRudilLD2ZEyWaHg4dOYBarQG8L+X3BEJLIWS5g6s89MzN9DaNAQUcprOZPRXANA5BpA0OBqDYyhYss4DfN5Efx0vJxmtHVlVkHlhA/K3VOkcoPWOzwqvHZES8dVgu0zA5TEUdnXZhUC4l9buTIDTlP/G+UMIHaGH/ABhAgCiJSOYYcgDdUdCWeCUuri4YUD9jNxvsjVdC5YQc0z1n80lB6VZxaFtrvB9wZhzK2x3dTDNgBhiZeUyPbq5wP9OlQ2zqQtW0oKgZc7nlvBI3PmQ5HUYmEwKOK5JrojNKFEy8xshuaZwj5ZzhpqtpNDdL8DuWxZ+shhy4NUPW5XYafUU6Q7cccz/oPKWUCugYn3LBlvgwDoaw44DiaoBVVR+gLRhHuAUxE79Z1CDLVF6XwDmOowgaXEtpMR9yOohPjOfOXFhhmh817kBaRrDwIn97cgWsfgJvaiiEtt6GuZ5MiByOY+U6RHyyubo29iDZFhDIZjVBwuL0/wDf03KksgiC8Dkb99JfcgzJf6cSVGVXqw3OUxKs5RgTOWOL9KvMio+9u6/RmngLVb5OX+5esNPcHyIWskNA5+/WPjdUzJ18zBWwCllnnSZsovOXL+/q8qSyPBUn2Pe+TFSbbRhkurknJjbjd7wFN9+oleqRAgZc2WMDQK3Rw8AExWRgBmZZeU9DBE591tZz5st3l51zSVt1uUXq2M4tJNiz5y7rixMaMD9YTWRw6R7fFczmUglNyVhHOwJB6g8nCDRl203gjVL01/1i/wB4SVPiaoFyaLZ2mqHNQRrlDf8Ao0nzW5vi/wAqHpHPX9ikT+kMQPLbPQxR7Mp0cEMfhN3kEF8bmqunrlLFPTc3Flft4mcXu5xB9pBHSWt1Vj3WVwNUTLzi/wCzxpYVZSFyuQwubyd5XqhpPiK/spKXskuq9JLumoDNyDzGoaXttpNighHWnQQrlIXPolO/KAa5ftXG8EUmvZpqACAKOkr/ALTO60hMPndFQ9Kp2l3MvhYrQdGDz0PxXEWaQ9ZUnvf+w444448cY44449ynov7XDRIJYjYzTcv8Hxb2nIFX5ZzFhbFySn1lWmqL5uagxZm32AQ8MM8r0tSNmxSrR6iW0srMbr2jCH7CtwwPXDIrA1VYoX52veKuBc91vQM9WFW6OXH3xmn8LO4rjxmo5G7OWG035niMIhObO43L073MdWeaeaeaXu14LNZZrMau2eaeaeaeaIXbTCje7bw9TJ8yBNtCujuVDCy3abH/AI7cuNRHLKBBeXuZ7di5VBCzNIbYsYJ1/sxNAYDBC/JE7y7xavphv7IffvAM0nE+1w4GA0jaa3pwt8Zp4c4TALfkHOKp7tcV5HTbI4UuMF4z66HV5PZ+Fqy0olNDtKaHaU0O0AKwcH82XQXljQHM0jGBcuY5IeSPH5TVwsTFkwXV3jAUgVAanGI5fqYr/a1avycTh66ew4W+M08HaDRi1yG8V7GwtZkDYONynJ9OG7mERVPTjVrwwTLjVeaYdZm8a/Eo2hsyfMyePymrhR75CMyXWLT4lftNX4nU4eunsOFvjNPBFQt5Oh+C3gqqLDq5EFf5cX3qbFaEWGlZCzrz422Jgkx+zMfwoRkvBzDUuEqOaw4mlqJiHeqTyu5ktsCjqPEUaItYnLePTU/B58tq4Ue+QjMr44sznzf2mr8TqcPXT2HC3xmnhkqADRaeN6A6+dmRusJImyKNzjixdo8UC+TFa8rVeoZVirsTbP4XJuI0/CsMxrhc8Md/XQ5zH7/ZnkAzQG89nYm2CSFyStuctSIPQdyc3HYY/M4Py2rhR75CMyPji/t3avxOpw9dPYcLfGaeDva/o4hMG31Qk9YaRbMchcDyMCXLujotmWq3i3VazUSPdAoOCNPG6Gi8ek5Xx3cwiObWpgjQt7rT5RbcRbeeN8DC4hPmDKzbMGtU8clu4fy2rhR75CMyPji/t6QvxOpw9dPYcLfGaeGzCuIOxTdVSTM0/KhivuSiZGJcHaQobIa1G1FQ9Qs7BNpD1jL7oFr5E+NfyfOv5H5sqn6p8E/kQABaoFdpcNHkLJYkdYY1ESCdAPIbcLIb+GXgV7MFCgIZIUPnxWzVcH8tq4Ue+QjMj44v7elL8jrweunsOFvjNPBgsLdS4ONdgQcxgonYl7fEl4v6x6piStUXkyC2IkRas1xK+cxmsVcW0PUY+sWMraZuHk7HealHmwcwoq5hIv2YQswEcucic2IbQdZMURzxWOmKouGc4DRBKxyODhnHcQnNRQPmOHy2rhR75CMyPji8NLn+z1+Z1OHrp7Dhb4zTwd8vRq2o6qGJZlxbc3feDjkVrL0OicEAjkkIhTADjeRlF438s0ZfBQzlQZCVstWcIBHJIFBwRpmFVplM2/wGVrLNT+BDaaLwUHpw+W1cKPfIRmV8cWOj1mv7Gir78gNNIzge9PYcLfGaeF4NXd5xajSgydt2KKGb+FkcC6ek5XwoXkrzmcja41omSbOEvQOcM95b24qxXb0wEKqs24qt288eeu/HlSh6/ioZxu6nXP8A6OPy2rhR75CMCg5fY5x9iPd/Z3HCxp69S/WKh5jAVgGyAsiRMr1hAKtOFvjNPE7Z0Fg+M+TL3EtDB6ekgxxMtYY5QxyxgsHg4CJHVvDF40Rg1Y4VxApAATKbu/wtO0UjQDODjrbV2JUpu/fj8tq4ELQW2QmZEBzgBax6tC/QKg9AjhqQvU6/silaHmFMC1FWmHKggQnm3jWpAlQWqxOpmecBchekaZsXWBY3UvjFRkBXsQyiW4DUTBi0XwzHkZ1Fq5rWlq0sxyM0PoAzJel/2p5555555555558P38MrCLrrKpK0F7hYvSwiWnPS/wAMfzscXlpFEWmXTWOwAXjpehm+UYwDiuasL0IL60MYc2S1lhyCiP7NyMPm2IhoDgLR78WqGIEN7JNsbCdri466GUsVplt5wmzZ3DUIyeovYMECOvJH0mm8vLecr5QBaKuVsTDaVsStiVsStiVsStiVsStiVsStiVsf4A0uS74JYkRz0/5AqgtAj3iKy3alW94jsziCf04cvqEeff3EIAR5JG5+WVPol5u6sRexMKMNbgta9ZKCkfsyWpU2sYqGVwR5AWMDgWIzuEMNOwXcpZhQdf4Mz5emgpTFkCdFuXuA2q9I1MInUyGrBs/pIsNFXcZJtWfMjyRrKYqYEitoTl9+kOjaAAAoOR+7Uqc4Ojv1YJaqEckeTDUKja+9JFJ0zAI9c4mm63+kDCOjo5LBPPf8OVxMDlru0x3ivEXtf0mkNVPnuxiwpW1Ac2H/ANiwHhXgKQRFL0G/tIynGtVgD8ArbpK2r1gqspQFo4UkDFTYdJotsrceXI/rzvm/pGQYI0FgZWuz6BX2tIDwRH9sNTOxd3TaKKTZGpgAwPPUO44df2Dp2DXQG64R8awJiVUB0CNX1O4M4+CFdWFxBgSoy6i/2xpoahnKLIVswdtnbP8AWFMVswNDddM4DS8rm5CQRHU27oXikCgMAByrwY1ROjyE5JLoG6nRD3CYbziK+oa7mJKYGoWLpiII2JYnOZZy89v9ry3lmsUCoALVwCU55Q9JMrcFfaE1gkQ6c7xD9jo1XmnNeb4RUdENgdYK0Gb75mYli0rzz6yqLuIn1mBF9Xnv1YiXvNR63IGAHL+Yz06yr4UvJmfGnR4VU9ekKRBqnqxFDeSn2SI6FWvZUpl2Wr7SMyMWWjvXLrFal8xwr9U9AyeFM5twAbNTmO5HnhywfukPKEcuvosQ63BelmMoUQGudQK+hP6JAbd8GVmabb+AQmfVf8JA8368KzeX3eWZPQ/6WZJtv7FMh3wZSegs3qzEMAeYEQ8kCdaKIqKzM39YsH2eLdlgLzaAW1Wa7srw6mLyjmJYxezlPYFMzqH5xs5E0H++DP6iqNKulYxUwWULssf+2XBI5veJc3iKLrlcNxnucw5XXTKjsIQSNZWO5CQAYAGUrHxNNXKEDmrlFvXz92YSrLB0x5bZRNBXLWLIOSJKCvdaCTTZ1m93Te7pzG0uoxqHdKYtRQG9ymJcXkdEvzjyAafTDODtLugvcuWWV4nyypWD3WLCu9emK2yFCqUhSLMsbzyBel0qjFQ42GSwBOowapheq8kYWmoLxcax0NXYxjuMcpzSJiK8eqZQiZBNdHM6jH0Y6rDUmNGcLy5uJyhkQismj2mzXxFBzl0xozIcFy27XzNdDVciD+PgGa6rzXjUBpiOBPQRb7UGh6M2auHZdQ3/AMTaUwNmVEadDmlV7nOK811eGWBidagzd2CcnSCiedknLmIyvcKS08nwy4slmswmEevEdXl8VrqFqo8ubBH71ml/ND8ShoMEYnQYJczZqPewCHnjO5gy4UYAGmlfgkIM8noCUtW49weWZDkjAYiOTMJhOqWQfBax/despDXlIBLLBf2iwbks+vF06LBhSZBtfCBgfNkcsETl/sCRAgSJhw4IEAIEiJ4OKF1LxiXBbYBAByOLp0Jj6HdykslIEqdWVh0hWCWeCBoFx/QLsRTXkrU/9w0gehBDvpUVdbqk+iH69FFFFFFFFFFFFFFFFFFFFFFX1+d4SQQ1Av8A7oyauzJ6Blngn9UvryJOkBLu4QZPNnO87zvO87zvO87zvO87zvO87zvO87zvO87zvO87zvLdKiaS1MmK0kbW+ugL4Jvjd+ygwu9Ifdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdz7ufdxBU5/oZkL5EZ4x9h8Eq2/v5t9/S/2tRqelkVXReR/PDwS3XHfsRq59+n+fK4JvBYm10GLKIR1KHqxUcgEIAAFDETkjp/nXjn24Sqy2n1tU0mCvBPtvhJixRTfUH+YEo3tJ1b6TFXHfGc6PFZdFgJJybfoJj5QEE7Edeb5QBSsfM/nT/LEzH3hEJLGulrwW6c+xQxUrGOhMCnMa/wAUvskeQLZb8IAuTl0BDY9ajyPrzHlplMB56PqOYxr5R+bmr3EpllyCnzAf5dd6bCQH9PnDJl4JVdJ8WLLR3hXtgv8AxuI5Vd0wusaMICQaGlKrbi50YYvANCf+RV9ISLp7fkJDLwTA/wDoOYsHOYvXj/Q/xzv50hUPmkaK8xKnFGevEcM0IqzlKGZVymOwAPMRsCQ660ez/LpXvgQR8F2yYMOzqly7QJcTyPZ/kJYcEZ84bIYgpCPNl5iaynAAqHhCZWECeTWDH/0VYYLrUFJCq3NZq7q4/wCVin/2l8Vp+C2AQUH+aREudHYv8saii4RmYu+sxkjqvcSbIGzOtWzLlUVV/ni9/KT037/HwVa+qQNliCrcarszcm5Nybk3JuTcm5Nybk3JuTcm5Nybk3JuTcm5Nybk3JuS9Dkh5GEf+LdnPwUR9E7do3+wHBqLtd3JPq9gPBq9WOdcUQ9AApwDleY/sM3hXipwYB1Zacc+qrv1jXRY6I+DTKAq7JpS9pbX5GCiq6jFF4wxHkyribr9mp9en12fXp9dn16fXp9dn16fXZ9en16fXZ9en12fXp9en12fXp9dn1iNS8o2nqsDqu33huxNxtnLEpMAAOhtHwQgxssQFEDBlQANvmEwlnNmOiY6zzmOs855zHWecx1nnPOY6zzmOs855zHWecx14ZxTWMlC1dx1HmZMJo9NsPBgc5EBPnsBumNXN2Tdk3ZN2Tdk3ZN2Tdk3ZN2Tdk3ZN2Tdk3ZN2Tdk3ZN2Tdk3ZN2Td4Szb4UgyztZ7Q7/AH8Ga2aAFFFACKUq8OWkvUdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdphqdpbUjd9MCwcy+UHkO9ToV4LiI0cM+/ifsummmmmmmmmmmmmmmmmmmmmmi7E672B+p//9k=", "mimetype": "application/octet-stream", "title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
						}
						cheat('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*SELF Broadcast!!*\n\n${body.slice(4)}`, text, { quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAggCCAMBIgACEQEDEQH/xAAxAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBBwEBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAArUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhnWEeRmmb0x4rNVeRP0JhnnsAAEAkAAAAB5DdFKtn3u7C+cnM/ObnTSUFdAAAAAAAAAAAAAAAAPKFfaVbOTmatPW5sahZaxZdJTj7MewEnNFKzqo8Vq3tB7ISvvzlaPpD551RN6VOTi0y1bYkE1fhlYDTC7c+nGeeB74ifjosIz3AAAAAAAAAAAAAAAAR8gR888vtC0ywnuycrY4YGtrZW5HgvjWt0/vvlC9O7mRIbITUibxhc0yWjR0HJyWDpKpMboyNLd2fOJym1opVzzi3zxK+aZc11zyz19EWAAAAAAAAAAAAAAAAA8+ffQvnts7XyQmi1cJDv6rYZaIrgRIR8lKV2rfZZvYtA7Zv2JhMZ3wrnNa/JilZ26PmOOUgeS2dihO+VUrVvrsbXeb8j5BNsGewAAAAAAAAAAAAAAAAAGPz6cgr5e2LLkvy7IDGbjXhn+nbTXXnkiQSEAAGGaWmPlsUUzK1V69JfhiLHbCsTaGjX6Mj5DLoBIAAAAAAAAAAAAAAAHkZI0Sac1i4pTXk5q/7OxrnLs89QiQAAAAAAGramK1GXOtXrMRPJZbc1avVEl69VpGeoAAAAAAAAAAAAAAA8ICuZymnPJ1yVgbZd9n0dWfSFZAAAAAAAAAc/QmKVI9tc0ysVctcBOdw66pasuv0RYAAAAAAAAAAAAADyKyrM047ZVOzXm1SELc669Iz0AAAAAAAAAAAxqFxhb15eqBkr88Z9A+eStd7mjJPPUEgAAAAAAAAAAAeV2Vo1qJKR7NOSJ5bDwIg7rSrtTpClzmr1q2jRTPJi6KYmLmpgualk3RSxdFMIuamC55UoXxR5eLWFhnSzTuTFE6tM9rhzaJ4yp9k8rkb/R3F25dAJAAAAAAAAAAArkNKcGnPYNW3Vbjy4+zjWg7tSbtTscHZS044F892WGw1a+jnAltz074ePSdWvfoQEgAOq3UeUpa0DPSkzkHObc3br2a2G6tWWvLytjq9oy7giwAAAAAAAAAAFXj5CP157Dq26p48uPs41oO7Um7U7IauSsVaB0zXDt7uZXi5rLBHKJs36NkNoiWjfrlqJFXk3SXKrGeWKvLeCZunRFSuOtJnIOc15+3Xs1sN1esNeXkLRWLPl3BFgAAAAAAAAAAKvHyEfrz2HVt1Tx5cfZxrQd2pN2p2VWNk4y9U5By6kXlv5Vu7t0+qQ7PBd76N5lE4+Z4nNYIGcmkC26lpLX2xqnMJvY5mHmMtaTOQc5pz9uvZrYbq9Ya8vI2esWfLuCLAAAAAAAAAAAVePkI/XnsOrbqnjy4+zjWg7tSbtTsrsLbqjaGWK1ZzZX0Vn4nVtWw36udP0dGyWO4Q0UeegtMtbPnvSf9r5SVihYbU2aRxyy1pM5BzmvP269mthur1hry8jZ6vaMu4IsAAAAAAAAAABV4+dq+mFs1Z424/ePt4kwd2pN2p2KvaMYtRUpF6Zgj3o5dpt0++Hs9XUTbOCCyid7UmNun3yYwAPTyza5qlwpekzkHObc3br2YsNlen6q0nLPBzmXaEWAAAAAAAAAAA10S/ck1qk5X+PXmuEZC61dt2onRG10Q8rnfPg7xXNFqWiqLWKotYqi1iqLWKotYqi1iqZWkQMt0KgiwFJm4XRthcddW1s5Hn226vR0bDPUEgAAAAAAAAAAAY8Xd6iK1TOlHz+fr9z0yqWq98ETBd3nHMSnLHc5vs9PnydGegAAAAAAA5pinWmqfQbRw7+5TTz0ASAAAAAAAAAAAAAABRJPqrWmN3a9mdwk5OsiEmMwESAAAAAAAg5imXr0XqDna2CLgAAAAAAAAAAAAAAAAYUm8aJrTrVU9d87mjZKlgiQAAAAAAAGEfXrV3+43OW3IpqAAAAAAAAAAAAAAAAAABrrtm8V+d7rzDXpxd8PHzF12ULbC8KdtLYq2SbOrPhZ1WwRbFO0F04qnslMxfZKprFgn99ba8/VbAkAAAAAAAAAAAAAAAAAAAABjl4jk5ZOuTGyC0L5ZyXFbyuLGratRVrq16zMxTuytrh1RslS70WAAAAAAAAAAAAAAAAAAAAAAAAatlNmurm2W2+fD1dCtqJZVatS94UzXE92fPa5ZQVhVtRLTjWLV+jexUrnqCQAAAAAAAAAAAAAAAAAAABGIk/KVx2p9BfPRa6i8vS6b6OrN4UcXjVTBZdtVSvCjoXhRxeICGTG2+/OdqfoT56rb6H5QZZNpattbAkAAAAAAAAAAAAAAAADgpE7x6Zb5GR9ZRyRQjkiI5IiOSIjkiI5IiOSIjkiI5IiOSIjkiImCufNKv3P5v9Art0iugAAAAAAAAAAAAAAAAFU5ZCL057ELcgAAAAAAAAAADHLQVS/UH6JTu2imoAAAAAAAAAAAAAAAAEBA2OsaYWoW4gAAAGrlr7Se2QmmNLb7WbHOWYUAAAcnXwJr30b599Bp3+imgAAAAAAAAAAAAAAAAEXTrtRr43F57fhAAAee6E1mw1n6FTt26dymtE7eqM157EJ5AAAEbJRK/BfKRd8+0K6AAAAAAAAAAAAAAAAAc3z/AOjfOb5W3bz9F+EEAAMchUbTwwUdf0XGmc9Nd2/gs1+fYJ5wAAELNQLTZcanbMu0IuAAAAAAAAAAAAAAAAB587+iUC2c72R3fpw5MSuTEZMRkxHvPvJitkiW8zxKZMRkxGTEZMRlXbBW2kvZq/YMu0IuAAAAAAAAAAAAAAAAAot6p1qbJKDnNOIGYJAAAAAAAAAVmxVdrbJuPkMewFgAAAAAAAAAAAAAAAAPI6RrE1gJSKa89kyrJSzKx6WZWPSzKz4WdWfCzqyLMrHpZlY9LMrPhZ1Z8LPprw6uiO2Rr9D94uzLf0JAAAAAAAAAAAAAAAAAUG/VmacEhXPNeeyK4RY1cFjVwWNXBY1cFjVwWNXBY1cFjVwWNXBY1cFkr2G1ayz3J1Y9HoWAAAAAAAAAAAAAAAAAA58RAAAAAAAAAAADcQ2CZAAAAAAAAA//xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD6wAAAIAAAAADVD0AAAAAAAAAAAAAAAACkPWgA3X9nIokAE3IAAAAAAAAAAAAAAAAAExL+jIqcpzi9s7TwAAAAAAAAAAAAAAAAADamRl7UIDv8jj4EAAAAAAAAAAAAAAAAAACqXesUz775xq7W8EAAAAAAAAAAAAAAAACNnq577777774myNAAAAAAAAAAAAAAAAAB5Aj7777777775ltAQAAAAAAAAAAAAAACP15777777777775RnEkAAAAAAAAAAAACiyRz7X8EEwwEEFT6nEKoEAAAAAAAAAAABNNfzUNGEDHAkAECP5RIUIAAAAAAAAAAABUNbwAZxUBUMAOWYDZQJWAAAAAAAAAAAABUNbwFegUd8kOyJUDRQJUIAAAAAAAAAAABUNbyAHAg1z/HnEMP8AUCVKAAAAAAAAAAAA2OX88ICpRDjCBCGB+UKMIAAAAAAAAAAAA+RWBW99EAAAAAUfe+FWEhAAAAAAAAAAAAA4vz2vjF++++++++pWwBAAAAAAAAAAAAAAAAt2sN+++++++++gzAAAAAAAAAAAAAAAAAA8Zz+++88+++++TgAAAAAAAAAAAAAAAAAAAnFZX50w59UUoxAAAAAAAAAAAAAAAAAAAAAAVWfrSZKNgAAAAAAAAAAAAAAAAAAAAAAAAN4sXtc8xoAAAAAAAAAAAAAAAAAAAAAFTy9f9tuf9phyRJAAAAAAAAAAAAAAAAAAo5CCCCCCCCCCC36AAAAAAAAAAAAAAAAAASwyyyyyyyyyyyn9AAAAAAAAAAAAAAAAAANDDDDCJ3qDDDDXsAAAAAAAAAAAAAAAAAALDDDDG/RdDDDDCLAAAAAAAAAAAAAAAAAA9jDDDCFTSDDDDWrAAAAAAAAAAAAAAAAAAqOPPPPu8vPPPPfjAAAAAAAAAAAAAAAAAAEqDCCCCCCCCCCPjAAAAAAAAAAAAAAAAAA9hhJJFFBJJFFdDNAAAAAAAAAAAAAAAAAAX1wwwwwwwwwwwRHAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBAAAAAAAAAA//EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPEq/tPPPvPPPPPH2b/PPPPPPPPPPPPPPPPOwy6/D8zGNSOPGlKfPPPPPPPPPPPPPPPPAH5tkQ87AI4+PTPPfPPPPPPPPPPPPPPPPPIUR99xiRrTbloafPPPPPPPPPPPPPPPPPODl7Hv/PvvnLbBjFvPPPPPPPPPPPPPPPPOe6LfvvvvvvvvmScPPPPPPPPPPPPPPPPOLj3vvvvvvvvvvu/DkfPPPPPPPPPPPPPPKsznvvvvvvvvvvviXgmvPPPPPPPPPPPPDlk1/tvs8/v884/fuisFUPPPPPPPPPPPPC0KF/AuZwGcKgAAJfg1U+PPPPPPPPPPPPPwq14hdBQFgwQWjUfQ11gvPPPPPPPPPPPPgq1wFI7ZjTgGgYwPQ11lfPPPPPPPPPPPPQq1wUIuLLOm/wA8Eb4NdZTzzzzzzzzzzzy16JewEK5lEE8kIMf4NtsHzzzzzzzzzzzwzqmbX7zn333323375InEXzzzzzzzzzzzzzl5XaG4X77777777rUqHzzzzzzzzzzzzzzyjD7z73777777763rzzzzzzzzzzzzzzzzzznDz77777777bkBzzzzzzzzzzzzzzzzzzzz8txrHnXHN0iLDzzzzzzzzzzzzzzzzzzzzzw2j+157k/zzzzzzzzzzzzzzzzzzzzzzzzwiS2fJ2wcHzzzzzzzzzzzzzzzzzzzzy53EX7/AOs//pyxG0888888888888888888wZDDDDDDDDDDD1d888888888888888888lCAAAAAAAAAAARy888888888888888888JDDDDCbmlDDDDH1888888888888888888HLDDDSJcSDDDDW1888888888888888888yoDDDTdlTDDDDAC888888888888888888LMPPPP+OuPPPPb5888888888888888888CU/wDvvvvvvvvvsa/PPPPPPPPPPPPPPPPPLH/uuttsuuttr1vPPPPPPPPPPPPPPPPPPHls8888888888xx/PPPPPPPPPPPPPPPPPPIQAAAAAAAAAAA/PPPPPPPPPP/xAAtEQABAgQEBgMAAgMBAAAAAAACAAMBBBESEBQyUiAhMDEzQBMiQiNBNFBicf/aAAgBAgEBPwD/AFLbZOOUgoAyGoE6wJjcHBXjYZv5xVjMewJ9mz7w0+lKeZG2USUEfMiwBsi/ChKuEss5dRZT/tRkzRMOj+FHl3wlvDRA3QlM+H0oRISrBMv3p5/8ioNOH2TEt9rzX1h2VOEgA9QJ6WIdCbcJol8g/H8icdI/Tk9RoJcbzMl9R5Qwi8IqMyUey+cl8xIX6d0MwJK7B1kXOaKFJT1JVsh+0cDMQ7o3iPSq8QGUEDwn3wchVsxRQjDv6TDd5YGYgNYojI+/REkw5XkeEy1cN4+kyFjeDzlS6YlamzvGuDwWOU9BlgiLng+do8FCVCVCVCVCVCVCxYOhUwmWSPmKiJD360syJfaO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7WNGMm4KmgZTxNY37nj8GWCGYeMjDtKNkUZzOH3Udm0bMet36cayeDa1Jd49o6H/AOqjqTTVDJM3raECCLx7LrbShpcW+fyQprWrZP1MAcTUaioOWeTtFa/Pz0naK1+fnpO0U573b5xdpN6BIN4Ny16fnX9pa9Nzr+0ten51/aWvT86/tLXpudf2lr03Ov7RWvTc6/tFa9Nzr+0Vr03Ov7RWvTc6/tFa9Pzr+0ten51/aWvTc6/tIyynLI8/fU16bnX9orX5+ek7RWvz89J2imVlWzJUSdaprckBunbeOUFHKyRocxwIOT2LX1Wxacvz5G6U5znuLnG8k41TWQ5wwpnFvwjKtqqLkHrK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaKfY9Kd7hN71VUctM7dZMzlZdaaeYMJ8W84+g8fsW3pPGws4m39asqFslTecjBf6VVQiankYeLFp1KV+HTQvOdgPsS3m/9EJ+BWUbp3fQryryryryryryryryryryryryryryryryryryryryryryryryrynuIY435jqUQuo6cfLb7Et8cHP1Kzj/0jQfSqg3QS/QdSIYMTB8I9iW+PEQn41Qn/qj8pJNFFv3gI2nT/F1JlfTO9e7T5StN1LLoTRe4DjPsW3B/xDoeFSm6oh+seTravWRgt357k5znG9xvKZR1Txe2B92hSRyRm6Rjm6QqarkgPG3OEx7XtDmnEfJWif8AldpCphfUwD5jfz7FtcX0EvRce9Rm6Rh+IeSJuUshkkc85yrJoGYAqJBeTvB/epLDHKwskbeFW0ppZyzNlboVly76P7jyVpnxDfrVni+tp/r/AB7FtIX0NR9Hk6jg8v0HUhAEUYGTBF2rb13/AD8e6Vm8KGg+StU7iMdJVki+vh6L/wAexatuFSzjjjdqRG+KM/CPIubhAjjCewsc5pyg3Kya1skQhcd2wYukajnNa0lxuAzq0avZVQXDeNxNVlxY3yfbyVqnHF91YgvrdEZ9iuF7XDjGpSm+ni+keSrqQy+MZvs441jaeIplq1zRdrt+kKer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", "mimetype": "application/octet-stream", "title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
						}
						cheat('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break	
										case 'add':
										if (!ben.key.fromMe) return
										if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
											if (!isGroup) return cheat(mess.only.group)
											if (!isBotGroupAdmins) return cheat(mess.only.Badmin)
											if (args.length < 1) return cheat('Yang mau di add jin ya?')
											if (args[0].startsWith('08')) return cheat('Gunakan kode negara mas')
									   try {
											num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
											benny.groupAdd(from, [num])
											} catch (e) {
											console.log('Error :', e)
											return cheat('Diprivate asu:v')
											}
											break
											case 'panggil':
									   if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
									   mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
											members_id = []
		for (let t = 0; t < jum; t++){
					members_id.push(mem.jid)
					}
											break
											case 'setwelcome':
											 if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
											if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
											txtwl = body.slice(12)
											cheat(`*Berhasil set text welcome menjadi ${txtwl}*`)
											break
									   case 'kick':
									   if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
											if (!isGroup) return cheat(mess.only.group)
											if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
											if (!isBotGroupAdmins) return cheat(mess.only.Badmin)
											if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return cheat('Tag target yang ingin di tendang!')
											mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
											if (mentioned.length > 1) {
											teks = 'Perintah di terima, Menendang\n'
											for (let _ of mentioned) {
											teks += `@${_.split('@')[0]}\n`
											}
											mentions(teks, mentioned, true)
											benny.groupRemove(from, mentioned)
											} else {
											mentions(`Success menendang ~> @${mentioned[0].split('@')[0]}`, mentioned, true)
											benny.groupRemove(from, mentioned)
											}
											break  
											case 'promote':
											if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
												if (!isGroup) return cheat(mess.only.group)
												if (!isBotGroupAdmins) return cheat(mess.only.Badmin)
												if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return cheat('Tag target yang ingin di tendang!')
												mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Promote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												benny.groupMakeAdmin(from, mentioned)
												} else {
												mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												benny.groupMakeAdmin(from, mentioned)
												}
												break
											case 'demote':
											if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
												if (!isGroup) return cheat(mess.only.group)
												if (!isBotGroupAdmins) return cheat(mess.only.Badmin)
												if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return cheat('Tag target yang ingin di tendang!')
												mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Demote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												benny.groupDemoteAdmin(from, mentioned)
												} else {
												mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												benny.groupDemoteAdmin(from, mentioned)
												}
												break
				case 'listadmin':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'listuser':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				y = 1
				mom = []
				teks = `*LIST USER BENNY BOT*\n\n`
				for (let i of _registered) {
					mom.push(i.id)
					teks += `*${y++}*. @${i.id.split('@')[0]}\n`
				}
					benny.sendMessage(from, teks.trim(), text, {contextInfo: {mentionedJid: mom}, quoted: ben})
					break
				case 'toimg':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isQuotedSticker) return cheat('stickernya mana anjeng')
					bisnis(mess.wait)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return cheat('Error om')
						buffer = fs.readFileSync(ran)
						benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Dah jdi nih bang'})
						fs.unlinkSync(ran)
					})
					break
				case 'modesimi':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
					if (args.length < 1) return cheat('𝗧𝗼𝗱 :𝘃')
					if (args[0] == 'on') {
						if (isSimi) return cheat('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						cheat('*Sukses mengaktifkan mode simi!*')
					} else if (args[0] == 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						cheat('*Sukses mematikan mode simi!*')
					} else {
						cheat('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝘀𝗶𝗺𝗶𝗵 𝟭')
					} 
					break
					case 'kickarea':
					if (!isGroup) return cheat(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			  if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
			  if (args[0] == 'on') {
				  if (isKickArea) return cheat('Sudah aktif!!!')
						kickarea.push(from)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						cheat('*Sukses mengaktifkan mode kickarea!*')
			  } else if (args[0] == 'off') {
						kickarea.splice(from, 1)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						cheat('*Sukses mematikan mode kickarea!*')
					} else {
						cheat('Pilih on atau off!')
					}
						break
				case 'antidelete':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return benny.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix2}antidelete [aktif/mati]* (Untuk grup)\n*${prefix2}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix2}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return benny.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						cheat(`*Succes Enable Antidelete Grup!*`)
					} else if (!isGroup) {
						benny.sendMessage(from, `Untuk kontak penggunaan *${prefix2}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return benny.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						cheat(`*Antidelete diaktifkan disemua kontak!*`)
					} else if (isGroup) {
						benny.sendMessage(from, `Untuk grup penggunaan *${prefix2}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return benny.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return benny.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke))
					benny.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(from, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						benny.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						benny.sendMessage(from, `Untuk kontak penggunaan *${prefix2}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						cheat(`*Antidelete dimatikan disemua kontak!*`)
					} else if (isGroup) {
						benny.sendMessage(from, `Untuk grup penggunaan *${prefix2}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'nsfw':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
					if (args.length < 1) return cheat('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return cheat('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						cheat('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						cheat('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						cheat('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝗻𝘀𝗳𝘄 𝟭')
					}
					break
				case 'welcome':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (args.length < 1) return cheat('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return cheat('Udah lu nyalain pantek:v')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						cheat('Success Enable Welcome!')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						cheat('Success Disable Welcome!')
					} else {
						cheat('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix2}𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝟭')
					}
					break
				case 'antivirus':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isBotGroupAdmins) return cheat('Jadikan bot admin terlebih dahulu!')
					if (args.length < 1) return cheat('Pilih on atau off!')
					const argt = body.split(' ')
					if (argt[1] == 'on') {
						if (isKasar) return cheat('Udah lu nyalain pantek:v')
						kasar.push(from)
						fs.writeFileSync('./src/antibadword.json', JSON.stringify(kasar))
						cheat('*Success Enable Anti virus!*')
					} else if (argt[1] == 'off') {
						kasar.splice(from, 1)
						fs.writeFileSync('./src/antibadword.json', JSON.stringify(kasar))
						cheat('Success Disable Anti virus!')
					} else {
						cheat(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix2}antivirus on`)
					}
					break
				case 'antikasar':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isBotGroupAdmins) return cheat('Jadikan bot admin terlebih dahulu!')
					if (args.length < 1) return cheat('Pilih on atau off!')
					const argn = body.split(' ')
					if (argn[1] == 'on') {
						if (isVirus) return cheat('Udah lu nyalain pantek:v')
						virus.push(from)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						cheat('Success Enable Anti kasar!')
					} else if (argn[1] == 'off') {
						virus.splice(from, 1)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						cheat('Success Disable Anti kasar!')
					} else {
						cheat('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix2}antivirus on')
					}
					break
				case 'bot':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
					if (args.length < 1) return cheat('Pilih on atau off!')
					const argo = body.split(' ')
					if (argo[1] == 'off') {
						if (isBot) return
						_bot.push(from)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						cheat('*Success Offline!*')
					} else if (argo[1] == 'on') {
						_bot.splice(from, 1)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						cheat('*Success Online!*')
					} else {
						cheat(`*Ketik ${prefix2}bot on/off*`)
					}
					break
				case 'autosticker':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (args.length < 1) return cheat('Pilih on atau off!')
					const argb = body.split(' ')
					if (argb[1] == 'on') {
						if (isAutoSticker) return cheat('Udah lu nyalain pantek:v')
						autostick.push(from)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						cheat('Success Enable Auto sticker!')
					} else if (argb[1] == 'off') {
						autostick.splice(from, 1)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						cheat('Success Disable Auto sticker!')
					} else {
						cheat('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix2}autosticker on')
					}
					break
				case 'leaderboard':
                if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                if (!isGroup) return cheat(mess.only.group)
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                let nim = 0
                const arrayLeader = []
                try {
                    for (let i of _level){
						arrayLeader.push(i.jid)
                        nim++
                        leaderboard += `${nim}. @${i.jid.split('@')[0]}\nwa.me/${i.jid.replace('@s.whatsapp.net', '')}\n➸ *XP*: ${i.xp} *Level*: ${i.level}\n\n`
                    }
                    leaderboard += `\n\n_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *XP*: ${getLevelingXp(sender)} *Level*: ${getLevelingLevel(sender)}`
                    benny.sendMessage(from, leaderboard.trim(), text, {contextInfo: {"mentionedJid": arrayLeader}, quoted: ben})
                 } catch (err) {
                    console.error(err)
                    cheat('LEADERBOARD GAK ADA')
                }
            break
				case 'level':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return cheat(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `*◪* *LEVEL*\n  *├─ ❏* *Name* : ${pushname}\n├─ ❏* *Nomor* : +${sem}\n  *├─ ❏* *User XP* : ${userXp}\n  *└─ ❏* *User Level* : ${userLevel}`
               cheat(resul)
                .catch(async (err) => {
                        console.error(err)
                        await cheat(`Error!\n${err}`)
                    })
            break
			case 'antilink':
					benny.updatePresence(from, Presence.composing) 
					if (!isGroup) return cheat(mess.only.group)
					if (args.length < 1) return cheat('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isAntilink) return cheat('Mode antilink sudah aktif')
						anlink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						cheat(`Sukses mengaktifkan mode antilink`)
					} else if (args[0] == 'disable') {
						anlink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						cheat('Sukes menonaktifkan mode antilinkя╕П')
					} else {
						cheat('pilih enable atau disable udin!!')
					}
					break
				case 'leveling':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
                if (!isGroup) return cheat(mess.only.group)
                if (!isGroupAdmins && !ben.key.fromMe) return cheat(mess.only.admin)
                if (args.length < 1) return cheat('Ketik on untuk mengaktifkan fitur')
				const argh = body.split(' ')
                if (argh[1] == 'on') {
                    if (isLevelingOn) return cheat('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     cheat(mess.levelon)
                } else if (argh[1] == 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     cheat(mess.leveloff)
                } else {
                    cheat(` *Ketik perintah on untuk mengaktifkan, off untuk menonaktifkan* \n *Contoh: ${prefix2}leveling on*`)
                }
            break
				case 'clone':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isGroup) return cheat(mess.only.group)
					if (args.length < 1) return cheat('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
					if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return cheat('Tag cvk')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await benny.getProfilePicture(id)
						buffer = await getBaper(pp)
						benny.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						cheat('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
					}
					break
					case 'headshot':
                if (!isRegistered) return reply(mess.only.Registered)				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						benny.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						benny.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						benny.groupRemove(from, mentioned)
						}
					break
case 'groupinfo':
case 'ingfogc':
case 'gcingfo':
case 'infogc':
case 'infogroup':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	benny.updatePresence(from, Presence.composing)
	if (!isGroup) return cheat(mess.only.group)
	ppUrl = await benny.getProfilePicture(from) // leave empty to get your own
	buffer = await getBaper(ppUrl)
	benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Anti kasar* : ${isVirus ? 'YES' : 'NO'}\n*Anti virus* : ${isKasar ? 'YES' : 'NO'}\n*Anti link* : ${isAntilink ? 'YES' : 'NO'}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
case 'ownergrup':
case 'ownergroup':
case 'ownergc':
if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
	benny.updatePresence(from, Presence.composing) 
	var itsme = `${numbernye}@s.whatsapp.net`
	hayukkkk = { participant: '0@s.whatsapp.net', text: `This Group Has been create by @${groupOwner.split("@")[0]}`, contextInfo: { mentionedJid: [groupOwner] } }
	benny.sendMessage(from, hayukkkk, text, {quoted: { key: { fromMe: false, participant: `${itsme}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${fake}` }}})
	break
					case 'fitnah':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					var gh = body.slice(8)
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
						var replace = gh.split("|")[0];
						var targets = gh.split("|")[1];
						var bot = gh.split("|")[2];
						benny.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
						break
						case 'santet':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix2}${command} tidak ada di list ${prefix2}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*N@nd0-BOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
					var gh = body.slice(8)
						var replace = gh.split("|")[0];
						var targets = gh.split("|")[1];
						var bot = gh.split("|")[2];
			benny.sendMessage(`${replace}@s.whatsapp.net`, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${replace}@s.whatsapp.net`, ...(from ? { remoteJid: `${replace}@s.whatsapp.net` } : {}) }, message: { conversation: `${targets}` }}})
						            break
				case 'wait':
				if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
						bisnis(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							benny.sendMessage(from, res.video, video, {quoted: ben, caption: res.teks.trim()})
						}).catch(err => {
							cheat(err)
						})
					} else {
						cheat('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗼𝗰𝗿')
					}
					break
					case 'kontak':
					if (!isRegistered && !ben.key.fromMe) return cheat(mess.only.Registered)
					teks = body.slice(8)
					apk = teks.split('|')[0]
					apg = teks.split('|')[1]
					const vcardi = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apg} \n` // GANTI NAMA LU
            + `ORG:${apg};\n`
            + `TEL;type=CELL;type=VOICE;waid=${apk}:+${apk}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: `${apg}`, vcard: vcardi}, contact, {quoted: ben})
				break
					case 'owner':
					const vcard = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${pushname} \n` // GANTI NAMA LU
            + `ORG:${pushname};\n`
            + `TEL;type=CELL;type=VOICE;waid=${sender.replace('@s.whatsapp.net', '')}:+62 896-3600-6352\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: 'HAMBA ALLAH', vcard: vcard}, contact, {quoted: ben})
			break
				default:
					if (isGroup && !ben.key.fromMe && isSimi && budy != undefined) {
						muehe = await simih(budy)
						reply(muehe)
					} else {
						console.log(color('[SELF-BOT]', 'green'), 'Any Message ? ', color(sender.split('@')[0]))
					}
			}
        } catch (e) {
			console.log('Message : %s', color(e, 'red'))
	}
	})

                     
/**
*@Thanks For Allah
*@Thanks For Nafiz
*@Thanks For Nafiz
*@Thanks For MrG3P5
*@Thanks For Adiwajshing
*@Thanks For SlavyanDesu
*@Thanks For Ramlan
*@Thanks For Bubur
*@Thanks For Dani
*@Thanks For Akbar
*/
