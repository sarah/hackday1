document.addEventListener('DOMContentLoaded', function () {

  chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "hello")
        alert("hello background");
    }
);
});
