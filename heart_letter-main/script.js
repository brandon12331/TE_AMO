$(document).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var modal = $("#modal");
    var span = $(".close");

    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    span.click(function() {
        modal.hide();
        clearHearts();
    });
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
            clearHearts();
        }
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        modal.show();
        createHearts();
    }

    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    function createHearts() {
        for (var i = 0; i < 20; i++) {
            var heart = $("<div class='heart'></div>");
            var x = Math.random() * $(window).width();
            var y = Math.random() * $(window).height();
            heart.css({
                left: x + 'px',
                top: y + 'px',
                animationDuration: (Math.random() * 3 + 3) + 's'
            });
            $("#floating-hearts").append(heart);
        }
    }

    function clearHearts() {
        $("#floating-hearts").empty();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 8 + 's';
        document.body.appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    
    setInterval(createHeart, 300);
    
    
});
