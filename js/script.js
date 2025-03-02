$("button.btn3").click(function(){
   $("div.boxsh").fadeIn();
   $("div.boxsh").animate({top:'100%',transition:'3s',opacity:'1'});  
   $("div.turtb").hide(3000);
   $("div.bg").hide();
  $("div.x").click(function(){
     $("div.boxsh").hide(3000);
     $("div.turtb").show(3000);
     $("div.bg").show();
  });
});



$("button.b1").click(function(){
  $("div.one").fadeIn();
  $("div.div2").fadeOut();
  $("div.div3").fadeOut();
  $("div.div4").fadeOut();
  $("div.xx").click(function(){
    $("div.one").fadeOut();
    $("div.div2").fadeIn();
    $("div.div3").fadeIn();
    $("div.div4").fadeIn();
  });
});

$("button.b2").click(function(){
   $("div.two").fadeIn();
   $("div.div1").fadeOut();
   $("div.div3").fadeOut();
   $("div.div4").fadeOut();
   $("div.xx").click(function(){
     $("div.two").fadeOut();
     $("div.div1").fadeIn();
     $("div.div3").fadeIn();
     $("div.div4").fadeIn();
   });
 });

 $("button.b3").click(function(){
   $("div.tree").fadeIn();
   $("div.div1").fadeOut();
   $("div.div2").fadeOut();
   $("div.div4").fadeOut();
   $("div.xx").click(function(){
     $("div.tree").fadeOut();
     $("div.div1").fadeIn();
     $("div.div2").fadeIn();
     $("div.div4").fadeIn();
   });
 });

 $("button.b4").click(function(){
   $("div.four").fadeIn();
   $("div.div1").fadeOut();
   $("div.div2").fadeOut();
   $("div.div3").fadeOut();
   $("div.xx").click(function(){
     $("div.four").fadeOut();
     $("div.div1").fadeIn();
     $("div.div2").fadeIn();
     $("div.div3").fadeIn();
   });
 });

$("img.iw1").mouseover(function(){
   $("img.iw1").animate({top:'-3%',opacity:1});
   $("img.iw1").mouseout(function(){
      $("img.iw1").animate({top:'2%',opacity:0.4});
   });
});

$("img.iw2").mouseover(function(){
   $("img.iw2").animate({top:'-3%',opacity:1});
   $("img.iw2").mouseout(function(){
      $("img.iw2").animate({top:'2%',opacity:0.4});
   });
});

$("img.iw3").mouseover(function(){
   $("img.iw3").animate({top:'-3%',opacity:1});
   $("img.iw3").mouseout(function(){
      $("img.iw3").animate({top:'2%',opacity:0.4});
   });
});

$("img.iw4").mouseover(function(){
   $("img.iw4").animate({top:'-3%',opacity:1});
   $("img.iw4").mouseout(function(){
      $("img.iw4").animate({top:'2%',opacity:0.4});
   });
});

$("img.iw5").mouseover(function(){
   $("img.iw5").animate({top:'-3%',opacity:1});
   $("img.iw5").mouseout(function(){
      $("img.iw5").animate({top:'2%',opacity:0.4});
   });
});


