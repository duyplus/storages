! function(e) {
    function t(t) {
        for (var a, r, l = t[0], s = t[1], c = t[2], d = 0, g = []; d < l.length; d++) r = l[d], Object.prototype.hasOwnProperty.call(n, r) && n[r] && g.push(n[r][0]), n[r] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (p && p(t); g.length;) g.shift()();
        return o.push.apply(o, c || []), i()
    }

    function i() {
        for (var e, t = 0; t < o.length; t++) {
            for (var i = o[t], a = !0, l = 1; l < i.length; l++) {
                var s = i[l];
                0 !== n[s] && (a = !1)
            }
            a && (o.splice(t--, 1), e = r(r.s = i[0]))
        }
        return e
    }
    var a = {},
        n = {
            1: 0
        },
        o = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var i = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = a, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) r.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var p = s;
    o.push([98, 0]), i()
}({
    1: function(e, t, i) {
        "use strict";
        (function(e) {
            var i = {
                widthTriggerScale: 9999,
                widthDesktopSafe: 1620,
                widthDesktop: 2e3,
                widthMobile: 768,
                heightDesktop: 1e3,
                heightMobile: 1e3,
                func: {
                    isMobile: function() {
                        var t = e(window).innerWidth(),
                            a = e(window).innerHeight();
                        return t <= i.widthMobile || t < a
                    }
                }
            };
            t.a = i
        }).call(this, i(4))
    },
    102: function(e, t, i) {
        (function(e) {
            e.fn.toggleClassname = function(t) {
                var i = {
                        obj: e(this),
                        toggle: [{
                            el: e(this).parent(),
                            className: "active"
                        }],
                        before: () => {},
                        after: () => {}
                    },
                    a = e.extend(i, t);
                a.obj.on("click", e => {
                    e.preventDefault(), a.before(), a.toggle.forEach((function(e) {
                        e.el.hasClass(e.className) ? e.el.removeClass(e.className) : e.el.addClass(e.className)
                    })), a.after()
                })
            }
        }).call(this, i(4))
    },
    103: function(e, t, i) {
        (function(e) {
            e.fn.scalePlatform = function(t) {
                var i = {
                        obj: e(this),
                        designSafe: {
                            desktop: 1140,
                            mobile: 768
                        },
                        designWidth: {
                            desktop: 2100,
                            mobile: 768
                        },
                        designHeight: {
                            desktop: 1e3,
                            mobile: 1100
                        },
                        mode: "",
                        elScale: {
                            desktop: {
                                topLeft: ".floatingDesktopTopLeft",
                                topCenter: ".floatingDesktopTopCenter",
                                topRight: ".floatingDesktopTopRight",
                                midLeft: ".floatingDesktopMidLeft",
                                midCenter: ".floatingDesktopMidCenter",
                                midRight: ".floatingDesktopMidRight",
                                botLeft: ".floatingDesktopBotLeft",
                                botCenter: ".floatingDesktopBotCenter",
                                botRight: ".floatingDesktopBotRight",
                                fullHeightScale: ".fullHeightDesktopScale",
                                autoHeightScale: ".autoHeightDesktopScale",
                                contentHeightScale: ".contentHeightDesktopScale"
                            },
                            mobile: {
                                topLeft: ".floatingMobileTopLeft",
                                topCenter: ".floatingMobileTopCenter",
                                topRight: ".floatingMobileTopRight",
                                midLeft: ".floatingMobileMidLeft",
                                midCenter: ".floatingMobileMidCenter",
                                midRight: ".floatingMobileMidRight",
                                botLeft: ".floatingMobileBotLeft",
                                botCenter: ".floatingMobileBotCenter",
                                botRight: ".floatingMobileBotRight",
                                fullHeightScale: ".fullHeightMobileScale",
                                autoHeightScale: ".autoHeightMobileScale",
                                contentHeightScale: ".contentHeightMobileScale"
                            }
                        },
                        elSpecial: {
                            rescaleHeight: ".floatingRescaleHeight",
                            burgerMenu: ".floatingBurgerMenu",
                            rescaleMaxHeight: ".floatingRescaleMaxHeight"
                        }
                    },
                    a = e.extend(i, t);
                e(window).on("resize", (function() {
                    var t, i = e(window).innerWidth(),
                        n = e(window).innerHeight(),
                        o = a.obj.outerHeight(),
                        r = (e = i, t = n) => e <= 700 || e < t;
                    var l = o * (t = r() ? i / a.designWidth.mobile : i / a.designWidth.desktop);
                    e(".wrapper").each((function() {
                        e(this).attr("data-scale-ratio", t)
                    })), a.obj.css({
                        display: "block",
                        transform: "scale(" + t + ")",
                        marginLeft: "0px"
                    }), a.obj.parent().css({
                        height: l + "px",
                        width: i + "px"
                    });
                    var s = "center center",
                        c = r() ? "mobile" : "desktop";
                    for (const [i, n] of Object.entries(a.elScale))
                        for (const [o, r] of Object.entries(n)) {
                            s = "";
                            switch (o) {
                                case "topLeft":
                                    s = "top left";
                                    break;
                                case "topCenter":
                                    s = "top center";
                                    break;
                                case "topRight":
                                    s = "top right";
                                    break;
                                case "midLeft":
                                    s = "center left";
                                    break;
                                case "midCenter":
                                    s = "center center";
                                    break;
                                case "midRight":
                                    s = "center right";
                                    break;
                                case "botLeft":
                                    s = "bottom left";
                                    break;
                                case "botCenter":
                                    s = "bottom center";
                                    break;
                                case "botRight":
                                    s = "bottom right";
                                    break;
                                case "fullHeightScale":
                                case "autoHeightScale":
                                case "contentHeightScale":
                                    s = "top left"
                            }
                            c === i && e(a.elScale[i][o]).length > 0 && e(r).css({
                                transformOrigin: s,
                                transform: "scale(" + t + ")",
                                marginLeft: "0px"
                            }), "fullHeightScale" == o && e(r).css({
                                height: "calc(100vh * " + 1 / t + ")"
                            }), "autoHeightScale" == o && e(r).each((function() {
                                var i = e(this).css("height"),
                                    a = {
                                        height: "calc(" + (i = parseInt(i.replace("px", ""))) + "px * " + t + ")"
                                    };
                                e(this).parent().css(a), e(this).parent().prev().css(a), e(this).parent().parent().css(a), "subHeader" == e(this).parent().parent().attr("id") && (console.log("set header css"), e("#subHeader").css({
                                    marginBottom: 1e3 * t * -1 + "px"
                                }))
                            }))
                        }
                    var p = a.elSpecial.burgerMenu;
                    e(p).length > 0 && e(p).each((function() {
                        var i = e(this).css("height");
                        i = parseInt(i.replace("px", "")), i = "100vh";
                        var a = "calc(100vh * " + 1 / t + ")";
                        e(p).css({
                            height: a + ""
                        });
                        var n = e(`\n                    <style>\n                        input[type=checkbox]:checked + label + ${p} {\n                            max-height: ${a}\n                        }\n                    </style>\n                `);
                        e("html > head").append(n)
                    }))
                })).resize()
            }
        }).call(this, i(4))
    },
    104: function(e, t, i) {
        "use strict";
        (function(e) {
            i(105);

            function t() {
                return Math.random().toString(36).substring(2, 8)
            }
            e.fn.lightBox = function(i) {
                var a = {
                        obj: e(this),
                        type: "",
                        objLightBox: "",
                        animate: {},
                        animateToggle: {},
                        backgroundClickToClose: !0,
                        floatEl: e("#floatLightbox"),
                        initClose: !0,
                        objClose: ".close"
                    },
                    n = e.extend(a, i);
                let o, r, l = '\n    <div class="popup__tool">\n        <div class="popup__close close">\n            <span class="hamburger hamburger--emphatic is-active">\n                <span class="hamburger-box">\n                    <span class="hamburger-inner">Burger</span>\n                </span>\n            </span>\n        </div>\n    </div>';
                switch (n.type) {
                    case "youtube":
                        o = t();
                        var s = n.obj.attr("href").split("=")[1];
                        n.obj.attr("href", "#" + o), r = `\n                <div id="${o}" class="popup popup--open-video">\n                    <div class="popup__background"></div>\n                    <div class="popup__content">\n                        <div class="embed"><div id="${o}_embed" data-youtube-id="${s}"></div></div>\n                    </div>\n                    ${l}\n                </div>\n            `, n.floatEl.append(r);
                        break;
                    case "image":
                        o = t();
                        let e = n.obj.attr("href");
                        n.obj.attr("href", "#" + o), r = `\n                <div id="${o}" class="popup popup--open-image">\n                    <div class="popup__background"></div>\n                    <div class="popup__content">\n                        <div class="image"><img src="${e}" /></div>\n                    </div>\n                    ${l}\n                </div>\n            `, n.floatEl.append(r)
                }
                n.obj.on("click", t => {
                    t.preventDefault(), e("html").addClass("openedPopup"), "youtube" == e(this).data("lightbox-type") && null == ytPlayer[e(this).attr("href")] && (ytPlayer[e(this).attr("href")] = YoutubePlayer(e(this).attr("href").substring(1) + "_embed", {
                        videoId: e(e(this).attr("href") + "_embed").data("youtube-id"),
                        playerVars: {
                            rel: 0,
                            autoplay: 1,
                            color: "white"
                        }
                    })), e(e(this).attr("href")), e(e(this).attr("href")).addClass("active"), console.log(e(e(this).attr("href")).children(".popup__tool").length > 0), n.initClose && 0 == e(e(this).attr("href")).children(".popup__tool").length && e(e(this).attr("href")).append(l), e(e(this).attr("href")).animate(n.animate), "youtube" == e(this).data("lightbox-type") && ytPlayer[e(this).attr("href")].playVideo()
                })
            }, e("body").on("click", ".close", (function() {
                e("html").removeClass("openedPopup"), e(this).parents(".popup").removeClass("active"), e(this).parent().parent().removeClass("active"), e(this).parent().removeClass("active"), e(this).parent().parent().hasClass("popup--open-video") && ytPlayer["#" + e(this).parent().parent().attr("id")].pauseVideo()
            })), e("body").on("click", ".popup__background", (function() {
                e("html").removeClass("openedPopup"), e(this).parent().removeClass("active"), e(this).parent().hasClass("popup--open-video") && ytPlayer["#" + e(this).parent().attr("id")].pauseVideo()
            }))
        }).call(this, i(4))
    },
    106: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i(93),
                a = i.n(t),
                n = i(94),
                o = i.n(n),
                r = {};

            function l({
                swiper: e,
                extendParams: t,
                on: i
            }) {}
            e.fn.initSwiper = function(t) {
                var i = e.extend({
                        isNested: !1,
                        isSync: !1,
                        isRenderBullet: !1,
                        isSwiperAnimation: !1,
                        swiperOptions: {
                            centeredSlides: !0,
                            slidesPerView: 1,
                            autoplay: {
                                delay: 5e3
                            },
                            lazy: {
                                loadPrevNext: !0
                            },
                            followFinger: !1,
                            spaceBetween: 0
                        },
                        nestedOptions: {},
                        syncOptions: {},
                        onInit: function() {},
                        onChange: function(e = function() {}) {
                            e()
                        },
                        before: function() {},
                        after: function() {},
                        debug: !1
                    }, t),
                    n = {};
                if (i.debug && (n = {
                        modules: [l],
                        debugger: !0
                    }), 0 == e(this).length) return;
                let s = "#" + e(this).attr("id");
                i.before(), null != r[s.substr(1)] && ("function" == typeof r[s.substr(1)].destroy() && r[s.substr(1)].destroy(), delete r[s.substr(1)]);
                var c = {};
                if (i.isRenderBullet) {
                    var p = e(this).attr("id");
                    c = {
                        renderBullet: function(t, i) {
                            var a = "",
                                n = t + 1,
                                o = e("#" + p + " .swiper-wrapper").children(".swiper-slide").eq(t).attr("data-swiper-name"),
                                r = e("#" + p + " .swiper-wrapper").children(".swiper-slide").eq(t).attr("data-swiper-code");
                            return o && (n = o), r && (a = r + " swiper-pagination-bullet--" + r), '<span class="' + i + " " + a + '">' + n + "</span>"
                        }
                    }
                }
                i.isNested && e(this).find(".swiper").each((function() {
                    void 0 === e(this).attr("data-swiper-isSync") && e(this).initSwiper(i.nestedOptions)
                }));
                var d = {};
                if (i.isSync) {
                    p = e(this).attr("id");
                    var g = e(this).attr("data-sync-with");
                    e("#" + g).initSwiper({
                        ...i.syncOptions,
                        swiperOptions: {
                            watchOverflow: !0,
                            centeredSlides: !0,
                            centeredSlidesBounds: !0,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !0,
                            scrollbar: {
                                el: ".swiper-scrollbar-" + g,
                                hide: !0
                            },
                            ...i.syncOptions.swiperOptions
                        },
                        after: function() {}
                    }), d = {
                        slideToClickedSlide: !0,
                        watchOverflow: !0,
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        preventInteractionOnTransition: !0,
                        thumbs: {
                            swiper: r[g]
                        }
                    }
                }
                var h = new o.a;
                const u = new a.a(s, {
                    ...i.swiperOptions,
                    ...d,
                    on: {
                        afterInit: function() {
                            i.isSwiperAnimation && null != h.animations && h.init(this).animate(), h.init(this).animate(), i.onInit()
                        },
                        slideChangeTransitionStart: function() {
                            i.onChange(), i.isSwiperAnimation && null != h.animations && h.init(this).animate(), h.init(this).animate()
                        },
                        ...i.swiperOptions.on
                    },
                    pagination: {
                        el: ".swiper-pagination--" + s.substr(1),
                        clickable: !0,
                        ...i.swiperOptions.pagination,
                        ...c
                    },
                    navigation: {
                        nextEl: ".swiper-button-next--" + s.substr(1),
                        prevEl: ".swiper-button-prev--" + s.substr(1),
                        ...i.swiperOptions.navigation
                    },
                    ...n
                });
                return r[s.substr(1)] = u, i.after(), u
            }
        }).call(this, i(4))
    },
    107: function(e, t, i) {
        (function(e) {
            e.fn.universalLink = function(t) {
                var i = e.extend({
                        dataAppstore: "data-appstore",
                        dataAndroid: "data-ggplay"
                    }, t),
                    a = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/i),
                    n = navigator.userAgent.toLowerCase().indexOf("android") > -1,
                    o = "#";
                a ? o = e(this).attr(i.dataAppstore) : n && (o = e(this).attr(i.dataAndroid)), e(this).attr("href", o)
            }
        }).call(this, i(4))
    },
    108: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i(95),
                a = i.n(t);
            e.fn.scrollWatch = function(t) {
                var i = {
                        before: () => {},
                        options: {
                            watchOnce: !1,
                            watch: "#sectionHeader",
                            scrollThrottle: 20,
                            onElementInView: function() {
                                e(".breadcrumb").removeClass("fixed"), e(".nav").removeClass("fixed")
                            },
                            onElementOutOfView: function() {
                                e(".breadcrumb").addClass("fixed"), e(".nav").addClass("fixed")
                            }
                        },
                        after: () => {}
                    },
                    n = e.extend(i, t);
                n.before(), console.log(n.options);
                new a.a(n.options);
                n.after()
            }
        }).call(this, i(4))
    },
    109: function(e, t, i) {
        (function(e) {
            e.fn.audioController = function(t) {
                var i = {
                        obj: e(this),
                        el: {
                            mute: ".audioMute",
                            state: ".audioState",
                            prev: ".audioPrev",
                            next: ".audioNext",
                            container: ".audioBackground"
                        },
                        toggleClass: "active",
                        state: {
                            isMuted: !1,
                            isPlaying: !1,
                            playingId: 0
                        },
                        triggerAutoplay: !0,
                        data: []
                    },
                    a = e.extend(i, t);
                e(a.el.container).each((function() {
                    e(this).children("audio").each((function() {
                        a.data.push(e(this).get(0))
                    }))
                }));
                var n = function(t = a.state.playingId) {
                    a.data.forEach(e => {
                        e.pause(), e.muted = !1
                    }), a.data[t].play(), a.state.isPlaying = !0, e(a.el.state).addClass("active")
                };
                a.triggerAutoplay && e("body").one("click", (function() {
                    n()
                })), e("body").on("click", a.el.state, (function() {
                    a.state.isPlaying ? function(t = a.state.playingId) {
                        a.data[t].pause(), a.state.isPlaying = !1, e(a.el.state).removeClass("active")
                    }() : n(), a.triggerAutoplay = !1
                })), e("body").on("click", a.el.mute, (function() {
                    a.state.isMuted ? (a.data.forEach(e => {
                        e.muted = !1
                    }), a.state.isMuted = !1, e(a.el.mute).removeClass("active")) : (a.data.forEach(e => {
                        e.muted = !0
                    }), a.state.isMuted = !0, e(a.el.mute).addClass("active"))
                })), e("body").on("click", a.el.prev, (function() {
                    var e = a.data.length - 1;
                    0 == a.state.playingId ? a.state.playingId = e : a.state.playingId--, n()
                })), e("body").on("click", a.el.next, (function() {
                    var e = a.data.length - 1;
                    a.state.playingId + 1 > e ? a.state.playingId = 0 : a.state.playingId++, n()
                }))
            }
        }).call(this, i(4))
    },
    110: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i(97);
            e.fn.smoothScrollbar = function(i) {
                var a = {
                        obj: e(this),
                        watches: [{
                            offset: 100,
                            positiveReturn: function() {},
                            negativeReturn: function() {}
                        }],
                        debug: !1
                    },
                    n = e.extend(a, i),
                    o = e(window).innerWidth(),
                    r = e(window).innerHeight(),
                    l = 0;
                if (n.obj.length > 0) {
                    e(this).css({
                        width: o + "px",
                        height: r + "px",
                        overflowY: "auto"
                    });
                    let i = {};
                    i.root = t.a.init(n.obj.get(0), {
                        alwaysShowTracks: !0,
                        damping: .1
                    }), e(".scrollTop").on("click", (function(e) {
                        return i.root.scrollTo(0, 0, 1e3, {}), !1
                    })), i.root.addListener((function(t) {
                        n.watches.forEach(e => {
                            t.offset.y >= e.offset ? e.positiveReturn() : e.negativeReturn()
                        }), t.offset.y > 500 && 0 == l && (l = 1, e("#floatright .floatright__main").addClass("active"))
                    }))
                }
            }
        }).call(this, i(4))
    },
    153: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i(60),
                a = i.n(t);
            e.fn.wiki = function(t) {
                var i = {
                        el: {
                            container: "subWiki",
                            draftSearch: "wiki_search_draft",
                            search: "wiki_search",
                            filterNation: "wiki_nation",
                            filterType: "wiki_type",
                            pagination: "wiki_pagination",
                            list: "wiki_ul",
                            item: "wiki_item"
                        },
                        data: {
                            nation: "data-wiki-nation",
                            type: "data-wiki-type",
                            name: "data-wiki-name",
                            query: "data-wiki-query"
                        },
                        pagination: !0,
                        itemsEachPage: function() {
                            e(window).innerWidth(), e(window).innerHeight();
                            return 6
                        }
                    },
                    n = e.extend(i, t),
                    o = (e("." + n.el.item).each((function() {
                        var t = e(this).attr("data-wiki-query"),
                            i = e(this).attr("data-wiki-name");
                        e(this).attr("data-wiki-query", t + " " + i.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e").replace(/ì|í|ị|ỉ|ĩ/g, "i").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u").replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y").replace(/đ/g, "d").replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A").replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E").replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I").replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O").replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U").replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y").replace(/Đ/g, "D").replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "").replace(/\u02C6|\u0306|\u031B/g, "").replace(/ + /g, " ").trim().replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " "))
                    })), {
                        listClass: n.el.list,
                        searchClass: n.el.search,
                        page: n.itemsEachPage(),
                        valueNames: [{
                            name: n.el.item,
                            attr: n.data.query
                        }]
                    });
                n.pagination && (o = {
                    ...o,
                    pagination: [{
                        paginationClass: n.el.pagination,
                        innerWindow: 2,
                        outerWindow: 1
                    }]
                });
                var r = new a.a(n.el.container, o),
                    l = "",
                    s = "",
                    c = "",
                    p = e("." + n.el.search);
                if (e("." + n.el.draftSearch).length > 0) {
                    var d = e("." + n.el.draftSearch);
                    d.on("input", (function() {
                        var t = d.val();
                        (c = t).length > 0 && (l = "", s = "", e("." + n.el.filterNation + " li").children("a").removeClass("active"), e("." + n.el.filterNation + " li").eq(0).children("a").addClass("active"), e("." + n.el.filterType + " li").children("a").removeClass("active"), e("." + n.el.filterType + " li").eq(0).children("a").addClass("active")), g()
                    })), d.on("keydown", (function(e) {
                        if (13 === e.key) return e.preventDefault(), !1
                    }))
                }
                e("." + n.el.filterNation).length > 0 && e("." + n.el.filterNation).find("a").on("click", (function() {
                    var t = e("." + n.el.draftSearch);
                    t.val(""), t.trigger("input");
                    var i = e(this).attr(n.data.nation);
                    l = i, e("." + n.el.filterNation + " li").children("a").removeClass("active"), e(this).addClass("active"), g()
                }));
                e("." + n.el.filterType).length > 0 && e("." + n.el.filterType).find("a").on("click", (function() {
                    var t = e("." + n.el.draftSearch);
                    t.val(""), t.trigger("input");
                    var i = e(this).attr(n.data.type);
                    s = i, e("." + n.el.filterType + " li").children("a").removeClass("active"), e(this).addClass("active"), g()
                }));
                var g = function() {
                    console.log(l, s, c);
                    var e = "";
                    e = c.length > 0 ? c : l.length > 0 && s.length > 0 ? l + " " + s : l.length > 0 ? l : s, console.log(e), p.val(e), r.search(e)
                }
            }
        }).call(this, i(4))
    },
    165: function(e, t, i) {
        "use strict";
        (function(e) {
            i(166)
        }).call(this, i(4))
    },
    167: function(e, t, i) {
        "use strict";
        (function(e) {
            i(168), i(169);
            e.fn.vPortal = function(i) {
                var n = {
                        container: "",
                        el: {
                            parentContainer: "",
                            tabContainer: "",
                            resultContainer: "",
                            paginationContainer: ".pagination",
                            containerSuffix: " li a",
                            viewAll: ".viewAll",
                            itemTotal: "#itemTotal",
                            itemPerPage: "#itemPerPage",
                            currentSection: "#currentSection",
                            shortUri: "#shortUri"
                        },
                        data: {
                            startPage: 1,
                            totalPage: 1
                        },
                        paginationOptions: {},
                        before: () => {},
                        after: () => {}
                    },
                    o = {
                        ...n,
                        ...i,
                        el: {
                            ...n.el,
                            ...i.el
                        },
                        data: {
                            ...n.el,
                            ...i.el
                        }
                    };
                if (o.el.parentContainer = o.container + " ", o.before(), e(o.el.parentContainer + o.el.paginationContainer).length > 0) {
                    var r = e(o.el.parentContainer + o.el.paginationContainer),
                        l = r.attr("data-params");
                    null == l && (l = "");
                    var s = r.attr("data-type");
                    null == s && (s = "json");
                    var c = r.attr("data-block-name");
                    null == c && (c = "");
                    var p = r.attr("data-shorturl");
                    null == p && (p = ""), t(o.el, s, p, c, l, (function() {}), o.paginationOptions)
                }
                e("body").on("click", o.el.parentContainer + o.el.tabContainer + o.el.containerSuffix, (function(t) {
                    t.preventDefault(), "#" != e(this).attr("href") && (window.location.href = e(this).attr("href")), e(o.el.parentContainer + o.el.tabContainer + o.el.containerSuffix).removeClass("active");
                    var i = e(this).data("params");
                    null == i && (i = "");
                    var n = e(this).data("type");
                    null == n && (n = "json");
                    var r = e(this).data("viewall");
                    null == r && (r = "#");
                    var l = e(this).data("block-name"),
                        s = e(this).data("shorturl");
                    return e(this).addClass("active"), a(o.el, 1, "loadTab", n, s, l, i, (function() {
                        o.after(), e(o.el.parentContainer + o.el.viewAll).attr("href", r)
                    }), o.paginationOptions), !1
                }))
            };
            var t = function(t, i, n, o, r, l = function() {}, s = {}) {
                    var c = e(t.parentContainer + t.itemTotal).val(),
                        p = e(t.parentContainer + t.itemPerPage).val(),
                        d = (e(t.parentContainer + t.currentSection).val(), c % p > 0 ? 1 : 0),
                        g = parseInt(c / p) + d;
                    g > 1 ? e(t.parentContainer + t.paginationContainer).twbsPagination({
                        startPage: 1,
                        totalPages: g,
                        visiblePages: 5,
                        first: "&laquo;",
                        prev: "&lsaquo;",
                        next: "&rsaquo;",
                        last: "&raquo;",
                        paginationClass: "pagination",
                        nextClass: "next",
                        prevClass: "prev",
                        lastClass: "last",
                        firstClass: "first",
                        onPageClick: function(e, c) {
                            return a(t, c, "paging", i, n, o, r, l(), s), !1
                        },
                        ...s
                    }) : (e(t.parentContainer + t.paginationContainer).empty(), e(t.parentContainer + t.paginationContainer).removeData("twbs-pagination"), e(t.parentContainer + t.paginationContainer).unbind("page"))
                },
                a = function(i, a, n, o, r, l, s = "", c = (() => {}), p = {}) {
                    var d = r + "/" + l + "." + a + ".html";
                    d = "//" + (d = (d = d.replaceAll("///", "/")).replaceAll("//", "/")), s.length > 0 && (d += s), d.indexOf("undefined") < 0 && e.ajax({
                        url: d,
                        dataType: o,
                        success: function(a) {
                            e(i.parentContainer + i.resultContainer).html(a), "loadTab" == n && (e(i.parentContainer + i.paginationContainer).empty(), e(i.parentContainer + i.paginationContainer).removeData("twbs-pagination"), e(i.parentContainer + i.paginationContainer).unbind("page"), e(i.parentContainer + i.itemTotal).val() > 0 && t(i, o, r, l, s, c(), p)), c()
                        }
                    })
                }
        }).call(this, i(4))
    },
    171: function(e, t, i) {
        "use strict";
        i.r(t);
        i(99)
    },
    98: function(e, t, i) {
        e.exports = i(171)
    },
    99: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i(1),
                a = (i(102), i(103), i(104), i(106), i(107), i(108), i(109), i(110), i(153), i(165), i(167), i(170), {
                    width: e(window).innerWidth(),
                    height: e(window).innerHeight()
                });
            e((function() {
                if (n(), e().wiki(), e(".news").each((function() {
                        var t = "#" + e(this).attr("id");
                        e().vPortal({
                            container: t,
                            el: {
                                tabContainer: ".news_tab > ul",
                                resultContainer: ".news_list"
                            },
                            paginationOptions: {}
                        })
                    })), e(".gallery").each((function() {
                        var t = "#" + e(this).attr("id");
                        e().vPortal({
                            container: t,
                            el: {
                                tabContainer: ".gallery_tab > ul",
                                resultContainer: ".gallery_list"
                            },
                            paginationOptions: {}
                        })
                    })), e("#blockBannerSwiper").length > 0 && e("#blockBannerSwiper").initSwiper({
                        swiperOptions: {
                            slidesPerView: 1,
                            centeredSlides: !0,
                            lazy: {
                                loadPrevNext: !0
                            },
                            autoplay: {
                                delay: 7e3
                            }
                        }
                    }), e("#blockPhotoSwiper").length > 0 && e("#blockPhotoSwiper").initSwiper({
                        swiperOptions: {
                            slidesPerView: "auto",
                            spaceBetween: 5,
                            lazy: {
                                loadPrevNext: !0
                            },
                            autoplay: {
                                delay: 7e3
                            },
                            scrollbar: {
                                el: ".swiper-scrollbar--blockPhotoSwiper",
                                draggable: !0
                            }
                        }
                    }), e("#weaponSwiper").length > 0) {
                    const t = e("#weaponSwiperThumb").initSwiper({
                        swiperOptions: {
                            spaceBetween: 0,
                            slidesPerView: 5,
                            slideToClickedSlide: !0,
                            watchSlidesProgress: !0,
                            autoplay: {
                                delay: 7e3
                            }
                        },
                        debug: !0
                    });
                    e("#weaponSwiper").initSwiper({
                        swiperOptions: {
                            spaceBetween: 10,
                            navigation: {
                                nextEl: "#blockHomeChar .swiper-button-next",
                                prevEl: "#blockHomeChar .swiper-button-prev"
                            },
                            slideToClickedSlide: !0,
                            lazy: {
                                loadPrevNext: !0
                            },
                            thumbs: {
                                swiper: t
                            },
                            autoplay: {
                                delay: 7e3
                            }
                        },
                        debug: !0
                    })
                }
                e("#blockHomeFeatureSwiper").length > 0 && e("#blockHomeFeatureSwiper").initSwiper({
                    swiperOptions: {
                        slidesPerView: 1,
                        centeredSlides: !0,
                        lazy: {
                            loadPrevNext: !0
                        },
                        effect: "fade",
                        autoplay: {
                            delay: 7e3
                        }
                    }
                }), e("#blockHomeVersionSwiper").length > 0 && e("#blockHomeVersionSwiper").initSwiper({
                    swiperOptions: {
                        slidesPerView: 1,
                        centeredSlides: !0,
                        lazy: {
                            loadPrevNext: !0
                        }
                    }
                }), e("#featuredNews").length > 0 && ((e = a.width, t = a.height) => e <= 700 || e < t)() && e("#featuredNews-swiper").initSwiper({
                    swiperOptions: {
                        slidesPerView: 1,
                        centeredSlides: !0,
                        lazy: {
                            loadPrevNext: !0
                        },
                        navigation: {
                            nextEl: "#featuredNews .btn-next",
                            prevEl: "#featuredNews .btn-prev"
                        }
                    }
                })
            }));
            var n = function() {
                e(".onelink").each((function() {
                    e(".onelink").universalLink()
                })), e("#navBurger").each((function() {
                    e("#navBurger").toggleClassname({
                        toggle: [{
                            el: e("#floattop"),
                            className: "active"
                        }, {
                            el: e("#floatnav"),
                            className: "active"
                        }, {
                            el: e("#navBurger"),
                            className: "is-active"
                        }]
                    })
                })), e("#subwebBurger").each((function() {
                    e("#subwebBurger").toggleClassname({
                        toggle: [{
                            el: e(".midbar__menu"),
                            className: "active"
                        }, {
                            el: e("#subwebBurger"),
                            className: "is-active"
                        }]
                    })
                })), e("#asideRightToggle").each((function() {
                    e(this).toggleClassname({
                        toggle: [{
                            el: e(".floatright__main"),
                            className: "active"
                        }]
                    })
                })), e("#asideLeftToggle").each((function() {
                    e(this).toggleClassname({
                        toggle: [{
                            el: e(".floatleft__main"),
                            className: "active"
                        }]
                    })
                })), 0 == e(".subContent").length && 0 == e(".subSubweb").length && 0 == e(".subPet").length && (e().scalePlatform({
                    designSafe: {
                        desktop: t.a.widthTriggerScale,
                        mobile: t.a.widthTriggerScale
                    },
                    designWidth: {
                        desktop: t.a.widthDesktop,
                        mobile: t.a.widthMobile
                    },
                    designHeight: {
                        desktop: t.a.heightDesktop,
                        mobile: t.a.heightMobile
                    }
                }), e(".outer--popup .inner").scalePlatform({
                    designSafe: {
                        desktop: t.a.widthTriggerScale,
                        mobile: t.a.widthTriggerScale
                    },
                    designWidth: {
                        desktop: t.a.widthDesktop,
                        mobile: t.a.widthMobile
                    },
                    designHeight: {
                        desktop: t.a.heightDesktop,
                        mobile: t.a.heightMobile
                    }
                })), e(".scrollContent").smoothScrollbar(), e(".scrollTop").each((function() {
                    e(this).on("click", (function() {
                        e("html, body").animate({
                            scrollTop: 0
                        }, 400)
                    }))
                })), e("[data-lightbox]").length > 0 && e("[data-lightbox]").each((function() {
                    e(this).lightBox({
                        objLightBox: e(this).attr("href"),
                        type: e(this).data("lightbox-type")
                    })
                }))
            };
            window.addEventListener("load", (function() {
                this.setTimeout((function() {
                    0 == e(".subContent").length && 0 == e(".subSubweb").length && 0 == e(".subPet").length || (e().scalePlatform({
                        designSafe: {
                            desktop: t.a.widthTriggerScale,
                            mobile: t.a.widthTriggerScale
                        },
                        designWidth: {
                            desktop: t.a.widthDesktop,
                            mobile: t.a.widthMobile
                        },
                        designHeight: {
                            desktop: t.a.heightDesktop,
                            mobile: t.a.heightMobile
                        }
                    }), e(".outer--popup .inner").scalePlatform({
                        designSafe: {
                            desktop: t.a.widthTriggerScale,
                            mobile: t.a.widthTriggerScale
                        },
                        designWidth: {
                            desktop: t.a.widthDesktop,
                            mobile: t.a.widthMobile
                        },
                        designHeight: {
                            desktop: t.a.heightDesktop,
                            mobile: t.a.heightMobile
                        }
                    }))
                }), 200)
            }))
        }).call(this, i(4))
    }
});