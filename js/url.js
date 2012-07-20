function mainurl() {
    var stateObj = { url: "#" };
    history.pushState(stateObj, "page 1", "#");}
function devurl() {
    var stateObj = { index: "#dev" };
    history.pushState(stateObj, "page 2", "#dev");}
function abouturl() {
    var stateObj = { foo: "#about" };
    history.pushState(stateObj, "page 3", "#about");}