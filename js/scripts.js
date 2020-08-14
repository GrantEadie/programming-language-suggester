


// User interface for Coding.
$(document).ready(function() {
  $("form#coding").submit(function(event) {
    event.preventDefault();
    const webDev = $("#webDev").val();
    const hardwareDev = $("#hardwareDev").val();

  
    if (webDev === "yes" && hardwareDev === "yes") {
      alert("yes");

    } else if (webDev === "yes" && hardwareDev === "no") {
      alert("maybe");
      
    } else {
        alert("no");
      }
  });
});