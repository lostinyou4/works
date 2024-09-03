const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

//헤더
const showNav = gsap.from('#header', {
    y:'-9rem',
    paused: true,
    duration: 0.2
}).progress(1);
ScrollTrigger.create({
    start:"top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showNav.play():showNav.reverse()
    }
});

//모바일 메뉴
gsap.set('.mo-menu-dim', {autoAlpha:false});
showMoMenu = gsap.timeline({
    paused: true,
    defaults: {ease: "power2.out"}
});
showMoMenu.set('.mo-menu-dim', {autoAlpha: 1});
showMoMenu.from('.mo-menu-wrap', {xPercent: 250});
showMoMenu.from('.mo-menu-wrap .btn-close', {xPercent: 250}, '<30%');
showMoMenu.from('.mo-menu-wrap .menu-list', {xPercent: 250, duration:.8}, '<');
showMoMenu.from('.mo-menu-wrap .badge', {xPercent: 100, rotation: -405, duration: .7}, '<0.1');
showMoMenu.from('.mo-menu-wrap .link-go', {xPercent: 250}, '<50%');


hideMoMenu = gsap.timeline({
    paused: true,
    defaults: {ease: "power2.out"}
});
hideMoMenu.to('.mo-menu-wrap', {xPercent: 250, duration:1.2});
hideMoMenu.to('.mo-menu-dim', {autoAlpha: 0, duration:.1},'-=1');


$('.mo-menu').on('click', function(){
    showMoMenu.play();
    showMoMenu.progress(0);
})
$('.mo-menu-wrap .btn-close').on('click', function(){
    hideMoMenu.play();
    hideMoMenu.progress(0);
})


gsap.set('.link-go-bg', {
    yPercent:100
})

$('.link-go').hover(
    function(){
        gsap.to('.link-go-text', {
            yPercent:-100
        })
        gsap.to('.link-go i svg', {
            yPercent:-100,
            xPercent:100
        })
        gsap.to('.link-go-bg', {
            yPercent:0
        })
    },
    function(){
        gsap.to('.link-go-text', {
            yPercent:0
        })
        gsap.to('.link-go i svg', {
            yPercent:0,
            xPercent:0
        })
        gsap.to('.link-go-bg', {
            yPercent:100
        })
    }
)

//푸터
$('.msubscribe-nav > li a').hover(
    function(){
        gsap.to($(this).find('.msubscribe-nav-text'), {
            yPercent:-100,
            duration: 0.2,
            
        })
        
    },
    function(){
        gsap.to($(this).find('.msubscribe-nav-text'), {
            yPercent:0,
            duration: 0.2,
        })
        
    }
)

gsap.set('.msubscribe-btn-subs-bg', {
    yPercent:100
})
$('.msubscribe-btn-subs').hover(
    function(){
        gsap.to('.msubscribe-btn-subs-text', {
            yPercent:-100,
            duration: 0.2,
        })
        gsap.to('.msubscribe-btn-subs i svg', {
            yPercent:-100,
            xPercent:100,
            duration: 0.2,
        })
        gsap.to('.msubscribe-btn-subs-bg', {
            yPercent:0,
            duration: 0.2,
        })
    },
    function(){
        gsap.to('.msubscribe-btn-subs-text', {
            yPercent:0,
            duration: 0.2,
        })
        gsap.to('.msubscribe-btn-subs i svg', {
            yPercent:0,
            xPercent:0,
            duration: 0.2

        })
        gsap.to('.msubscribe-btn-subs-bg', {
            yPercent:100,
            duration: 0.2
        })
    }
)

/* 인트로 */
loadingTl = gsap.timeline();

loadingTl
    .delay(1)
    .to('.loading-icon-box svg', {
        yPercent:-100,
        stagger: 0.1
    })
    .to('.loading-col > li', {
        yPercent:-100,
        stagger: 0.1
    }, "-=0.5")
    .set('.loading-area',{autoAlpha: false})

/*letter anim */
Splitting();
$('.word').wrap('<div class="word-wrap">')


$('.split-word').each(function(){
    const $staggerTarget = $(this).find('.word');
    ScrollTrigger.create({
        trigger: $(this),
        start: "top bottom",
        end: "50% top",
        // markers: true,
        onEnter: function(){
            gsap.fromTo($staggerTarget, {
                yPercent: 100,
                
                
            },{
                yPercent: 0,
                ease: 'Power4.out',
                stagger: {
                    each: 0.1,
                    
                },
            })
        },
        onEnterBack:function(){
            gsap.fromTo($staggerTarget, {
                yPercent: 100,
                
            },{
                yPercent: 0,
                ease: 'Power4.out',
                stagger: {
                    each: 0.1,
                    
                },
            })
        }
    });
})

