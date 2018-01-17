function myFunction() {
    var change = document.getElementById("toggle");
    if (change.innerHTML == "Follow")
    {
        change.innerHTML = "Following";
    }
    else {
        change.innerHTML = "Follow";
    }

  var c = document.getElementsByClassName("button");
  for (var i=0; i<c.length; i++ ) {
    c[i].style.background = "#66CCB4";
  }
}