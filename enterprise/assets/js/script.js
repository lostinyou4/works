gsap.to('.top-btn', {autoAlpha: 0})

gsap.set('.subnav', {autoAlpha:0})
$('.lang').on('click',function(){
    if( $(this).hasClass('show') ){
        $(this).removeClass('show')
        gsap.to('.subnav', {autoAlpha:0})
    }else{
        $(this).addClass('show')
        gsap.to('.subnav', {autoAlpha:1})
    }
})

const introTextArr=document.querySelectorAll('.intro .text')
introTl = gsap.timeline({
    scrollTrigger:{
        trigger:".intro",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        onLeave:function(){
            gsap.set('.intro .down',{autoAlpha:0})
        },
        onEnterBack:function(){
            gsap.set('.intro .down',{autoAlpha:1})
        }
    }
})
introTl.to('.intro .dim',{autoAlpha:1})
introTl.to(introTextArr[0],{autoAlpha:1},'<')
introTl.to(introTextArr[0], {
    autoAlpha: 0,
    onStart:function(){
        $('.header').addClass('show')
    },
    onReverseComplete :function(){
        $('.header').removeClass('show')
    }
})
introTl.to(introTextArr[1],{autoAlpha:1})
introTl.to(introTextArr[1],{autoAlpha:0})
introTl.to(introTextArr[2],{autoAlpha:1})
introTl.to(introTextArr[2],{autoAlpha:0})
introTl.to(introTextArr[3],{autoAlpha:1})


showcaseTl = gsap.timeline({
    scrollTrigger:{
        trigger:".showcase",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    }
})
showcaseTl.to('.showcase .dim',{autoAlpha:1})
showcaseTl.to('.showcase .intro',{autoAlpha:1},"<")
showcaseTl.to('.showcase .intro .text:nth-child(1)',{xPercent:100})
showcaseTl.to('.showcase .intro .text:nth-child(3)',{xPercent:-100},"<")
showcaseTl.to('.showcase .dim',{autoAlpha:0},"<")
showcaseTl.to('.showcase .intro',{autoAlpha:0})

showcaseTl.to('.showcase .item:nth-child(3) img',{height:0})
showcaseTl.to('.showcase .item:nth-child(2) img',{height:0})

showcaseTl.to('.showcase .dim',{autoAlpha:1})
showcaseTl.to('.showcase .desc',{autoAlpha:1},"<")


ScrollTrigger.create({
    trigger:'.txt-lr-gig',
    start:"0% 0%",
    end:"100% 50%",
    // markers:true,
   onEnter:function(){
    $('.header').addClass('on');
   },
   onLeaveBack:function(){
    $('.header').removeClass('on');

   }
})




possibilityTl = gsap.timeline({
    scrollTrigger:{
        trigger:".possibility",
        end:"+=500%",
        //markers:true,
        scrub:0,
        pin:true,
        invalidateOnRefresh: true,//갱신
    }
})

possibilityTl.to('.slide-possibility .slide-inner',{
    x:function(){
        return -$('.slide-possibility .slide-inner').outerWidth() + $(window).width()
    }
})


featureTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.feature',
        start:"0% 95%",
        end:"100% 80%",
        //markers:true,
        scrub:0,
    }
})
featureTl.from('.feature .item:nth-child(1)',{xPercent:-50})
featureTl.from('.feature .item:nth-child(2)',{xPercent:-50},"<")
featureTl.from('.feature .item:nth-child(3)',{xPercent:50},"<")

gsap.set('.feature .title',{autoAlpha:0})

featureTl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.feature',
        start:"0% 40%",
        end:"100% 30%",
        //markers:true,
        scrub:0,
        onEnter: function(){
            gsap.set('.feature .blur',{autoAlpha:1})
        },
        onLeaveBack: function(){
            gsap.set('.feature .blur',{autoAlpha:0})
        },
    }
})
featureTl2.to('.feature .title',{autoAlpha:1})

