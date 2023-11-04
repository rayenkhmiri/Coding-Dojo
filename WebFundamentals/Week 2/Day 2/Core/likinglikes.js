console.log("hello js ");
var nbr_likes = [0, 0, 0];

function addLike() {
  console.log("+1");
  
  var btn_like = document.querySelector("#nbr_like");
  nbr_likes[0]++;
  if (nbr_likes[0] == 1) {
    btn_like.innerText = nbr_likes[0] + " like";
  } else {
    btn_like.innerText = nbr_likes[0] + " likes";
  }
}
function addLike1() {
  var btn_like = document.querySelector("#nbr_like1");

  nbr_likes[1]++;

  if (nbr_likes[1] == 1) {
    btn_like.innerText = nbr_likes[1] + " like";
  } else {
    btn_like.innerText = nbr_likes[1] + " likes";
  }
}
function addLike2() {
  var btn_like = document.querySelector("#nbr_like2");

  nbr_likes[2]++;

  if (nbr_likes[2] == 1) {
    btn_like.innerText = nbr_likes[2] + " like";
  } else {
    btn_like.innerText = nbr_likes[2] + " likes";
  }
}