window.onload=function() {

    function tab(aa , bb) {
        $(bb).eq(0).css("display","block");
        $(aa).click(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            var index = $(this).index();
            $(bb).css("display","none");
            $(bb).eq(index).css("display","block");
        })
    }

    $(tab("#leftNav li",".search_nav_right"));

    $(tab("#recNav li",".recommend_content"));

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
    })

}
