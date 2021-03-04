//Loader
jQuery(function() {
    var counter = function() {
        // loader
        var loader = function() {
            setTimeout(function() {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    };
    counter();
});
//Dark
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //Modo en localstorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//Obtenemos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

//Funcion boton Menu
$('#btn-menu').on('click', function() {
    $('#btn-menu').toggleClass('btn-menu-close');
    $('#menu').toggleClass('toggle-menu');
    $('#navbar').toggleClass('toggle-menu-color');
    if ($('#menu').hasClass('toggle-menu')) {
        $('#menu a').on("click", function() {
            $('#menu').removeClass('toggle-menu');
        });
        $(window).scroll(function() {
            $('#menu').removeClass('toggle-menu');
            $('#btn-menu').removeClass('btn-menu-close');
        });
    }
});



(function($, window, document) {

    $('[data-toggle]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        target.toggle();
    });

    // Cache selectors
    var lastId,
        topMenu = $("#menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $(this).attr("href");
            if (item != '#') { return $(item) }
        });

    console.log(scrollItems)

    $(window).scroll(function() {
        if ($("#navbar").offset().top > 50) {
            $("#navbar").addClass("navbar-scroll");

        } else {
            $("#navbar").removeClass("navbar-scroll");
        }
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
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
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
})(jQuery, window, document);