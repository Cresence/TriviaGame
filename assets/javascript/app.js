$(document).ready(function(event){
    // setTimeout(chkAns, 30000)
    var goodAns = 0;
    var badAns = 0;
    var time = 120;
    $('#myForm').hide();
    $('#time-display').hide();

    function chkAns() {
        $('#myForm').hide();
        $('#time-display').hide();
        $('#ansShow').html('<br>' + 'Your Results:')
        $('#ansShow').append('<br>' + 'Correct Answers: ' + goodAns);
        $('#ansShow').append('<br>' + 'Incorrect Answers: ' + badAns);
    }

    $('#start-quiz').on('click', countdown, function(){
        $('#myForm').show();
        $('#start-quiz').hide();
        $('#time-display').show();
    });

    // function start(){
    //     if (!timerRun) {
    //         interValId = setInterval(count, 1000);
    //         timerRun = true;
    //     }
    // }

    // function count() {
    //     time--;
    //     $('#time-display').text('Time Remaining: ' + time + ' seconds');
    // }

    var timerId = setInterval(countdown, 1000);

    function countdown(){
        if (time == 0) {
            clearTimeout(timerId);
            chkAns();
        } else {
            $('#time-display').text('Time Remaining: ' + time + ' seconds');
            time--;
        }
    }
    $(':radio').change(function usrAns(){
        // console.log(this.value);
        if (this.value != 'good'){
            badAns++;
        }else {
            goodAns++
        }
        // usrAns.push(this.value);
    });
    $('#chk-ans').on('click', function(event){
        chkAns();
        event.preventDefault();
    });
});