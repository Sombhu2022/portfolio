// <!-- function preloader -->

    var loader=document.getElementById("load");
    window.addEventListener("load",function(){
        loader.style.display="none";
    })


//script for nav bar 
    var menu=document.getElementById("menu_box");
    var option=document.getElementsById("nav_option");
 
    function ShowOption(){
        menu.style.display="none";
        document.getElementById("nav_option").style.display="block";
        // document.getElementById("logo").style.margin="10px"
        document.getElementById("clear").style.display="block";
    }

    function hide(){
        menu.style.display="block";
        document.getElementById("nav_option").style.display="none";
        
        document.getElementById("clear").style.display="none";
        window.location.reload(true);
    }
    
 
    
    
    function whatsapp(n){

       
        // Define the image URL
        // var imageUrl = "{{notice.notice.url}}"; 
        // var imageUrl = "http://127.0.0.1:8000/"+url;
        
        // Define the WhatsApp message
        var message1 = "Project:STUDENT_Q   .....Source Code: https://github.com/Sombhu2022/StudentQ";
        var message2 = "Project:TIC TAC TAO .... Play Game:https://tic-tac-toe-sombhu2022.vercel.app/   .....Source Code: https://github.com/Sombhu2022/game/tree/main/tic%20tac%20toe";
        var message3 = "Project:Data Collector   .....Source Code: https://github.com/Sombhu2022/Data-collector/tree/main";
 
        // Construct the WhatsApp URL

        if(n==1){
            var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(message1);

        }
        else if(n==2)
        {
            var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(message2);

        }
        else{

            var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(message3);

        }
        

        
        // Create an anchor element with the WhatsApp URL
        var whatsappLink = document.createElement("a");
        whatsappLink.href = whatsappUrl;
        
        // Open the WhatsApp share dialog
        whatsappLink.click();
    }

 
