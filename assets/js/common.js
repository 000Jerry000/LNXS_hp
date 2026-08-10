gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);

$(window).on("load", function () {
  setTimeout(function () {
    const target = document.querySelectorAll(".js-io");
    const targetArray = Array.prototype.slice.call(target);
    const options = {
      root: null,
      rootMargin: "0% 0% -15% 0%",
      threshold: 0,
    };
    const observer = new IntersectionObserver(callback, options);
    targetArray.forEach((tgt) => {
      observer.observe(tgt);
    });

    function callback(entries) {
      entries.forEach(function (entry, i) {
        const target = entry.target;

        if (entry.isIntersecting && !target.classList.contains("_show")) {
          const delay = i * 100;
          setTimeout(function () {
            target.classList.add("_show");
          }, delay);
        }
      });
    }
  }, 400);
});

$(document).ready(function() {
  var browserWidth = $(window).width();

  if(browserWidth > '768') {
    gsap.utils.toArray('.js-plx').forEach(el => {
      const speed = el.getAttribute('data-plx-speed') * 10;
      gsap.set(el,{
        y: speed,
      });
  
      gsap.to(el,{
        y: -1 * speed,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
          scrub: 0.1,
        }
      })
    });
  }

  // loading
  const body = $("body");

  if (body.hasClass("front-page")) {
    var imgLoad = imagesLoaded("body");
    var images = $("img").length,
      loadedCount = 0,
      loadingProgress = 0,
      tlProgress = gsap.timeline();
    
    imgLoad.on("progress", function (instance, image) {
      loadProgress();
    });
    
    function loadProgress() {
     loadedCount++;
     loadingProgress = loadedCount / images;
    
     gsap.to(tlProgress, { progress: loadingProgress, duration: 1 });
    }
    
    var tlProgress = gsap.timeline({
     paused: true,
     onComplete: loadComplete,
    });
    
    function loadComplete() {
      setTimeout(() => {
        $('.loading__elem').addClass('loaded');
      }, 500);
    }
  } else {
    $('body').addClass('loaded');
  }
});

$('.to-concept').click(function(event) {
  event.preventDefault();

  const targetTop = $('.sec-concept').offset().top;
  const margin = $(window).height() * 0.15;
  
  $('html, body').animate({
    scrollTop: targetTop - margin
  }, 'slow');
});

$('.to-about').click(function(event) {
  event.preventDefault();

  const targetTop = $('.sec-about').offset().top;
  
  $('html, body').animate({
    scrollTop: targetTop
  }, 'slow');
});

$('.to-service').click(function(event) {
  event.preventDefault();

  const targetTop = $('.sec-service').offset().top;
  
  $('html, body').animate({
    scrollTop: targetTop
  }, 'slow');
});

$('.to-contact').click(function(event) {
  event.preventDefault();

  const targetTop = $('.sec-contact').offset().top;
  
  $('html, body').animate({
    scrollTop: targetTop
  }, 'slow');
});

$('.to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 'slow');
});

$(function () {
  const params = new URLSearchParams(window.location.search);
  const targetClass = params.get('target');

  const targetMap = {
    concept: '.to-concept',
    about: '.to-about',
    service: '.to-service',
    contact: '.to-contact'
  };

  if (targetMap[targetClass]) {
    $(targetMap[targetClass]).click();
    history.replaceState(null, '', window.location.origin + window.location.pathname);
  }
});

// topBtn smooth scroll (スムーズにスクロールさせる)
// https://ss-complex.com/work_top_back_button/
$(document).ready(function(){
    $("#topBtn").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#topBtn").fadeIn("fast");
        } else {
            $("#topBtn").fadeOut("fast");
        }
    });
    $('#topBtn').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});


// ページ内リンク-smooth scroll
// https://125naroom.com/web/2899
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top - 80; // ヘッダ固定の高さ分、80px上にずらす
 // 位置をずらさない場合は以下を有効させる
 //   var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});




// humberger menu
// https://ikezooo.com/code-jq-hamburger/
// https://codepen.io/ikezoooblog/pen/KKgpKKw
$(function(){
    $('#toggle-btn').on('click', function() {
        $(this).toggleClass('open');
        $("#toggle-menu").toggleClass('open');
     })
   })
$(function() {
 $('#toggle-menu a').on('click', function() {
 $('#toggle-menu').toggleClass('open');
 $("#toggle-btn").toggleClass('open');
})
 });


