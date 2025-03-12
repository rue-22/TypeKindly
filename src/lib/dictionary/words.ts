export interface Word {
  tag: string; // Good OR Bad
  lang: string; // English OR Filipino
  word: string;
  count?: number;	
}

const words: Word[] = [
  { "tag": "Good", "lang": "English", "word": "gg" },
  { "tag": "Good", "lang": "English", "word": "love" },
  { "tag": "Good", "lang": "English", "word": "luv" },
  { "tag": "Good", "lang": "English", "word": "ly" },
  { "tag": "Good", "lang": "English", "word": "ily" },
  { "tag": "Good", "lang": "English", "word": "hart" },
  { "tag": "Good", "lang": "English", "word": "heart" },
  { "tag": "Good", "lang": "English", "word": "kindness" },
  { "tag": "Good", "lang": "English", "word": "compassion" },
  { "tag": "Good", "lang": "English", "word": "slay" },
  { "tag": "Good", "lang": "English", "word": "sympathize" },
  { "tag": "Good", "lang": "English", "word": "empathize" },
  { "tag": "Good", "lang": "English", "word": "sympathy" },
  { "tag": "Good", "lang": "English", "word": "empathy" },
  { "tag": "Good", "lang": "English", "word": "thank" },
  { "tag": "Good", "lang": "English", "word": "thanks" },
  { "tag": "Good", "lang": "English", "word": "thx" },
  { "tag": "Good", "lang": "English", "word": "ty" },
  { "tag": "Good", "lang": "English", "word": "tenks" },
  { "tag": "Good", "lang": "English", "word": "welcome" },
  { "tag": "Good", "lang": "English", "word": "wc" },
  { "tag": "Good", "lang": "English", "word": "yw" },
  { "tag": "Good", "lang": "English", "word": "welcs" },
  { "tag": "Good", "lang": "English", "word": "np" },
  { "tag": "Good", "lang": "English", "word": "noprobs" },
  { "tag": "Good", "lang": "English", "word": "noprob" },
  { "tag": "Good", "lang": "English", "word": "alright" },
  { "tag": "Good", "lang": "English", "word": "aight" },
  { "tag": "Good", "lang": "English", "word": "ayt" },
  { "tag": "Good", "lang": "English", "word": "happy" },
  { "tag": "Good", "lang": "English", "word": "exciting" },
  { "tag": "Good", "lang": "English", "word": "excitement" },
  { "tag": "Good", "lang": "English", "word": "excited" },
  { "tag": "Good", "lang": "English", "word": "joy" },
  { "tag": "Good", "lang": "English", "word": "joyful" },
  { "tag": "Good", "lang": "English", "word": "joyous" },
  { "tag": "Good", "lang": "English", "word": "sorry" },
  { "tag": "Good", "lang": "English", "word": "sry" },
  { "tag": "Good", "lang": "English", "word": "srry" },
  { "tag": "Good", "lang": "English", "word": "apology" },
  { "tag": "Good", "lang": "English", "word": "apologies" },
  { "tag": "Good", "lang": "English", "word": "forgive" },
  { "tag": "Good", "lang": "English", "word": "forgiveness" },
  { "tag": "Good", "lang": "English", "word": "hbd" },
  { "tag": "Good", "lang": "English", "word": "bday" },
  { "tag": "Good", "lang": "English", "word": "birthday" },
  { "tag": "Good", "lang": "English", "word": "accept" },
  { "tag": "Good", "lang": "English", "word": "fan" },
  { "tag": "Good", "lang": "English", "word": "stan" },
  { "tag": "Good", "lang": "English", "word": "cool" },
  { "tag": "Good", "lang": "English", "word": "epic" },
  { "tag": "Good", "lang": "English", "word": "amazing" },
  { "tag": "Good", "lang": "English", "word": "amazed" },
  { "tag": "Good", "lang": "English", "word": "respect" },
  { "tag": "Good", "lang": "English", "word": "respectfully" },
  { "tag": "Good", "lang": "English", "word": "rizz" },
  { "tag": "Good", "lang": "English", "word": "pretty" },
  { "tag": "Good", "lang": "English", "word": "cute" },
  { "tag": "Good", "lang": "English", "word": "qt" },
  { "tag": "Good", "lang": "English", "word": "cutie" },
  { "tag": "Good", "lang": "English", "word": "handsome" },
  { "tag": "Good", "lang": "English", "word": "beautiful" },
  { "tag": "Good", "lang": "English", "word": "beauty" },
  { "tag": "Good", "lang": "English", "word": "congratulations" },
  { "tag": "Good", "lang": "English", "word": "congrats" },
  { "tag": "Good", "lang": "English", "word": "congratz" },
  { "tag": "Good", "lang": "English", "word": "nice" },
  { "tag": "Good", "lang": "English", "word": "nc" },
  { "tag": "Good", "lang": "English", "word": "gj" },
  { "tag": "Good", "lang": "English", "word": "goodjob" },
  { "tag": "Good", "lang": "English", "word": "hope" },
  { "tag": "Good", "lang": "English", "word": "gl" },
  { "tag": "Good", "lang": "English", "word": "glhf" },
  { "tag": "Good", "lang": "English", "word": "goodluck" },
  { "tag": "Good", "lang": "English", "word": "good" },
  { "tag": "Good", "lang": "English", "word": "guds" },
  { "tag": "Good", "lang": "English", "word": "gud" },
  { "tag": "Good", "lang": "English", "word": "ok" },
  { "tag": "Good", "lang": "English", "word": "okay" },
  { "tag": "Good", "lang": "English", "word": "oks" },
  { "tag": "Good", "lang": "English", "word": "okie" },
  { "tag": "Good", "lang": "English", "word": "owks" },
  { "tag": "Good", "lang": "English", "word": "oke" },
  { "tag": "Good", "lang": "English", "word": "oki" },
  { "tag": "Good", "lang": "English", "word": "glad" },
  { "tag": "Good", "lang": "English", "word": "gratitude" },
  { "tag": "Good", "lang": "English", "word": "grateful" },
  { "tag": "Good", "lang": "English", "word": "gratefulness" },
  { "tag": "Good", "lang": "English", "word": "appreciate" },
  { "tag": "Good", "lang": "English", "word": "alrite" },
  { "tag": "Good", "lang": "English", "word": "merry" },
  { "tag": "Good", "lang": "English", "word": "xmas" },
  { "tag": "Good", "lang": "English", "word": "hello" },
  { "tag": "Good", "lang": "English", "word": "hi" },

  { "tag": "Good", "lang": "Filipino", "word": "po" },
  { "tag": "Good", "lang": "Filipino", "word": "opo" },
  { "tag": "Good", "lang": "Filipino", "word": "pong" },
  { "tag": "Good", "lang": "Filipino", "word": "ho" },
  { "tag": "Good", "lang": "Filipino", "word": "oho" },
  { "tag": "Good", "lang": "Filipino", "word": "salamat" },
  { "tag": "Good", "lang": "Filipino", "word": "ingat" },
  { "tag": "Good", "lang": "Filipino", "word": "patawad" },
  { "tag": "Good", "lang": "Filipino", "word": "paumanhin" },
  { "tag": "Good", "lang": "Filipino", "word": "mahal" },
  { "tag": "Good", "lang": "Filipino", "word": "ligaya" },
  { "tag": "Good", "lang": "Filipino", "word": "maligaya" },
  { "tag": "Good", "lang": "Filipino", "word": "maligayang" },
  { "tag": "Good", "lang": "Filipino", "word": "mabuhay" },
  { "tag": "Good", "lang": "Filipino", "word": "pogi" },
  { "tag": "Good", "lang": "Filipino", "word": "ampogi" },
  { "tag": "Good", "lang": "Filipino", "word": "ganda" },
  { "tag": "Good", "lang": "Filipino", "word": "maganda" },
  { "tag": "Good", "lang": "Filipino", "word": "rikit" },
  { "tag": "Good", "lang": "Filipino", "word": "marikit" },
  { "tag": "Good", "lang": "Filipino", "word": "nanay" },
  { "tag": "Good", "lang": "Filipino", "word": "tatay" },
  { "tag": "Good", "lang": "Filipino", "word": "nay" },
  { "tag": "Good", "lang": "Filipino", "word": "tay" },
  { "tag": "Good", "lang": "Filipino", "word": "mama" },
  { "tag": "Good", "lang": "Filipino", "word": "papa" },
  { "tag": "Good", "lang": "Filipino", "word": "lolo" },
  { "tag": "Good", "lang": "Filipino", "word": "lola" },
  { "tag": "Good", "lang": "Filipino", "word": "tita" },
  { "tag": "Good", "lang": "Filipino", "word": "ate" },
  { "tag": "Good", "lang": "Filipino", "word": "teh" },
  { "tag": "Good", "lang": "Filipino", "word": "kuya" },
  { "tag": "Good", "lang": "Filipino", "word": "aya" },
  { "tag": "Good", "lang": "Filipino", "word": "tito" },
  { "tag": "Good", "lang": "Filipino", "word": "ninang" },
  { "tag": "Good", "lang": "Filipino", "word": "ninong" },
  { "tag": "Good", "lang": "Filipino", "word": "galing" },
  { "tag": "Good", "lang": "Filipino", "word": "hanga" },
  { "tag": "Good", "lang": "Filipino", "word": "tagahanga" },
  { "tag": "Good", "lang": "Filipino", "word": "pagasa" },
  { "tag": "Good", "lang": "Filipino", "word": "mabuti" },
  { "tag": "Good", "lang": "Filipino", "word": "saya" },
  { "tag": "Good", "lang": "Filipino", "word": "masaya" },
  { "tag": "Good", "lang": "Filipino", "word": "masayang" },
  { "tag": "Good", "lang": "Filipino", "word": "bilib" },
  { "tag": "Good", "lang": "Filipino", "word": "mabait" },
  { "tag": "Good", "lang": "Filipino", "word": "bait" },
  { "tag": "Good", "lang": "Filipino", "word": "buti" },
  { "tag": "Good", "lang": "Filipino", "word": "kamusta" },
  { "tag": "Good", "lang": "Filipino", "word": "musta" },

  { "tag": "Bad", "lang": "Filipino", "word": "amputa" },
  { "tag": "Bad", "lang": "Filipino", "word": "bilat" },
  { "tag": "Bad", "lang": "Filipino", "word": "binibirocha" },
  { "tag": "Bad", "lang": "Filipino", "word": "bobo" },
  { "tag": "Bad", "lang": "Filipino", "word": "bogo" },
  { "tag": "Bad", "lang": "Filipino", "word": "bonak" },
  { "tag": "Bad", "lang": "Filipino", "word": "brocha" },
  { "tag": "Bad", "lang": "Filipino", "word": "burat" },
  { "tag": "Bad", "lang": "Filipino", "word": "buset" },
  { "tag": "Bad", "lang": "Filipino", "word": "bwesit" },
  { "tag": "Bad", "lang": "Filipino", "word": "bwisit" },
  { "tag": "Bad", "lang": "Filipino", "word": "demonyo" },
  { "tag": "Bad", "lang": "Filipino", "word": "inggit" },
  { "tag": "Bad", "lang": "Filipino", "word": "engot" },
  { "tag": "Bad", "lang": "Filipino", "word": "etits" },
  { "tag": "Bad", "lang": "Filipino", "word": "gaga" },
  { "tag": "Bad", "lang": "Filipino", "word": "gagi" },
  { "tag": "Bad", "lang": "Filipino", "word": "gago" },
  { "tag": "Bad", "lang": "Filipino", "word": "habal" },
  { "tag": "Bad", "lang": "Filipino", "word": "hayop" },
  { "tag": "Bad", "lang": "Filipino", "word": "hayup" },
  { "tag": "Bad", "lang": "Filipino", "word": "hinampak" },
  { "tag": "Bad", "lang": "Filipino", "word": "hinayupak" },
  { "tag": "Bad", "lang": "Filipino", "word": "hindot" },
  { "tag": "Bad", "lang": "Filipino", "word": "hindutan" },
  { "tag": "Bad", "lang": "Filipino", "word": "hudas" },
  { "tag": "Bad", "lang": "Filipino", "word": "iniyot" },
  { "tag": "Bad", "lang": "Filipino", "word": "inutel" },
  { "tag": "Bad", "lang": "Filipino", "word": "inutil" },
  { "tag": "Bad", "lang": "Filipino", "word": "iyot" },
  { "tag": "Bad", "lang": "Filipino", "word": "kagaguhan" },
  { "tag": "Bad", "lang": "Filipino", "word": "kagang" },
  { "tag": "Bad", "lang": "Filipino", "word": "kantot" },
  { "tag": "Bad", "lang": "Filipino", "word": "kantotan" },
  { "tag": "Bad", "lang": "Filipino", "word": "kantut" },
  { "tag": "Bad", "lang": "Filipino", "word": "kantutan" },
  { "tag": "Bad", "lang": "Filipino", "word": "kaululan" },
  { "tag": "Bad", "lang": "Filipino", "word": "kayat" },
  { "tag": "Bad", "lang": "Filipino", "word": "kiki" },
  { "tag": "Bad", "lang": "Filipino", "word": "kikinginamo" },
  { "tag": "Bad", "lang": "Filipino", "word": "kingina" },
  { "tag": "Bad", "lang": "Filipino", "word": "kinangina" },
  { "tag": "Bad", "lang": "Filipino", "word": "kinanginamo" },
  { "tag": "Bad", "lang": "Filipino", "word": "kupal" },
  { "tag": "Bad", "lang": "Filipino", "word": "pekpek" },
  { "tag": "Bad", "lang": "Filipino", "word": "leche" },
  { "tag": "Bad", "lang": "Filipino", "word": "leching" },
  { "tag": "Bad", "lang": "Filipino", "word": "kepkep" },
  { "tag": "Bad", "lang": "Filipino", "word": "lechugas" },
  { "tag": "Bad", "lang": "Filipino", "word": "lintik" },
  { "tag": "Bad", "lang": "Filipino", "word": "nakakaburat" },
  { "tag": "Bad", "lang": "Filipino", "word": "nimal" },
  { "tag": "Bad", "lang": "Filipino", "word": "ogag" },
  { "tag": "Bad", "lang": "Filipino", "word": "olok" },
  { "tag": "Bad", "lang": "Filipino", "word": "pakingshet" },
  { "tag": "Bad", "lang": "Filipino", "word": "pakshet" },
  { "tag": "Bad", "lang": "Filipino", "word": "pakyu" },
  { "tag": "Bad", "lang": "Filipino", "word": "pesteng" },
  { "tag": "Bad", "lang": "Filipino", "word": "piste" },
  { "tag": "Bad", "lang": "Filipino", "word": "pisteng" },
  { "tag": "Bad", "lang": "Filipino", "word": "yawa" },
  { "tag": "Bad", "lang": "Filipino", "word": "pota" },
  { "tag": "Bad", "lang": "Filipino", "word": "poki" },
  { "tag": "Bad", "lang": "Filipino", "word": "pokpok" },
  { "tag": "Bad", "lang": "Filipino", "word": "poyet" },
  { "tag": "Bad", "lang": "Filipino", "word": "pucha" },
  { "tag": "Bad", "lang": "Filipino", "word": "puchanggala" },
  { "tag": "Bad", "lang": "Filipino", "word": "puchangina" },
  { "tag": "Bad", "lang": "Filipino", "word": "puke" },
  { "tag": "Bad", "lang": "Filipino", "word": "puki" },
  { "tag": "Bad", "lang": "Filipino", "word": "pukinangina" },
  { "tag": "Bad", "lang": "Filipino", "word": "puking" },
  { "tag": "Bad", "lang": "Filipino", "word": "punyeta" },
  { "tag": "Bad", "lang": "Filipino", "word": "puta" },
  { "tag": "Bad", "lang": "Filipino", "word": "putang" },
  { "tag": "Bad", "lang": "Filipino", "word": "putangina" },
  { "tag": "Bad", "lang": "Filipino", "word": "putanginamo" },
  { "tag": "Bad", "lang": "Filipino", "word": "putaragis" },
  { "tag": "Bad", "lang": "Filipino", "word": "putragis" },
  { "tag": "Bad", "lang": "Filipino", "word": "puyet" },
  { "tag": "Bad", "lang": "Filipino", "word": "ratbu" },
  { "tag": "Bad", "lang": "Filipino", "word": "shunga" },
  { "tag": "Bad", "lang": "Filipino", "word": "sira ulo" },
  { "tag": "Bad", "lang": "Filipino", "word": "siraulo" },
  { "tag": "Bad", "lang": "Filipino", "word": "suso" },
  { "tag": "Bad", "lang": "Filipino", "word": "susu" },
  { "tag": "Bad", "lang": "Filipino", "word": "tae" },
  { "tag": "Bad", "lang": "Filipino", "word": "taena" },
  { "tag": "Bad", "lang": "Filipino", "word": "tamod" },
  { "tag": "Bad", "lang": "Filipino", "word": "tanga" },
  { "tag": "Bad", "lang": "Filipino", "word": "tangina" },
  { "tag": "Bad", "lang": "Filipino", "word": "taragis" },
  { "tag": "Bad", "lang": "Filipino", "word": "tarantado" },
  { "tag": "Bad", "lang": "Filipino", "word": "tete" },
  { "tag": "Bad", "lang": "Filipino", "word": "teti" },
  { "tag": "Bad", "lang": "Filipino", "word": "timang" },
  { "tag": "Bad", "lang": "Filipino", "word": "tinil" },
  { "tag": "Bad", "lang": "Filipino", "word": "tite" },
  { "tag": "Bad", "lang": "Filipino", "word": "titi" },
  { "tag": "Bad", "lang": "Filipino", "word": "tungaw" },
  { "tag": "Bad", "lang": "Filipino", "word": "ulol" },
  { "tag": "Bad", "lang": "Filipino", "word": "ulul" },
  { "tag": "Bad", "lang": "Filipino", "word": "ungas" },
  { "tag": "Bad", "lang": "Filipino", "word": "vovo" },

  { "tag": "Bad", "lang": "English", "word": "demon" },
  { "tag": "Bad", "lang": "English", "word": "devil" },
  { "tag": "Bad", "lang": "English", "word": "judas" },
  { "tag": "Bad", "lang": "English", "word": "arse" },
  { "tag": "Bad", "lang": "English", "word": "arsehole" },
  { "tag": "Bad", "lang": "English", "word": "ass" },
  { "tag": "Bad", "lang": "English", "word": "asshole" },
  { "tag": "Bad", "lang": "English", "word": "anal" },
  { "tag": "Bad", "lang": "English", "word": "anus" },
  { "tag": "Bad", "lang": "English", "word": "bastard" },
  { "tag": "Bad", "lang": "English", "word": "bitch" },
  { "tag": "Bad", "lang": "English", "word": "bitchass" },
  { "tag": "Bad", "lang": "English", "word": "bitches" },
  { "tag": "Bad", "lang": "English", "word": "blowjob" },
  { "tag": "Bad", "lang": "English", "word": "b1tch" },
  { "tag": "Bad", "lang": "English", "word": "boobs" },
  { "tag": "Bad", "lang": "English", "word": "boob" },
  { "tag": "Bad", "lang": "English", "word": "ballsack" },
  { "tag": "Bad", "lang": "English", "word": "bullshit" },
  { "tag": "Bad", "lang": "English", "word": "cock" },
  { "tag": "Bad", "lang": "English", "word": "cocksucker" },
  { "tag": "Bad", "lang": "English", "word": "crap" },
  { "tag": "Bad", "lang": "English", "word": "cunt" },
  { "tag": "Bad", "lang": "English", "word": "clit" },
  { "tag": "Bad", "lang": "English", "word": "clitoris" },
  { "tag": "Bad", "lang": "English", "word": "cumshot" },
  { "tag": "Bad", "lang": "English", "word": "cum" },
  { "tag": "Bad", "lang": "English", "word": "damn" },
  { "tag": "Bad", "lang": "English", "word": "damnit" },
  { "tag": "Bad", "lang": "English", "word": "dammit" },
  { "tag": "Bad", "lang": "English", "word": "dick" },
  { "tag": "Bad", "lang": "English", "word": "dickhead" },
  { "tag": "Bad", "lang": "English", "word": "dickrider" },
  { "tag": "Bad", "lang": "English", "word": "dicksucker" },
  { "tag": "Bad", "lang": "English", "word": "dumb" },
  { "tag": "Bad", "lang": "English", "word": "dumbass" },
  { "tag": "Bad", "lang": "English", "word": "ejaculate" },
  { "tag": "Bad", "lang": "English", "word": "dyke" },
  { "tag": "Bad", "lang": "English", "word": "fag" },
  { "tag": "Bad", "lang": "English", "word": "faggot" },
  { "tag": "Bad", "lang": "English", "word": "fatherfucker" },
  { "tag": "Bad", "lang": "English", "word": "fuck" },
  { "tag": "Bad", "lang": "English", "word": "fck" },
  { "tag": "Bad", "lang": "English", "word": "fucker" },
  { "tag": "Bad", "lang": "English", "word": "fucking" },
  { "tag": "Bad", "lang": "English", "word": "fatass" },
  { "tag": "Bad", "lang": "English", "word": "fellatio" },
  { "tag": "Bad", "lang": "English", "word": "goddamnit" },
  { "tag": "Bad", "lang": "English", "word": "goddamn" },
  { "tag": "Bad", "lang": "English", "word": "gangbang" },
  { "tag": "Bad", "lang": "English", "word": "goon" },
  { "tag": "Bad", "lang": "English", "word": "gooner" },
  { "tag": "Bad", "lang": "English", "word": "gangbanged" },
  { "tag": "Bad", "lang": "English", "word": "gaysex" },
  { "tag": "Bad", "lang": "English", "word": "hell" },
  { "tag": "Bad", "lang": "English", "word": "hoe" },
  { "tag": "Bad", "lang": "English", "word": "horseshit" },
  { "tag": "Bad", "lang": "English", "word": "jackass" },
  { "tag": "Bad", "lang": "English", "word": "jackoff" },
  { "tag": "Bad", "lang": "English", "word": "jerkoff" },
  { "tag": "Bad", "lang": "English", "word": "mothafucka" },
  { "tag": "Bad", "lang": "English", "word": "motherfucker" },
  { "tag": "Bad", "lang": "English", "word": "mothafuckin" },
  { "tag": "Bad", "lang": "English", "word": "masturbation" },
  { "tag": "Bad", "lang": "English", "word": "masturbate" },
  { "tag": "Bad", "lang": "English", "word": "mofo" },
  { "tag": "Bad", "lang": "English", "word": "mf" },
  { "tag": "Bad", "lang": "English", "word": "nazi" },
  { "tag": "Bad", "lang": "English", "word": "nigga" },
  { "tag": "Bad", "lang": "English", "word": "nigger" },
  { "tag": "Bad", "lang": "English", "word": "negro" },
  { "tag": "Bad", "lang": "English", "word": "porn" },
  { "tag": "Bad", "lang": "English", "word": "piss" },
  { "tag": "Bad", "lang": "English", "word": "prick" },
  { "tag": "Bad", "lang": "English", "word": "pussy" },
  { "tag": "Bad", "lang": "English", "word": "retard" },
  { "tag": "Bad", "lang": "English", "word": "shit" },
  { "tag": "Bad", "lang": "English", "word": "shite" },
  { "tag": "Bad", "lang": "English", "word": "shitter" },
  { "tag": "Bad", "lang": "English", "word": "slut" },
  { "tag": "Bad", "lang": "English", "word": "twat" },
  { "tag": "Bad", "lang": "English", "word": "titties" },
  { "tag": "Bad", "lang": "English", "word": "titfuck" },
  { "tag": "Bad", "lang": "English", "word": "tit" },
  { "tag": "Bad", "lang": "English", "word": "vagina" },
  { "tag": "Bad", "lang": "English", "word": "viagra" },
  { "tag": "Bad", "lang": "English", "word": "vulva" },
  { "tag": "Bad", "lang": "English", "word": "wanker" },
  { "tag": "Bad", "lang": "English", "word": "whore" },
  { "tag": "Bad", "lang": "English", "word": "xxx" }
] satisfies Word;

words.sort((a, b) => a.word.localeCompare(b.word));

export default words;
