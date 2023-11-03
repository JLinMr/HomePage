/*----------------------------------------------
                                               -
JLin                                           -
                                               -
Date: 2021/03/17                               -
                                               -
update：2023/10/28                             -
                                               -
https://www.bsgun.cn 【写作不易】               -
                                               -
看见这个我希望你能够留下我信息                   -
                                               -
-----------------------------------------------*/
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});