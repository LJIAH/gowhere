window.onload=function() {
    //按条件搜索的Tab选项卡切换
    //找到右侧所有classname为search_nav_right的div
    var rightdiv = document.getElementsByClassName("search_nav_right");
    rightdiv[0].style.display = "block";//下标从0开始
    //找到左侧的li
    var leftnav = document.getElementById("leftNav");
    var leftnavli = leftnav.getElementsByTagName("li");

    //1.添加点击事件 通过JS 的方式来实现
    for (var i = 0; i < leftnavli.length; i++) {
        leftnavli[i].index = i;
        leftnavli[i].onclick = function () {
            var num = this.index;
            //清除冲突的样式
            for (var j = 0; j < rightdiv.length; j++) {
                leftnavli[j].className = "";
                rightdiv[j].style.display = "none";
            }

            leftnavli[num].className = "cur";
            rightdiv[num].style.display = "block";
        }
    }

    //推荐栏目Tab选项卡切换

    var reccon = document.getElementsByClassName("recommend_content");
    reccon[0].style.display = "block";//下标从0开始
    //找到左侧的li
    var recnav = document.getElementById("recNav");
    var recnavli = recnav.getElementsByTagName("li");

    //1.添加点击事件 通过JS 的方式来实现
    for (var i = 0; i < recnavli.length; i++) {
        recnavli[i].index = i;
        recnavli[i].onclick = function () {
            var num = this.index;
            //清除冲突的样式
            for (var j = 0; j < reccon.length; j++) {
                recnavli[j].className = "";
                reccon[j].style.display = "none";
            }

            recnavli[num].className = "cur";
            reccon[num].style.display = "block";
        }
    }
}