const splitLines = new SplitType('.split-line', {types: 'lines'});
$('.line').wrap('<div class="line-wrap">')

$('.split-line').each(function(){
    const $staggerLine = $(this).find('.line');
    ScrollTrigger.create({
        trigger: $(this),
        start: "top bottom",
        end: "bottom top",
        //markers: true,
        defaults:{overwrite: true},
        onEnter: function(){
            gsap.fromTo($staggerLine, {
                yPercent: 100,
                
                
            },{
                yPercent: 0,
                ease: 'Power4.out',
                stagger: {
                    each: 0.1,
                    
                },
                
                duration:1.1
            })
        },
        onEnterBack:function(){
            gsap.fromTo($staggerLine, {
                yPercent: 100,
                
            },{
                yPercent: 0,
                ease: 'Power4.out',
                stagger: {
                    each: 0.1,
                    
                },
                duration:1.1
            })
        }
    });
})


//mphoto
$('.mphoto-list li').each(function(){
    photoTl = gsap.timeline({
        
    });
    gsap.from($(this).find('.thumb'),{
        scrollTrigger: {
            trigger: $(this),
            start: "top bottom",
            //markers: true,
          },
          width:'0%',
          height:'0%'
    })
    // photoTl.fromTo($(this), 3,{
    //     scale: 0,
    // },{
    //     scale: 1,
    //     ease: "power4.out",
    // })
})

photoTl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".mphoto",
        start:"0% bottom",
        end:"100% top",
        //markers:true,
        scrub:0,
    }
})
photoTl2.fromTo('.mphoto-list > li:nth-child(1)', {yPercent: -42}, {yPercent: 25})
photoTl2.fromTo('.mphoto-list > li:nth-child(2)', {yPercent: -48}, {yPercent: 0},'<')
photoTl2.fromTo('.mphoto-list > li:nth-child(3)', {yPercent: 30}, {yPercent: -10},'<')

//
//
gsap.to(".mdescr-pic-graph-dot", {
    motionPath: {
      path: "#science-data-graph",
      align: "#science-data-graph",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    repeat:-1,
    yoyo:true,
    transformOrigin: "50% 50%",
    duration: 5,
    ease: "power1.inOut",
  });



/*mdescr*/
descrTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".mdescr-pic-area",
        start: "top 90%",
        //markers: true
    },
    defaults:{ease: "power2.out"}
})
descrTl.from('.mdescr-movie', {y:50, autoAlpha:0})
descrTl.from('.mdescr-thumb', {scale: 0, autoAlpha: 0},"-=0.3")
descrTl.from('.mdescr-pic-graph-wrap', {scale: 0.8, autoAlpha: 0, duration:1.1},"-=0.2")

/*marticle */
artiPhotoTl = gsap.timeline({
    scrollTrigger:{
        trigger:".marticle",
        start:"0% bottom",
        end:"100% top",
        //markers:true,
        
    }
})
artiPhotoTl.from('.marticle-pic-anim', 3,{
    scale: 0,
    ease: "power4.out"
}, 'a')
artiPhotoTl.to('.marticle-table>li',{
    '--width' :'100%',
    stagger:0.3,
}, 'a')




/* faq */
$('.mfaq-list-answer').hide();
$('.mfaq-list > li').on('click',function(){
    var $answer = $(this).find('.mfaq-list-answer');

    if($(this).hasClass('show')){
        $answer.slideUp(400, "easeInOutQuart", function() {
            $(this).parent().removeClass('show');
            $(this).parent().attr('aria-expanded', 'false');
        });
    }else{
        $answer.slideDown(400, "easeInOutQuart", function() {
            $(this).parent().addClass('show');
            $(this).parent().attr('aria-expanded', 'true');
        });

    }
})

//푸터
footerTl = gsap.timeline({
    scrollTrigger:{
        trigger:"footer",
        start:"0% bottom",
        end:"100% bottom",
        //markers:true,
        scrub:0,
    }
})
footerTl.fromTo('.footer-cont', {yPercent: -50}, {yPercent: 0})