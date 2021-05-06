//Loader
jQuery(function () {
  var counter = function () {
    // loader
    var loader = function () {
      setTimeout(function () {
        if ($("#loader").length > 0) {
          $("#loader").removeClass("show");
        }
      }, 1);
    };
    loader();
  };
  counter();
});
//Dark
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  //Modo en localstorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

//Obtenemos el modo actual
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

//Funcion boton Menu
$("#btn-menu").on("click", function () {
  $("#btn-menu").toggleClass("btn-menu-close");
  $("#menu").toggleClass("toggle-menu");
  $("#navbar").toggleClass("toggle-menu-color");
  if ($("#menu").hasClass("toggle-menu")) {
    $("#menu a").on("click", function () {
      $("#menu").removeClass("toggle-menu");
    });
    $(window).scroll(function () {
      $("#menu").removeClass("toggle-menu");
      $("#btn-menu").removeClass("btn-menu-close");
    });
  }
});
$(window).scroll(function () {
    if ($("#navbar").offset().top > 50) {
      $("#navbar").addClass("navbar-scroll");
    } else {
      $("#navbar").removeClass("navbar-scroll");
    }
  });
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        // console.log(this)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }
  });
(function ($, window, document) {
  // Add smooth scrolling to links
  $("[data-scroll]").on("click", function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 60,
      },
      800
    );
  });
  // Cache selectors
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $(this).attr("href");
      if (item != "#") {
        return $(item);
      }
    });
  console.log(scrollItems);
})(jQuery, window, document);
