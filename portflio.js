alert(
  "For a better experience open the site in your pc or any device with wide screen : ) \n hope to work together oneday \nbest wishes , anonymous developer ❤️"
);

function dark() {
  document.body.style.background = "blue";
}
function sun() {
  document.body.style.background = "#fff";
}
let btn = window.document.getElementById("scrollbtn");
window.onscroll = function () {
  if (scrollY >= "400") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = () => {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
