const share = document.querySelector("#share");
const shareOption = document.querySelector(".share-option");
const shareComp = document.querySelector(".share-comp");
const userInfo = document.querySelector(".user-info");

share.addEventListener("click", () => {
  if (window.innerWidth > 480) {
    if (shareOption.classList.contains("hidden")) {
      shareOption.classList.remove("hidden");
      shareOption.classList.add("show");
    } else {
      shareOption.classList.add("hidden");
      shareOption.classList.remove("show");
    }
  }

  if (window.innerWidth <= 480) {
    shareOption.classList.add("hidden");
    userInfo.classList.toggle("share-active");
    share.classList.toggle("active");
  }
});
