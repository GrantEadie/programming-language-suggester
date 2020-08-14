


// user interface
$(document).ready(function() {
  $("form#profileInfo").submit(function(event) {
    event.preventDefault();
    const webDev = $("#webDev").val();

  
    if (webDev === "yes") {
      alert("yes");
      } else {
        alert("no");
      }
  });
});