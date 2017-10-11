window.onload=function() {

    function tab1(aa , bb ) {
        $(bb).eq(0).css("display","block");
        $(aa).click(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            var index = $(this).index();
            $(bb).css("display","none");
            $(bb).eq(index).css("display","block");
        })
    }
    function tab2(aa , bb ) {
        $(bb).eq(0).css("display","block");
        $(aa).hover(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            var index = $(this).index();
            $(bb).css("display","none");
            $(bb).eq(index).css("display","block");
        })
    }
    //搜索栏
    $(tab1("#leftNav li",".search_nav_right"));
    //推荐栏
    $(tab2("#recNav li",".recommend_content"));

    //旅行攻略
    $(tab2(".travel_title_nav li",".travel_body"));
    $(function(){
        $('.travel_body_left').each(function () {
            $(this).hover(function(){
                $(this).children('.travel_item_words').animate({
                    'top' : '249px'
                },'normal');
            },function(){
                $(this).children('.travel_item_words').animate({
                    'top' : '294px'
                },'normal');
            });
        });


        //travel_item_right控制
        $('.travel_body_right .travel_item').each(function(){
            $(this).hover(function(){
                $(this).children('a:last-child').animate({
                    'top' : '70px'
                },'normal');
            },function(){
                $(this).children('a:last-child').animate({
                    'top' : '120px'
                },'normal');
            });
        });
    });

    //团购
    $(tab2("#group_nav li",".blocks"));
    //轮播图
    var index=0;

    $(function(){
        var pics=$(".bg li");
        var lis=$(".indicator li");
        function changePic(){
            pics.eq(index).addClass("current").siblings().removeClass("current");
            lis.eq(index).addClass("current").siblings().removeClass("current");
        }
        lis.click(function(){
            index=$(this).index();
            changePic();
        })
        $(".left").click(function(){
            index--;
            if(index==-1){
                index=4
            }
            changePic();
        })
        $(".right").click(function(){
            index++;
            if(index==5){
                index=0;
            }
            changePic();
        })
        var t = setInterval(function(){$(".right").click()},2000);
        $("#carousel").mouseover(function () {
            clearInterval(t);
        });
        $("#carousel").mouseout(function () {
            t = setInterval(function(){$(".right").click()},2000);
        });
    });


}
