document.addEventListener('DOMContentLoaded', function () {

 var phono = $.phono({
        apiKey: "24c2fe0f26ac9a18025e4c16d5393e1b",
        onReady: function() {
          $("#call").attr("disabled", false).val("Call");


// phono.phone.dial("816-726-8267", {
          // onRing: function() {
            // $("#status").html("Ringing");
          // },
          // onAnswer: function() {
            // $("#status").html("Answered");
          // },
          // onHangup: function() {
            // $("#call").attr("disabled", false).val("Call");
            // $("#status").html("Hangup");
          // }
        // });


        }
      });


      console.log("phono ", phono);
  var call_link = $("a#call");
  console.log("call_link " + call_link);
   
  $(call_link).click(function(e) {
    e.preventDefault();
    console.log("Handler for .click() called.");
  });











  chrome.tabs.getSelected(null, function(tab) { 
  chrome.tabs.sendMessage(tab.id, {method: "getNumber"}, function(response){
    if(response.method == "getNumber"){
      var number = response.data.replace("-", "");
      var prefix = number.substr(0,3);
      var extension = number.substr(3,3);
      var last_four = number.substr(6,4);
      var displayed_number = "(" + prefix + ")-" + extension + "-"  + last_four;

      $("#number").text(displayed_number);
    






    }
  });



    console.log(tab.url);
    console.log("tab " + tab);
  })
});
