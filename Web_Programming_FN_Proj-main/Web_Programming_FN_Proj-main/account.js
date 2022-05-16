window.onload = start;
var test = 10;
function start() {
    console.log(test);
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}

function myProfile() {
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}
function myBankandcards() {
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    if (b.style.display === "none") {
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}
function myAddress() {
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    if (c.style.display === "none") {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}
function myPass() {
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    if (d.style.display === "none") {
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}
function myDeli() {
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    if (e.style.display === "none") {
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
    }
}
function myDis() {
    var a = document.getElementById("profile");
    var b = document.getElementById("b&c");
    var c = document.getElementById("address");
    var d = document.getElementById("pw");
    var e = document.getElementById("deli");
    var f = document.getElementById("dis");
    if (f.style.display === "none") {
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}