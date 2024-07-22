function calculateRelease(dob, dt) {
	dt = dt || new Date();
	var diff = dt.getTime() - new Date(dob).getTime();
	var release = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	document.write(release);
	}