


// User interface for Coding.
$(document).ready(function() {
  $("form#coding").submit(function(event) {
    event.preventDefault();
    const userName = $("input#userName").val();
    const webDev = $("#webDev").val();
    const hardwareDev = $("#hardwareDev").val();
    const dataSci = $("#dataSci").val();
    const apple = $("#apple").val();
    const dif = $("#dif").val();

    if (true) {
      $(".match").fadeIn(1000);
      $("#toolBar").fadeIn(3000);
      $(".inputName").text(userName);
      $(".userName").fadeIn(700);
      window.scroll(0, 1000)


      // y/y/y/y/y
    if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("Learn C#, it'll be worth it in the long run. You'll pretty much be able to learn everything after that.");
      
      // y/y/y/y/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("Python is great for the general stuff, but you'll have to learn Swift to work with Apple.");

      //  y/y/y/n/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Python is great for general work in the industry.");

       //  y/y/n/n/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Python is great for overall work, but you'll likely want to boost your web skills with Ruby or Javascript.");

       //  y/n/n/n/n
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Javascript will be your best bet to start off with. Ruby is the next logical step.");

      //  n/y/y/y/y
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("C# is best for you. From there you can easily jump to Python for general work and Swift for Apple");
      
      //  n/y/y/y/n
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "yes" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("Python is easy to learn and versitile. Eventually you'll need to pick up Swift to work with Apple.");

      //  n/y/y/n/n
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "yes" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Python is easy to learn and versitile.");
    
      //  n/y/n/n/n
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "no" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Listen, I know it sucks, but you'll have to learn C# if you want to work with hardware. Suck it up, and grind.");

      //  n/n/y/y/y
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "yes" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("It's not very challenging, but Python seems to be the industry standard for data science. However, you should consider learning C# first which will give you a great launching point for Python and Swift (which you'll need for Apple).");

      //  n/n/y/y/n
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "yes" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("Python and Swift for you my friend.");

      //  n/n/y/n/n
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "yes" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Python. Without a doubt.");

      //  n/n/n/y/y
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "no" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("You'll likely only need Swift. But consider Python and C# to give you a wider understanding.");

      //  n/n/n/y/n
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "no" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("Swift, that's all you need for now.");
          
      //  n/n/n/n/y
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "no" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("If you have no intention of working in the industry, could be work learning Go and Rust for their interesting properties.");
    
      //  y/n/n/n/y
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("Ruby and Java are for you.");
      
      //  y/n/n/y/y
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("Ruby and Java for web development and Swift for iOS.");
    
      //  y/n/y/y/y
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "yes" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("Python and Swift. Get to it.");

      //  n/y/n/n/y
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "no" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("C# is the best for you.");

      //  n/y/n/y/y
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "no" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("C# for hardware development and Swift for Apple stuff.");

      //  y/y/n/y/y
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "yes" && dif === "yes") {
      $(".matchTitle").text("Start with Javascript, move to C# and finish up with Ruby. You'll eventually want Python for the versitility and Swift for Apple.");

      //  y/n/y/y/n
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "yes" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("You'll absolutely need Python, but consider getting into Ruby for a better understanding of web development.");

      //  y/y/y/n/y
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "yes" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("Javascript first, C#, Ruby, then Python. You got this!");

      //  y/n/n/y/n
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "no" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("Javascript and Ruby first, then make the jump to Swift to work with Apple.");

      //  y/n/y/n/n
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "yes" && apple === "no" && dif === "no") {
      $(".matchTitle").text("Start with Javascript and move to Python. Consider Ruby to boost your web development skills.");

      //  n/y/n/y/n
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "no" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("It won't be easy, but you'll need C# if you want to get into hardware development, but that'll give you a good understanding for Swift (Apple's language). Sorry kiddo.");

      //  y/y/n/n/y
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("Start with Javascript, move to C# then Ruby and Python. You got this!");

      //  n/y/n/y/n
    } else if (webDev === "no" && hardwareDev === "yes" && dataSci === "no" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("It won't be easy, but you'll need C# if you want to get into hardware development, but that'll give you a good understanding for Swift (Apple's language). Sorry kiddo.");

      //  y/y/n/y/n
    } else if (webDev === "yes" && hardwareDev === "yes" && dataSci === "no" && apple === "yes" && dif === "no") {
      $(".matchTitle").text("Start with Javascript and Ruby, they're easy. Eventually you'll need Swift for Apple.");

      //  n/n/y/n/y
    } else if (webDev === "no" && hardwareDev === "no" && dataSci === "yes" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("Great, start with C# and move to Python!");

      //  y/n/y/n/y
    } else if (webDev === "yes" && hardwareDev === "no" && dataSci === "yes" && apple === "no" && dif === "yes") {
      $(".matchTitle").text("Javascript and Ruby to start, consider Python later on.");

    } else {
      $(".matchTitle").text("Alright, that's cool I guess. You don't have to get into coding. Maybe learn French or something?");
      }
    }
  });
});