
tl = new TimelineMax({paused:true}); 

var currentTime = new CurrentTime();

$(document).ready(function () {
   
    $("#restSearch").autocomplete({
        appendTo: "#ui-front",
        minLength: 3,
        source: function (request, response) {

            var term = request.term;
            var restUrl = "http://www.matapi.se/foodstuff?query=" + term;
          
            $.ajax({
                type: "GET",
                url: restUrl,
                dataType: "json",
                success: function (data) {   

                    var items = [];
                    $.each(data, function (key, val) { 

                        var item = {
                              label: "" + val.name,
                              value: val.name
                        };

                        items.push(item);

                        response(items);                        
                         
                    });
                },
                error: function (xhr) {
                    alert("Problems connection the server");
                }
            });
        },
        select: function( event, ui ) {
            $('.display-results-area').append('<p>'+ui.item.label+' - ' + currentTime.getTimeAndDate() + '</p>');
        }
    });

});



