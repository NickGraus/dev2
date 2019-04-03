function myFunction() {
  document.getElementById("block").innerHTML = "YOU CLICKED ME!";
}

window.onload = function() {

  var listItem = document.createElement("li");
  listItem.className = "active";
  listItem.style.width = "100px";
  listItem.style.height = "100px";
  listItem.style.background = "red";
  var listItemText = document.createTextNode("Dit is tekst");
  var block = document.getElementById("block");
  block.style.width = "100px";
  block.style.height = "100px";
  block.style.background = "red";

  listItem.appendChild(listItemText);
  document.getElementsByClassName("nav")[0].appendChild(listItem);
}

document.getElementById("block").onclick = function() {
  myFunction();
}
