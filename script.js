document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("toggle-music");
  const linkPageArray = ["index.html", "index2.html", "index3.html"];

  // Bắt buộc có 1 hành động người dùng mới cho phép phát nhạc
  const tryPlay = () => {
    music.play().catch(() => {
      console.log("Chặn autoplay. Cần tương tác.");
    });
  };

  // Chỉ phát nhạc 1 lần đầu khi người dùng click
  document.body.addEventListener("click", tryPlay, { once: true });

  // Bật/Tắt nhạc khi nhấn nút
  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleBtn.innerText = "🔊 Tắt Nhạc";
    } else {
      music.pause();
      toggleBtn.innerText = "🔈 Bật Nhạc";
    }
  });

  // next trang và quay về trước trang
  const currentPage = window.location.pathname.split("/").pop();
  let currentIndex = linkPageArray.indexOf(currentPage);

  //next trang
  const nextPageBtn = document.getElementById("next-page");
  if (nextPageBtn) {
    nextPageBtn.addEventListener("click", function () {
      if (currentIndex < linkPageArray.length - 1) {
        currentIndex++;
        window.location.href = linkPageArray[currentIndex];
      }
    });
  }

  //prev trang
  const prevPageBtn = document.getElementById("prev-page");
  if (prevPageBtn) {
    prevPageBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        window.location.href = linkPageArray[currentIndex];
      }
    });
  }

  // Hiển thị toàn bộ .content2 sau 20 giây
  const content2Container = document.querySelector(".content2");
  if (content2Container) {
    setTimeout(() => {
      content2Container.classList.add("show");
    }, 20 * 1000);
  }
});
