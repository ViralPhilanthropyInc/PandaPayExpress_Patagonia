
var ppModal = document.getElementById('ppDonationModal');
ppModal.style.display = "none";
ppModal.style.position = "fixed";
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
function loadPPModal(charityName, charityEIN, firstName, lastName, id, cyberGrantsID, issues, customerNo) {
	iFrameURL = 'https://s3.amazonaws.com/express.pandapay.io/patagonia-dev/pandapay-express-iframe.html?charityName='+ charityName + '&charityEIN=' + charityEIN + '&firstName=' + firstName + '&lastName=' + lastName + '&patagoniaUserID=' + customerNo + '&cyberGrantsID=' + cyberGrantsID + '&issues=' + issues + '&wordpressID=' + id
	ppiframe.src = encodeURI(iFrameURL) ; ppModal.style.display = "block";
}
window.onclick = function (event) { if (event.target == ppModal) { closeModal(); } }

window.addEventListener('message', function(event) {  
		if (event.data == "close") {
			closeModal();
		}
}); 