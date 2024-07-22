var d = new Date();
var monthNames = [ "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December" ];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
function timer() {
    setTimeout(timer, 1000);
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
        var strTime = [hours % 24,
                  (minutes < 10 ? "0" + minutes : minutes)
                  ].join(':');
    time.innerHTML = strTime;
    setTimeout(timer, 1000);
}
getDate();
timer();