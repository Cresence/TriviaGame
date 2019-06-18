$(document).ready(function(event){
    var event = $(document).onsubmit
    // setTimeout(chkAns, 30000)
    var goodAns = 0;
    var badAns = 0;
    var time = 30;
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

    $(':radio', '#q1').change(function usrAns1(){
        // console.log(this.value);
        if (this.value != 'Coca Cola'){
            badAns++;
        }else {
            goodAns++
        }
        // usrAns.push(this.value);
    });
    $(':radio', '#q2').change(function usrAns2(){
        // console.log(this.value);
        if (this.value != 'blue'){
            badAns++;
        }else {
            goodAns++
        }
    });
    $(':radio', '#q3').change(function usrAns3(){
        // console.log(this.value);
        if (this.value != '2'){
            badAns++;
        }else {
            goodAns++
        }
    });

    $('#chk-ans').on('click', function(event){
        chkAns();
        event.preventDefault();
    });
});