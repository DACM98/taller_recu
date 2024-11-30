function countdown() {
    var seconds = document.getElementById("seconds").value;
  
    function tick() {
      seconds = seconds - 1;
      document.getElementById("time").innerHTML = seconds;
  
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        alert("¡Tiempo agotado!");
      }
    }
  
    tick();
  }