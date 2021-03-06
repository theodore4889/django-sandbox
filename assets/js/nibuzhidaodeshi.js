// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var interval;
var tIndex = 0;

var timeArr = [14.1, 20.2, 25.6, 32.2, 37, 43.2, 49, 59, 65.4, 71.4, 78.8, 82.9, 88.8, 96.8, 108.4,
               118.4, 124.4, 130.2, 137.4, 141.7, 147.6, 154.4, 168.2];

function findTimeIndex(t){
    var len = timeArr.length;
    var range = timeArr[len-1] - timeArr[0];
    var guess = Math.floor((t / range) * len) - 1;
    var found = false;

    while(!found) {
        var guessVal = timeArr[guess];
        
        if(guess == 0 || guess == len-1){
            found = true;
        } 
        else if(guessVal < timeArr[guess+1]){
            if (guessVal > timeArr[guess-1]){
                found = true;
            }
            else{
                guess--;
            }
        }
        else{
            guess++;
        }
    }

    return guess;
}

// Scroll to active captions
function scroll(ele){
    var container = $('.lyrics-container');
    container.animate({
        scrollTop: ele.offset().top - container.offset().top + container.scrollTop()
    });
}

// Highlight active captions, remove highlights from inactive ones
function highlightLines(ele){
    $('.hanzi').removeClass('highlight');
    ele.addClass('highlight');
}

// Find which caption is active
function findActiveCaption(){
    var t = player.getCurrentTime();

    if (t > timeArr[tIndex]){
        var ele = $("#cn-" + ++tIndex);
        highlightLines(ele);
        scroll(ele);
    }
}

// Trigger when Youtube Iframe is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'oHdS2Vfo0vM',
        iv_load_policy: 3,
        modestbranding: 1,
        
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Trigger whenever player state changes (Playing, Paused, Buffering, etc)
function onPlayerStateChange(event) {
    
    // If player is playing, continually check active captions
    if (event.data == YT.PlayerState.PLAYING) {
        tIndex = findTimeIndex(player.getCurrentTime());
        interval = setInterval(findActiveCaption, 200);
        
    // If player is not playing, stop checking for active captions
    } else {
        clearInterval(interval);
    }
}

$( window ).load( function() {
    
    // Toggle pinyin display
    $('.py-toggle').click( function () {
        var _this = $(this);
        $('.py-toggle').removeClass('active');
        _this.addClass('active');
        
        if(_this.context.id == 'py-show'){
            $('.pinyin').show();
        }else{
            $('.pinyin').hide();
        }
    });

    // Get Youtube API script
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
});








