$(function() {

  var content = $("#bar").text();
  function getNumber(){
    return $("#bar").text();
  }
  console.log("getNumber " + getNumber());

  chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
      if(request.method == 'getNumber'){
        sendResponse({data: getNumber(), method: "getNumber"}); 
      }
    }
  );
});
