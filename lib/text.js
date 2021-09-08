const moment = require('moment-timezone'); 

const listmenu = (prefix) => {
	let p = 0
	let a = 0
	return `*── 「 INFO 」 ──* 
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}speed
*${p+=1}.* ${prefix}runtime
*${p+=1}.* ${prefix}listvn
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}sourcecode

*── 「 GROUP ONLY 」 ──* 
*${p+=1}.* ${prefix}group *open|close*
*${p+=1}.* ${prefix}antilink *on|off*
*${p+=1}.* ${prefix}antitagall *on|off*
*${p+=1}.* ${prefix}antiviewonce *on|off*
*${p+=1}.* ${prefix}welcome *on|off*
*${p+=1}.* ${prefix}leave *on|off*
*${p+=1}.* ${prefix}setgroupicon *replyImage*
*${p+=1}.* ${prefix}setgroupname *text*
*${p+=1}.* ${prefix}setgroupdesc *text*
*${p+=1}.* ${prefix}hidetag *text*
*${p+=1}.* ${prefix}promote *@tag*
*${p+=1}.* ${prefix}demote *@tag*
*${p+=1}.* ${prefix}kick *@tag*
*${p+=1}.* ${prefix}add *number*
*${p+=1}.* ${prefix}getpp *@tag*
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave

*── 「 DOWNLOADER 」 ──* 
*${p+=1}.* ${prefix}play *query*
*${p+=1}.* ${prefix}playvid *query*
*${p+=1}.* ${prefix}youtubedl *query*
*${p+=1}.* ${prefix}ytmp3 *link*
*${p+=1}.* ${prefix}ytmp4 *link*
*${p+=1}.* ${prefix}igstory *username*
*${p+=1}.* ${prefix}ig *link*
*${p+=1}.* ${prefix}tiktok *link*
*${p+=1}.* ${prefix}joox *song*

*── 「 STICKER 」 ──* 
*${p+=1}.* ${prefix}stickerwm *pack|author*
*${p+=1}.* ${prefix}takestick *pack|author*
*${p+=1}.* ${prefix}toimg *replySticker*
*${p+=1}.* ${prefix}togif *replySticker*
*${p+=1}.* ${prefix}semoji *emoji*
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker

*── 「 EDUCATION 」 ──* 
*${p+=1}.* ${prefix}nulis *text*
*${p+=1}.* ${prefix}brainly *query*
*${p+=1}.* ${prefix}kbbi *query*
*${p+=1}.* ${prefix}wiki *query*

*── 「 SEARCHING 」 ──* 
*${p+=1}.* ${prefix}playstore *apk*
*${p+=1}.* ${prefix}happymod *apk*
*${p+=1}.* ${prefix}iguser *username*
*${p+=1}.* ${prefix}igstalk *username*
*${p+=1}.* ${prefix}ytsearch *query*
*${p+=1}.* ${prefix}ytplaylist *query*
*${p+=1}.* ${prefix}ytchannel *channel*
*${p+=1}.* ${prefix}shoppe *product*
*${p+=1}.* ${prefix}spotify *song*
*${p+=1}.* ${prefix}gsmarena *hp*
*${p+=1}.* ${prefix}searchmusic *replyAudio*
*${p+=1}.* ${prefix}wallpaper *query*
*${p+=1}.* ${prefix}pinterest *query*
*${p+=1}.* ${prefix}googleimage *query*
*${p+=1}.* ${prefix}jagokata *kata*

*── 「 PRIMBON 」 ──* 
*${p+=1}.* ${prefix}jodoh *kamu|dia*
*${p+=1}.* ${prefix}artinama *nama*
*${p+=1}.* ${prefix}artimimpi *mimpi*

*── 「 RANDOM 」 ──* 
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic

*── 「 TEXT MAKER 」 ──* 
*${p+=1}.* ${prefix}wolflogo *text1|text2*
*${p+=1}.* ${prefix}logoaveng *text1|text2*
*${p+=1}.* ${prefix}phlogo *text1|text2*
*${p+=1}.* ${prefix}marvellogo *text1|text2*
*${p+=1}.* ${prefix}gtext *text1|text2*
*${p+=1}.* ${prefix}pubglogo *text1|text2*
*${p+=1}.* ${prefix}snowwrite *text1|text2*
*${p+=1}.* ${prefix}watercolour *text1|text2*
*${p+=1}.* ${prefix}harta *text*
*${p+=1}.* ${prefix}thundertext *text*
*${p+=1}.* ${prefix}flametext *text*
*${p+=1}.* ${prefix}glowtext *text*
*${p+=1}.* ${prefix}smoketext *text*
*${p+=1}.* ${prefix}lithgtext *text*
*${p+=1}.* ${prefix}flowertext *text*
*${p+=1}.* ${prefix}bneon *text*
*${p+=1}.* ${prefix}matrix *text*
*${p+=1}.* ${prefix}breakwall *text*
*${p+=1}.* ${prefix}gneon *text*
*${p+=1}.* ${prefix}dropwater *text*
*${p+=1}.* ${prefix}tfire *text*
*${p+=1}.* ${prefix}sandw *text*
*${p+=1}.* ${prefix}epep *text*
*${p+=1}.* ${prefix}gplaybutton *text*
*${p+=1}.* ${prefix}splaybutton *text*
*${p+=1}.* ${prefix}text3dbox *text*
*${p+=1}.* ${prefix}text3d *text*
*${p+=1}.* ${prefix}logobp *text*
*${p+=1}.* ${prefix}leavest *text*
*${p+=1}.* ${prefix}tlight *text*
*${p+=1}.* ${prefix}naruto *text*
*${p+=1}.* ${prefix}crosslogo *text*
*${p+=1}.* ${prefix}cslogo *text*
*${p+=1}.* ${prefix}crismes *text*

*── 「 IMAGE MAKER 」 ──* 
*${p+=1}.* ${prefix}missing *text1|text2|text3|@tag*
*${p+=1}.* ${prefix}calender *replyImage / @tag*
*${p+=1}.* ${prefix}drawing *replyImage / @tag*
*${p+=1}.* ${prefix}sketch *replyImage / @tag*

*── 「 OTHER 」 ──* 
*${p+=1}.* ${prefix}tomp3 *replyVideo*
*${p+=1}.* ${prefix}removebg *replyImage / @tag*
*${p+=1}.* ${prefix}qrencode *text*
*${p+=1}.* ${prefix}barcode *text*
*${p+=1}.* ${prefix}jadwalsholat *daerah*
*${p+=1}.* ${prefix}jadwaltv *channel*
*${p+=1}.* ${prefix}tebakgambar
*${p+=1}.* ${prefix}fetch *url*

*── 「 ASUPAN 」 ──* 
*${p+=1}.* ${prefix}asupan *1 - 8*

*${a+=1}.* Ukhti
*${a+=1}.* Santuy
*${a+=1}.* +62
*${a+=1}.* Bocil
*${a+=1}.* Rika Gusriani
*${a+=1}.* Ghea
*${a+=1}.* Chika
*${a+=1}.* Random

*── 「 ANIME 」 ──* 
*${p+=1}.* ${prefix}waifu
*${p+=1}.* ${prefix}husbu
*${p+=1}.* ${prefix}neko
*${p+=1}.* ${prefix}hentai
*${p+=1}.* ${prefix}anime *judul*
*${p+=1}.* ${prefix}manga *judul*
*${p+=1}.* ${prefix}chara *nama*

*── 「 OWNER 」 ──* 
*${p+=1}.* ${prefix}setpp *replyImage*
*${p+=1}.* ${prefix} *eval*
*${p+=1}.* ${prefix}> *terminal*
*${p+=1}.* ${prefix}block *@tag*
*${p+=1}.* ${prefix}unblock *@tag*
*${p+=1}.* ${prefix}join *link*
*${p+=1}.* ${prefix}bc *text*
*${p+=1}.* ${prefix}addvn *replyAudio/vn*
*${p+=1}.* ${prefix}delvn *name*
*${p+=1}.* ${prefix}premium add *@tag*
*${p+=1}.* ${prefix}premium del *@tag*
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
`
}

