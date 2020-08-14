


// User interface for Coding.
$(document).ready(function() {
  $("form#coding").submit(function(event) {
    event.preventDefault();
    const webDev = $("#webDev").val();
    console.log(webDev)
    const hardwareDev = $("#hardwareDev").val();
    console.log(hardwareDev)
    const dataSci = $("#dataSci").val();
    console.log(dataSci)
    const apple = $("#apple").val();
    console.log(apple)
    const dif = $("#dif").val();
    console.log(dif)

      // y/y/y/y/y
    if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "yes") {
      alert("Learn C#, it'll be worth it in the long run. You'll pretty much be able to learn everything after that.");
      
      // y/y/y/y/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "no") {
      alert("Python is great for the general stuff, but you'll have to learn Swift to work with Apple.");

      //  y/y/y/n/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "no" && dif === "no") {
      alert("Python is great for general work in the industry.");

       //  y/y/n/n/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "no" && dif === "no") {
      alert("Python is great for overall work, but you'll likely want to boost your web skills with Ruby or Javascript.");

       //  y/n/n/n/n
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no" && apple === "no" && dif === "no") {
      alert("Javascript will be your best bet to start off with. Ruby is the next logical step.");

      //  n/y/y/y/y
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "yes") {
      alert("Javascript will be your best bet to start off with. Ruby is the next logical step.");

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