//안전하고 
servieceTl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.slide-code',
        start:"0% 0%",
        end:"100% 100%",
        //markers:true,
        scrub:0,
        invalidateOnRefresh: true,
    }
})
servieceTl1.to('.slide-code .slide-inner',{
    x:function(){
        return $('.slide-code .mslide-head').outerWidth()*-1;
    } 
})
gsap.set('.slide-code .slide-card-list > li:nth-child(4) img:nth-child(2)',{autoAlpha:0})

servieceTl1.to('.slide-code .slide-card-list > li:nth-child(2)',{xPercent:-100,x:-40})
servieceTl1.to('.slide-code .slide-card-list > li:nth-child(3)',{xPercent:-200,x:-40*2},"<")
servieceTl1.to('.slide-code .slide-card-list > li:nth-child(4)',{xPercent:-300,x:-40*3},"<")
servieceTl1.to('.slide-code .slide-card-list > li:nth-child(4) img:nth-child(1)',{autoAlpha:0},"<-30%")
servieceTl1.to('.slide-code .slide-card-list > li:nth-child(4) img:nth-child(2)',{autoAlpha:1},">-30%")
//시작


gsap.set('.slide-scroll-area .slide-card',{autoAlpha:0})

servieceTl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.slide-scroll-area',
        start:"0% 0%",
        end:"100% 100%",
        //markers:true,
        scrub:0,
        invalidateOnRefresh: true,
        onEnter:function(){
            gsap.set('.slide-scroll-area .slide-card',{autoAlpha:1})
            gsap.set('.slide-code .slide-card',{autoAlpha:0})
        },
        onLeaveBack:function(){
            gsap.set('.slide-scroll-area .slide-card',{autoAlpha:0})
            gsap.set('.slide-code .slide-card',{autoAlpha:1})
        }
    }
})

gsap.set('.slide-service .slide-card-list > li:first-child',{autoAlpha:0})

servieceTl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.slide-service',
        start:"0% 0%",
        end:"+=200%",
        //markers:true,
        scrub:0,
        invalidateOnRefresh: true,
        onEnter:function(){
            gsap.set('.slide-service .slide-card-list > li:nth-child(1)',{autoAlpha:1})
            gsap.set('.slide-scroll-area .slide-card',{autoAlpha:0})
        },
        onLeaveBack:function(){
            gsap.set('.slide-service .slide-card-list > li:nth-child(1)',{autoAlpha:0})
            gsap.set('.slide-scroll-area .slide-card',{autoAlpha:1})
        }
    }
})
servieceTl3.to('.slide-service .slide-card-list > li:nth-child(2)',{xPercent:-100,x:-40})
servieceTl3.to('.slide-service .slide-card-list > li:nth-child(3)',{xPercent:-200,x:-40*2},"<")
servieceTl3.to('.slide-service .slide-card-list > li:nth-child(4)',{xPercent:-300,x:-40*3},"<")



gsap.set('.mservice-btm .col-left, .mservice-btm .col-right',{autoAlpha:0})
servieceTl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.mservice-btm',
        start:"0% 0%",
        end:"100% 100%",
        //markers:true,
        scrub:0,
        onEnter:function(){
            gsap.set('.slide-service .slide-card-list',{autoAlpha:0})
            gsap.set('.mservice-btm .col-left',{autoAlpha:1})
        },
        onLeaveBack:function(){
            gsap.set('.slide-service .slide-card-list',{autoAlpha:1})
            gsap.set('.mservice-btm .col-left',{autoAlpha:0})
        }
    }
})
servieceTl4.to('.mservice-btm .col-right',{autoAlpha:1})

ScrollTrigger.create({
    trigger:'[data-theme="dark"]',
    start:"0% 50%",
    end:"100% 50%",
    //markers:true,
    toggleClass:{
        targets:"body",
        className:"dark"
    },
    onEnter:function(){
        $('.header').removeClass('on')
    },
    onLeaveBack:function(){
        $('.header').addClass('on')
    },
    onLeave:function(){
        $('.header').addClass('on')
        
    },
    onEnterBack:function(){
        $('.header').removeClass('on')
    }
})
//end

