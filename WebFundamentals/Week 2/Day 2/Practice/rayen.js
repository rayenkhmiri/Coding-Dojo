console.log("page loaded...");
user_id = [document.querySelector("#first"), document.querySelector("#second")];
function chgName() {
  var new_name = document.querySelector("#change-name");
  new_name.innerHTML = "rayen kh";
}
var nbre_req = document.querySelector("#nbr-rq");
var nbre_conn = document.querySelector("#acc_conn");
var nb_req = 2;
var conn = 418;

function rmvUser(id) {
  console.log(id);
  console.log(user_id);
  user_id[id].remove();
  nb_req--;
  nbre_req.innerText = nb_req;
}
function accUser(id) {
  console.log(id);
  console.log(user_id);
  user_id[id].remove();
  nb_req--;
  conn++;
  nbre_req.innerText = nb_req;
  nbre_conn.innerText = conn;
}