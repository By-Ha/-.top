$(function(){
    $("#submit")[0].onclick=function(){
        str = "";
        t = $("#name")[0].value;
        tt = t.split("\n");
        str += "哪一天的统计?->\t=today()\t统计从哪一天开始?->\t1\n";
        var i = 2;
        tt.forEach(ele => {
            if(ele != " " && ele != "")
            	str += ele + "\t=OFFSET("+ele+"!A1,B1-D1,0)\t=OFFSET("+ele+"!B1,B1-D1,0)\t=OFFSET("+ele+"!C1,B1-D1,0)\t=IF(OR(B"+String(i)+"=0,C"+String(i)+"=0,D"+String(i)+"=0),\"未完成!!!!!!!!!!!!!!!!!!!!!\",\"完成\")\n",++i;
            
        });
        $("#res")[0].innerHTML = str;
    }
})
$(function(){
    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        if(e.text == "") swal ( "???" ,  "您复制了个寂寞" ,  "warning" );
        else swal ( "完成!!!" ,  "您的数据已经复制到剪贴板" ,  "success" );
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        swal ( "失败!!!" ,  "请手动复制" ,  "error" );
    });
})