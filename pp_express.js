
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
ppModal.innerHTML = "<div class=\"pp-donation-modal-content\" style=\"background-color: #fefefe; margin: 10% auto; padding: 0px; border: 0px; width: 440px;\"><iframe src=\"\" height=\"350px\" width=\"440\" seamless='seamless' frameBorder=\"0\" id=\"pp-donation-iframe\"></iframe></div>"
var ppiframe = document.getElementById("pp-donation-iframe")
function closeModal() { ppModal.style.display = "none"; }
function loadPPModal(charityName, charityEIN, firstName, lastName) {
	localStorage.setItem('pandapayCharityName', charityName);
	localStorage.setItem('pandapayCharityEIN', charityEIN);
	localStorage.setItem('pandapayFirstName', firstName);
	localStorage.setItem('pandapayLastName', lastName);
	ppiframe.src = 'https://s3.amazonaws.com/express.pandapay.io/patagonia-dev/pandapay-express-iframe.html'; ppModal.style.display = "block";
}
window.onclick = function (event) { if (event.target == ppModal) { closeModal(); } }
var remoteCloseModal = closeModal();