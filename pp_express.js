
var ppModal = document.getElementById('ppDonationModal');
ppModal.style.display = "none";
ppModal.style.position = "absolute";
ppModal.style.zIndex = "1";
ppModal.style.left = "0";
ppModal.style.top = "0";
ppModal.style.width = "100%";
ppModal.style.height = "100%";
ppModal.style.overflow = "auto";
ppModal.style.backgroundColor = "rgba(0,0,0,0.8)";
ppModal.innerHTML = "<div class=\"pp-donation-modal-content\" style=\"background-color: #fefefe; margin: 10% auto; padding: 0px; border: 0px; width: 100%; max-width:440px;\"><iframe src=\"\" height=\"480px\" width=\"100%\" seamless='seamless' frameBorder=\"0\" id=\"pp-donation-iframe\"></iframe></div>"
var ppiframe = document.getElementById("pp-donation-iframe")
function closeModal() { ppModal.style.display = "none"; }
function loadPPModal(charityName, charityEIN, firstName, lastName, id, cyberGrantsID, issues, customerNo, pageLocation) {
	disableScroll()
	iFrameURL = encodeURI('https://express.pandapay.io/patagonia/pandapay-express-iframe.html?charityName='+ charityName + '&charityEIN=' + charityEIN + '&firstName=' + firstName + '&lastName=' + lastName + '&patagoniaUserID=' + customerNo + '&cyberGrantsID=' + cyberGrantsID + '&issues=' + issues + '&wordpressID=' + id + '&location=' + pageLocation)
	iFrameURL = iFrameURL.replace('&amp;','%26');
	iFrameURL = iFrameURL.replace('&#038;','%26');
	iFrameURL = iFrameURL.replace('&#38;','%26');
	ppiframe.src = iFrameURL ; ppModal.style.display = "block";
	setTimeout(function(){ 
		ga(function(tracker) {
		  var clientId = tracker.get('clientId');
		  var frameWindow = document.getElementById('pp-donation-iframe').contentWindow;
		  // change https://xyz.shoppingcart.com to match your iFrame domain
		  frameWindow.postMessage(clientId, 'https://express.pandapay.io'); 
		});
	  }, 2000); 

}
// window.onclick = function (event) { if (event.target == ppModal) { closeModal(); } }

window.addEventListener('message', function(event) {  
		if (event.data == "close") {
			enableScroll();
			closeModal();
			
		}
}); 


  // left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  window.scrollTo(0,0);
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
  // document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
	document.onkeydown = null;  
	// document.body.removeEventListener('touchmove', function(e){ e.preventDefault(); }); 
}

