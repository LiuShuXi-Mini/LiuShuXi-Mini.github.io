var m = [
    ["Ԫ�����ڱ�" , "ele.html"],
    ["�п�����ʱ", "text.html"],
    ["���ԭ������" , "m.html"]
]

var a = 0
var ele = document.getElementById("up")
for (a in m) {
    ele.innerHTML += "<a href='" + m[a][2] + "' class='a'>" + m[a][1] + "</a>"
}