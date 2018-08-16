function myFunction(){
    document.getElementById('demo').innerHTML = Date();
}
function bulbOn(){
    document.getElementById('myImage').src ='pic_bulbon.gif'
}
function bulbOff(){
    document.getElementById('myImage').src ='pic_bulboff.gif'
}
function QAndA(){
    var question = "Your species";
    var defaultAnswer = "human";
    var myAnswer =prompt(question);
    if(myAnswer ==defaultAnswer) {
        alert("congratulation! your answer is correct");
    }
    else{
        alert("Nope! Wrong answer, please try again!")
    }
}
function myStatement(){
    console.log('This is my first statment on console')
}
