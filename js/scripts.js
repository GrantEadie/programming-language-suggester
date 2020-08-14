


// user interface
$(document).ready(function() {
  $("form#coding").submit(function(event) {
    event.preventDefault();
    const webDev = $("#webDev").val();

  
    if (webDev === "yes") {
      alert("yes");
      } else {
        alert("no");
      }
  });
});