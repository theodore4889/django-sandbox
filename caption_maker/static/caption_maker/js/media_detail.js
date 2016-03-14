// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var interval;
var tIndex = 0;

function findTimeIndex(t){
    var mid;
    var lo = 0;
    var hi = timeArr.length - 1;
    while (hi - lo > 1) {
        mid = Math.floor ((lo + hi) / 2);
        if (timeArr[mid] < t) {
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return lo;
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
    $('.caption').removeClass('highlight');
    ele.addClass('highlight');
}

// Find which caption is active
function findActiveCaption(){
    var t = player.getCurrentTime();

    if (t > timeArr[tIndex]){
        var ele = $(".line-" + ++tIndex);
        highlightLines(ele);
        scroll(ele);
    }
}

// Trigger when Youtube Iframe is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: { 'start': startTime, 'end': endTime},
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
        findActiveCaption();
        interval = setInterval(findActiveCaption, 200);
        
    // If player is not playing, stop checking for active captions
    } else {
        clearInterval(interval);
    }
}

$( window ).load( function() {
    
    // Toggle pinyin display
    // $('.py-toggle').click( function () {
    //     var _this = $(this);
    //     $('.py-toggle').removeClass('active');
    //     _this.addClass('active');
        
    //     if(_this.context.id == 'py-show'){
    //         $('.pinyin').show();
    //     }else{
    //         $('.pinyin').hide();
    //     }
    // });

    // Get Youtube API script
    var $tag = $("<script>", {src: "https://www.youtube.com/iframe_api"});
    $("script:first").before($tag);
    
});







