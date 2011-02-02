// define the variables
var status;

// when loaded
window.onload = function() {
	status = document.getElementById('status');
	
	if (navigator.onLine)
		online();
	else
		offline();

	window.addEventListener('online',online,false);
	window.addEventListener('offline',offline,false);

};

function online() {
	status.setAttribute("class", "online");
	status.innerHTML = "Online";
}

function offline() {
	status.setAttribute("class", "offline");
	status.innerHTML = "Offline";
}
