$(document).ready(function(){
    var aboutMe = $("#about").position();
    var mySkills = $("#mySkills").position();
    var myExp = $("#myExperience").position();
    var myEducation = $("#myEducation").position();
    var myPortfolio = $("#myPortfolio").position();
    var myContact = $("#myContact").position();
    var myFeedback = $("#myFeedback").position();
    
    $(".caption").css("width","30%");
 
    
	$(".headerNavBar").on("mouseover",function(){
	   $(".headerNavBar").css("margin-left","0px");
    }).on("mouseout",function(){
	   $(".headerNavBar").css("margin-left","-65px");
    });
    
    $(document).scroll(function() {
      var y = $(this).scrollTop();
        
      if (y > 220) {
        $(".headerNavBar").css({"margin-left":"-65px","background":"#DC3248"});
        $(".headerNavBar a").css('color','white !important');        
      }
        else {
        $(".headerNavBar").css({"margin-left":"0px","background":"white"});	
        $(".headerNavBar a").css('color','black !important');
      }
        
        if(y > (aboutMe.top -10 )){
            drawCaption(y,aboutMe.top,"About Me","About Me","fixed","","about");
        }else{
            drawCaption(y,aboutMe.top,"About Me","About Me","","fixed","about");
        }
                        
      //var test = (aboutMe.top < y ) ? drawCaption(y,aboutMe.top,"About Me","about","","about") : "" ;   
        
      /*if(aboutMe.top < y ){
        drawCaption(y,aboutMe.top,"About Me","About Me","about","","about");  
      }else {
        drawCaption(y,aboutMe.top,"About Me","About Me","about","fixed","about");
      }      
      if((mySkills.top -15) < y && y > aboutMe.top){
        drawCaption(y,mySkills.top,"My Skills","About Me","mySkills","about","about");  
      }else{        
        drawCaption(y,mySkills.top,"My Skills","About Me","about","mySkills","about");  
      }*/
        
        if( y >= 0 && mySkills.top > y ){    
            //console.log("about me");
            drawCaption(y,aboutMe.top,"About Me","","about","","about");  
        }else if(y > (mySkills.top - 10) && myExp.top > y){
            //console.log("my Skills");        
            drawCaption(y,mySkills.top,"My Skills","About Me","mySkills","about","about");
        }else if(y > (myExp.top - 10) && myEducation.top > y){
            //console.log("my Experience");        
            drawCaption(y,myExp.top,"My Experience","My Skills","myExperience","mySkills","about");
        }else if(y > (myEducation.top - 10) && myPortfolio.top > y){
            //console.log("my Edu");        
            drawCaption(y,myEducation.top,"My Education","My Experience","myEducation","myExperience","about");
        }else if(y > (myPortfolio.top - 10) && myContact.top > y){
            //console.log("my port");        
            drawCaption(y,myPortfolio.top,"My Portfolio","My Education","myPortfolio","myEducation","about");
        }else if(y > (myContact.top - 10) && myFeedback.top > y){
            //console.log("my Contact");        
            drawCaption(y,myContact.top,"My Contact","My Education","myContact","myPortfolio","about");
        }else{
            //console.log("my feed");
            drawCaption(y,myFeedback.top,"Feedback","My Contact","myFeedback","myContact","about");
        }
        
        
              
    });

});

/*
 **
 **Below function is used to alter caption contents based on scroll position.
 **
*/

function drawCaption(scrollPos,contentPos,textToShow,textToChange,classToAdd,classToRemove,id){
    /*if(contentPos < scrollPos){
        $("#"+id).addClass("fixed");
        $("#"+id).addClass(classToAdd).removeClass(classToRemove);
        $("#"+id).find(".innerText").text(textToShow);
    }else{
        $("#"+id).removeClass(classToRemove).addClass(classToAdd);
        $("#"+id).find(".innerText").text(textToChange);
    }*/
    $("#"+id).removeClass("about mySkills myExperience myPortfolio myEducation myContact myFeedback");
    $("#"+id).addClass(classToAdd).removeClass(classToRemove);
    $("#"+id).find(".innerText").text(textToShow);
}