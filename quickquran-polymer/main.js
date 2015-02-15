//window.addEventListener('polymer-ready', function () {
//    var navicon = document.getElementById('navicon');
//    var drawerPanel = document.getElementById('drawerPanel');
//    navicon.addEventListener('click', function () {
//        drawerPanel.togglePanel();
//    });
//});

var scope = document.querySelector('template[is=auto-binding]'),
    navicon = document.getElementById('navicon'),
    drawerPanel = document.getElementById('drawerPanel');

scope.reciters = [
    {
        name: "Tawfeeq",
        link: "tawfeeq_bin_saeed-as-sawaaigh"
            },
    {
        name: "Ajamy",
        link: "ahmed_ibn_3ali_al-3ajamy"
            },
    {
        name: "Shatri",
        link: "abu_bakr_ash-shaatree"
            },
    {
        name: "Afasy",
        link: "mishaari_raashid_al_3afaasee"
            },
    {
        name: "Afasy English",
        link: "mishaari_w_ibrahim_walk_si"
            }
        ];

scope.surahs = ["Al-Fatiha", "Al-Baqarah", "Ale Imran", "An-Nisa", "Al-Maidah", "Al-Anam", "Al-Araf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Rad", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Taha", "Al-Anbya", "Al-Haj", "Al-Muminun", "An-Nur", "Al-Furqan", "Ash-Shuara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shuraa", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqiah", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahanah", "As-Saf", "Al-Jumuah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Maarij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Naziat", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-Ala", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Layl", "Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-Adiyat", "Al-Qariah", "At-Takathur", "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh", "Al-Maun", "Al-Kawthar", "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];

scope.getSurahNum = function (count) {
    return (count <= 9) ? "00" + count :
        (count >= 10 && count <= 99) ? "0" + count : count;
};

scope.setSurah = function (e, detail, sender) {
    var surah = detail.item.innerHTML,
        sLen = scope.surahs.length;

    for (var i = 0; i < sLen; i++) {
        if (surah === scope.surahs[i]) {
            scope.surahNum = scope.getSurahNum(i);
        }
    };
};

scope.selectReciter = function (e, detail, sender) {
    var selectedReciter = detail.item.innerHTML;

    scope.reciters.forEach(function (reciter) {
        if (reciter.name === selectedReciter) {
            scope.reciter = reciter;
        }
    });
};