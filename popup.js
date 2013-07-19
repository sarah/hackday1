document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.getSelected(null, function(tab) { 
  chrome.tabs.sendMessage(tab.id, {method: "getNumber"}, function(response){
    if(response.method == "getNumber"){
      var number = response.data;
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
