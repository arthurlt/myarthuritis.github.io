function devurl() {
    var stateObj = { index: "dev" };
    history.pushState(stateObj, "page 2", "dev");}
function abouturl() {
    var stateObj = { index: "about" };
    history.pushState(stateObj, "page 3", "about");}