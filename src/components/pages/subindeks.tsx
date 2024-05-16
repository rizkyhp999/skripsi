"use client";
import React from "react";
import Judul from "../atoms/text";
import SearchBar from "../organisms/searchbar";
import Dropdown from "../molecules/dropdown";

const bahasadaerah = [
  "Aabinomin",
  "Abai",
  "Abrap",
  "Abui (Aboa)",
  "Abun",
  "Abun Gii  (Abun Jii)",
  "Abun Ji  (Karon Pantai)",
  "Aceh",
  "Adagum (Citak Wagabus)",
  "Adang",
  "Afilaup",
  "Aframa",
  "Air Matoa",
  "Airo",
  "Airoran",
  "Ale",
  "Alor",
  "Alune",
  "Amathamit",
  "Ambai",
  "Ambalau",
  "Ambel",
  "Amber",
  "Amungkal",
  "Anakalang",
  "Anasi",
  "Ansus-Papuma",
  "Anus",
  "Aoheng (Penihing)",
  "Arakam",
  "Arandai",
  "Are",
  "Arguni (Taver)",
  "Armati Sarma",
  "Arubos",
  "Arui-Mor",
  "As",
  "Asilulu",
  "Asmat Bets Mbup",
  "Asmat Safan",
  "Asmat Sawa",
  "Asmat Sirat",
  "Asmat Unir Sirau",
  "Asmat Waijens",
  "Atam (Temma)",
  "Auye",
  "Awban",
  "Awe (Maweyo, Kaburi)",
  "Awera",
  "Awyu Anggai",
  "Awyu Darat Kotiak",
  "Awyu Darat Yagatsu-Kiki",
  "Awyu Laut",
  "Awyu Meto",
  "Awyu Tokompatu",
  "Bacan",
  "Bada",
  "Baedate",
  "Baham",
  "Bahau Diaq Lay",
  "Bahau Ujoh Bilang",
  "Bajau Pondong",
  "Bajau Semayap",
  "Bajau Tungkal Satu",
  "Bajo",
  "Bajo Delang",
  "Bakatik",
  "Bakumpai",
  "Balaesang",
  "Balai",
  "Balantak",
  "Bali",
  "Balkewan",
  "Banda",
  "Banggai",
  "Banjar",
  "Bantik",
  "Barakai",
  "Barapasi",
  "Baras",
  "Basap",
  "Basemah",
  "Batak",
  "Batanta",
  "Batero",
  "Batu",
  "Batuley",
  "Bauzi",
  "Bawija",
  "Bayan",
  "Bedoanas (Baruan-Erokwanas)",
  "Beneraf",
  "Benggaulu",
  "Bengkulu",
  "Benuaq",
  "Berangas",
  "Berbai",
  "Berik",
  "Beser",
  "Beser Swaimbon",
  "Besoa",
  "Betaf-Takar",
  "Beyaboa",
  "Biak",
  "Bian Marind Deg",
  "Bima (Mbojo)",
  "Biritai",
  "Biyekwok",
  "Bku (Bgu)",
  "Blagar",
  "Blue Klesi",
  "Bobar",
  "Boi",
  "Boing",
  "Bolaang Mongondow (Bolmong)",
  "Bonerate",
  "Bonoi",
  "Bora-Bora",
  "Bouram",
  "Buagani",
  "Budong-Budong (Tangkou)",
  "Bugis",
  "Bugis De",
  "Bukat",
  "Buli",
  "Bulungan",
  "Buna (Bunak)",
  "Bungku",
  "Buol",
  "Burate",
  "Buru",
  "Burukmakot",
  "Burumeso",
  "Busami",
  "Cia-Cia",
  "Citak",
  "Culambacu (Tulambatu)",
  "Dabe",
  "Dabra",
  "Daikat",
  "Dajub",
  "Damal",
  "Damar Timur",
  "Damban  (Ndamban)",
  "Dani",
  "Dani Atas",
  "Dani Bawah",
  "Dani Bokondini",
  "Dani Tengah",
  "Daranto (Deranto)",
  "Dasigo",
  "Dawan (Timor)",
  "Dawelor",
  "Dayak Bara Injey",
  "Dayak Baream",
  "Dayak Kapuas",
  "Dayak Ngaju",
  "Dayak Pulau Telo",
  "Dayak Sei Dusun",
  "Deing",
  "Dem",
  "Demisa",
  "Devayan",
  "Diae",
  "Dinana",
  "Dintere",
  "Diuwe",
  "Dobel",
  "Dondo",
  "Dra",
  "Dubu",
  "Dulolong",
  "Dusner  (Usner)",
  "Dusun",
  "Dusun Deyah",
  "Dusun Kalahien",
  "Duvle",
  "Efpan",
  "Eik (Foau)",
  "Eipumek",
  "Ekari",
  "Elnama",
  "Elseng",
  "Elseng Koarjap",
  "Emem (Emumu)",
  "Emplawas",
  "Enggano",
  "Engkalembu",
  "Esaro  (Kawit)",
  "Etik (Barto,Maria)",
  "Fakafuku",
  "Fayu",
  "Fermanggem",
  "Fkour",
  "Fokri (Hokli)",
  "Fordata (Iyaru)",
  "Galela",
  "Galik (Golik)",
  "Gane",
  "Gaura",
  "Gayo",
  "Gebe",
  "Girimora",
  "Gorap",
  "Gorontalo",
  "Gua",
  "Gufinti",
  "Hamap",
  "Hatam",
  "Hatam Mole",
  "Helong",
  "Hewa",
  "Hoti",
  "Hubla",
  "Iau",
  "Ibu (Ibo)",
  "Iha",
  "Illiun (Il?iiuun)",
  "Imbuti  (Marind)",
  "Imiyan",
  "Inanwatan",
  "Inora",
  "Intamaja",
  "Irarutu",
  "Irarutu Bofuer",
  "Irawa",
  "Irires",
  "Isirawa",
  "Jair",
  "Jamor",
  "Jawa",
  "Jelako",
  "Jinak",
  "Joerat",
  "Jorop",
  "Juvutek",
  "Kabola",
  "Kadai",
  "Kadi (Muyu Utara)",
  "Kadorih",
  "Kaera",
  "Kafoa",
  "Kaham",
  "Kaiely",
  "Kaigar",
  "Kaili",
  "Kais",
  "Kaiya (Kaiy)",
  "Kalabra",
  "Kalamang",
  "Kalela (Kawela)",
  "Kamang",
  "Kambera",
  "Kambera Pandawai",
  "Kamberau (Bauana)",
  "Kambran",
  "Kamindip",
  "Kamoro",
  "Kanum Barkari",
  "Kapayap (Soko Benanu)",
  "Kapori (Kapauri)",
  "Kaptiau (Kapitiau)",
  "Karas",
  "Karey",
  "Karon",
  "Karufo Auf",
  "Katingan",
  "Kaureh",
  "Kawera",
  "Kawiyet",
  "Kayaan",
  "Kayo Pulau",
  "Kayu Agung",
  "Kedang",
  "Kei",
  "Kejer Manirem",
  "Kekawia",
  "Kemak",
  "Kemberano",
  "Kemtuk",
  "Kenyah",
  "Kenyam Niknene",
  "Kerinci",
  "Ketengban",
  "Keuw",
  "Kimaam",
  "Kimagima",
  "Kimki",
  "Kimyal",
  "Kiraman",
  "Kiri-Kiri",
  "Kitum",
  "Kiwai",
  "Klamu",
  "Klesi",
  "Klon",
  "Klufo (Krowai Rawa, Krowai Umum)",
  "Kodi",
  "Kofey",
  "Koiwai",
  "Kokenop",
  "Kokoda",
  "Kola",
  "Kolana",
  "Kombai",
  "Kombai Kali  (Tajan)",
  "Komela",
  "Komering",
  "Komodo",
  "Komolom  (Mombun)",
  "Kompane",
  "Komyandaret",
  "Kone-Konee",
  "Konerau",
  "Konjo",
  "Kopkaka",
  "Kopkaka Seredela (Kopkaga Seredela)",
  "Korowai Baigun  (Atigun)",
  "Korowai Karuwage (Korowage)",
  "Korowai Selatan (Korowai Lumpur/Klufwo Auf Umbale)",
  "Kui",
  "Kulatera",
  "Kulawi",
  "Kulisusu",
  "Kur",
  "Kuri  (Nabi)",
  "Kurudu (Myobo)",
  "Kwari",
  "Kwer (Kofet/Kwet)",
  "Kwerba",
  "Kwesten Arare",
  "Kwinsu",
  "Labala",
  "Laiyolo",
  "Lamaholot",
  "Lamatuka",
  "Lamboya",
  "Lampung",
  "Lampung Cikoneng",
  "Lani",
  "Lasalimu-Kamaru",
  "Lauje Malala",
  "Lawangan",
  "Leinam",
  "Lematang",
  "Lemolang",
  "Lepki",
  "Letti",
  "Lewuka",
  "Liki",
  "Lio",
  "Lola",
  "Lona",
  "Long Pulung",
  "Loon",
  "Luhu",
  "Lundayeh",
  "Lura",
  "Maanyan",
  "Madura",
  "Maibrat",
  "Mairasi",
  "Maisomara",
  "Makassar",
  "Makatian",
  "Makiam Dalam",
  "Makian Luar",
  "Makleu",
  "Mamasa",
  "Mambora",
  "Mamuju",
  "Mandar",
  "Mandarin Ampenan",
  "Mandarin DKI Jakarta",
  "Mander",
  "Mandobo",
  "Mandobo Bawah",
  "Mandobo Tengah (Kop Kambo)",
  "Manem",
  "Manggarai",
  "Mansim Borai",
  "Manua  (Eritai)",
  "Manulea",
  "Marap",
  "Maraw",
  "Mare",
  "Marita",
  "Marlasi",
  "Marori  (Morori)",
  "Marsela Barat (Masela Barat)",
  "Marsela Tengah (Masela Tengah)",
  "Marsela Timur (Masela Timur)",
  "Masarete",
  "Masep",
  "Masimasi",
  "Massenrengpulu",
  "Matbat",
  "Matlow",
  "Mawes Dey (Mawesdey)",
  "Mawes Wares (Maweswares)",
  "Maya",
  "Maya Legenyan-Kawei",
  "Mee Ugia",
  "Mee Wosokuno",
  "Mek Kosarek",
  "Mek Naica",
  "Mek Nipsan",
  "Melayu",
  "Mentawai",
  "Mentaya",
  "Meyah",
  "Miere",
  "Minahasa",
  "Minahasa Tonsawang",
  "Minahasa Tonsea",
  "Minangkabau",
  "Mnanggi",
  "Moa",
  "Modole",
  "Moi Maniwo",
  "Moi Sigin",
  "Molof",
  "Momuna",
  "Moni Bibida",
  "Moni-Kegouda",
  "Monuna Samboga",
  "Mooi",
  "Mor",
  "Moraid",
  "Morunene (Moronene)",
  "Moskona",
  "Motu",
  "Mpur",
  "Mpur Pantai",
  "Muna",
  "Munggui",
  "Muri (Mer)",
  "Murkim",
  "Muyu",
  "Muyu Selatan",
  "Nafri",
  "Nage",
  "Nagi",
  "Nai",
  "Nalik Selatan",
  "Namak",
  "Namalu",
  "Namas",
  "Namblong",
  "Namla",
  "Namut",
  "Napiti",
  "Napiti Pantai-Busama (Napiti Pantai)",
  "Narau",
  "Nare",
  "Naulu",
  "Ndao",
  "Ndarame",
  "Ndauwa",
  "Ndom",
  "Ndora",
  "Nedebang",
  "Ngada",
  "Ngalum",
  "Nggem",
  "Ngguntar",
  "Ngkalembu",
  "Nias",
  "Nila",
  "Ningrum",
  "Nobuk (Kwerba)",
  "Nosaudare",
  "Nubuai-Waren",
  "Numfor (Mansinam)",
  "Nyaw",
  "Obokuitai",
  "Oedate (Kerema)",
  "Ogan",
  "Oirata",
  "Okpari",
  "Omesuri",
  "Ormu",
  "Oroyliye",
  "Orya",
  "Palamul",
  "Palu e",
  "Pamona",
  "Pannei",
  "Pasan",
  "Pasir (Paser)",
  "Patani",
  "Pedamaran",
  "Pembuang",
  "Pigapu",
  "Pijin",
  "Piliana",
  "Pipikoro",
  "Piru",
  "Pokoro",
  "Ponosakan",
  "Poom",
  "Pulo (Wakatobi)",
  "Punan",
  "Punan Long Lamcin",
  "Punan Merah",
  "Punan Paking",
  "Pupis",
  "Pura",
  "Puragi-Saga",
  "Raijua",
  "Rampi",
  "Rarankwa",
  "Rejang",
  "Retta",
  "Riantana",
  "Ribun (Rihun)",
  "Riung",
  "Ro (Ru)",
  "Ron",
  "Rongga",
  "Roswar (Saref)",
  "Rote",
  "Sabakor (Buruwai)",
  "Saban",
  "Sabu",
  "Sagapu",
  "Sahu",
  "Salafen Matbat",
  "Salas",
  "Saleman",
  "Salkma",
  "Saluan",
  "Saman",
  "Samasuru",
  "Samate",
  "Samihin",
  "Sampit",
  "Sangihe Talaud (Satal)",
  "Saponi",
  "Sar",
  "Sasak",
  "Sasak Bali",
  "Sasawa",
  "Saurisirami",
  "Sause-Ures (Barazre)",
  "Sawai",
  "Saweru",
  "Sawi",
  "Sawila",
  "See",
  "Segaai",
  "Segar",
  "Seget",
  "Sekar-Onim",
  "Seko",
  "Selaru",
  "Selegof",
  "Seluwarsa",
  "Sempan",
  "Senggi",
  "Sentani",
  "Seram",
  "Serili",
  "Serua",
  "Serui Laut",
  "Sigulai",
  "Sikari",
  "Sikka",
  "Silimo",
  "Sipisi",
  "Skou",
  "Smarki Kanum",
  "So a",
  "Soba",
  "Sobey",
  "Sobey Wakde",
  "Somu (Toro)",
  "Soon",
  "Sorabi",
  "Sou",
  "Sough (Manikion)",
  "Sough Bohon",
  "Sowiwa (Morowa)",
  "Soytai",
  "Srum",
  "Sudate (Sehudate)",
  "Sula",
  "Sumba Barat",
  "Sumbawa (Samawa)",
  "Sumuri (Sumuri)",
  "Sunda",
  "Sunum",
  "Taa",
  "Tabahair (Bipim, Bipin)",
  "Tabla",
  "Tabundung",
  "Tagalisa",
  "Taliabu",
  "Tamakuri",
  "Taman",
  "Tamario",
  "Tamer Tunai",
  "Tamuan",
  "Tandia",
  "Tangko",
  "Tapea",
  "Tarangan Barat",
  "Tarangan Timur",
  "Tarfia",
  "Tause",
  "Tawoyan",
  "Tawu Ane",
  "Tebako",
  "Tefanma",
  "Tefaro (Demba)",
  "Tehit",
  "Tehit Dit (Tehit Tua)",
  "Teiwa",
  "Telaah Babar",
  "Telepe",
  "Tenggalan",
  "Teon",
  "Tepin",
  "Ternate",
  "Tetun",
  "Tevera Pew",
  "Tewa",
  "Tidung",
  "Tobati",
  "Tobelo",
  "Tolaki",
  "Tombatu",
  "Tomor",
  "Topoiyo",
  "Toraja",
  "Torweja",
  "Totoberi",
  "Totoli",
  "Towe",
  "Trimuris-Bagusa",
  "Tsaukwambo",
  "Tunjung",
  "Ulakin (Ulakuno)",
  "Uma Lung",
  "Una",
  "Ure (Mere)",
  "Uruangnirin",
  "Uud Danum (Ot Danum)",
  "Vamin",
  "Vedan Nus (Podena)",
  "Wabo",
  "Waicen",
  "Wairate (Debra)",
  "Walak",
  "Waliam",
  "Walsa",
  "Wambo Tawe Tirop",
  "Wambon Kenondik (Wombon, Womsi)",
  "Wamesa",
  "Wandamen",
  "Wanggom",
  "Wano",
  "Wanukaka (Wanokaka)",
  "Warari Onate",
  "Wardo",
  "Warembori",
  "Wari",
  "Warlon",
  "Warry",
  "Waruri (Ambumi)",
  "Wate",
  "Wau Arak",
  "Weinami",
  "Wemale",
  "Wersing (Kolana (Wirasina))",
  "Wewewa (Wejewa)",
  "Windesi",
  "Wiyagar",
  "Woda-Woda",
  "Wolani",
  "Wolio",
  "Wombon (Womsi)",
  "Wonti (Waropen)",
  "Wooi",
  "Woria",
  "Wotu",
  "Yabanda (Away)",
  "Yabega",
  "Yaben",
  "Yafi",
  "Yaghai Mur",
  "Yaghai Wairu",
  "Yahadian-Mugim",
  "Yakapis",
  "Yalahatan",
  "Yali Anggruk",
  "Yali Kosarek",
  "Yali Ninia",
  "Yali Pass Valley",
  "Yamas",
  "Yamdena",
  "Yamueti",
  "Yatoke",
  "Yaur",
  "Yaur Rihegure",
  "Yawa Onate",
  "Yei",
  "Yei Bawah",
  "Yelmek",
  "Yeresiam",
  "Yeresiam Kiruru",
  "Yeresiam Pedalaman (Sirise)",
  "Yeretuar (Umare)",
  "Yetfa",
  "Yokari",
  "Yoke",
  "Yonggom",
  "Yuafeta",
];
const tahun = [
  { id: 1, name: "2024" },
  { id: 2, name: "2023" },
  { id: 3, name: "2022" },
];
const provinsi = [
  "ACEH",
  "SUMATERA UTARA",
  "SUMATERA BARAT",
  "RIAU",
  "JAMBI",
  "SUMATERA SELATAN",
  "BENGKULU",
  "LAMPUNG",
  "KEPULAUAN BANGKA BELITUNG",
  "KEPULAUAN RIAU",
  "DKI JAKARTA",
  "JAWA BARAT",
  "JAWA TENGAH",
  "DI YOGYAKARTA",
  "JAWA TIMUR",
  "BANTEN",
  "BALI",
  "NUSA TENGGARA BARAT",
  "NUSA TENGGARA TIMUR",
  "KALIMANTAN BARAT",
  "KALIMANTAN TENGAH",
  "KALIMANTAN SELATAN",
  "KALIMANTAN TIMUR",
  "KALIMANTAN UTARA",
  "SULAWESI UTARA",
  "SULAWESI TENGAH",
  "SULAWESI SELATAN",
  "SULAWESI TENGGARA",
  "GORONTALO",
  "SULAWESI BARAT",
  "MALUKU",
  "MALUKU UTARA",
  "PAPUA BARAT",
  "PAPUA",
];

