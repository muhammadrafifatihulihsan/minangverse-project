import talempong from "../../assets/assets_gen/talempong_gen1.png";
import saluang from "../../assets/assets_gen/saluang_gen1.png";
import rabab from "../../assets/assets_gen/rabab_gen1.png";
import gandangTambua from "../../assets/assets_gen/gandang_tambua_gen1.png";
import tasa from "../../assets/assets_gen/tasa_gen1.png";
import sarunai from "../../assets/assets_gen/sarunai_gen1.png";
import canang from "../../assets/assets_gen/canang_gen1.png";
import aguang from "../../assets/assets_gen/aguang_gen1.png";
import pupuikTanduak from "../../assets/assets_gen/pupuik_tanduak_gen1.png";

const alatMusik = [
	{
		id: 1,
		nama: "Talempong",
		kategori: "pukul",
		deskripsi:
			"Talempong merupakan instrumen pukul khas Minangkabau berbentuk cakram logam kecil dari kuningan atau perunggu. Dimainkan dengan dua pemukul kayu, talempong menghasilkan bunyi 'ting-ting' yang nyaring dan cerah. Dalam pertunjukan, talempong biasanya disusun di rak kayu dan dimainkan secara berkelompok untuk menciptakan pola ritme berulang yang saling mengisi. Alat musik ini menjadi pusat irama dalam berbagai acara adat seperti tari piring, pesta adat, dan penyambutan tamu agung.",
		srcGambar: talempong,
		srcSound: ["talempong1.mp3", "talempong2.mp3", "talempong3.mp3"],
	},
	{
		id: 2,
		nama: "Saluang",
		kategori: "tiup",
		deskripsi:
			"Saluang adalah seruling bambu tradisional Minang yang terbuat dari bambu talang tipis dengan empat lubang nada. Keunikan saluang terletak pada teknik 'circular breathing' (tiupan tanpa henti) yang dikuasai oleh pemainnya, menghasilkan alunan melodi yang lembut, melankolis, dan terus-menerus. Suara khas saluang sering mengiringi dendang (nyanyian tradisional) dan kisah-kisah rakyat Minang, membangun suasana rindu, haru, dan ketenangan yang menyentuh hati pendengarnya.",
		srcGambar: saluang,
		srcSound: ["saluang1.mp3", "saluang2.mp3"],
	},
	{
		id: 3,
		nama: "Rabab",
		kategori: "gesek",
		deskripsi:
			"Rabab atau Rebab Piaman adalah alat musik gesek tradisional dengan badan terbuat dari kayu atau tempurung kelapa yang dilapisi kulit hewan. Menghasilkan suara serak khas yang penuh emosi, rabab biasanya dimainkan sambil diiringi nyanyian yang membawakan kaba (cerita rakyat). Setiap gesekan rabab bukan hanya menghasilkan melodi, tetapi juga menghidupkan kisah-kisah cinta, legenda, dan petuah kehidupan dalam tradisi lisan Minangkabau, terutama di daerah Pesisir.",
		srcGambar: rabab,
		srcSound: ["rabab1.mp3", "rabab2.mp3", "rabab3.mp3"],
	},
	{
		id: 4,
		nama: "Gandang Tambua",
		kategori: "pukul",
		deskripsi:
			"Gandang Tambua adalah gendang besar berpenampilan perkasa yang dimainkan dengan dua stik kayu. Suaranya yang kuat, menghentak, dan menggema mampu membangkitkan semangat komunitas. Biasanya dimainkan secara beramai-ramai oleh beberapa orang, Gandang Tambua menjadi simbol kekuatan dan kebersamaan dalam festival, prosesi adat, dan upacara tradisional seperti Tabuik. Ritmenya yang energik memompa semangat dan menjadi denyut nadi perayaan masyarakat Minang.",
		srcGambar: gandangTambua,
		srcSound: ["gandang-tambua1.mp3", "gandang-tambua2.mp3"],
	},
	{
		id: 5,
		nama: "Tasa",
		kategori: "pukul",
		deskripsi:
			"Tasa adalah gendang kecil yang menjadi pasangan setia Gandang Tambua dalam ensambel Tambua Tasa. Dengan suara tinggi dan tajam, Tasa dimainkan dengan tempo cepat dan pola ritme yang rumit, menciptakan kontras yang dinamis dengan hentakan Gandang Tambua. Permainannya yang lincah dan penuh variasi menambah warna ritmis dan kemeriahan dalam berbagai acara besar seperti pesta nagari, membuat suasana semakin bergairah dan berenergi.",
		srcGambar: tasa,
		srcSound: ["tasa1.mp3", "tasa2.mp3", "tasa3.mp3"],
	},
	{
		id: 6,
		nama: "Sarunai",
		kategori: "tiup",
		deskripsi:
			"Sarunai atau Serunai adalah alat musik tiup tradisional Minang yang menghasilkan suara melengking tajam dan menggugah. Terbuat dari kombinasi batang padi, bambu, dan kayu dengan lidah ganda, sarunai memiliki suara yang khas dan mampu membawa nuansa heroik serta semangat juang. Keberadaannya sangat penting dalam mengiringi berbagai pertunjukan seperti randai, pacu jawi (balap kerbau), tari piring, dan upacara adat lainnya.",
		srcGambar: sarunai,
		srcSound: ["sarunai1.mp3", "sarunai2.mp3"],
	},
	{
		id: 7,
		nama: "Canang",
		kategori: "pukul",
		deskripsi:
			"Canang adalah alat musik pukul berbentuk seperti gong kecil yang terbuat dari logam. Meski ukurannya relatif kecil, perannya dalam ansambel talempong sangat vital. Canang bertugas memberikan aksen-aksen ritmis dan menjaga harmoni serta tempo permainan. Bunyinya yang khas melengkapi melodi talempong dan menciptakan tekstur suara yang kaya dalam orchestra tradisional Minangkabau.",
		srcGambar: canang,
		srcSound: ["canang1.mp3", "canang2.mp3"],
	},
	{
		id: 8,
		nama: "Aguang",
		kategori: "pukul",
		deskripsi:
			"Aguang atau Gong Besar adalah instrumen penanda ritme utama dalam musik tradisional Minang. Terbuat dari logam (biasanya perunggu), gong besar ini menghasilkan suara yang dalam, berat, dan bergetar lama. Setiap pukulan pada Aguang menandai perubahan ritme dan bagian dalam komposisi musik, sekaligus memberikan nuansa agung, khidmat, dan berwibawa dalam pertunjukan. Aguang menjadi simbol keseimbangan dan kebesaran dalam kebudayaan Minangkabau.",
		srcGambar: aguang,
		srcSound: ["aguang1.mp3", "aguang2.mp3"],
	},
	{
		id: 9,
		nama: "Pupuik Tanduak",
		kategori: "tiup",
		deskripsi:
			"Pupuik Tanduak adalah alat musik tiup yang terbuat dari tanduk kerbau. Dengan suara keras, berwibawa, dan maskulin, alat musik ini berfungsi sebagai penanda atau isyarat dalam berbagai acara adat. Pada masa lalu, bunyi Pupuik Tanduak digunakan untuk mengumpulkan warga atau memberi tanda bahaya. Kini, lebih sering digunakan sebagai pembuka upacara adat, penyambutan tamu penting, atau penanda dimulainya suatu ritual, menyampaikan pesan kekuatan dan keberanian.",
		srcGambar: pupuikTanduak,
		srcSound: ["pupuik-tanduak1.mp3", "pupuik-tanduak2.mp3"],
	},
];

export default alatMusik;
