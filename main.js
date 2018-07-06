function LoadJson(file,callback){
  var s=new XMLHttpRequest();
  s.overrideMimeType("application/json");
  s.open("GET",file,true);
  s.onreadystatechange=function{
      if (s.readystate===4 && a.status=="200") {
      callback(s.responseText);
   }
}
  s.send(null);
}
LoadJson("data.json",function(text){
    let data=JSON.parse(text);
    console.log(data);
    career(data.basics);
})
var right= document.getElementById('right');
var career=document.createElementI('h4');
career.textContent="career Object";
career.appendChild(document.createElement("HR"));
right.appendChild(career);
