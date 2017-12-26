$(document).ready(function(){
    $("#MenuIcon").click(function(){
        $("#MainList").css("left","0px");
        function showMenu(){
            $("#MainList").css("-webkit-clip-path","polygon(0 0,100% 0, 100% 100%, 0% 100%)");
            $("#MenuIcon").animate({right:'-100'},300);
        }
        setTimeout(showMenu, 100);



    });

    $("#closeMenu").click(function(){
        $("#MainList").css("-webkit-clip-path","polygon(0 0, 0% 0, 100% 100%, 0% 100%)");
        function hideMenu(){
            $("#MainList").css("left","-300px");
            $("#MenuIcon").animate({right:'50'},300);
        }
        setTimeout(hideMenu, 300);

        function Layout(){
            $("#MainList").css("-webkit-clip-path","polygon(0 0, 0% 0, 50% 100%, 0% 100%)")
        }
        setTimeout(Layout,600);
    });
});