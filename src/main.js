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
        console.log(data);
        $(".author").html(data.author);
        $(".quotedText").html(data.quote);
        $(".quoteLink").attr("href", data.permalink);
    }

    $("#new-quote").on("click", function() {
        getJson();
    });

    $("#tweet-quote").on("click", function() {
        var author = document.querySelector(".author").innerText,
            quote = document.querySelector(".quotedText").innerText

        window.open("https://www.twitter.com/intent/tweet?text=" + " \"" + quote + "\"  ~ " + author);
    })

    window.onload = getJson(dataUrl);
    

})