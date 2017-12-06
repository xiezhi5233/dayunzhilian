/**
 * Created by win on 2017/4/18.
 */
$(function(){
    var setT;
    var onOff=1;
    var htmlW=document.documentElement;
    if(htmlW.offsetWidth>=780){
        $(".xdz_nav_menu").bind("mouseover",function(){
            $(".xdz_product_menu").css("display","block");
            //判断是否第一次打开
            if(onOff){
                onOff=0;
                for(var i=0; i<$(".xdz_product_menu li").length; i++) {
                    $($(".xdz_product_menu li")[i]).css({
                        "transform": "translate(1900px)",
                        "transition": 0.3 + i / 10 + "s"
                    });
                }
                    setTimeout(function(){
                        for(var i=0; i<$(".xdz_product_menu li").length; i++) {
                            $($(".xdz_product_menu li")[i]).css({
                                "transform": "translate(0px)"
                            });
                            setTimeout(function() {
                                for(var i=0; i<$(".xdz_product_menu li").length; i++) {
                                    $($(".xdz_product_menu li")[i]).removeAttr("style")
                                }
                                },1000)
                        }
                    },200)
            }
        });
        $(".xdz_product_menu").bind("mousemove",function(){
            clearTimeout(setT);
        });
        $(".xdz_product_menu").bind("mouseout",function(){
            setT=setTimeout(function(){
                $(".xdz_product_menu").css("display","none")
            },100);
        });
    }else{
        $(".header_nav_btn").bind("click",function(){
            if($(".xdz_top_nav ul")[0].offsetHeight){
                $(".xdz_top_nav ul").slideUp();
                $(".nav_min_menu").css({"height":"0","padding":"0"})
            }else{
                $(".xdz_top_nav ul").slideDown();
            }
        });
        $(".xdz_nav_menu").bind("click",function(){
            if($(".nav_min_menu")[0].offsetHeight){
                $(".nav_min_menu").css({"height":"0","padding":"0"})
            }else{
                $(".nav_min_menu").css({"height":"240px","padding":"5px 0"})
            }
        })
    }
});