const gmenu = (prefix) => {
	let p = 0
	return `*── 「 GROUP ONLY 」 ──* 

*${p+=1}.* ${prefix}group *open|close*
*${p+=1}.* ${prefix}antilink *on|off*
*${p+=1}.* ${prefix}antitagall *on|off*
*${p+=1}.* ${prefix}antiviewonce *on|off*
*${p+=1}.* ${prefix}welcome *on|off*
*${p+=1}.* ${prefix}leave *on|off*
*${p+=1}.* ${prefix}setgroupicon *replyImage*
*${p+=1}.* ${prefix}setgroupname *text*
*${p+=1}.* ${prefix}setgroupdesc *text*
*${p+=1}.* ${prefix}hidetag *text*
*${p+=1}.* ${prefix}promote *@tag*
*${p+=1}.* ${prefix}demote *@tag*
*${p+=1}.* ${prefix}kick *@tag*
*${p+=1}.* ${prefix}add *number*
*${p+=1}.* ${prefix}getpp *@tag*
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave`
}

const dwmenu = (prefix) => {
	let p = 0
	return `*── 「 DOWNLOADER 」 ──* 

*${p+=1}.* ${prefix}play *query*
*${p+=1}.* ${prefix}playvid *query*
*${p+=1}.* ${prefix}youtubedl *query*
*${p+=1}.* ${prefix}ytmp3 *link*
*${p+=1}.* ${prefix}ytmp4 *link*
*${p+=1}.* ${prefix}igstory *username*
*${p+=1}.* ${prefix}ig *link*
*${p+=1}.* ${prefix}tiktok *link*
*${p+=1}.* ${prefix}joox *song*`
}

