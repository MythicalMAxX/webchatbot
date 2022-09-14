var Query = [
    /hello|hey|hi|howdy|hy|hola|howareyou/i,
    /whoareyou|introduceyourself|whatareyou/i,
    /whoisyourdeveloper|yourdevelopername|whocreatedyou|whomadeyou|whomadeyou/i,
    /whatcanyoudo|howcanyouhelpme?|whattaskcanyourperform/i,
    /areyouhuman/i,
    /howoldareyour?|whatisyourage/i,
    /whatlanguagedoyouspeak?|whatlanguagesdoyouknow|whatisyourmothertongue/i,
    /bye|goodbye/i,
];

$(function(){

    $(".send-btn").on("click",function(){
    var question = document.querySelector(".input").value,
    botreply = question,
    question = question.toLowerCase().split(" ").join("");
    $("<p class='user-container'>"+botreply+"</p>").appendTo(".main-container"),
     reply = function(message){
          $("<p class='bot-container'>"+message+"</p>").appendTo(".main-container");
    };
    $(".input").val("");
    if(Query[0].test(question)){
          reply("Hello. Hope you are fine.");
    }else if(Query[1].test(question)){
        reply("I'm Playboy Rakesh. How can i help you?");
    }else if(Query[2].test(question)){
        reply("I was developed by Vinamra Yadav.");
    }else if(Query[3].test(question)){
        reply("sorry I can't help you. I am in development phase.");
    }else if(Query[4].test(question)){
        reply("I am a robot.");
    }else if(Query[5].test(question)){
        reply("My age changes with updates so i don't have a specific age.");
    }else if(Query[6].test(question)){
        reply("I can speak all the languages but you need to teach me first.");
    }else if(Query[7].test(question)){
        reply("Cya.");
    }else{
        reply("Samajh nhi aaya magar sunkar acha laga.");
    });

});
