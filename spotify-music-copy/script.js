const songData = [
  {
    name: "Rock Upbead",
    artist: "FreeMusicForVideo",
    src: "Rock Upbead - FreeMusicForVideo.mp3",
  },
  {
    name: "Fast Rock",
    artist: "SoundGalleryByDmitryTaras",
    src: "Fast Rock - SoundGalleryByDmitryTaras.mp3",
  },
  {
    name: "Uplfting Rock Music",
    artist: "Tunetank",
    src: "Uplfting Rock Music - Tunetank.mp3",
  },
];

const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const cover = document.querySelector(".cover");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");
const songTime = document.querySelector(".song-time");
const songProgress = document.querySelector(".song-progress");
const coverArtist = document.querySelector(".cover span:nth-child(1)");
const coverName = document.querySelector(".cover span:nth-child(2)");

let songIndex = 0;

window.addEventListener("load", () => {
  loadSong(songIndex);
});

const loadSong = (i) => {
  coverName.textContent = songData[i].name;
  coverArtist.textContent = songData[i].artist;
  songName.textContent = songData[i].name;
  songArtist.textContent = songData[i].artist;
  audio.src = `music/${songData[i].src}`;
};

// ! play-pause functionality

const playSong = () => {
  container.classList.add("pause");
  playPauseBtn.firstElementChild.classList = "fa-solid fa-pause";
  audio.play();
  cover.classList.add("rotate");
};

const pauseSong = () => {
  container.classList.remove("pause");
  playPauseBtn.firstElementChild.classList = "fa-solid fa-play";
  audio.pause();
  cover.classList.remove("rotate");
};

playPauseBtn.addEventListener("click", () => {
  if (container.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});

// ! prev & next functionality

const prevSongPlay = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }

  loadSong(songIndex);
  playSong();
};

const nextSongPlay = () => {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }

  loadSong(songIndex);
  playSong();
};

prevBtn.addEventListener("click", prevSongPlay);
nextBtn.addEventListener("click", nextSongPlay);

// ! time update / music duration

audio.addEventListener("loadedmetadata", () => {
  let audioDuration = audio.duration;
  let totalMinutes = Math.floor(audioDuration / 60);
  let totalSeconds = Math.floor(audioDuration % 60);

  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }

  let songDuration = document.querySelector(".time span:nth-child(2)");
  songDuration.textContent = `${totalMinutes}:${totalSeconds}`;
});

audio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;

  let currentTimeWidth = (currentTime / duration) * 100;
  songProgress.style.width = `${currentTimeWidth}%`;

  let songCurrentTime = document.querySelector(".time span:nth-child(1)");

  let currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);

  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }

  songCurrentTime.textContent = `${currentMinutes}:${currentSeconds}`;
});
