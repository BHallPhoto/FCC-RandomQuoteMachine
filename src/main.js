// eslint-disable-next-line
$(document).ready(function() {

    var dataUrl = "https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json";

    // Get JSON data for ID, Author, Quote, and Permalink.
    function getJson(data) {
        $.ajax({
           dataType: "json",
           url: dataUrl,
           success: function(data) {
              parseData(data);
           }
        });
    }

    // Parse the data to the correct tags
    function parseData(data) {
        $(".author").html(data.author);
        $(".quotedText").html(data.quote);
        $(".quoteLink").attr("href", data.permalink);
    }

    // Used to change color, will work on to fade in the color.
    function colorFade() {
        var color = [];

        for (var i = 0; i < 3; i++) {
            var pickNum = Math.floor(Math.random() * 255);
            color.push(pickNum);
        }

        $("body").css({
            backgroundColor: "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")"
        });
    }

    // Click function to activate new Quote and change color
    $("#new-quote").on("click", function() {
        getJson();
        colorFade();
    });

    // Click function to tweet the quote
    $("#tweet-quote").on("click", function() {
        var author = document.querySelector(".author").innerText,
            quote = document.querySelector(".quotedText").innerText
        
        window.open("https://www.twitter.com/intent/tweet?text=" + " \"" + quote + "\"  ~ " + author);
    });

    window.onload = getJson(dataUrl);

})