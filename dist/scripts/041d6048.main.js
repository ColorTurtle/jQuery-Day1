$(".activate-box").click(function(){console.log("the button was clicked"),$(".box").addClass("active")}),$(".submit").click(function(){console.log("focused on an input"),$("input").each(function(){""==$(this).val()&&$(this).addClass("error")})}),$(".try1").click(function(){console.log("You can do this!"),$(this).addClass("active")}),$(".try2").hover(function(){console.log("You can do this!"),$(this).addClass("active")}),$(".try3").click(function(){console.log("You can do this!"),$(this).addClass("expand")}),$(".submit").click(function(){console.log("focused on an input"),$("input").each(function(){""==$(this).val()&&$(".rumbler").addClass("its-on")})}),$(".center-btn").click(function(){$(".try5").siblings(".shade").toggle("slow",function(){})}),$(".right").click(function(){$(".try6").siblings(".shade").animate({opacity:1,right:"-=50",width:"toggle"},5e3,function(){})}),$(".left").click(function(){$(".try7").siblings(".shade").animate({opacity:1,top:"-=50",height:"toggle"},5e3,function(){})}),$(".try8").siblings(".shade").hover(function(){console.log("You can do this!"),$(".try8").addClass("active")});