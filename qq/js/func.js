function select() {
    t = $("#select")[0].value;
    $(".avatar")[0].src = "img/" + t + ".jpg";
    if (t == "ZC") $("#name")[0].innerHTML = "【老师】数学-佘老师"
    if (t == "ZYM") $("#name")[0].innerHTML = "【老师】轨道动力学-特朗普轨道动力学博.."
    if (t == "DY") $("#name")[0].innerHTML = "【班主任】数学-柯老师"
    if (t == "XSC") $("#name")[0].innerHTML = "老八爷爷"
    if (t == "QX") $("#name")[0].innerHTML = "邱询"
    if (t == "HTW") $("#name")[0].innerHTML = "【老师】没事学学-语数英理化生"
    if (t == "LQ") $("#name")[0].innerHTML = "(╯°□°）╯︵ ┻━┻"
    if (t == "CHX") $("#name")[0].innerHTML = "Artorias"
    if (t == "RSX") $("#name")[0].innerHTML = "【班主任】lg学科-老师"
    if (t == "XXY") $("#name")[0].innerHTML = "xxx家长"
    if (t == "ZHJ") $("#name")[0].innerHTML = "你们关系好乱"
    if (t == "ZLX") $("#name")[0].innerHTML = "【老师】法学-法外狂徒张三"
    if (t == "ZZH") $("#name")[0].innerHTML = "【老师】高尚的sj教练-起个名字难"
    if (t == "XYL") $("#name")[0].innerHTML = "."
    if (t == "LZK") $("#name")[0].innerHTML = "【老师】魔法-阿瓦达索命速读专家"
    if (t == "WCM") $("#name")[0].innerHTML = "向书畅爸爸"
    if (t == "KS") $("#name")[0].innerHTML = "【管理员】23 没学上 被删除的KS"
}
function confirm() {
    var v = $("#input")[0].value;
    var tmp, str = "", inAt = false
    for (i = 0; i < v.length; ++i) {
        if (v[i] == "/") {
            if (inAt)
                str += "</span>"
            inAt = false;
            if (i <= v.length - 4) {
                cmd = v.substr(i, 4)
                if (cmd == "/xyx") {
                    i += 3;
                    str += "<img class=\"face\" src=\"img/face/xyx.png\">"
                } else if (cmd == "/xk!") {
                    i += 3;
                    str += "<img class=\"face\" src=\"img/face/xk.png\">"
                } else if (cmd == "/kk!") {
                    i += 3;
                    str += "<img class=\"face\" src=\"img/face/kk.png\">"
                } else if (cmd == "/jk!") {
                    i += 3;
                    str += "<img class=\"face\" src=\"img/face/jk.png\">"
                } else {
                    str += "/"
                }
            } else {
                str += "/"
            }
        } else if (v[i] == " ") {
            if (inAt) {
                str += v[i] + "</span>"
                inAt = false;
            } else str += v[i];
        } else if (v[i] == "@") {
            if (inAt) {
                str += "</span>" + " <span class=\"at\">" + v[i];
            } else {
                str += "<span class=\"at\">" + v[i];
                inAt = true;
            }
        } else if (i == v.length - 1) {
            if (inAt) str += v[i] + "</span>"
            else str += v[i];
        } else {
            str += v[i]
        }
    }
    $("#content")[0].innerHTML = str;
    if($("#QQid")[0].value != ""){
        $(".avatar")[0].src = "http://q1.qlogo.cn/g?b=qq&nk=" + $("#QQid")[0].value + "&s=100";
        $("#name")[0].innerHTML = $("#QQname")[0].value;
    }
    else select();
}