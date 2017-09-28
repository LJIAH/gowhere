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

}
