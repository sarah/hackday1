document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.getSelected(null, function(tab) { 
  chrome.tabs.sendMessage(tab.id, {method: "getNumber"}, function(response){
    if(response.method == "getNumber"){
      var number = response.data;
      console.log("Number " + number);
      $("#number").text(number);
    }
  });



    console.log(tab.url);
    console.log("tab " + tab);
  })
});
