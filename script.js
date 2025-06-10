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
  { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" }
];

let currentIndex = 0;

// Déterminer l'heure de démarrage pour synchroniser tout le monde
const startTime = Math.floor(Date.now() / 1000);
currentIndex = startTime % playlist.length;

function onYouTubeIframeAPIReady() {
  loadVideo(currentIndex);
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

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    currentIndex = (currentIndex + 1) % playlist.length;
    player.destroy();
    loadVideo(currentIndex);
  }
}
