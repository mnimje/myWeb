var aboutMe = null;
var mySkills = null;
var myExp = null;
var myEducation = null;
var myPortfolio = null;
var myContact = null;
var myFeedback = null;
$(document).ready(function(){
     assignPosition();    
    $(".caption").css("width","30%"); 
    
	$(".headerNavBar").on("mouseover",function(){
	   $(".headerNavBar").css("margin-left","0px");
    }).on("mouseout",function(){
	   $(".headerNavBar").css("margin-left","-65px");
    });

    $(window).on('resize',function(){
        var _this = $(document);        
        assignPosition(); 
        _callOnResize(_this);
    });
    
    $(document).scroll(function() {
        var _this = $(this);        
        _callOnResize(_this);
    });
});

function _callOnResize(_this){
        var y = $(_this).scrollTop();
         console.log(y);
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
}

function assignPosition(){
     aboutMe = $("#about").position();
     mySkills = $("#mySkills").position();
     myExp = $("#myExperience").position();
     myEducation = $("#myEducation").position();
     myPortfolio = $("#myPortfolio").position();
     myContact = $("#myContact").position();
     myFeedback = $("#myFeedback").position();    
}

/*
 **
 **Below function is used to alter caption contents based on scroll position.
 **
*/

function drawCaption(scrollPos,contentPos,textToShow,textToChange,classToAdd,classToRemove,id){  
    $("#"+id).removeClass("about mySkills myExperience myPortfolio myEducation myContact myFeedback");
    $("#"+id).addClass(classToAdd).removeClass(classToRemove);
    $("#"+id).find(".innerText").text(textToShow);
}