export default function subindeks() {
  return (
    <div className="bg-primer pt-10">
      <Judul classname="text-white">
        Indeks Faktor Daya Hidup Bahasa Daerah
      </Judul>
      <div className="flex flex-wrap sm:flex-row justify-center items-center mt-10 ">
        <SearchBar
          data={bahasadaerah}
          classname={
            "w-[300px] h-[60px] text-2xl text-center border-white mr-5 lg:w-[450px] lg:h-[60px] focus:outline-none focus:ring-0  "
          }
        >
          {/* <label htmlFor="" className="text-white font-medium ml-2"> */}
          Cari Bahasa Daerah
          {/* </label> */}
        </SearchBar>

        <SearchBar
          data={provinsi}
          classname={
            "w-[300px] h-[60px] text-2xl text-center border-white mr-5 lg:w-[250px] lg:h-[60px] focus:outline-none focus:ring-0  "
          }
        >
          {/* <label htmlFor="" className="text-white font-medium ml-2"> */}
          Provinsi
          {/* </label> */}
        </SearchBar>

        <Dropdown
          data={tahun}
          classname="w-[150px] h-[60px] text-2xl text-center bg-white mr-5 rounded-xl lg:w-[180px] lg:h-[60px] focus:outline-none focus:ring-0"
        >
          {/* <label htmlFor="" className="text-white font-medium ml-2"> */}
          Tahun
          {/* </label> */}
        </Dropdown>
      </div>
    </div>
  );
}
