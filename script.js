// document.querySelector("h1").style.color = "red";

// $("h1").click(function () {
//   $("h1").css("color", "red");
// });
$(document).ready(function () {
  $("h1")
    .addClass("blue")
    .on("mouseover", function () {
      $(this).addClass("purple");
    })
    .on("mouseout", function () {
      $(this).removeClass("purple").addClass("blue");
    });

  // $("h1").on("mouseout", function () {
  //   $("h1").css("color", "blue");
  // });
  // $("h1").on("click", function () {
  //   if ($(this).hasClass("blue")) {
  //     $(this).addClass("red");
  //   }
  //   else {
  //     $(this).addClass("blue");
  //   }
  // });
$("h1").on("click", function () {
  if ($(this).hasClass("blue")) {
    $(this).addClass("red").removeClass("blue");
  } else {
    $(this).addClass("blue").removeClass("red");
  }
});

});

function changeColor() {
  let element = document.querySelector("h1");
  element.classList.toggle("newcolor");
  console.log("added");
}

$(document).keypress(function (event) {
  $("h1").text(event.key);
  console.log(event.key);
});


const sound = document.getElementById("countdown.wav");
function playSound1() {
  sound1.play();
}
sound1.addEventListener("ended", (event) => {
  alert("Svegliati!");
});
