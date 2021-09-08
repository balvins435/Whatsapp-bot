/*

Elios and Ben
Recode by Akmalz

*/

const { GroupSettingChange, WAMessageProto, MessageType, prepareMessageFromContent, relayWAMessage } = require('@adiwajshing/baileys')
const { exec } = require('child_process');
const axios = require('axios')
const fs = require('fs')
let FormData = require('form-data')
const afkJs = require('./lib/afk')
const moment = require('moment-timezone');
const os = require('os')
const speed = require('performance-now')
const {
	listmenu,
	gmenu,
	dwmenu,
	smenu,
	emenu,
	srcmenu,
	pmenu,
	rnmenu,
	txmaker,
	imgmaker,
	othmenu,
	info,
	ownerm,
        nimem,
	ingfo,
	mess
} = require('./lib/text')
const { color, getBuffer, convertMp3 } = require('./lib/func')
moment.tz.setDefault('Africa/Nairobi').locale('id');
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

/*

*/

module.exports = handle = (client, Client) => {
    try {

    	/*MENU*/
    	Client.cmd.on('listmsg', async(data) => {
    	const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time < "23:59:00"){
var speech time = 'Good night'
                                        }
if(time < "20:00:00"){
var speech time = 'Good evening'
                                         }
if(time < "18:00:00"){
var speech time = 'Good afternoon'
                                         }
if(time < "15:00:00"){
var speech time = 'Good afternoon'
                                         }
if(time < "11:00:00"){
var speech time = 'Good morning'
                                         }
if(time < "03:30:00"){
var speech time = 'Good night'
										}
             sec = []
          sec.push({
            "rows": [
              {
                "title": "List Menu",
                "description": "", 
                "rowId": `${data.prefix}listmenu`
              }, 
              {
                "title": "Group Menu", 
                "description": "", 
                "rowId": `${data.prefix}gmenu`
              }, 
              {
                "title": "Download Menu", 
                "description": "", 
                "rowId": `${data.prefix}dwmenu`
              }, 
              {
                "title": "Sticker Menu", 
                "description": "", 
                "rowId": `${data.prefix}smenu`
              }, 
              {
                "title": "Education Menu", 
                "description": "", 
                "rowId": `${data.prefix}emenu`
              }, 
              {
                "title": "Searching Menu", 
                "description": "", 
                "rowId": `${data.prefix}srcmenu`
              }, 
              {
                "title": "Primbon Menu", 
                "description": "", 
                "rowId": `${data.prefix}pmenu`
              }, 
              {
                "title": "Random Menu", 
                "description": "", 
                "rowId": `${data.prefix}rnmenu`
              }, 
              {
                "title": "Text Maker", 
                "description": "", 
                "rowId": `${data.prefix}txmaker`
              }, 
              {
                "title": "Image Maker", 
                "description": "", 
                "rowId": `${data.prefix}imgmaker`
              }, 
              {
                "title": "Asupan Menu", 
                "description": "", 
                "rowId": `${data.prefix}asupan`
              }, 
              {
                "title": "Random Image", 
                "description": "", 
                "rowId": `${data.prefix}randomimg`
              }, 
              {
                "title": "Anime Menu", 
                "description": "", 
                "rowId": `${data.prefix}nimem`
              }, 
              {
                "title": "Other Menu", 
                "description": "", 
                "rowId": `${data.prefix}othmenu`
              }, 
              {
                "title": "Owner Menu", 
                "description": "", 
                "rowId": `${data.prefix}ownerm`
              }
              ], title: `Choose one`
              })
          	let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": `MENU J-BOT`,
                  "description": `${ucapanWaktu} kak *${data.pushname}*`,
                  "buttonText": "MENU!",
                  "listType": "SINGLE_SELECT",
                  "sections": sec}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
        }) 
        Client.cmd.on('listmenu', async(data) => {
                   try {
                    data.reply(listmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('gmenu', async(data) => {
         	if(!data.isGroup) return data.reply(mess.group)
                   try {
                    data.reply(gmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('dwmenu', async(data) => {
                   try {
                    data.reply(dwmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('smenu', async(data) => {
                   try {
                    data.reply(smenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('emenu', async(data) => {
                   try {
                    data.reply(emenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('srcmenu', async(data) => {
                   try {
                    data.reply(srcmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('pmenu', async(data) => {
                   try {
                    data.reply(pmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('rnmenu', async(data) => {
                   try {
                    data.reply(rnmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('txmaker', async(data) => {
                   try {
                    data.reply(txmaker(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('nimem', async(data) => {
                   try {
                    data.reply(nimem(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('imgmaker', async(data) => {
                   try {
                    data.reply(imgmaker(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('othmenu', async(data) => {
                   try {
                    data.reply(othmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('infom', async(data) => {
                   try {
                    data.reply(info(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('ownerm', async(data) => {
         	if(!data.isOwner) return data.reply(mess.ownerOnly)
                   try {
                    data.reply(ownerm(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
/*ANIME*/
        Client.cmd.on('waifu', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/sfw/waifu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Waifu',
				  footerText: 'Press the button below to get a random waifu image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}waifu`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
		Client.cmd.on('husbu', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://zxbott.herokuapp.com/husbu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: '*Husbu*\n' + res.data.name,
				  footerText: 'Press the button below to get a random husbu image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}husbu`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
		Client.cmd.on('neko', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/sfw/neko`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Neko',
				  footerText: 'Press the button below to get a random neko image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}neko`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
		Client.cmd.on('hentai', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Hentai',
				  footerText: 'Press the button below to get a random hentai image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}hentai`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
        Client.cmd.on('anime', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}anime [ query ]*\nContoh : ${data.prefix}anime naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${data.body}`)
			const damta = await res.json()
			const { title, synopsis, episodes, url, rated, score, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Anime found!*\n\n*Title:* ${title}\n*Episodes:* ${episodes}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`, data.message)
            } catch(e) {
                data.reply('Anime not found')
            }
		})
        Client.cmd.on('manga', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}manga [ query ]*\nContoh : ${data.prefix}manga naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${data.body}`)
			const damta = await res.json()
			const { title, synopsis, chapters, url, rated, score, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Manga found!*\n\n*Title:* ${title}\n*Chapters:* ${chapters}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`, data.message)
            } catch(e) {
                data.reply('Manga not found')
            }
		})
        Client.cmd.on('chara', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}chara [ query ]*\nContoh : ${data.prefix}manga naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/character?q=${data.body}`)
			const damta = await res.json()
			const { name, alternative_names, url, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Character found!*\n\n*Name:* ${name}\n*Alternative names:* ${alternative_names}\n*URL*: ${url}`, data.message)
            } catch(e) {
                data.reply('Character not found')
            }
		})
        /*DOWNLOADER
Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
*/
        Client.cmd.on('ytmp4', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp4 [ link ]*\nContoh : ${data.prefix}ytmp4 https://www.youtube.com/watch?v=0maWbr0FHKY`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp4/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('ytmp3', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp3 [ link ]*\nContoh : ${data.prefix}ytmp3 https://www.youtube.com/watch?v=0maWbr0FHKY`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp3/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('tiktok', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Link')
               Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/socialmedia/tiktoknowm?url=${data.body}&apikey=BryanRfly`, 'tiktok.mp4', `Video Berhasil Di Dapatkan@${data.sender.split('@')[0]}`,  data.message)
        })
        Client.cmd.on('playvid', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playvid [ query ]*\nContoh : ${data.prefix}playvid amv`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp4/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, 'video.mp4', `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch (e) {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        /*
        Client.cmd.on('play', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}play [ link ]*\nContoh : ${data.prefix}play alone`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp3/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, ytm.thumb, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, ytm.link, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        */
        Client.cmd.on('ig', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ig [ link ]*\nContoh : ${data.prefix}ig https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
            data.reply(mess.wait)
            getresult = await axios.get(`${configs.apiUrl}/api/ig?apikey=${configs.zeksKey}&url=${data.body}`)
            if(getresult.data.status == false) return data.reply(getresult.data.message)
            for(let i = 0; i < getresult.data.result.length; i++) {
                Client.sendFileFromUrl(data.from, getresult.data.result[i].url, `ig.${getresult.data.result[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${getresult.data.owner}\n*Caption*: ${getresult.data.caption}`, data.message);
            }
        })
        
        Client.cmd.on('igstory', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstory [ username ]*\nContoh : ${data.prefix}igstory jessnolimit`)
                data.reply(mess.wait)
                stomr = await axios.get(`${configs.apiUrl}/api/igs?apikey=${configs.zeksKey}&username=${data.body}`)
                if(stomr.data.status == false) return data.reply(stomr.data.message)
                for(let i = 0; i < stomr.data.data.length; i++) {
                    Client.sendFileFromUrl(data.from, stomr.data.data[i].url, `ig.${stomr.data.data[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${stomr.data.username}\n*Type*: ${stomr.data.data[i].type}`, data.message);
                }
            } catch {
                data.reply('Username tidak ditemukan')
            }
        })
        Client.cmd.on('joox', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}joox [ lagu ]*\nContoh : ${data.prefix}joox bad liar`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/joox?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(jox.data.message)
                jox = res.data.data[0]
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${jox.judul}\n*Artis* : ${jox.artist}\n*Album* : ${jox.album}\n*Ukuran* : ${jox.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                Client.sendFileFromUrl(data.from, `${jox.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${jox.audio}`, 'audio.mp3', ``, data.message)
            } catch {
                data.reply('Maaf lagu tidak ditemukan')
            }
        })
        /*RANDOM*/
        Client.cmd.on('asupan', async (data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
            if(data.args[0].toLowerCase() == '1') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanukhty?apikey=${configs.uhykey}`, 'ukhty.mp4', `Nih Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '2') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupan?apikey=${configs.uhykey}`, 'santuy.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '3') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupan?apikey=${configs.uhykey}`, '+62.mp4',`Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '4')  {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanbocil?apikey=${configs.uhykey}`, 'bocil.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '5') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanrikagusriani?apikey=${configs.uhykey}`, 'rika.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '6') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanghea?apikey=${configs.uhykey}`, 'ghea.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '7') {
              Client.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/chika?apikey=pais', 'chika.mp4', `Nih Kak Asupannya`, data.message) 
            } else if(data.args[0].toLowerCase() == '8') {
              Client.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/asupan?apikey=pais', 'random.mp4', 'Nih', data.message)
            } else {
              		let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `ASUPAN MENU`,
                  "description": `Menu Asupan nya kak ${data.pushname}`,
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "1",
                              "description": "Asupan Ukhty", 
                              "rowId": `${data.prefix + data.command} 1`
                           },
						   {
                              "title": "2",
                              "description": "Asupan Santuy", 
                              "rowId": `${data.prefix + data.command} 2`
                           }, 
                           {
                             "title": " 3", 
                             "description": "Asupan +62", 
                             "rowId": `$${data.prefix + data.command} 3`
                           }, 
                           {
                             "title": " 4", 
                             "description": "Asupan Bocil", 
                             "rowId": `${data.prefix + data.command} 4`
                           }, 
                           {
                             "title": " 5", 
                             "description": "Asupan Rika Gusriani", 
                             "rowId": `${data.prefix + data.command} 5`
                           }, 
                           {
                             "title": " 6", 
                             "description": "Asupan Ghea", 
                             "rowId": `${data.prefix + data. command} 6`
                           }, 
                           {
                             "title": " 7", 
                             "description": "Asupan Chika", 
                             "rowId": `${data.prefix + data.command} 7`
                           }, 
                           {
                             "title": " 8", 
                             "description": "Asupan Random", 
                             "rowId": `${data.prefix + data.command} 8`
                           }
                        ], title: `Awas horny`
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
            }
        })
        Client.cmd.on('randomimg', async (data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
            if(data.args[0].toLowerCase() == '1') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/cecan?apikey=${configs.lolkey}`, 'cecan.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '2') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/cogan?apikey=${configs.lolkey}`, 'cogan.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '3') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/bts?apikey=${configs.lolkey}`, 'bts.jpeg','Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '4')  {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/exo?apikey=${configs.lolkey}`, 'exo.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '5') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/estetic?apikey=${configs.lolkey}`, 'estetik.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '6') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/blackpink?apikey=${configs.lolkey}`, 'bpink.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '7') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/waifu?apikey=${configs.lolkey}`, 'waifu.jpeg', 'Nih Ramdom Imagenya', data.message) 
            } else if(data.args[0].toLowerCase() == '8') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/husbu?apikey=${configs.lolkey}`, 'husbu.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '9') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/loli?apikey=${configs.lolkey}`, 'loli.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '10') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/neko?apikey=${configs.lolkey}`, 'neko.jpeg','Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '11')  {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/elf?apikey=${configs.lolkey}`, 'elf.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '12') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/shota?apikey=${configs.lolkey}`, 'shota.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '13') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/sadgirl?apikey=${configs.lolkey}`, 'sadgirl.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '14') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/art?apikey=${configs.lolkey}`, 'fanart.jpeg', 'Nih Ramdom Imagenya', data.message) 
            } else if(data.args[0].toLowerCase() == '15') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/wallnime?apikey=${configs.lolkey}`, 'wallnime.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else {
              		let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "RANDOM IMAGE",
                  "description": `Menu Random Image Permintaan Dari ${data.pushname}`,
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "1",
                              "description": "Random Image Cecan", 
                              "rowId": `${data.prefix + data.command} 1`
                           },
						   {
                              "title": "2",
                              "description": "Random Image Cogan", 
                              "rowId": `${data.prefix + data.command} 2`
                           }, 
                           {
                             "title": "3", 
                             "description": "Random Image BTS", 
                             "rowId": `$${data.prefix + data.command} 3`
                           }, 
                           {
                             "title": " 4", 
                             "description": "Random Image EXO", 
                             "rowId": `${data.prefix + data.command} 4`
                           }, 
                           {
                             "title": " 5", 
                             "description": "Random Image Estetik", 
                             "rowId": `${data.prefix + data.command} 5`
                           }, 
                           {
                             "title": " 6", 
                             "description": "Random Image Blackpink", 
                             "rowId": `${data.prefix + data. command} 6`
                           }, 
                           {
                             "title": " 7", 
                             "description": "Random Image Waifu", 
                             "rowId": `${data.prefix + data.command} 7`
                           }, 
                           {
                             "title": " 8", 
                             "description": "Random Image Husbu", 
                             "rowId": `${data.prefix + data.command} 8`
                           },
						   {
                              "title": " 9",
                              "description": "Random Image Loli", 
                              "rowId": `${data.prefix + data.command} 9`
                           }, 
                           {
                             "title": " 10", 
                             "description": "Random Image Neko", 
                             "rowId": `$${data.prefix + data.command} 10`
                           }, 
                           {
                             "title": " 11", 
                             "description": "Random Image Elf", 
                             "rowId": `${data.prefix + data.command} 11`
                           }, 
                           {
                             "title": " 12", 
                             "description": "Random Image Shota", 
                             "rowId": `${data.prefix + data.command} 12`
                           }, 
                           {
                             "title": " 13", 
                             "description": "Random Image Sad Girl", 
                             "rowId": `${data.prefix + data. command} 13`
                           }, 
                           {
                             "title": " 14", 
                             "description": "Random Image Anime Fanart", 
                             "rowId": `${data.prefix + data.command} 14`
                           }, 
                           {
                             "title": " 15", 
                             "description": "Random Image Wallpaper Anime", 
                             "rowId": `${data.prefix + data.command} 15`
                           }
                        ], title: `Pilih satu ya kak`
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
            }
        })
        Client.cmd.on('fml', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/fml?apikey=${configs.zeksKey}`)
            data.reply(res.data.result)
        })
        Client.cmd.on('randomquran', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/randomquran?apikey=${configs.zeksKey}`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            data.reply(teks)
            Client.sendFileFromUrl(data.from, rquran.audio, 'quran.mp3', ``, data.message)
        })
        Client.cmd.on('estetikpic', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/estetikpic?apikey=${configs.zeksKey}`, 'estetik.jpg', ``, data.message)
        })
        Client.cmd.on('meme', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/memeindo?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, `${res.data.result}`, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('darkjoke', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/darkjokes?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, `${res.data.result}`, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('nickepep', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/nickepep?apikey=${configs.zeksKey}`)
            n = res.data.result
            nick = n[Math.floor(Math.random() * n.length)]
            data.reply(nick)
        })
        Client.cmd.on('quotes', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/quote?apikey=${configs.zeksKey}`)
            que = res.data.result
            teks = `*Author* : ${que.author}\n*Quotes* : ${que.quotes}`
            data.reply(teks)
        })
        Client.cmd.on('pantun', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/pantun?apikey=${configs.zeksKey}`)
            data.reply(res.data.result.pantun)
        })
        Client.cmd.on('limit', async (data) => {
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            if(dataUser[data.sender].premium) return data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\nAnda adalah user premium yang memiliki akses tanpa batas limit!`)
            limits = configs.maxLimit - dataUser[data.sender].limit
            if(limits <= 0) return data.reply("```" + `Limit anda sudah habis` + "```")
            data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\n Limit anda tersisa ${limits || 30}\nLimit setiap hari di reset jam 00.00\nJika anda ingin mendapatkan unlimited limit silahkan chat owner bot ketik !owner`)
        })
        Client.cmd.on('sourcecode', async (data) => {
		data.reply(`Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript

Original source code bot : https://github.com/justpiple/whatsapp-bot

Source code yang dipakai : https://github.com/Dvnz99/wabot

Apabila terjadi error, kalian bisa menghubungi owner bot ketik ${data.prefix}owner`)
		})
        /*OWNER*/
        Client.cmd.on('setpp', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(client.user.jid, dlfile)
            data.reply(`success!, profile picture has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('block', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "add"))
            data.reply(`Succecs block @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('unblock', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "remove"))
            data.reply(`Succecs unblock @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('addvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedAudio) return data.reply('Reply vn/audio!')
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(vn.includes(data.body)) return data.reply('Nama vn sudah ada, harap gunakan nama lain')
            nv = await data.downloadMediaQuotedMessage()
            fs.writeFileSync(`./lib/vn/${data.body}.mp3`, nv)
            global.vn.push(data.body)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn))
            data.reply(`Berhasil menambahkan vn ${data.body} dari database`)
        })
        Client.cmd.on('delvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(!vn.includes(data.body)) return data.reply('vn tidak ditemukan!')
            global.vn.splice(vn.indexOf(data.body), 1)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn, null, 2))
            fs.unlinkSync(`./lib/vn/${data.body}.mp3`)
            data.reply(`Berhasil mengahpus vn ${data.body} dari database`)
        })
        Client.cmd.on('listvn', async (data) => {
            let listvn = 'Ketik nama vn untuk mendownload vn\n\n*List vn*:\n\n'
            vn.forEach((vnn, i) => listvn += `*${i+1}*. ${vnn}\n`)
            data.reply(listvn)
        })
        Client.cmd.on('tebakgambar', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			if (global.tebakgambar[data.from] && global.tebakgambar[data.from].id) return data.reply("Masih ada soal yang berjalan")
            const getSoal = await axios.get(`${configs.apiUrl}/api/tebakgambar?apikey=${configs.zeksKey}`)
			ses = Date.now()
			send = await Client.sendFileFromUrl(data.from, getSoal.data.result.soal, "soal.jpg", "Waktu menjawab 30 detik!", data.message)
			global.tebakgambar[data.from] = {jawaban: getSoal.data.result.jawaban, id: ses}
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 20 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 10 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from, "Waktu habis", send)
			Client.reply(data.from,`Jawabannya adalah: ${getSoal.data.result.jawaban}`, send)
			global.tebakgambar[data.from] = {}
			
        })
        Client.cmd.on('clearall', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const getAll = await client.chats.all()
            getAll.forEach(async chats => {
                if(chats.jid.endsWith('@g.us')) await client.modifyChat(chats.jid, 'clear')
                else await client.modifyChat(chats.jid, 'delete')
            })
            data.reply('OkE')
        })
        Client.cmd.on('resetlimit', async (data) => {
            if(!data.isOwner) return data.reply('Owner only!')
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            for(users in dataUser) {
                dataUser[users].limit = 0
            }
            fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            console.log(color('[ INFO ]', 'cyan'), 'LIMIT RESETED!')
            data.reply('Sukses!')
        })
        Client.cmd.on('bc', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == '') return
            var list = await client.chats.all()
            mediaBuffer = data.type == 'extendedTextMessage' ? await data.downloadMediaQuotedMessage() : data.type == 'imageMessage' || data.type == 'videoMessage' ? await data.downloadMediaMessage() : null
            var ext = data.isQuotedImage ? 'jpg' : 'mp4'
            list.forEach(async dataC => {
                if(mediaBuffer) Client.sendFileFromBase64(dataC.jid, mediaBuffer.toString('base64'), `bc.${ext}`, `*BOT BROADCAST*\n\n${data.body} ${dataC.jid.endsWith('@g.us') ?'\n\n_#izin admin grup _*'+dataC.name+'*_' : ''}`)
                else Client.sendText(dataC.jid, `*BOT BROADCAST*\n\n${data.body}\n\n_#izin admin grup *${dataC.name}*_`)
            })
        })
        Client.cmd.on('join', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Link nya?`)
            Client.acceptInviteLink(data.body).then(() => data.reply('ok')).catch(() => data.reply('failed'))
        })
        Client.cmd.on('owner', async (data) => {
            Client.sendContact(data.from, { number: configs.ownerList[0].split('@')[0], name: 'owner' }, data.message)
        })
        Client.cmd.on('fetch', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('input url')
           axios.get(`${data.body}`)
           .then(res => {
             data.reply(res.data)
           })
           .catch(e => {
             data.reply('' + e)
           })
         })
        Client.cmd.on('premium', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            dataToPr = data.mentionedJidList.length ? data.mentionedJidList : [data.args[1] + "@s.whatsapp.net"] || null

            if(data.args[0].toLowerCase() == 'add') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums]) dataUser[nums] = {
                        limit: 0
                    }
                    dataUser[nums].premium = true
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
                data.reply(`Berhasil menambahkan user premium @${dataToPr.join(' @').replace(/@s.whatsapp.net/g, '')}`)
            } else if(data.args[0].toLowerCase() == 'del') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums] || !dataUser[nums].premium) return data.reply(`User @${nums.split('@')[0]} not premium!`)
                    dataUser[nums].premium = false
                    data.reply(`berasil menghapus user premium @${nums.split('@')[0]}`)
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            } else if(data.args[0].toLowerCase() == 'list') {
                strings = `LIST PREMIUM\n\n`
                for(var [num, val] of Object.entries(dataUser))
                    if(val.premium) strings += `~> @${num.split('@')[0]}\n`
                data.reply(strings)
            } else data.reply(`do u need example?\n\nExample:\n${data.prefix}premium add @0 \nor\n${data.prefix}premium add 62xxxx`)
        })
        /*NEWS*/
        Client.cmd.on('tribunnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/tribunews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 TRIBUNNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Link*: ${ttt[i].url}\n\n`
            }
            await data.reply(teks)
        })
        Client.cmd.on('liputannews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/liputan6?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 LIPUTANNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Kategori*: ${ttt[i].category}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        Client.cmd.on('foxnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/foxnews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 FOXNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].content}\n*Negara*: ${ttt[i].country}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        /*GROUP*/
        Client.cmd.on('afk', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            timesNow = moment(data.t * 1000).format('YYYY-MM-DD HH:mm:ss')
            afkJs.addAfk(data.from, data.sender, data.body, timesNow)
            Client.sendText(data.from, "```" + `${data.pushname} [@${data.sender.split('@')[0]}] sedang AFK\n\nAlasan: ${data.body}\nTime: ${timesNow}` + "```")
        })
	     Client.cmd.on('welcome', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].welcome) return data.reply('Already on!')
                dataGc[data.from].welcome = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].welcome) return data.reply('Already off!')
                dataGc[data.from].welcome = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
	    Client.cmd.on('play', async (data) =>{
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}youtubedl [ query ]*\nContoh : ${data.prefix}youtubedl Alan walker`)
            data.reply(mess.wait)
			axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`).then((xres) =>{
			if (!xres.data.status || !xres.data.result) return data.reply(xres.data.message)
			secs = []
			xres.data.result.splice(10, xres.data.result.length)
			xres.data.result.forEach((xres, i) =>{
				secs.push({
                        "rows": [
                           {
                              "title": "MP3",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp3 ${xres.video.url}`
                           },
						   {
                              "title": "MP4",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp4 ${xres.video.url}`
                           }
                        ], title: i+1})
			})
			let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": "*YOUTUBE DOWNLOAD*",
                  "description": `*Result for : ${data.body}*\n*Download video by click button bellow*`,
                  "buttonText": "Result",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
			})
        })
        Client.cmd.on('leave', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].leave) return data.reply('Already on!')
                dataGc[data.from].leave = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].leave) return data.reply('Already off!')
                dataGc[data.from].leave = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antitagall', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antitagall) return data.reply('Already on!')
                dataGc[data.from].antitagall = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antitagall) return data.reply('Already off!')
                dataGc[data.from].antitagall = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antilink', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antilink) return data.reply('Already on!')
                dataGc[data.from].antilink = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antilink) return data.reply('Already off!')
                dataGc[data.from].antilink = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('revoke', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.revokeInvite(data.from)
            data.reply(`Linkgroup berhasil di reset oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('group', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.args[0] && data.args[0].toLowerCase() == 'open') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, false)
                data.reply(`Group telah dibuka oleh admin @${data.sender.split('@')[0]}`)
            } else if(data.args[0] && data.args[0].toLowerCase() == 'close') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, true)
                data.reply(`Group telah ditutup oleh admin @${data.sender.split('@')[0]}`)
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh open/close",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "open",
                              "rowId": `${data.prefix}${data.command} open`
                           },
						   {
                              "title": "close",
                              "rowId": `${data.prefix}${data.command} close`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('bye', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.groupLeave(data.from)
        })
        Client.cmd.on('tagall', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            text = `『 *_TAG ALL_* 』\n\n*Total member*: ${data.groupMetadata.participants.length}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​


`
            data.groupMetadata.participants.forEach((member, i) => {
                text += `${i+1}. ⤷@${member.jid.split('@')[0]}\n`
            })
            Client.sendText(data.from, text)
        })
        Client.cmd.on('setgroupicon', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(data.from, dlfile)
            data.reply(`success!, group icon has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupname', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} Elios`)
            client.groupUpdateSubject(data.from, `${data.body}`)
            data.reply(`Nama group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupdesc', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} Elios`)
            client.groupUpdateDescription(data.from, `${data.body}`)
            data.reply(`Deskripsi group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('promote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupMakeAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menambahkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')} sebagai admin.`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('demote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupDemoteAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menghapus admin @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('kick', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupRemove(data.from, data.mentionedJidList).then(() => data.reply(`Berhasil mengeluarkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('add', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ nomor ]*\nContoh : ${data.prefix}${data.command} 6285736996646`)
            args = data.args.map(mp => mp + "@s.whatsapp.net")
            client.groupAdd(data.from, args).then(() => data.reply(`Berhasil menambahkan @${data.args.join(' @')}`)).catch(() => data.reply('Unable to invite'))
        })
        Client.cmd.on('testing', async (data) => {
            console.log(client)
        })
        /*IMAGE MAKER*/
        Client.cmd.on('missing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'missing.jpeg')
                text = data.body.split('|')
                const getAxios = await axios(`${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                text = data.body.split('|')
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, Example: tag someone or reply image\n${data.prefix}missing lost|idk|call xxxxx|@${client.user.jid.split('@')[0]}`)

        })
        Client.cmd.on('calender', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('removebg', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('drawing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        Client.cmd.on('sketch', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        //If you want case method
        Client.cmd.on('*', async (data) => {
            const {
                args,
                body,
                message,
                prefix,
                from,
                sender,
                command,
                isOwner,
                type,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = data

//Function Button Location
function _0x2778(_0xa93881,_0x38c242){const _0x300a3f=_0x4b06();return _0x2778=function(_0x4e1b71,_0x1d611b){_0x4e1b71=_0x4e1b71-(-0x933+0x2*-0x712+0x191b);let _0x1ca5ff=_0x300a3f[_0x4e1b71];if(_0x2778['EXmypH']===undefined){var _0x5b38ec=function(_0x3dc00){const _0x4b65fe='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x9b384b='',_0x1d2818='',_0x6a9cad=_0x9b384b+_0x5b38ec;for(let _0x111d4e=0x90*-0x2b+-0x732+0x1f62,_0x1fc0ef,_0x247939,_0x29fca3=-0x572+-0x3dd*-0x2+-0x92*0x4;_0x247939=_0x3dc00['charAt'](_0x29fca3++);~_0x247939&&(_0x1fc0ef=_0x111d4e%(-0x237d+-0x6f8+-0x1*-0x2a79)?_0x1fc0ef*(0x7de+0x2a*-0xe3+0x1da0)+_0x247939:_0x247939,_0x111d4e++%(-0x1364+-0x662+-0xce5*-0x2))?_0x9b384b+=_0x6a9cad['charCodeAt'](_0x29fca3+(0xa0d+-0x1*0x1303+0x900))-(0x2ba+-0x1dc6+0x1b16)!==0xdd3+0x2114+-0x1*0x2ee7?String['fromCharCode'](-0x8b8+-0x7a+0xa31&_0x1fc0ef>>(-(0x93*-0x16+0xdaa+-0x83*0x2)*_0x111d4e&-0x49*0x27+-0x2488+-0x5*-0x989)):_0x111d4e:-0x4a*-0x3e+0x879+-0x1a65){_0x247939=_0x4b65fe['indexOf'](_0x247939);}for(let _0x48ae97=-0x30*-0x9a+0x137*-0x17+-0x1*0xef,_0x206af4=_0x9b384b['length'];_0x48ae97<_0x206af4;_0x48ae97++){_0x1d2818+='%'+('00'+_0x9b384b['charCodeAt'](_0x48ae97)['toString'](-0x22c9+-0xc1*0x14+0x31ed))['slice'](-(-0x938+0x228a+-0x1950));}return decodeURIComponent(_0x1d2818);};_0x2778['XqfWki']=_0x5b38ec,_0xa93881=arguments,_0x2778['EXmypH']=!![];}const _0x1e1e51=_0x300a3f[-0x22e9*-0x1+0x2c8*0x1+-0x25b1],_0x202de8=_0x4e1b71+_0x1e1e51,_0x4a8bcd=_0xa93881[_0x202de8];if(!_0x4a8bcd){const _0x32160d=function(_0x2ec7e9){this['ttvULk']=_0x2ec7e9,this['ZoZrAn']=[-0x133a+-0x2179+0x34b4,-0x8c9+0x2442+-0x1b79,0x21ef+0x1*0x2456+-0x4645],this['iePpUW']=function(){return'newState';},this['ylLNDk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['njDNVa']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x32160d['prototype']['wPCbtF']=function(){const _0x557959=new RegExp(this['ylLNDk']+this['njDNVa']),_0x2c920f=_0x557959['test'](this['iePpUW']['toString']())?--this['ZoZrAn'][-0x56*-0x11+-0x4a5+-0x110*0x1]:--this['ZoZrAn'][0xe10+-0x22*0x17+0xb02*-0x1];return this['iDWlVe'](_0x2c920f);},_0x32160d['prototype']['iDWlVe']=function(_0x482c32){if(!Boolean(~_0x482c32))return _0x482c32;return this['bpNDAJ'](this['ttvULk']);},_0x32160d['prototype']['bpNDAJ']=function(_0x456750){for(let _0x4bc4cd=0x1*-0x1078+-0x16e+0x11e6,_0x4ec333=this['ZoZrAn']['length'];_0x4bc4cd<_0x4ec333;_0x4bc4cd++){this['ZoZrAn']['push'](Math['round'](Math['random']())),_0x4ec333=this['ZoZrAn']['length'];}return _0x456750(this['ZoZrAn'][0x5a8+0xb6*-0x2c+0x520*0x5]);},new _0x32160d(_0x2778)['wPCbtF'](),_0x1ca5ff=_0x2778['XqfWki'](_0x1ca5ff),_0xa93881[_0x202de8]=_0x1ca5ff;}else _0x1ca5ff=_0x4a8bcd;return _0x1ca5ff;},_0x2778(_0xa93881,_0x38c242);}(function(_0x4b3d2a,_0x4e050c){const _0x5d5a3e=_0x4b3d2a();function _0x488348(_0x4b3762,_0x2a8dfe,_0x456f18,_0x317ad2){return _0x2778(_0x4b3762- -0x7b,_0x456f18);}function _0x2fd387(_0x355322,_0x3dc1c2,_0x4b33be,_0x293c9d){return _0x2778(_0x293c9d-0x27a,_0x4b33be);}while(!![]){try{const _0x5a669c=-parseInt(_0x488348(0x161,0x146,0x156,0x165))/(0x14bf+-0x2282+0xdc4)+-parseInt(_0x488348(0x157,0x16f,0x157,0x154))/(-0xe3*-0x10+0x787+-0x15b5*0x1)*(parseInt(_0x2fd387(0x479,0x470,0x457,0x476))/(-0x145c+-0x1d9+0x1638))+-parseInt(_0x488348(0x170,0x179,0x191,0x194))/(-0x1*0x1b62+-0xf*-0x16+0x3*0x8b4)+-parseInt(_0x2fd387(0x495,0x46f,0x459,0x471))/(0x90f*-0x2+-0x373*-0x7+0x301*-0x2)*(-parseInt(_0x2fd387(0x470,0x467,0x457,0x45c))/(0x2*-0x4b6+-0x1*0xbe7+0x1559))+parseInt(_0x2fd387(0x46c,0x490,0x460,0x481))/(0x16a8+-0x1be9+-0x4*-0x152)+parseInt(_0x488348(0x14d,0x166,0x136,0x131))/(-0xef2+-0x2053+0x1*0x2f4d)+-parseInt(_0x2fd387(0x47b,0x47a,0x46b,0x46e))/(0xfdf+0x7*0x31+0x1*-0x112d)*(-parseInt(_0x488348(0x187,0x1a4,0x185,0x165))/(0x1c02+0x4dd*0x1+-0x20d5));if(_0x5a669c===_0x4e050c)break;else _0x5d5a3e['push'](_0x5d5a3e['shift']());}catch(_0x547931){_0x5d5a3e['push'](_0x5d5a3e['shift']());}}}(_0x4b06,0x11*0x6be+0x89283+0x22*-0x15c5));const _0x460ca1=function(){const _0x5548e8={};_0x5548e8[_0x33ba46(-0x1a6,-0x188,-0x172,-0x190)]=function(_0x19d8da,_0x12c925){return _0x19d8da!==_0x12c925;};function _0x45ae2c(_0x2884e6,_0xaa594e,_0x2736d3,_0x1c8788){return _0x2778(_0x2736d3- -0x3b2,_0x1c8788);}_0x5548e8[_0x33ba46(-0x15e,-0x171,-0x175,-0x15b)]=_0x45ae2c(-0x1c5,-0x1b1,-0x1ad,-0x1c1);const _0x324387=_0x5548e8;let _0x2136d7=!![];function _0x33ba46(_0x4ee53d,_0xbd0745,_0x45b3e2,_0x24174e){return _0x2778(_0x24174e- -0x359,_0x45b3e2);}return function(_0x2641ee,_0x4ec681){const _0x216d46=_0x2136d7?function(){function _0x3f216c(_0x2eeda9,_0x24b6b7,_0x31226d,_0x509533){return _0x2778(_0x31226d- -0x12e,_0x509533);}function _0x4f4c18(_0x49cb08,_0x4e13b1,_0x4b669b,_0x2e6bf2){return _0x2778(_0x4e13b1-0x25c,_0x4b669b);}if(_0x4ec681){if(_0x324387['uYtzS'](_0x324387[_0x4f4c18(0x468,0x45a,0x45e,0x476)],_0x3f216c(0xd4,0xc3,0xc0,0xb3))){const _0x30f325=_0x4ec681['apply'](_0x2641ee,arguments);return _0x4ec681=null,_0x30f325;}else{const _0x4bb2bc=_0x47de2c?function(){if(_0x4516a5){const _0x31120b=_0x26fbd8['apply'](_0xc39069,arguments);return _0x484735=null,_0x31120b;}}:function(){};return _0x484566=![],_0x4bb2bc;}}}:function(){};return _0x2136d7=![],_0x216d46;};}(),_0x26e792=_0x460ca1(this,function(){function _0x51c8c8(_0xbeb00e,_0xab34c3,_0x48df67,_0x4bee73){return _0x2778(_0x48df67- -0x356,_0xab34c3);}const _0x2ef008={};_0x2ef008[_0x37efab(0x4fb,0x4d7,0x4eb,0x4f6)]=_0x37efab(0x4c7,0x4ca,0x4ac,0x4e9)+'+$';function _0x37efab(_0x240333,_0x2d195e,_0x345ed9,_0x4402a3){return _0x2778(_0x2d195e-0x2da,_0x240333);}const _0x47010a=_0x2ef008;return _0x26e792['toString']()[_0x51c8c8(-0x141,-0x155,-0x150,-0x14a)](_0x47010a[_0x51c8c8(-0x167,-0x141,-0x159,-0x175)])[_0x37efab(0x4c8,0x4de,0x4bd,0x4d2)]()[_0x51c8c8(-0x18d,-0x19c,-0x182,-0x162)+'r'](_0x26e792)[_0x37efab(0x4d2,0x4e0,0x4e1,0x4ed)](_0x47010a[_0x51c8c8(-0x155,-0x179,-0x159,-0x13f)]);});_0x26e792();const _0x3722bd=function(){let _0x30f1b2=!![];return function(_0x6d0cc4,_0x236c65){const _0x5324b6=_0x30f1b2?function(){function _0x9132d4(_0x364531,_0x2a617e,_0x4bd509,_0x5f4aea){return _0x2778(_0x364531- -0x23,_0x4bd509);}if(_0x236c65){const _0x5ab366=_0x236c65[_0x9132d4(0x1ac,0x19e,0x1cb,0x1a7)](_0x6d0cc4,arguments);return _0x236c65=null,_0x5ab366;}}:function(){};return _0x30f1b2=![],_0x5324b6;};}(),_0x3813ce=_0x3722bd(this,function(){const _0x4bb318={'jnjgX':function(_0x53c5f5,_0x18ea5f){return _0x53c5f5(_0x18ea5f);},'srvKJ':function(_0x487362,_0x88b5b6){return _0x487362+_0x88b5b6;},'PtIVm':function(_0x2258c1,_0x5805fe){return _0x2258c1+_0x5805fe;},'FBJJe':'return\x20(fu'+_0x4ca8bd(0x47b,0x479,0x494,0x48f),'JPhcP':_0x4ca8bd(0x475,0x4a0,0x483,0x48b)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','jItsF':function(_0x354203){return _0x354203();},'plKok':function(_0x4d418f,_0x3b5297){return _0x4d418f===_0x3b5297;},'JlJZa':_0x564584(-0xcc,-0xad,-0xb3,-0xb6),'jCucM':function(_0x150749,_0x5fd9f8){return _0x150749===_0x5fd9f8;},'XyIfb':_0x564584(-0xa0,-0x9c,-0xb2,-0x85),'zQLkQ':'log','lMXfa':_0x564584(-0x8c,-0x98,-0xaa,-0xb3),'efDLm':'info','fdRZx':_0x564584(-0xb3,-0xb6,-0xd1,-0xbd),'npQAg':'exception','jlpBk':_0x4ca8bd(0x47e,0x476,0x48c,0x494),'efoBv':_0x564584(-0xb5,-0xa1,-0xbe,-0xb3),'zupXl':function(_0x496ba4,_0x1f18f9){return _0x496ba4<_0x1f18f9;}};let _0x373dfd;try{if(_0x4bb318[_0x4ca8bd(0x4bd,0x4b3,0x49d,0x4b3)](_0x4bb318['JlJZa'],_0x4bb318[_0x564584(-0xa5,-0x8a,-0x85,-0x90)])){const _0x345d28=_0x4bb318[_0x4ca8bd(0x491,0x47d,0x487,0x491)](Function,_0x4bb318['PtIVm']('return\x20(fu'+_0x564584(-0xa0,-0x89,-0x8a,-0x9d),_0x4bb318[_0x564584(-0x7d,-0x85,-0x83,-0x89)])+');');_0x373dfd=_0x4bb318[_0x564584(-0x89,-0xa6,-0xbc,-0xb9)](_0x345d28);}else{const _0x150e61=_0x4bb318[_0x564584(-0x7a,-0x96,-0x87,-0xb7)](_0x1b9701,_0x4bb318['srvKJ'](_0x4bb318[_0x564584(-0x98,-0x95,-0x7d,-0xad)](_0x4bb318[_0x564584(-0x8a,-0x9d,-0x8b,-0xa5)],_0x4bb318['JPhcP']),');'));_0x2df163=_0x4bb318[_0x564584(-0xad,-0xa6,-0xb6,-0x9e)](_0x150e61);}}catch(_0x505b21){if(_0x4bb318[_0x564584(-0x7c,-0x72,-0x55,-0x8a)](_0x4bb318[_0x564584(-0xb3,-0xaf,-0x8d,-0x94)],_0x4bb318['XyIfb']))_0x373dfd=window;else{const _0x94acc5=_0x31a135?function(){function _0x3745b9(_0x487d6d,_0x4380f6,_0x43a26d,_0x565264){return _0x4ca8bd(_0x487d6d-0x13c,_0x4380f6-0x199,_0x565264- -0x14e,_0x487d6d);}if(_0x459042){const _0x34b7d5=_0xc7406e[_0x3745b9(0x308,0x305,0x302,0x323)](_0x149806,arguments);return _0x52ee1b=null,_0x34b7d5;}}:function(){};return _0x19f374=![],_0x94acc5;}}const _0x2c8f2a=_0x373dfd[_0x564584(-0xb2,-0x92,-0x91,-0x92)]=_0x373dfd['console']||{};function _0x564584(_0x48171d,_0xb9c645,_0x4a5074,_0x134217){return _0x2778(_0xb9c645- -0x27b,_0x134217);}const _0x15e0ef=[_0x4bb318[_0x564584(-0xaa,-0xaa,-0xc7,-0x89)],_0x4bb318[_0x564584(-0xb7,-0xa0,-0x8b,-0x89)],_0x4bb318[_0x4ca8bd(0x4a3,0x4ad,0x4aa,0x48e)],_0x4bb318[_0x564584(-0x68,-0x83,-0x87,-0x9a)],_0x4bb318[_0x4ca8bd(0x4bc,0x4bd,0x4a2,0x48b)],_0x4bb318[_0x564584(-0xb5,-0xa4,-0xc2,-0xc8)],_0x4bb318[_0x564584(-0x96,-0xb4,-0xd3,-0xb9)]];function _0x4ca8bd(_0x4dcd21,_0x56c2d4,_0x19f94e,_0x51519f){return _0x2778(_0x19f94e-0x2a2,_0x51519f);}for(let _0xbd69fb=0x37a*0x5+0xa3*-0x29+0xcb*0xb;_0x4bb318['zupXl'](_0xbd69fb,_0x15e0ef[_0x4ca8bd(0x454,0x478,0x46f,0x489)]);_0xbd69fb++){const _0x5bde4f=_0x3722bd['constructo'+'r'][_0x564584(-0xb2,-0xb1,-0xa6,-0xbf)][_0x4ca8bd(0x475,0x480,0x482,0x46d)](_0x3722bd),_0x5a6d47=_0x15e0ef[_0xbd69fb],_0x5bf4d9=_0x2c8f2a[_0x5a6d47]||_0x5bde4f;_0x5bde4f[_0x4ca8bd(0x487,0x479,0x489,0x48e)]=_0x3722bd[_0x564584(-0x7e,-0x9b,-0x96,-0x8b)](_0x3722bd),_0x5bde4f[_0x4ca8bd(0x4a4,0x497,0x4a6,0x4bd)]=_0x5bf4d9[_0x4ca8bd(0x489,0x4ab,0x4a6,0x488)][_0x564584(-0x86,-0x9b,-0xb7,-0xb9)](_0x5bf4d9),_0x2c8f2a[_0x5a6d47]=_0x5bde4f;}});_0x3813ce();const buttonLoc=async(_0x20c2c4,_0x5a5f7b,_0x4077dd,_0x1da028,_0x9d7b01)=>{const _0x4c7b23={};_0x4c7b23[_0x2a2e24(0x2fd,0x2d3,0x2e7,0x2db)+'itude']=0x0,_0x4c7b23[_0x2a2e24(0x310,0x2f6,0x307,0x311)+_0x2a2e24(0x2dd,0x2d4,0x2d4,0x2d6)]=0x0,_0x4c7b23[_0x2a2e24(0x2de,0x2c7,0x2e4,0x2e1)+'ail']=_0x9d7b01;const _0x57ac0a={};_0x57ac0a[_0x2a2e24(0x30f,0x2f7,0x2fa,0x2e4)+'id']=[configs[_0x2a2e24(0x31f,0x2fe,0x30d,0x2f7)][-0x152e*-0x1+0x350*-0x4+-0x91*0xe]],_0x57ac0a[_0x176d34(0x14d,0x137,0x141,0x156)+'t']=sender,_0x57ac0a[_0x2a2e24(0x305,0x30e,0x303,0x30e)]=message[_0x2a2e24(0x2ca,0x2e2,0x2de,0x2f0)]['id'],_0x57ac0a['quotedMess'+_0x2a2e24(0x2d3,0x2f9,0x2f2,0x2f3)]=message[_0x2a2e24(0x2c8,0x2ef,0x2d9,0x2e9)];function _0x176d34(_0x232c90,_0x571a76,_0x5e4a60,_0x240d67){return _0x2778(_0x5e4a60- -0xa7,_0x232c90);}function _0x2a2e24(_0x380ec0,_0x28d102,_0x4b4fb2,_0x4cb927){return _0x2778(_0x4b4fb2-0x10e,_0x28d102);}const _0x58414c={};_0x58414c['locationMe'+_0x2a2e24(0x2f6,0x2dd,0x2e1,0x2c2)]=_0x4c7b23,_0x58414c[_0x176d34(0x150,0x127,0x136,0x12b)+'t']=_0x5a5f7b,_0x58414c[_0x2a2e24(0x334,0x32b,0x311,0x322)]=_0x4077dd,_0x58414c[_0x176d34(0x13f,0x125,0x148,0x163)+'o']=_0x57ac0a,_0x58414c[_0x2a2e24(0x2fb,0x2ce,0x2e6,0x2c6)]=_0x1da028,_0x58414c[_0x176d34(0x15b,0x14c,0x163,0x168)]=0x6,buttonMessage=_0x58414c;const _0x40e007={};_0x40e007['buttonsMes'+_0x2a2e24(0x312,0x328,0x30f,0x310)]=buttonMessage;let _0x50fd7a=await client[_0x176d34(0x128,0x132,0x146,0x160)+'sageFromCo'+_0x2a2e24(0x301,0x324,0x301,0x2fc)](_0x20c2c4,_0x40e007,{});const _0x4cb8cf={};_0x4cb8cf[_0x176d34(0x163,0x153,0x153,0x137)]=!![],client[_0x2a2e24(0x2d8,0x2d9,0x2d2,0x2cd)+_0x2a2e24(0x310,0x31f,0x30f,0x330)](_0x50fd7a,_0x4cb8cf);};function _0x4b06(){const _0x21dc28=['ywDL','AM5Qz1G','uhrjvM0','x19WCM90B19F','CgfYDgLJAxbHBG','y29UC29Szq','DgfIBgu','mZaYmdaYmgTWwxfVwG','BwvUDgLVBMvKsG','ChjLCgfYzu1LCW','ELv5tKW','y29UDgv4DeLUzG','kcGOlISPkYKRkq','sMXkwMe','BMn0Aw9UkcKG','BNrLBNq','ody4nu5JugDqsG','C3rHBNPHswq','sLbOy1a','mZeXnJm1Bw1MqNbL','zMrswNG','zgvNCMvLC0XVBG','D2fPDezVCKfJAW','CgXlB2S','oufSy0D6wG','EfL5zwy','u1nfuMy','B3DUzxjmAxn0','BNbrqwC','C2fNzq','mtm5otbntLryqLy','zM9VDgvYvgv4Da','Dg9tDhjPBMC','DhDoCKi','C2vHCMnO','nZqXmdGZEhfwqLfx','zwzetg0','AKn1y00','AgvHzgvYvhLWzq','CMvSyxLxqu1LCW','zxjYB3i','z2L0DwrL','zwzVqNy','mZG0ntm2rfbTzgLj','DvL0ELm','ChjVDg90ExbL','BwvZC2fNzq','whLjzMi','BgvUz3rO','sef0rvq','yxbWBhK','A2v5','ELfmA1e','mJK3nJqYqwzPvgXk','C3nHz2u','y29UC3rYDwn0BW','AKL0C0y','ANbLz1rODw1IBG','AMXWqMS','yNv0Dg9UCW','zgvNCMvLC0XHDa','DhjHy2u','Be1yzMe','mJu1mdjpq2LUEM8','y29UDgvUDfrLEa','rKjksMu','CNzgD0W','yMLUza','E30Uy29UC3rYDq','mtjbEfrmvMi','D2fYBG'];_0x4b06=function(){return _0x21dc28;};return _0x4b06();}

            switch(command.toLowerCase()) {
                                case 'self':
					if (!isOwner) return data.reply(mess.ownerOnly)
					if (Client.self) return data.reply('Already Self Mode')
					Client.self = true
					data.reply('OK')
				break
				case 'public':
					if (!isOwner) return data.reply(mess.ownerOnly)
					if (!Client.self) return data.reply('Already Public Mode')
					Client.self = false
					data.reply('OK')
				break
                case 'command':
                case 'cmd':
                case 'menu':
                case 'help':
msp = '```'
num = `${sender.split("@")[0]}@s.whatsapp.net`

const formater3 = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
            const uptime3 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi
    
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good Evening'
                                        }
if(time2 < "20:00:00"){
var ucapanWaktu = 'Good afternoon'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'good afternoon'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
                                         }
if(time2 < "03:30:00"){
var ucapanWaktu = 'Good Evening'
										}

dataUsers = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
limits = configs.maxLimit - dataUsers[data.sender].limit
limite = data.isOwner ? 'Unlimited' : `${limits || 30}/${configs.maxLimit}`
prems = data.isOwner ? 'Owner' : 'User'
inpo = client.getStatus(sender)
let yo = client.user

teksny = `${ucapanWaktu} @${num.split("@")[0]}, Have a nice day

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
*⌦ USER INFO*
• _Name : ${data.pushname}_
• _Bio : ${inpo}_
• _Status : ${prems}_
• _Limit : ${limite}_

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
*⌦ BOT INFO*
• _Bot Name : ${configs.botname}_
• _Device : ${yo.phone.device_manufacturer}_
• _Model : ${yo.phone.device_model}_
• _OS : ${yo.phone.os_version}_
• _WA Ver : ${yo.phone.wa_version}_
• _Platform : ${os.platform()}_
• _RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
• _Ping : ${latensip.toFixed(4)} Second_

*Runtime Bot*
_${formater3(uptime3)}_

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
*⌦ ATTENTION*
• _Don\'t spam bot_
• _Sorry if it has a lot of bugs_
• _You can get the source code of this bot on my github_
• _If you are using whatsapp mod/old version, you can type ${data.prefix}listmenu_

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
*⌦ INSTAGRAM*
_${configs.igUrl}_

*⌦ GITHUB*
_${configs.githubUrl}_
`
footer = `© *${configs.botname} By ${configs.ownername}*`

let apajg = [{
	   buttonId: `${data.prefix}listmsg`,
 	   buttonText: { displayText: "⋮☰ MENU" },
  	   "type": "RESPONSE"
    	},
    {
     	   buttonId: `${data.prefix}infom`,
           buttonText: { displayText: "✓ INFO" },
           "type": "RESPONSE"
	}]
buttonLoc(data.from, teksny, footer, apajg, fs.readFileSync('./media/fake.jpeg'))
     break
case 'imgtag':
					if(!isAdmin || !data.isOwner) return data.reply('only be used by admin!')
				    var encmedia = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message
					media = await client.downloadMediaMessage(encmedia)
					konsol = data.body
					var group = await client.groupMetadata(data.from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					client.sendMessage(data.from,media,image,{contextInfo: { mentionedJid: mem }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "「 Bot 」\n Created By @akmal.okz", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fake.jpeg')} } }, caption: `${konsol}`})
			      break
case 'audtag':
			if(!isAdmin || !data.isOwner) return data.reply('only be used by admin!')
        	       var encmedia = data.isQuotedAudio ? JSON.parse(JSON.stringify(data.message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message
					media = await client.downloadMediaMessage(encmedia)
					var group = await client.groupMetadata(data.from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					client.sendMessage(data.from, media, audio,{contextInfo: { mentionedJid: mem },mimetype: 'audio/mp4', quoted : data.message, ptt: true })
					//onlydev.sendMessage(from,media,audio,{contextInfo: { mentionedJid: mem },quoted: mek, ptt : true })
					/*onlydev.sendMessage(from, options, text)*/
				break
                    /*STICKER*/
                case 'sgif':
                case 'sticker':
                case 's':
                case 'stiker':
                case 'stickergif':
                case 'stikergif':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    const getbuff = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    else Client.sendImageAsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    break
                case 'tomp3':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
					data.reply(mess.wait)
                    if(type != 'videoMessage' && !isQuotedVideo) return data.reply('Wrong format!')
					const getbuffz = data.isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message	
				    const dlfilez = await client.downloadMediaMessage(getbuffz)
                    convertMp3(dlfilez).then(data =>Client.sendFileFromUrl(from, data, 'p.mp3', '', message)).catch(er => Client.reply(from, 'Unexpected error!', message))
					break
/*
               case 'tomp3-2':
                if(isLimit(data.sender)) return data.reply(mess.limit)
					data.reply(mess.wait)
					if(type != 'videoMessage' && !isQuotedVideo) return data.reply('Wrong format!')
					encmedia = JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dvnz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (er) => {
						fs.unlinkSync(media)
						if (er) return reply(e)
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: data.message})
						fs.unlinkSync(ran)
					})
					break
*/
                case 'stikerwm':
                case 'stickerwm':
                case 'swm':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|elios`)
                    data.reply(mess.wait)
                    const getbuffs = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfiles = await client.downloadMediaMessage(getbuffs)
                    text = data.body.split('|')
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfiles.toString('base64'), message, { crop: false, pack: `${text[0]}`, author: `${text[1]}` })
                    else Client.sendImageAsSticker(from, dlfiles.toString('base64'), message, { pack: `${text[0]}`, author: `${text[1]}` })
                    break
                case 'stikeremoji':
                case 'stickeremoji':
                case 'semoji':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ emoji ]*\nContoh : ${data.prefix}${data.command} 😃`)
                        Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/emoji-image?apikey=${configs.zeksKey}&emoji=${encodeURIComponent(data.body)}`, message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'takestick':
                case 'takestik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(!data.isQuotedSticker) return data.reply('Reply sticker!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    const buff = await client.downloadMediaMessage(JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    Client.sendWebpAsSticker(data.from, buff.toString('base64'), data.message, {
                        pack: `${text[0]}`,
                        author: `${text[1]}`
                    })
                    break
                case 'stikerfire':
                case 'stickerfire':
                case 'sfire':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                case 'stikernobg':
                case 'stickernobg':
                case 'snobg':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                    /*TEXT MAKER*/
                case 'qrencode':
                case 'barcode':
                case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'gneon':
                case 'dropwater':
                case 'tfire':
                case 'sandw':
                case 'epep':
                case 'gplaybutton':
                case 'splaybutton':
                case 'text3dbox':
                case 'text3d':
                case 'logobp':
                case 'leavest':
                case 'thundertext':
                case 'tlight':
                case 'naruto':
                case 'crosslogo':
                case 'cslogo':
                case 'crismes':
                case 'flametext':
                case 'glowtext':
                case 'smoketext':
                case 'flowertext':
                case 'lithgtext':
                case 'nulis':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?text=${data.body}&apikey=${configs.zeksKey}`, 'gambar.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'wolflogo':
                case 'logoaveng':
                case 'phlogo':
                case 'marvellogo':
                case 'gtext':
                case 'pubglogo':
                case 'snowwrite':
                case 'watercolour':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks1|teks2 ]*\nContoh : ${data.prefix}${data.command} shiro|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}`, 'p.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
					break
                case 'tahta':
                case 'harta':
                case 'hartatahta':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, 'harta.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, message, {
                        crop: false,
                        pack: 'Pack',
                        author: 'AUTHOR'
                    })
                    break
                    /*SEARCHING*/
                case 'playstore':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playstore [ apk ]*\nContoh : ${data.prefix}playstore pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/sgplay?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 PLAYSTORE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Harga* : ${ttt[i].price}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi ${data.body} tidak ditemukan`)
                    }
                    break
                case 'wiki':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wiki [ query ]*\nContoh : ${data.prefix}wiki manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/wiki?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result.result}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf wiki ${data.body} tidak ditemukan`)
                    }
                    break	
                case 'kbbi':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}kbbi [ query ]*\nContoh : ${data.prefix}kbbi manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/kbbi?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result}\n*Source* : ${res.data.source}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf kbbi ${data.body} tidak ditemukan`)
                    }
                    break
                case 'film':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}film [ film ]*\nContoh : ${data.prefix}film doraemon`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/film?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 FILM 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf film ${data.body} tidak ditemukan`)
                    }
                    break
                case 'happymod':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}happymod [ apk ]*\nContoh : ${data.prefix}happymod pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/happymod?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 HAPPYMOD 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi MOD ${data.body} tidak ditemukan`)
                    }
                    break
                case 'iguser':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}iguser [ username ]*\nContoh : ${data.prefix}iguser jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/iguser?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Username* : ${ttt[i].username}\n*Full name*: ${ttt[i].full_name}\n*Akun private* : ${ttt[i].private_user}\n*Verified*: ${ttt[i].verified_user}\n*Link*: https://instagram.com/${ttt[i].username}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].profile_pic, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytsearch':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytsearch [ query ]*\nContoh : ${data.prefix}ytsearch jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 YOUTUBE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].video.title}\n*Durasi*: ${ttt[i].video.duration}\n*Upload* : ${ttt[i].video.upload_date}\n*View*: ${ttt[i].video.views}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].video.url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].video.thumbnail_src, 'axis.jpg', teks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytplaylist':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytplaylist[ channel ]*\nContoh : ${data.prefix}ytplaylist jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytplaylist?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var tekss = `*「 YOUTUBE PLAYLIST 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            tekss += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', tekss, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytchannel':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytchannel [ channel ]*\nContoh : ${data.prefix}ytchannel jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytchannel?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var eks = `*「 YOUTUBE CHANNEL 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', eks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
/*
		case 'buggc':
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              } catch {
              sendBug(from, `${q}`)
}
              break
*/
                case 'shopee':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}shopee [ query ]*\nContoh : ${data.prefix}shopee sepatu`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/shopee?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].name}\n*Harga*: ${ttt[i].harga}\n*Terjual* : ${ttt[i].terjual}\n*Lokasi*: ${ttt[i].location}\n*Deskripsi*: ${ttt[i].desc}\n*Stok*: ${ttt[i].stock}\n*Informasi*: ${ttt[i].information}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].img_detail[0], 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf produk ${data.body} tidak ditemukan`)
                    }
                    break
                case 'igstalk':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstalk [ query ]*\nContoh : ${data.prefix}igstalk elios_xyz`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/igstalk?apikey=${configs.zeksKey}&username=${data.body}`)
                        pe = res.data
                        tek = `*「 INSTAGRAM PROFILE 」*	
					
*Username:* @${pe.username}
*Nama:* ${pe.fullname}
*Pengikut:* ${pe.follower}
*Mengikuti*: ${pe.following}
*Deskripsi:* ${pe.bio}
*Link:* https://instagram.com/${pe.username}
`
                        Client.sendFileFromUrl(from, pe.profile_pic, 'p.jpg', tek, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'brainly':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}brainly [ query ]*\nContoh : ${data.prefix}brainly siapa penemu lampu`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/brainly?apikey=${configs.zeksKey}&q=${data.body}&count=3`)
                        for(let i = 0; i < res.data.data.length; i++) {
                            await Client.reply(from, `Pertanyaan : ${res.data.data[i].question}\n\nJawaban : ${res.data.data[i].answer[0].text}`, message)
                        }
                    } catch {
                        data.reply(`Maaf jawaban tidak ditemukan`)
                    }
                    break
                case 'spotify':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}spotify [ lagu ]*\nContoh : ${data.prefix}spotify melukis senja`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/spotify?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SPOTIFY 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Judul* : ${ttt[i].title}\n*Artis*: ${ttt[i].artists}\n*Album* : ${ttt[i].album}\n*Link*: ${ttt[i].url}\n*Preview*: ${ttt[i].preview_mp3}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf lagu ${data.body} tidak ditemukan`)
                    }
                    break
                case 'gsmarena':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}gsmarena [ hp ]*\nContoh : ${data.prefix}gsmarena asus rog phone 3`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/gsmArena?apikey=${configs.zeksKey}&q=${data.body}`)
                        captions = `*HP* : ${res.data.data.title}\n\n${res.data.data.full_desc.string}\n${res.data.data.link}`
                        Client.sendFileFromUrl(from, res.data.data.thumb, 'p.jpg', captions, message)
                    } catch (e) {
                        data.reply(`Maaf hp ${data.body} tidak ditemukan`)
                    }
                    break
                case 'searchmusic':
                case 'searchmusik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedAudio) {
                        files = await client.downloadMediaMessage(JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                        bodyForm = new FormData()
                        bodyForm.append('audio', files, 'music.mp3')
                        axios(`${configs.apiUrl}/api/searchmusic?apikey=${configs.zeksKey}`, {
                                method: 'POST',
                                headers: {
                                    ...bodyForm.getHeaders()
                                },
                                data: bodyForm.getBuffer()
                            })
                            .then(({
                                data
                            }) => {
                                if(data.status) {
                                    Client.reply(from, `_[ *Search Music* ]_\n\n*Title*: ${data.data.title}\n*Artists*: ${data.data.artists}\n*Genre*: ${data.data.genre}\n*Album*: ${data.data.album}\n*Release date*: ${data.data.release_date}`, message)
                                } else Client.reply(from, data.message, message)
                            }).catch(() => Client.reply(from, 'Internal server error!, try again later', message))
                    } else Client.reply(from, 'Wrong format!', message)
                    break
                case 'wallpaper':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wallpaper [ query ]*\nContoh : ${data.prefix}wallpaper kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/unsplash?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    n = res.data.result
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image.img_hd, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'pinterest':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}pinterest [ query ]*\nContoh : ${data.prefix}pinterest kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/pinimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'googleimage':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}googleimage [ query ]*\nContoh : ${data.prefix}googleimage kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/gimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'jagokata':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}jagokata [ apk ]*\nContoh : ${data.prefix}jagokata bersyukurlah`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jagokata?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    ttt = res.data.result
                    var teks = `*「 JAGOKATA 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                    ttt.forEach(tt1 => teks += `*Kata* : ${tt1.kata}\n*Author* : ${tt1.author}\n*Info*: ${tt1.author_info}\n*Link*: ${tt1.author_url}\n\n` )
                    await data.reply(teks)
                    break
                    /*PRIMBON*/
                case 'jodoh':
                case 'ramalpasangan':
                case 'pasangan':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ kamu|dia ]*\nContoh : ${data.prefix}${data.command} shiro|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    res = await axios.get(`${configs.apiUrl}/api/primbonjodoh?apikey=${configs.zeksKey}&nama1=${text[0]}&nama2=${text[1]}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    p = res.data.result
                    tek = `*Nama kamu* : ${p.nama1}\n*Nama dia* : ${p.nama2}\n\n*Hasil positif* : ${p.positif}\n*Hasil negatif* : ${p.negatif}`
                    Client.sendFileFromUrl(from, p.thumb, 'p.jpg', tek, message)
                    break
                case 'artinama':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artinama [ nama ]*\nContoh : ${data.prefix}artinama elios`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artinama?apikey=${configs.zeksKey}&nama=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result)
                    break
                case 'artimimpi':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artimimpi[ mimpi ]*\nContoh : ${data.prefix}artimimpi ular`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artimimpi?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result.string)
                    break
                    /*OTHER*/
                case 'jsholat':
                case 'jadwalsholat':
                case 'jadwalshalat':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} jakarta`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwalsholat?apikey=${configs.zeksKey}&daerah=${data.body}`)
                    data.reply(res.data.data.string)
                    break
                case 'jadwaltv':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} antv`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwaltv?apikey=${configs.zeksKey}&channel=${data.body}`)
                    data.reply(res.data.result)
                    break
                    /*GROUP*/
                case 'hidetag':
                case 'everyone':
                    if(!isAdmin) return data.reply('only be used by admin!')
                    var mention = []
                    data.groupMetadata.participants.forEach((member, i) => {
                        mention.push(member.jid)
                    })
                    data.reply(`${data.body}`, {
                        contextInfo: {
                            "mentionedJid": mention
                        }
                    })
                    break
                case 'linkgroup':
                    if(!data.isGroup) return data.reply(mess.group)
                    if(!data.botIsAdmin) return data.reply(mess.botAdmin)
                    linkgc = await client.groupInviteCode(data.from)
                    data.reply(`https://chat.whatsapp.com/${linkgc}`)
                    break
                    /*DLL*/
                case 'stickermenu':
                case 'stickercmd':
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/menus.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menampilkan menu!', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/sticks.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuat sticker dengan cara reply image/video dengan sticker ini', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/open.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuka group', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/close.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menutup group', {
                        quoted: resData
                    }))
                    break
                case 'tes':
                    data.reply('auto upt')
                    break
                case '':
		        case 'eval':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
                    try {
                        data.reply(JSON.stringify(eval(body), null, 3))
                    } catch (ers) {
                        data.reply(ers.toString())
                    }
                    break
		        case 'term':
				case '>':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
					exec(data.body, (err, stdout) => {	
				    if (err) return data.reply(err.toString())
					if (stdout) return data.reply(stdout)
					})
				    break
                case 'getquoted':
                    data.reply(JSON.stringify(message.message.extendedTextMessage.contextInfo, null, 3))
                    break
                case 'toimg':
                case 'togif':
                case 'tomedia':
                case 'toimage':
                    if(!isQuotedSticker) return data.reply('reply sticker!')
                    const mtdt = await data.downloadMediaQuotedMessage()
                    if(message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        axios(`https://serv-api.zeks.xyz/sticker/togif`, { method: "post", headers: { "content-type": 'application/json' }, data: {base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.gif', 'nih', message)
			})
                    } else {
                        axios(`https://serv-api.zeks.xyz/sticker/png`, { method: "post", headers: { "content-type": 'application/json' }, data: { base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.png', 'nih', message)
                        })
                    }
                    break
            }
        })
        //Handler Sticker Command
        Client.handlerStick.on("*", async (datas) => {
            const {
                idStick,
                message,
                from,
                sender,
                isOwner,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = datas
            console.log(`ID STICKER: ${idStick}`) //digunakan untuk mendapatkan id sticker
            /*	Cara bikin stickercmd 
                -ambil id sticker lewat console.log
            	-id sticker nya dibuat case 
                -case 'idnya': contoh ada dibawah
            	*/
            switch(idStick) {
                case '2.453746655066493e+123':
                const time3 = moment().tz('Africa/Nairobi').format('HH:mm:ss')
if(time3 < "23:59:00"){
var speech time = 'Good night'
                                        }
if(time3 < "20:00:00"){
var speech time = 'Good afternoon'
                                         }
if(time3 < "18:00:00"){
var ucapanWaktu = 'Good evening'
                                         }
if(time3 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
                                         }
if(time3 < "08:00:00"){
var ucapanWaktu = 'Good morning'
                                         }
if(time3 < "23:30:00"){
var ucapanWaktu = 'Good night'
										}
                    sec = []
          sec.push({
            "rows": [
              {
                "title": "List Menu",
                "description": "", 
                "rowId": `#listmenu`
              }, 
              {
                "title": "Group Menu", 
                "description": "", 
                "rowId": `#gmenu`
              }, 
              {
                "title": "Download Menu", 
                "description": "", 
                "rowId": `#dwmenu`
              }, 
              {
                "title": "Sticker Menu", 
                "description": "", 
                "rowId": `#smenu`
              }, 
              {
                "title": "Education Menu", 
                "description": "", 
                "rowId": `#emenu`
              }, 
              {
                "title": "Searching Menu", 
                "description": "", 
                "rowId": `#srcmenu`
              }, 
              {
                "title": "Primbon Menu", 
                "description": "", 
                "rowId": `#pmenu`
              }, 
              {
                "title": "Random Menu", 
                "description": "", 
                "rowId": `#rnmenu`
              }, 
              {
                "title": "Text Maker", 
                "description": "", 
                "rowId": `#txmaker`
              }, 
              {
                "title": "Image Maker", 
                "description": "", 
                "rowId": `#imgmaker`
              }, 
              {
                "title": "Other Menu", 
                "description": "", 
                "rowId": `#othmenu`
              }, 
              {
                "title": "Owner Menu", 
                "description": "", 
                "rowId": `#ownerm`
              }
              ], title: `Choose one`
              })
          	let po = client.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": `MENU J-BOT`,
                  "description": `${ucapanWaktu} kak ${pushname}`,
                  "buttonText": "MENU!",
                  "listType": "SINGLE_SELECT",
                  "sections": sec}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
                    break
                case '1.415045466145215e+123':
                    if(datas.isQuotedImage || datas.isQuotedVideo) {
                        const getBuffs = await client.downloadMediaMessage(JSON.parse(JSON.stringify(datas.message.message.stickerMessage.contextInfo).replace('quotedMessage', 'message')))
					if(isQuotedVideo) Client.sendMp4AsSticker(from, getBuffs.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                   	else Client.sendImageAsSticker(from, getBuffs.toString('base64'), message, {  pack: `${configs.pack}`, author: `${configs.author}` })    
                    }
                    break
			    case '1.4129505721465047e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    datas.reply(`Group telah dibuka oleh admin @${datas.sender.split('@')[0]}`)
				    break
			    case '1.3049292658533466e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    datas.reply(`Group telah ditutup oleh admin @${datas.sender.split('@')[0]}`)
				    break
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function isLimit(sender, count) {
    const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
    if(dataUser[sender].premium) return false
    if(dataUser[sender].limit >= configs.maxLimit) return true
    dataUser[sender].limit += count || 1
    fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
    return false
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
