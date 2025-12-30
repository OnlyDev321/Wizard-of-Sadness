document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video = document.getElementById("bg-video");
  const toggleBtn = document.getElementById("toggle-music");
  const linkPageArray = [
    "index.html",
    "index2.html",
    "index3.html",
    "index4.html",
    "index5.html",
  ];

  // Đảm bảo thuộc tính tương thích di động trước khi play
  if (video) {
    video.muted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
  }

  // 🧩 Bắt buộc có hành động người dùng mới phát nhạc & video
  const tryPlay = () => {
    if (video && video.paused) {
      video.play().catch(() => {
        console.log("Video bị chặn autoplay. Cần tương tác.");
      });
    }
    if (music && music.paused) {
      music.play().catch(() => {
        console.log("Nhạc bị chặn autoplay. Cần tương tác.");
      });
    }
  };

  // 👆 Cho phép phát khi người dùng click hoặc chạm lần đầu
  document.body.addEventListener("click", tryPlay, { once: true });
  document.body.addEventListener("touchstart", tryPlay, { once: true });

  // 🎵 Bật / Tắt nhạc khi nhấn nút
  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleBtn.innerText = "🔊 Tắt Nhạc";
    } else {
      music.pause();
      toggleBtn.innerText = "🔈 Bật Nhạc";
    }
  });

  // ➡️ Chuyển trang
  const currentPage = window.location.pathname.split("/").pop();
  let currentIndex = linkPageArray.indexOf(currentPage);

  const nextPageBtn = document.getElementById("next-page");
  if (nextPageBtn) {
    nextPageBtn.addEventListener("click", function () {
      if (currentIndex < linkPageArray.length - 1) {
        currentIndex++;
        window.location.href = linkPageArray[currentIndex];
      }
    });
  }

  const prevPageBtn = document.getElementById("prev-page");
  if (prevPageBtn) {
    prevPageBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        window.location.href = linkPageArray[currentIndex];
      }
    });
  }

  // ⏳ Hiển thị toàn bộ .content2 sau 20 giây
  const content2Container = document.querySelector(".content2");
  if (content2Container) {
    setTimeout(() => {
      content2Container.classList.add("show");
    }, 20 * 1000);
  }
});
