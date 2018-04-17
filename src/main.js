// eslint-disable-next-line
$(document).ready(function() {
    var dataUrl = "https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json";
    function getJson(data) {
        $.ajax({
           dataType: "json",
           url: dataUrl,
           success: function(data) {
              parseData(data);
           }
        });
    }

    function parseData(data) {
        $(".author").html(data.author);
        $(".quotedText").html(data.quote);
        $(".quoteLink").attr("href", data.permalink);
    }

    var pickedColor = [];

    function colorFade() {
        var color = [];

        for (var i = 0; i < 3; i++) {
            var pickNum = Math.floor(Math.random() * 255);
            color.push(pickNum);
        }

        pickedColor = color.toString();

        $("body").css({
            backgroundColor: "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")"
            
        });
    }

    $("#new-quote").on("click", function() {
        getJson();
        colorFade();
    });

    $("#tweet-quote").on("click", function() {
        var author = document.querySelector(".author").innerText,
            quote = document.querySelector(".quotedText").innerText
        
        window.open("https://www.twitter.com/intent/tweet?text=" + " \"" + quote + "\"  ~ " + author);
    })

    window.onload = getJson(dataUrl);
    

})