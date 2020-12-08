var m = [
    ["元素周期表" , "ele.html"],
    ["中考倒计时", "text.html"],
    ["相对原子质量" , "m.html"]
]

var a = 0
var ele = document.getElementById("up")
for (a in m) {
    ele.innerHTML += "<a href='" + m[a][1] + "' class='a'>" + m[a][0] + "</a>"
}