function getIt () {
  $("p").on("click", function () {
    alert("Hey!");
  });
}

function frameIt () {
  $("img").on("load", function () {
    $(this).addClass("tasty");
  });
}

function submitIt () {
  return $("form").on("submit", function () {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt () {
  $("input").on("keydown", function (key) {
    if (key.which === 71) {
      alert(`You pressed ${key.key}`);
    }
  });
}
$(document).ready(function () {
  $("form").on("submit", function () {
    if ($("input:first").val() === "correct") {
      alert("your form is going to be submitted now");
      return;
    }
    alert("you entered the wrong value");
    return;
  });
  pressIt();
});
