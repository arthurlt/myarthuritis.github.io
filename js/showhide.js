function toggle_visibility(id) {
    var e = document.getElementById(id);
    var a = document.getElementById("aboutwindow")
    var d = document.getElementById("devwindow")
    var g = document.getElementById("googlewindow")
    var t = document.getElementById("twitterwindow")
//closing other window if open or not
    if (e == a) {
        d.style.display = "none";
        g.style.display = "none";
        t.style.display = "none";}
    else if (e == d) {
        a.style.display = "none";
        g.style.display = "none";
        t.style.display = "none";}
    else if (e == g) {
        a.style.display = "none";
        d.style.display = "none";
        t.style.display = "none";}
    else {
        a.style.display = "none";
        d.style.display = "none";
        g.style.display = "none";}
//toggling window open
    if (e.style.display == 'block') {
        e.style.display = 'none';}
    else {
       e.style.display = 'block';}
}