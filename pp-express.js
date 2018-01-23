function successfulTransaction(data) {
    window.location = "https://express.pandapay.io/patagonia/pandapay-express-iframe-thank-you.html?charityName=" + getAllUrlParams().charityName + '&patagoniaUserID=' + getAllUrlParams().patagoniaUserID + '&cyberGrantsID=' + getAllUrlParams().cyberGrantsID + '&issues=' + getAllUrlParams().issues + '&wordpressID=' + getAllUrlParams().wordpressID;
};

var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function () {
    window.parent.postMessage("close", "*");
};

function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(paramValue);
                }
                else {
                    obj[paramName][paramNum] = paramValue;
                }
            }
            else {
                obj[paramName] = paramValue;
            }
        }
    }
    return obj;
}

var granteeNames = document.getElementsByClassName("granteeName"),
    i, len;
for (i = 0, len = granteeNames.length; i < len; i++) {
    granteeNames[i].innerHTML = decodeURI(getAllUrlParams().charityName) + " ";
}

var ppCharityName = localStorage.getItem('pandapayCharityName');
var ppEin = decodeURI(getAllUrlParams().charityEIN);
var ppFirstName = decodeURI(getAllUrlParams().firstName);
var ppLastName = decodeURI(getAllUrlParams().lastName);
var ppAmount = localStorage.getItem('pandapayDonationAmount');
var ppReceiptEmail = localStorage.getItem('pandapayReceiptEmail');
var ppCardType = localStorage.getItem('pandapayCardType');
var ppLastFour = localStorage.getItem('pandapayLastFour');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104969319-1', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', ['patagonia.com']);
ga('set', 'userId', decodeURI(getAllUrlParams().patagoniaUserID));
ga('set', 'dimension1', decodeURI(getAllUrlParams().cyberGrantsID));
ga('set', 'dimension2', 'ngo');
ga('set', 'dimension3', decodeURI(getAllUrlParams().issues));
ga('set', 'dimension4', decodeURI(getAllUrlParams().wordpressID));
ga('send', 'pageview');