$('.sec-head').each(function(){
    headTl = gsap.timeline({
        scrollTrigger:{
            trigger:$(this),
            start:"0% 70%",
            end:"100% 100%",
            //markers:true,
            scrub:0,
        }
    })
    headTl.from($(this),{'--x':'100%'})
    headTl.from($(this).find('h2 p span'),{x:0},"<")
})

gsap.set('.asset .btm-area',{autoAlpha:0})
//전통 금융에서
assetTl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.asset',
        end:"+=80%",
        //markers:true,
        scrub:0,
        pin:true,
        onEnter:function(){
            gsap.to('.asset .btm-area',{autoAlpha:1})
        },
        onLeaveBack:function(){
            gsap.to('.asset .btm-area',{autoAlpha:0})
        },
        onLeave:function(){
            gsap.to('.asset .btm-area',{autoAlpha:0})
        },
        onEnterBack:function(){
            gsap.to('.asset .btm-area',{autoAlpha:1})
        }
    }
})
assetTl1.to('.slide-asset .slide-inner',{
    x:function(){
        return $('.slide-asset .mslide-head').outerWidth()*-1-80;
    } 
})
assetTl1.to('.asset .btm-area .txt-box strong:nth-child(1)',{autoAlpha:0},">-30%")
assetTl1.to('.asset .btm-area .txt-box strong:nth-child(2)',{autoAlpha:1},">-30%")

//화살표애니메이션★★★
// arrowTl = gsap.timeline({
//     repeat: -1,
//     repeatDelay: .1,
//     //yoyo:true,
//     //paused: true,
//     defaults:{
//         duration:.5,
        
//     }
// });
// arrowTl.fromTo('.asset .arrow', {autoAlpha:0},{autoAlpha:.5})
// arrowTl.fromTo('.asset .arrow', {autoAlpha:.5}, {autoAlpha:1})

gsap.set('.asset .arrow', {autoAlpha:0});
gsap.to('.asset .arrow', {
    keyframes: {
        autoAlpha: [.5, 1, .5, 0,.5,1],
    },
    duration: 1.5,
    repeat: -1,
    stagger: 0.1
})

//크리에이터
//gsap.set('.head-bg-sec .txt-area', {autoAlpha:0});
creatorTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.head-bg-sec',
        start:"0% 0%",
        end:"+=100%",
        //markers:true,
        scrub:0,
        pin:true,
    }
})
creatorTl.from('.head-bg-sec .txt-area',{autoAlpha:0})
creatorTl.to('.head-bg-sec .txt-area',{autoAlpha:0})


//슬기롭게
creatorSlTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.creator',
        end:"+=100%",
        //markers:true,
        scrub:0,
        pin:true,
    }
})
creatorSlTl.to('.slide-creator .slide-inner',{
    x:function(){
        return - $('.slide-creator .slide-inner').outerWidth() + $(window).width();
    }
     
})

//탑버튼★
gsap.set('.top-btn', {autoAlpha:0})

const showTop = gsap.to('.top-btn-fixed', {paused: true, autoAlpha: 1, duration:.3});
ScrollTrigger.create({
    trigger:'main',
    start:"0% 0%",
    end: "100% 100%",
    //markers:true,
    onUpdate: (self) => {
        if($('.showcase .img-box').offset().top < $(window).scrollTop()){
            self.direction === -1 ? showTop.play():showTop.reverse();
        }else{
            showTop.reverse();
        }
    }
})

//하단
gsap.set('.marquee-area',{yPercent:100})
ScrollTrigger.create({
    trigger:'footer',
    start:"0% 100%",
    end:"90% 100%",
    //markers:true,
    onEnter:function(){
        gsap.to('.txt-sec .top-btn',{autoAlpha:1})
    },
    onLeaveBack:function(){
        gsap.to('.txt-sec .top-btn',{autoAlpha:0})
    },
    onLeave:function(){
        gsap.to('.marquee-area',{yPercent:0,delay:.5})
    },
    onEnterBack:function(){
        gsap.to('.marquee-area',{yPercent:100})
    }
})