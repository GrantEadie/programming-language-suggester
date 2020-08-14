


// User interface for Coding.
$(document).ready(function() {
  $("form#coding").submit(function(event) {
    event.preventDefault();
    const difficulty = ("#difficulty").val();
    const webDev = $("#webDev").val();
    const hardwareDev = $("#hardwareDev").val();
    const dataSci = $("#dataSci").val();
    const apple = $("apple").val();

      // y/y/y/y
    if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes") {
      alert("Python is great for the general stuff, but you'll have to learn Swift to work with Apple.");

      //  y/y/y/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "no") {
      alert("Python is great for general work in the industry.");

       //  y/y/n/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "no") {
      alert("Python is great for overall work, but you'll likely want to boost your web skills with Ruby or Javascript.");

       //  y/n/n/n
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no" && apple === "no") {
      alert("Javascript will be your best bet to start off with. Ruby is the next logical step, followed by Go.");

      // y/y/n/y
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "yes") {
      alert("You'll have to learn Swift for Apple, but consider Python, Go, or Javascript as well");

    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no") {
      alert("Ruby, Javascript, or Go");
    
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "yes") {
      alert("C#, or Python");

    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "no") {
      alert("C#, or Python");

    } else {
        alert("You'll have to learn two programs");
      }
  });
});