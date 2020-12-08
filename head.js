var m = [
    ["学习工具", "study"],
    ["学习计划(建设中)", "#"]
]

var a = 0
var ele = document.getElementById("up")
for (a in m) {
    ele.innerHTML += "<a href='" + m[a][1] + "' class='a'>" + m[a][0] + "</a>"
}