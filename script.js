let player;
const playlist = [
  { id: "VT2qF97pQNw", title: "GIMS - NINAO" },
  { id: "gTcGXHuLMwg", title: "HEM - Zanotti (Clip Officiel)" },
  { id: "Uhmg30gpTiQ", title: "Anyme - Shamballa feat. Shaydee's (Clip officiel)" },
  { id: "Xjws8nS606Q", title: "Dr. Yaro - Minimum ça (Clip Officiel)" },
  { id: "3ArJlad2q74", title: "Vianney, ‪MikaSoundsOfficial‬ - Keep it simple (feat. Mika) (clip officiel)" },
  { id: "kPa7bsKwL-c", title: "Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video)" },
  { id: "fL0zhg3nBus", title: "nolannax - La nuit éternel (clip officiel)" },
  { id: "RgKAFK5djSk", title: "Wiz Khalifa - See You Again" },
  { id: "2Vv-BfVoq4g", title: "Ed Sheeran - Perfect" },
  { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" }
];

let currentIndex = 0;
let isPlaying = false;

// Synchronisation basée sur le temps
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

function onPlayerReady(event) {
  if (isPlaying) event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    currentIndex = (currentIndex + 1) % playlist.length;
    player.destroy();
    loadVideo(currentIndex);
    if (isPlaying) {
      player.playVideo();
    }
  }
}

function setupButton() {
  const btn = document.getElementById("play-pause-btn");
  btn.addEventListener("click", () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
      btn.textContent = "▶️ Lecture";
    } else {
      player.playVideo();
      btn.textContent = "⏸ Pause";
    }
    isPlaying = !isPlaying;
  });
}
