(function($) {
    var galMenu = {
        defaults:{
            menu:"galRing",
            click_to_close:true,
            stay_open:false
        },
        init:function(options) {
            var o = options, audio = $("#galAudio")[0], $this = $(this);
            $this.each(function(i) {
                var $this = $(this), settings = $.extend({}, galMenu.defaults, o), $menu = $("." + settings.menu);
                function galOpen(e) {
                    galMenu.getCoords(e);
                    var top = Coords.clientY - 150, left = $("body")[0] === e.target ? Coords.clickX - 150 :Coords.clientX - 150;
                    var bodyHe = document.documentElement.clientHeight;
                    var bodyWi = document.documentElement.clientWidth;
                    if (top < 0) {
                        top = 0;
                    }
                    if (bodyHe - Coords.clientY < 150) {
                        top = bodyHe - 300;
                    }
                    if (left < 0) {
                        left = 0;
                    }
                    if ($("body")[0] === e.target) {
                        if (bodyWi - Coords.clickX < 150) {
                            left = bodyWi - 300;
                        }
                    } else {
                        if (bodyWi - Coords.clientX < 150) {
                            left = bodyWi - 300;
                        }
                    }
                    $menu.css({
                        top:top + "px",
                        left:left + "px",
                        display:"block"
                    }).stop(true, false).animate({
                        opacity:1
                    }, {
                        duration:100,
                        queue:false
                    });
                    $(".circle").addClass("open");
                    $("#overlay,.galMenu").show();
                    audio.play();
                }
                function galClose(e) {
                    $(".circle").removeClass("open");
                    $("#overlay").hide();
                    $(".galMenu").delay(400).hide(0);
                    audio.pause();
                    audio.currentTime = 0;
                }
                if (!settings.stay_open) {
                    var $a = $this.find("div.ring > a");
                    $a.on("click", function(e) {
                        galClose(e);
                    });
                }
                $this.on("mousedown", function(e) {
                    if (e.which !== 3 && $(e.target).parents(".galMenu").length < 1 && settings.click_to_close) {
                        galClose(e);
                    }
                });
                $this.on("contextmenu", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if ($("#gal").hasClass("open")) {
                        galClose(e);
                    } else {
                        galOpen(e);
                    }
                });
                $this.keyup(function(e) {
                    if (e.keyCode == 27) {
                        if ($("#gal").hasClass("open")) {
                            galClose(e);
                        }
                    }
                });
            });
        },
        getCoords:function(e) {
            var evt = e ? e :window.event;
            var clickX = 0, clickY = 0;
            if ((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft != null) {
                clickX = evt.clientX + document.body.scrollLeft;
                clickY = evt.clientY + document.body.scrollTop;
            }
            if ((evt.clientX || evt.clientY) && document.compatMode == "CSS1Compat" && document.documentElement && document.documentElement.scrollLeft != null) {
                clickX = evt.clientX + document.documentElement.scrollLeft;
                clickY = evt.clientY + document.documentElement.scrollTop;
            }
            if (evt.pageX || evt.pageY) {
                clickX = evt.pageX;
                clickY = evt.pageY;
            }
            return Coords = {
                clickX:clickX,
                clickY:clickY,
                clientX:evt.clientX,
                clientY:evt.clientY,
                screenX:evt.screenX,
                screenY:evt.screenY
            };
        }
    };
    $.fn.galMenu = function(method, options) {
        if (galMenu[method]) {
            return galMenu[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return galMenu.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };
    $(document).ready(function() {
        var items = document.querySelectorAll(".menuItem");
        for (var i = 0, l = items.length; i < l; i++) {
            items[i].style.left = (50 - 35 * Math.cos(-.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
            items[i].style.top = (50 + 35 * Math.sin(-.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        }
    });
})(jQuery);

String.prototype.removeWS = function() {
    return this.toString().replace(/\s/g, "");
};

String.prototype.pF = function() {
    return parseFloat(this);
};

Number.prototype.pF = function() {
    return parseFloat(this);
};