!function(){var t,e,o,i,n={8272:function(){Flatsome.behavior("equalize-box",{attach(t){let e={ScreenSize:{LARGE:1,MEDIUM:2,SMALL:3},equalizeItems:function(t){const e=this;e.maxHeight=0,e.rowEnd=e.disablePerRow?e.boxCount:e.colPerRow,e.$items=[],e.rating={present:!1,height:0,dummy:null},e.swatches={present:!1,height:0,dummy:null},jQuery(t,e.currentElement).each((function(t){const o=jQuery(this);e.$items.push(o),o.height(""),o.children(".js-star-rating").remove();const i=o.children(".star-rating");var n;i.length&&(e.rating.present=!0,e.rating.height=i.height(),e.rating.dummy=null!==(n=e.rating.dummy)&&void 0!==n?n:'<div class="js-star-rating '+i.attr("class")+'" style="opacity: 0; visibility: hidden"></div>'),o.children(".js-ux-swatches").remove();const r=o.children(".ux-swatches.ux-swatches-in-loop");var a;r.length&&(e.swatches.present=!0,e.swatches.height=r.height(),e.swatches.dummy=null!==(a=e.swatches.dummy)&&void 0!==a?a:'<div class="js-ux-swatches '+r.attr("class")+'" style="opacity: 0; visibility: hidden"><div class="'+r.find(".ux-swatch").attr("class")+'"></div></div>'),o.height()>e.maxHeight&&(e.maxHeight=o.height()),t!==e.rowEnd-1&&t!==e.boxCount-1||(e.$items.forEach((function(t){t.height(e.maxHeight),e.maybeAddDummyRating(t),e.maybeAddDummySwatches(t)})),e.rowEnd+=e.colPerRow,e.maxHeight=0,e.$items=[],e.rating.present=!1,e.swatches.present=!1)}))},getColsPerRow:function(){const t=jQuery(this.currentElement).attr("class"),e=/large-columns-(\d+)/g,o=/medium-columns-(\d+)/g,i=/small-columns-(\d+)/g;let n;switch(this.getScreenSize()){case this.ScreenSize.LARGE:return n=e.exec(t),n?parseInt(n[1]):3;case this.ScreenSize.MEDIUM:return n=o.exec(t),n?parseInt(n[1]):3;case this.ScreenSize.SMALL:return n=i.exec(t),n?parseInt(n[1]):2}},maybeAddDummyRating:function(t){let e=t;this.rating.present&&e.hasClass("price-wrapper")&&(e.children(".star-rating").length||(e.prepend(this.rating.dummy),e.children(".js-star-rating").height(this.rating.height)))},maybeAddDummySwatches:function(t){const e=t;this.swatches.present&&(e.children(".ux-swatches.ux-swatches-in-loop").length||(e.prepend(this.swatches.dummy),e.children(".js-ux-swatches").height(this.swatches.height)))},getScreenSize:function(){return window.matchMedia("(min-width: 850px)").matches?this.ScreenSize.LARGE:window.matchMedia("(min-width: 550px) and (max-width: 849px)").matches?this.ScreenSize.MEDIUM:window.matchMedia("(max-width: 549px)").matches?this.ScreenSize.SMALL:void 0},init:function(){const e=this,o=[".product-title",".price-wrapper",".box-excerpt",".add-to-cart-button"];jQuery(".equalize-box",t).each(((t,i)=>{e.currentElement=i,e.colPerRow=e.getColsPerRow(),1!==e.colPerRow&&(e.disablePerRow=jQuery(i).hasClass("row-slider")||jQuery(i).hasClass("row-grid"),e.boxCount=jQuery(".box-text",e.currentElement).length,o.forEach((t=>{e.equalizeItems(".box-text "+t)})),e.equalizeItems(".box-text"))}))}};e.init(),jQuery(window).on("resize",(()=>{e.init()})),jQuery(document).on("flatsome-equalize-box",(()=>{e.init()}))}})},8785:function(){Flatsome.behavior("add-qty",{attach(t){jQuery(".quantity",t).addQty()}})},7925:function(){Flatsome.plugin("addQty",(function(t,e){const o=jQuery(t);String.prototype.uxGetDecimals||(String.prototype.uxGetDecimals=function(){const t=(""+this).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}),o.off("click.flatsome",".plus, .minus").on("click.flatsome",".plus, .minus",(function(){const t=jQuery(this),e=t.closest(".quantity").find(".qty");let o=parseFloat(e.val()),i=parseFloat(e.attr("max")),n=parseFloat(e.attr("min")),r=e.attr("step");o&&""!==o&&"NaN"!==o||(o=0),""!==i&&"NaN"!==i||(i=""),""!==n&&"NaN"!==n||(n=0),"any"!==r&&""!==r&&void 0!==r&&"NaN"!==parseFloat(r)||(r=1),t.is(".plus")?i&&(i===o||o>i)?e.val(i):e.val((o+parseFloat(r)).toFixed(r.uxGetDecimals())):n&&(n===o||o<n)?e.val(n):o>0&&e.val((o-parseFloat(r)).toFixed(r.uxGetDecimals())),e.trigger("input"),e.trigger("change")}))}))},775:function(){setTimeout((function(){jQuery(document.body).on("country_to_state_changed",(function(){"undefined"!=typeof floatlabels&&floatlabels.rebuild()}))}),500)},8417:function(){jQuery((function(t){t(document.body).on("change",".woocommerce-mini-cart-item .qty",(function(){var e;(e=t(this))[0].checkValidity()?function(e,o){const i=e.find(".remove_from_cart_button").attr("data-cart_item_key");i&&(e.block({message:null}),t.post(flatsomeVars.ajaxurl,{action:"flatsome_ajax_cart_item_alter_quantity",quantity:o,cart_item_key:i}).done((()=>{t(document.body).trigger("updated_wc_div"),t(document.body).trigger("added_to_cart"),e.unblock(),e=null})))}(e.closest(".woocommerce-mini-cart-item"),e.val()):e[0].reportValidity()}))}))},2434:function(){jQuery(document).ready((function(){if(!jQuery(".custom-product-page").length)return;const t=jQuery("#respond p.stars");if(t.length>1){const e=t[0].outerHTML;t.remove(),jQuery('select[id="rating"]').hide().before(e)}}))},1330:function(){jQuery(document).on("yith_infs_adding_elem",(function(t){Flatsome.attach(jQuery(".shop-container"))}))},4696:function(t,e,o){var i,n;!function(r,a){"use strict";i=[o(428)],void 0===(n=function(t){!function(t){var e,o,i,n,r,a,s={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:t.noop,beforeHide:t.noop,onShow:t.noop,onHide:t.noop,onMove:t.noop};function c(e,o){this.$target=t(e),this.opts=t.extend({},s,o,this.$target.data()),void 0===this.isOpen&&this._init()}c.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=t('<div class="easyzoom-flyout" />'),this.$notice=t('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":t.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":t.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":t.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",(function(t){t.preventDefault()}))},c.prototype.show=function(t,r){var a=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),(function(){!a.isMouseOver&&r||a.show(t)}));this.$target.append(this.$flyout);var s=this.$target.outerWidth(),c=this.$target.outerHeight(),l=this.$flyout.width(),u=this.$flyout.height(),d=this.$zoom.width(),h=this.$zoom.height();e=Math.ceil(d-l),o=Math.ceil(h-u),e<0&&(e=0),o<0&&(o=0),i=e/s,n=o/c,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},c.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},c.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},c.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},c.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},c.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout((function(){t.$notice.detach(),t.detachNotice=null}),this.opts.errorDuration)},c.prototype._loadImage=function(e,o){var i=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=t(i).on("error",t.proxy(this._onError,this)).on("load",o,t.proxy(this._onLoad,this)),i.style.position="absolute",i.src=e},c.prototype._move=function(t){if(0===t.type.indexOf("touch")){var s=t.touches||t.originalEvent.touches;r=s[0].pageX,a=s[0].pageY}else r=t.pageX||r,a=t.pageY||a;var c=this.$target.offset(),l=r-c.left,u=a-c.top,d=Math.ceil(l*i),h=Math.ceil(u*n);if(flatsomeVars.rtl&&(d=e-d),d<0||h<0||d>e||h>o)this.hide();else{var m=-1*h,f=-1*d;"transform"in document.body.style?this.$zoom.css({transform:`translate(${flatsomeVars.rtl?-f:f}px, ${m}px)`}):this.$zoom.css({top:m,left:f}),this.opts.onMove.call(this,m,f)}},c.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},c.prototype.swap=function(e,o,i){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:e,srcset:t.isArray(i)?i.join():i}),this.$link.attr(this.opts.linkAttribute,o)},c.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},t.fn.easyZoom=function(e){return this.each((function(){var o=t.data(this,"easyZoom");o?void 0===o.isOpen&&o._init():t.data(this,"easyZoom",new c(this,e))}))}}(t)}.apply(e,i))||(t.exports=n)}()},428:function(t){"use strict";t.exports=window.jQuery}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var o=r[t]={exports:{}};return n[t].call(o.exports,o,o.exports,a),o.exports}a.m=n,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},a.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"==typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"==typeof o.then)return o}var n=Object.create(null);a.r(n);var r={};t=t||[null,e({}),e([]),e(e)];for(var s=2&i&&o;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){r[t]=function(){return o[t]}}));return r.default=function(){return o},a.d(n,r),n},a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))},a.u=function(t){return"js/chunk.popups.js"},a.miniCssF=function(t){},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o={},i="flatsome:",a.l=function(t,e,n,r){if(o[t])o[t].push(e);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==i+n){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",i+n),s.src=t),o[t]=[e];var h=function(e,i){s.onerror=s.onload=null,clearTimeout(m);var n=o[t];if(delete o[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(i)})),e)return e(i)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){const t=a.u;a.u=e=>{const o=t(e),i=globalThis.flatsomeVars?.theme.version;return o+(i?"?ver="+i:"")}}(),a.p=globalThis.flatsomeVars?.assets_url??"/",function(){var t={643:0};a.f.j=function(e,o){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)o.push(i[2]);else{var n=new Promise((function(o,n){i=t[e]=[o,n]}));o.push(i[2]=n);var r=a.p+a.u(e),s=new Error;a.l(r,(function(o){if(a.o(t,e)&&(0!==(i=t[e])&&(t[e]=void 0),i)){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,i[1](s)}}),"chunk-"+e,e)}};var e=function(e,o){var i,n,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);c&&c(a)}for(e&&e(o);l<r.length;l++)n=r[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0},o=self.flatsomeChunks=self.flatsomeChunks||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}(),function(){"use strict";a(7925),a(8785),a(8272);const t=window.matchMedia("(prefers-reduced-motion: reduce)");let e=!1;function o(){e="undefined"==typeof UxBuilder&&t.matches}function i(){return jQuery.fn.magnificPopup?Promise.resolve():a.e(230).then(a.t.bind(a,2801,23))}o(),t.addEventListener?.("change",o),jQuery.loadMagnificPopup=i,jQuery.fn.lazyMagnificPopup=function(t){const e=jQuery(this),o=t.delegate?e.find(t.delegate):e;return o.one("click",(n=>{n.preventDefault(),i().then((()=>{e.data("magnificPopup")||e.magnificPopup(t),e.magnificPopup("open",o.index(n.currentTarget)||0)}))})),e},Flatsome.behavior("quick-view",{attach:function(t){"uxBuilder"!==jQuery("html").attr("ng-app")&&jQuery(".quick-view",t).each((function(t,o){jQuery(o).hasClass("quick-view-added")||(jQuery(o).on("click",(function(t){if(""!=jQuery(this).attr("data-prod")){jQuery(this).parent().parent().addClass("processing");var n={action:"flatsome_quickview",product:jQuery(this).attr("data-prod")};jQuery.post(flatsomeVars.ajaxurl,n,(function(t){i().then((()=>{jQuery(".processing").removeClass("processing"),jQuery.magnificPopup.open({removalDelay:300,autoFocusLast:!1,closeMarkup:flatsomeVars.lightbox.close_markup,closeBtnInside:flatsomeVars.lightbox.close_btn_inside,items:{src:'<div class="product-lightbox lightbox-content">'+t+"</div>",type:"inline"},callbacks:{afterClose:()=>{jQuery(o).closest(".box").find(".box-text a:first").trigger("focus")}}}),setTimeout((function(){const t=jQuery(".product-lightbox");t.imagesLoaded((function(){const t={cellAlign:"left",wrapAround:!0,autoPlay:!1,prevNextButtons:!0,adaptiveHeight:!0,imagesLoaded:!0,dragThreshold:15,rightToLeft:flatsomeVars.rtl};e&&(t.friction=1,t.selectedAttraction=1),jQuery(".product-lightbox .slider").lazyFlickity(t)})),Flatsome.attach("tooltips",t)}),300);let i=jQuery(".product-lightbox form.variations_form");jQuery(".product-lightbox form").hasClass("variations_form")&&i.wc_variation_form();let n=jQuery(".product-lightbox .product-gallery-slider"),r=jQuery(".product-lightbox .product-gallery-slider .slide.first img"),a=jQuery(".product-lightbox .product-gallery-slider .slide.first a"),s=r.attr("data-src")?r.attr("data-src"):r.attr("src");const c=jQuery.Deferred();n.one("flatsome-flickity-ready",(()=>c.resolve()));let l=function(){n.data("flickity")&&n.flickity("select",0)},u=function(){n.data("flickity")&&n.imagesLoaded((function(){n.flickity("resize")}))};jQuery.when(c).done((()=>{i.on("hide_variation",(function(t,e){r.attr("src",s).attr("srcset",""),u()})),i.on("click",".reset_variations",(function(){r.attr("src",s).attr("srcset",""),l(),u()}))})),i.on("show_variation",(function(t,e){jQuery.when(c).done((()=>{e.image.src?(r.attr("src",e.image.src).attr("srcset",""),a.attr("href",e.image_link),l(),u()):e.image_src&&(r.attr("src",e.image_src).attr("srcset",""),a.attr("href",e.image_link),l(),u())}))})),jQuery(".product-lightbox .quantity").addQty()}))})),t.preventDefault()}})),jQuery(o).addClass("quick-view-added"))}))}}),jQuery((function(t){t(".ux-buy-now-button").each((function(){const e=t(this),o=e.closest("form").find(".single_add_to_cart_button");o.length&&function(t){if("MutationObserver"in window)return new MutationObserver((function(e){for(let o=0;o<e.length;o++)t(e[o])}))}((function(t){const o=t.target.classList.contains("disabled");e.toggleClass("disabled",o)})).observe(o.get(0),{attributes:!0,attributeFilter:["class"]})}))})),jQuery(document.body).on("click",".variations_form .ux-buy-now-button",(function(t){const e=jQuery(this).siblings(".single_add_to_cart_button");"undefined"!=typeof wc_add_to_cart_variation_params&&e.hasClass("disabled")&&(t.preventDefault(),e.hasClass("wc-variation-is-unavailable")?alert(wc_add_to_cart_variation_params.i18n_unavailable_text):e.hasClass("wc-variation-selection-needed")&&alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))})),a(775),jQuery((function(t){const e={openDrawer:null,openDropdown:null};function o(){!t(".cart-item .nav-dropdown").length||window.matchMedia("(max-width: 849px)").matches&&t(".header-main .cart-item .header-cart-link.off-canvas-toggle").length?function(){let o=0;if(t.fn.magnificPopup){if(o=t.magnificPopup.instance?.isOpen?300:0,o&&"#cart-popup"===t.magnificPopup.instance?.currItem?.src)return;o&&t.magnificPopup.close()}e.openDrawer&&clearTimeout(e.openDrawer),e.openDrawer=setTimeout((()=>{t(".cart-item .off-canvas-toggle").trigger("click")}),o)}():(t(".cart-item.has-dropdown").addClass("current-dropdown cart-active"),e.openDropdown&&clearTimeout(e.openDropdown),e.openDropdown=setTimeout((()=>{t(".cart-active").removeClass("current-dropdown")}),5e3))}function i(){o(),function(){const e=t("#header"),o=e.hasClass("has-sticky"),i=e.hasClass("sticky-hide-on-scroll--active"),n=t(".cart-item.has-dropdown").length>0;o&&n&&i&&(t(".header-wrapper",e).addClass("stuck"),e.removeClass("sticky-hide-on-scroll--active"))}()}!function(){t("span.added-to-cart").length&&o();const e=t(".cart-item.has-dropdown");(function(t){switch(t){case"0":case"false":case!1:return!1;case"1":case"true":case!0:return!0;default:return Boolean(t)}})(window.flatsomeVars.is_mini_cart_reveal)&&t("body").on("added_to_cart",i),t(document).on("flatsome-open-mini-cart",o),t(".shop-container").on("click",(()=>e.removeClass("current-dropdown cart-active"))),e.hover((()=>t(".cart-active").removeClass("cart-active")))}()})),a(8417),a(4696);var n=!1;const r=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);function s(){return window.flatsomeVars.scrollPaddingTop}jQuery(document).on("flatsome-product-gallery-tools-init",(()=>{r||(n=jQuery(".has-image-zoom .slide").easyZoom({loadingNotice:"",preventClicks:!1})),jQuery(".zoom-button").off("click.flatsome").on("click.flatsome",(function(t){jQuery(".product-gallery-slider").find(".is-selected a").trigger("click"),t.preventDefault()})),jQuery(".has-lightbox .product-gallery-slider").each((function(){jQuery(this).lazyMagnificPopup({delegate:"a",type:"image",tLoading:'<div class="loading-spin centered dark"></div>',closeMarkup:flatsomeVars.lightbox.close_markup,closeBtnInside:flatsomeVars.lightbox.close_btn_inside,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],arrowMarkup:'<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>'},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',verticalFit:!1}})}))})),jQuery((function(t){const e=t(".product-thumbnails .first img").attr("data-src")?t(".product-thumbnails .first img").attr("data-src"):t(".product-thumbnails .first img").attr("src"),o=t("form.variations_form"),i=t(".product-gallery-slider"),a=t(".product-thumbnails");let s=null;const c=t.Deferred(),l=t.Deferred();i.one("flatsome-flickity-ready",(()=>c.resolve())),a.one("flatsome-flickity-ready",(()=>l.resolve())),a.length&&!a.is(":hidden")||l.resolve();const u=function(){n&&n.length&&(s=n.filter(".has-image-zoom .slide.first").data("easyZoom"),s.swap(t(".has-image-zoom .slide.first img").attr("src"),t(".has-image-zoom .slide.first img").attr("data-large_image")))},d=function(){i.data("flickity")&&i.flickity("select",0)},h=function(){i.data("flickity")&&i.imagesLoaded((function(){i.flickity("resize")}))};t.when(c).then((()=>{t(document).trigger("flatsome-product-gallery-tools-init")}));const m=t.when(c,l).then((()=>{r&&h(),o.on("hide_variation",(function(o,i){t(".product-thumbnails .first img, .sticky-add-to-cart-img").attr("src",e),h()})),o.on("click",".reset_variations",(function(){t(".product-thumbnails .first img, .sticky-add-to-cart-img").attr("src",e),d(),u(),h()}))}));o.on("show_variation",(function(o,i){t.when(m).done((()=>{i.hasOwnProperty("image")&&i.image.thumb_src?(t(".product-gallery-slider-old .slide.first img, .sticky-add-to-cart-img, .product-thumbnails .first img, .product-gallery-slider .slide.first .zoomImg").attr("src",i.image.thumb_src).attr("srcset",""),d(),u(),h()):(t(".product-thumbnails .first img").attr("src",e),h())}))}))})),document.documentElement.style,window.getComputedStyle(document.documentElement)["scroll-behavior"],jQuery((function(t){if(!document.body.classList.contains("single-product"))return;const e=window.location.hash,o=window.location.href;function i(){!function(){const e=t(".reviews_tab"),o=e.length?e:t("#reviews").closest(".accordion-item");o.length&&o.find("a:not(.active):first").trigger("click")}(),setTimeout((()=>{t.scrollTo("#reviews",{offset:-s()-15})}),500)}(e.toLowerCase().indexOf("comment-")>=0||"#comments"===e||"#reviews"===e||"#tab-reviews"===e||o.indexOf("comment-page-")>0||o.indexOf("cpage=")>0)&&i(),t("a.woocommerce-review-link").on("click",(function(t){t.preventDefault(),history.pushState(null,null,"#reviews"),i()}))})),a(2434),jQuery((function(t){const e=t(".sticky-add-to-cart");if(!e.length)return;const o=function(t,e={}){return new IntersectionObserver((function(e){for(let o=0;o<e.length;o++)t(e[o])}),{rootMargin:"0px",threshold:.1,...e})}((o=>{const{top:i}=o.boundingClientRect,n=o.intersectionRatio<=0&&i<=0;e.toggleClass("sticky-add-to-cart--active",n),t("body").toggleClass("has-sticky-product-cart",n)}),{threshold:0});t(".sticky-add-to-cart-select-options-button",e).on("click",(function(e){e.preventDefault(),t.scrollTo(".product form.variations_form",{offset:-s()-15})}));const i=e.data("product-id")||0;function n(e,o){e.on("change",(function(){o.val(t(this).val())}))}t(`#product-${i} button.single_add_to_cart_button:visible`).first().each(((i,r)=>{const a=t(r).closest("form.cart");n(t(".qty",e),t(".qty",a)),n(t(".qty",a),t(".qty",e)),o.observe(r)}))})),a(1330),jQuery("table.my_account_orders").wrap('<div class="touch-scroll-table"/>'),jQuery(document.body).on("submit","form.cart",(function(t){if(void 0===t.originalEvent)return;const e=jQuery(t.originalEvent.submitter);e.is(".single_add_to_cart_button, .ux-buy-now-button")&&(e.hasClass("disabled")||e.addClass("loading"),jQuery(window).on("pageshow",(()=>{e.hasClass("loading")&&e.removeClass("loading")})))})),jQuery(document.body).on("updated_cart_totals",(function(){jQuery(document).trigger("yith_wcwl_reload_fragments");const t=jQuery(".cart-wrapper");Flatsome.attach("lazy-load-images",t),Flatsome.attach("quick-view",t),Flatsome.attach("wishlist",t),Flatsome.attach("cart-refresh",t),Flatsome.attach("equalize-box",t)})),jQuery(document).ajaxComplete((function(){Flatsome.attach("add-qty",jQuery(".quantity").parent()),Flatsome.attach("lightboxes-link",jQuery(".woocommerce-checkout .woocommerce-terms-and-conditions-wrapper"))})),jQuery(document.body).on("wc_fragments_refreshed wc_fragments_loaded",(function(){Flatsome.attach("add-qty",jQuery(".quantity").parent())})),jQuery(document.body).on("updated_checkout",(function(){Flatsome.attach("lightboxes-link",jQuery(".woocommerce-checkout .woocommerce-terms-and-conditions-wrapper"))})),jQuery(".disable-lightbox a").on("click",(function(t){t.preventDefault()})),jQuery((function(t){t.scroll_to_notices=function(e){t.scrollTo(e)}})),jQuery((function(t){t("#login-form-popup").find(".woocommerce-notices-wrapper > ul").length>0&&t('[data-open="#login-form-popup"]').trigger("click")}))}()}();