const smenu = (prefix) => {
	let p = 0
	return `*── 「 STICKER 」 ──* 

*${p+=1}.* ${prefix}stickerwm *pack|author*
*${p+=1}.* ${prefix}takestick *pack|author*
*${p+=1}.* ${prefix}toimg *replySticker*
*${p+=1}.* ${prefix}togif *replySticker*
*${p+=1}.* ${prefix}semoji *emoji*
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker`
}

const emenu = (prefix) => {
	let p = 0
	return `*── 「 EDUCATION 」 ──* 

*${p+=1}.* ${prefix}nulis *text*
*${p+=1}.* ${prefix}brainly *query*
*${p+=1}.* ${prefix}kbbi *query*
*${p+=1}.* ${prefix}wiki *query*`
}

const srcmenu = (prefix) => {
	let p = 0
	return `*── 「 SEARCHING 」 ──* 

*${p+=1}.* ${prefix}playstore *apk*
*${p+=1}.* ${prefix}happymod *apk*
*${p+=1}.* ${prefix}iguser *username*
*${p+=1}.* ${prefix}igstalk *username*
*${p+=1}.* ${prefix}ytsearch *query*
*${p+=1}.* ${prefix}ytplaylist *query*
*${p+=1}.* ${prefix}ytchannel *channel*
*${p+=1}.* ${prefix}shoppe *product*
*${p+=1}.* ${prefix}spotify *song*
*${p+=1}.* ${prefix}gsmarena *hp*
*${p+=1}.* ${prefix}searchmusic *replyAudio*
*${p+=1}.* ${prefix}wallpaper *query*
*${p+=1}.* ${prefix}pinterest *query*
*${p+=1}.* ${prefix}googleimage *query*
*${p+=1}.* ${prefix}jagokata *kata*`
}

const pmenu = (prefix) => {
	let p = 0
	return `*── 「 PRIMBON 」 ──* 

*${p+=1}.* ${prefix}jodoh *kamu|dia*
*${p+=1}.* ${prefix}artinama *nama*
*${p+=1}.* ${prefix}artimimpi *mimpi*`
}

const rnmenu = (prefix) => {
	let p = 0
	return `*── 「 RANDOM 」 ──* 

*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic`
}

