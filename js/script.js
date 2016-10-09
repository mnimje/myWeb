$(document).ready(function(){
    var aboutMe = $("#about").position();
    var mySkills = $("#mySkills").position();
    var myExp = $("#myExperience").position();
    var myEducation = $("#myEducation").position();
    var myPortfolio = $("#myPortfolio").position();
    var myContact = $("#myContact").position();
    
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
                        
      var test = (aboutMe.top < y ) ? drawCaption(y,aboutMe.top,"About Me","about","","about") : "" ;   
        
      if(aboutMe.top < y ){
        drawCaption(y,aboutMe.top,"About Me","About Me","about","","about");  
      }else {
        drawCaption(y,aboutMe.top,"About Me","About Me","about","fixed","about");
      }      
      if((mySkills.top -15) < y && y > aboutMe.top){
        drawCaption(y,mySkills.top,"My Skills","About Me","mySkills","about","about");  
      }else{        
        drawCaption(y,mySkills.top,"My Skills","About Me","about","mySkills","about");  
      }
              
    });

});

/*
 **
 **Below function is used to alter caption contents based on scroll position.
 **
*/

function drawCaption(scrollPos,contentPos,textToShow,textToChange,classToAdd,classToRemove,id){
    if(contentPos < scrollPos){
        $("#"+id).addClass("fixed");
        $("#"+id).addClass(classToAdd).removeClass(classToRemove);
        $("#"+id).find(".innerText").text(textToShow);
    }else{
        $("#"+id).removeClass(classToRemove).addClass(classToAdd);
        $("#"+id).find(".innerText").text(textToChange);
    }
}