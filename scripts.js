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
            $("#MenuIcon").animate({right:'20'},300);
        }
        setTimeout(hideMenu, 300);

        function Layout(){
            $("#MainList").css("-webkit-clip-path","polygon(0 0, 0% 0, 50% 100%, 0% 100%)")
        }
        setTimeout(Layout,600);
    });
});


/*   SCRIPTS GOOGLE MAP   */


var styles = [
    {
        elementType: 'geometry',


        stylers: [
            {color: '#fabc36'}]
    }];



function initMap() {
    var uluru = {lat: 51.250, lng: 22.566};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
        styles: styles


    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