const txmaker = (prefix) => {
	let p = 0
	return `*── 「 TEXT MAKER 」 ──* 

*${p+=1}.* ${prefix}wolflogo *text1|text2*
*${p+=1}.* ${prefix}logoaveng *text1|text2*
*${p+=1}.* ${prefix}phlogo *text1|text2*
*${p+=1}.* ${prefix}marvellogo *text1|text2*
*${p+=1}.* ${prefix}gtext *text1|text2*
*${p+=1}.* ${prefix}pubglogo *text1|text2*
*${p+=1}.* ${prefix}snowwrite *text1|text2*
*${p+=1}.* ${prefix}watercolour *text1|text2*
*${p+=1}.* ${prefix}harta *text*
*${p+=1}.* ${prefix}thundertext *text*
*${p+=1}.* ${prefix}flametext *text*
*${p+=1}.* ${prefix}glowtext *text*
*${p+=1}.* ${prefix}smoketext *text*
*${p+=1}.* ${prefix}lithgtext *text*
*${p+=1}.* ${prefix}flowertext *text*
*${p+=1}.* ${prefix}bneon *text*
*${p+=1}.* ${prefix}matrix *text*
*${p+=1}.* ${prefix}breakwall *text*
*${p+=1}.* ${prefix}gneon *text*
*${p+=1}.* ${prefix}dropwater *text*
*${p+=1}.* ${prefix}tfire *text*
*${p+=1}.* ${prefix}sandw *text*
*${p+=1}.* ${prefix}epep *text*
*${p+=1}.* ${prefix}gplaybutton *text*
*${p+=1}.* ${prefix}splaybutton *text*
*${p+=1}.* ${prefix}text3dbox *text*
*${p+=1}.* ${prefix}text3d *text*
*${p+=1}.* ${prefix}logobp *text*
*${p+=1}.* ${prefix}leavest *text*
*${p+=1}.* ${prefix}tlight *text*
*${p+=1}.* ${prefix}naruto *text*
*${p+=1}.* ${prefix}crosslogo *text*
*${p+=1}.* ${prefix}cslogo *text*
*${p+=1}.* ${prefix}crismes *text*`
}

const imgmaker = (prefix) => {
	let p = 0
	return `*── 「 IMAGE MAKER 」 ──* 

*${p+=1}.* ${prefix}missing *text1|text2|text3|@tag*
*${p+=1}.* ${prefix}calender *replyImage / @tag*
*${p+=1}.* ${prefix}drawing *replyImage / @tag*
*${p+=1}.* ${prefix}sketch *replyImage / @tag*`
}

const othmenu = (prefix) => {
	let p = 0
	return `*── 「 OTHER 」 ──* 

*${p+=1}.* ${prefix}tomp3 *replyVideo*
*${p+=1}.* ${prefix}removebg *replyImage / @tag*
*${p+=1}.* ${prefix}qrencode *text*
*${p+=1}.* ${prefix}barcode *text*
*${p+=1}.* ${prefix}jadwalsholat *daerah*
*${p+=1}.* ${prefix}jadwaltv *channel*
*${p+=1}.* ${prefix}tebakgambar`
}

const info = (prefix) => {
	let p = 0
	return `*── 「 INFO 」 ──* 

*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}speed
*${p+=1}.* ${prefix}runtime
*${p+=1}.* ${prefix}listvn
*${p+=1}.* ${prefix}stickercmd
*${p+=1}.* ${prefix}sourcecode`
}

const nimem = (prefix) => {
	let p = 0
	return `*── 「 ANIME 」 ──* 

*${p+=1}.* ${prefix}waifu
*${p+=1}.* ${prefix}husbu
*${p+=1}.* ${prefix}neko
*${p+=1}.* ${prefix}hentai
*${p+=1}.* ${prefix}anime *judul*
*${p+=1}.* ${prefix}manga *judul*
*${p+=1}.* ${prefix}chara *nama*`
}

const ownerm = (prefix) => {
	let p = 0
	return `*── 「 OWNER 」 ──* 

*${p+=1}.* ${prefix}self
*${p+=1}.* ${prefix}public
*${p+=1}.* ${prefix}setpp *replyImage*
*${p+=1}.* => *eval*
*${p+=1}.* ^$ *exec*
*${p+=1}.* ${prefix}block *@tag*
*${p+=1}.* ${prefix}unblock *@tag*
*${p+=1}.* ${prefix}join *link*
*${p+=1}.* ${prefix}bc *text*
*${p+=1}.* ${prefix}addvn *replyAudio/vn*
*${p+=1}.* ${prefix}delvn *name*
*${p+=1}.* ${prefix}premium add *@tag*
*${p+=1}.* ${prefix}premium del *@tag*
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit`
}

const ingfo = `This bot is built with Node.js programming language / JavaScript
Source kode bot : https://github.com/justpiple/whatsapp-bot
If an error occurs you can contact the bot owner !owner

Thanks.
`


const mess = {
             wait: 'Tunggu sebentar yaa',
			 group: 'This command is only used in group!',
			 admin: 'Only admin can use this command!',
			 botAdmin: 'I`m not admin T_T',
			 limit: 'Your limit has been used up\n\nNote: the limit will be reset every time at 00.00',
			 ownerOnly: 'Only owner can use this command!',
			lockF: 'This feature is locked by the owner'
}

module.exports = {
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
	nimem,
	ownerm,
	ingfo,
	mess
}
