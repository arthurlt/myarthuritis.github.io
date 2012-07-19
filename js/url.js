function devurl() {
    var stateObj = { index: "dev" };
    history.pushState(stateObj, "page 2", "dev.html");}
function abouturl() {
    var stateObj = { index: "about" };
    history.pushState(stateObj, "page 2", "about.html");}