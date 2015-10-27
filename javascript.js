function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    var object =JSON.parse(xhttp.responseText);
    var listitem, listitem2;
    var t;

    var list = document.createElement("ul");
    list.style.width="100px";
    list.style.height="50px";
    list.style.overflowY = "scroll";
     for(var i=0; i<object.length;i++)
{
    listitem = document.createElement("li");
    listitem.id="l1" +i;
    t = document.createTextNode(object[i].color);
    listitem.appendChild(t);
    list.appendChild(listitem);
    document.body.appendChild(list);
    listitem.onclick=function(){document.getElementById(this.id.replaceAt(1, "2")).scrollIntoView(true);}

}


    var list2 = document.createElement("ul");
    list2.style.width="100px";
    list2.style.height="50px";
    list2.style.overflowY = "scroll";
     for(var i=0; i<object.length;i++)
{
    listitem2 = document.createElement("li");
    listitem2.id="l2" +i;
    t = document.createTextNode(object[i].value);
    listitem2.style.backgroundColor=object[i].value;
    listitem2.appendChild(t);
    list2.appendChild(listitem2);
    document.body.appendChild(list2);
    listitem2.onclick=function(){document.getElementById(this.id.replaceAt(1, "1")).scrollIntoView(true);}
}

		
  }
  xhttp.open("GET", "ColorMap.json", true);
  xhttp.send();
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
window.onload=loadDoc;