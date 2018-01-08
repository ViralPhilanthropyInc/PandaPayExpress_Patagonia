var ppCharityName = localStorage.getItem('pandapayCharityName');
var ppEin = localStorage.getItem('pandapayCharityEIN');
var ppFirstName = localStorage.getItem('pandapayFirstName');
var ppLastName = localStorage.getItem('pandapayLastName');
var ppAmount = localStorage.getItem('pandapayDonationAmount');
var ppReceiptEmail = localStorage.getItem('pandapayReceiptEmail');
var ppCardType = localStorage.getItem('pandapayCardType');
var ppLastFour = localStorage.getItem('pandapayLastFour');

function successfulTransaction(data) {
  	window.location = "https://express.pandapay.io/patagonia/pandapay-express-iframe-thank-you.html";
    };   

var closeButton = document.getElementsByClassName("close")[0];
	closeButton.onclick = function() {
		parent.remoteCloseModal();   
	};

var granteeNames = document.getElementsByClassName("granteeName"),
    i, len;
for (i = 0, len = granteeNames.length; i < len; i++) {
    granteeNames[i].innerHTML = ppCharityName + " ";
}

