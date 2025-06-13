let player;
const playlist = [
  { id: "VT2qF97pQNw", title: "Musique 1" },
  { id: "gTcGXHuLMwg", title: "Musique 2" },
  { id: "Uhmg30gpTiQ", title: "Musique 3" },
  { id: "Xjws8nS606Q", title: "Musique 4" },
  { id: "3ArJlad2q74", title: "Musique 5" },
  { id: "kPa7bsKwL-c", title: "Musique 6" },
  { id: "fL0zhg3nBus", title: "Musique 7" },
  { id: "RgKAFK5djSk", title: "Wiz Khalifa - See You Again" },
  { id: "2Vv-BfVoq4g", title: "Ed Sheeran - Perfect" },
  { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" },
  { id: "fHI8X4OXluQ", title: "The Weeknd - Blinding Lights" },
  { id: "7wtfhZwyrcc", title: "Imagine Dragons - Believer" },
  { id: "DyDfgMOUjCI", title: "Billie Eilish - bad guy" },
  { id: "TUVcZfQe-Kw", title: "Dua Lipa - Levitating" },
  { id: "IcrbM1l_BoI", title: "Avicii - Wake Me Up" }
];

let currentIndex = 0;
let isPlaying = false;

// Synchronisation universelle via l'heure Unix
const startTime = Math.floor(Date.now() / 1000);
currentIndex = startTime % playlist.length;

function onYouTubeIframeAPIReady() {
  loadVideo(currentIndex);
  setupButton();
}

function loadVideo(index) {
  const videoId = playlist[index].id;
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
  document.getElementById("now-playing").textContent = `🎶 En cours : ${playlist[index].title}`;
}

function
