var isCel = [24, 18, 27, 19, 21, 16, 26, 21];
var isFar = [75 , 65, 80, 66, 69, 61, 78, 70];
var metricToChoose = "°C";

function clickCity(i) {
  if (i == 1) {
    alert("Loading weather report... for Burbank city");
  } else {
    if (i == 2) {
      alert("Loading weather report... for Chicago city");
    } else {
      if (i == 3) {
        alert("Loading weather report... for Dallas city");
      }
    }
  }
}

function removeDiv() {
  var divToRemove = document.querySelector("#cookie");
  divToRemove.remove();
}

function metricChange() {
  metricToChoose = document.querySelector("#metric").value;
  for (var i = 0; i < isCel.length; i++) {
    var btnName = "#b" + (i + 1);
    var theBtn = document.querySelector(btnName);
    if (metricToChoose == "°C") {
      theBtn.innerText = isCel[i];
    } else {
      theBtn.innerText = isFar[i];
    }
  }
}