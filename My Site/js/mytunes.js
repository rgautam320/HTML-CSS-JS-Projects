// JS For My Tunes

const playBtn = document.querySelector(".fa-play");
const music = document.querySelector("audio");
const myImg = document.querySelector("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const title = document.querySelector(".music_heading");
const artist = document.querySelector(".artist_name");
const progress = document.querySelector("progress");
const progress_div = document.querySelector(".progress_div");

const left = document.querySelector(".left_time");
const right = document.querySelector(".right_time");

let isPlaying = false;
const count = 6;

progress.value = 0;

const getSong = async (val) => {
   try {
      const setHeader = {
         method: "GET",
      };
      const res = await fetch("https://my-json-server.typicode.com/nothing3669/My-JSON/Music", setHeader);

      const data = await res.json();

      title.textContent = data[val].title;
      artist.textContent = data[val].artist;
      music.src = `../audio/${data[val].src}`;
      myImg.src = data[val].img;

      myPlay();
   } catch (error) {
      console.log("");
   }
};

let num = 0;

const nextMusic = () => {
   num = (num + 1) % count;
   getSong(num);
};

const prevMusic = () => {
   num = (num - 1 + count) % count;
   getSong(num);
};

const myPlay = () => {
   isPlaying = true;
   music.play();
   playBtn.classList.replace("fa-play", "fa-pause");
   myImg.classList.add("anime");
};

const myPause = () => {
   isPlaying = false;
   music.pause();
   playBtn.classList.replace("fa-pause", "fa-play");
   myImg.classList.remove("anime");
};

music.addEventListener("timeupdate", (event) => {
   const { currentTime, duration } = event.srcElement;

   let total_time = Math.round(duration);
   let cur_time = Math.round(currentTime);

   let t_time_val = `${String(Math.floor(total_time / 60)).padStart(2, "0")}:${String(Math.floor(total_time % 60)).padStart(2, "0")}`;
   let c_time_val = `${String(Math.floor(cur_time / 60)).padStart(2, "0")}:${String(Math.floor(cur_time % 60)).padStart(2, "0")}`;

   try {
      progress.value = (cur_time / total_time) * 100;
      left.innerHTML = c_time_val;
      right.innerHTML = t_time_val;
   } catch (error) {
      progress.value = 0;
      left.innerHTML = "00:00";
      right.innerHTML = "00:00";
   }
});

progress_div.addEventListener("click", (event) => {
   const { duration } = music;

   let move_val = event.offsetX / event.srcElement.clientWidth;

   progress.value = move_val * 100;

   music.currentTime = move_val * duration;
});

playBtn.addEventListener("click", () => {
   isPlaying ? myPause() : myPlay();
});

next.addEventListener("click", nextMusic);
prev.addEventListener("click", prevMusic);

music.addEventListener("ended", nextMusic);
