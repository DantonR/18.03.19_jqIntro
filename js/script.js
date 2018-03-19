// alert("Javascript is loaded in");
// console.log("Javascript is loaded in");

$(document).ready(function(){

    // $("div")
    // $(".green")
    // $("#box1")
    // $("ul li")

    $("#box1").click(function(){
        console.log("Green box is clicked");
    });

    $("#box2").click(function(){
        console.log("Red box is clicked");
    });

    // click()
    // dblclick()
    // mouseover()
    // mouseleave()
    // hover()
    // mousedown()
    // mouseup()
    // keydown()
    // keyip()
    // focus() when you enter a form elements
    // blur () when you leave a form element
    // submit() when a form has been submitted

    // event.preventDefault();
    $("#myForm").submit(function(){
        event.preventDefault();
        console.log("Do this instead");
    });

    // $("#box1").click(function (){
    //     $("#box1").toggleClass("higher");
        // $("#box2").toggle();
        // $("#box2").toggle(5000);
         // $("#box2").fadeOut(2500);
         // $("#box2").toggleClass("wider");
         // $("#box2").css({"background-color":"pink", "width":"500px"});
    // });

// $("#box2").click(function (){
//     $("#box2").toggleClass("higher");
// });

$(".box").click(function (){
    $(this).toggleClass("higher");
    // When using something like toggle class you don't need to use a '.''
});

$("#button").click(function (){
    // $("#paragraph").append(" This text gets added to the end.");
    // $("#paragraph").prepend("This is added to the start");
    // $("#paragraph").empty();
    // $("#paragraph").remove();
    // $("#paragraph").text("Override the text");
    $("#list1").append("<li class='listColor'>This is a list item</li>");
    $("body").append("<div class='box blue'></div");
});



});
