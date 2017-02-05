//set the total time
startTime = new Date();
endTime = new Date();
function setTime(max_time){
    var max_time = max_time;
    endTime.setTime(startTime.getTime() + max_time);
};
     
// function to update counter
function startCountDown(){
    var currentTime = new Date();
    var remainingTime = endTime.getTime()-currentTime.getTime();
    var hours = parseInt(remainingTime / 3600000);
    var minutes = parseInt((remainingTime % 3600000) / 60000);
    var seconds = parseInt((((remainingTime % 3600000) % 60000) / 1000));
    $("#countdown").text(hours.toString() + ":" + minutes.toString() + ":" + seconds.toString());

//check if time's up 
    if(remainingTime < 0){
        time_up_action();
    }
    else{
    //call itself every second
    setTimeout(startCountDown,1000);
    };
};
        //action when time's up, override if necessary
function time_up_action(){
    alert("time's up");
} 