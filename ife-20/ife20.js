
$ = function (el) { return document.querySelector(el); }; //多用选择符API,和jquery的选择方法一样

function init(){
    var btnnode = document.getElementsByName("btn");
  //  alert($("btn").length);
    for(var i=0,len=btnnode.length;i<len;i++){
        btnnode[i].addEventListener("click",function(event){
            click_f(event);
        },false);
    }
}

var arrData = [];

function click_f(event){
    if(event.target.value == "插入"){
        //alert("插入");
        var text = document.getElementsByName("insert")[0].value;
      /*  var content = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e){
            //为什么要加filter?不加不是也能输出结果？难道还有可能e.length==0吗？
            //先将满足regexp的字符串都提取出来组成数组，接着对数组进行过滤，
            if(e.length > 0){
                return true;
            }
            else{
                return false;
            }
        });*/
        var content = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
        //^在这里是取反操作。应该按照非数字，非英文字母，非中文进行切分。
        var div = document.getElementById("show");
        for(var i=0,len=content.length;i<len;i++){
            var newnode = document.createElement("span");
            newnode.className = "spanStyle";
            newnode.innerHTML = content[i];
            div.appendChild(newnode);
        }
        arrData = arrData.concat(content);
    }
    else if(event.target.value == "查询"){
        //alert("查询");
        var text = document.getElementsByName("query")[0].value;
        var div = document.getElementById("show");
        div.innerHTML = arrData.map(function(d){
            d = d.replace(new RegExp(text,"g"),"<span class='select'>" + text + "</span>");
            //d = 匹配项之前的字符串+<span class='select'>匹配项</span>
            return "<span class='spanStyle'>" + d + "</span>";
        }).join('');
        //返回的是一个数组，join方法是将数组中的各项合并成一个以''分割的字符串
    }
}
init();