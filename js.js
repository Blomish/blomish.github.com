var o = 0;
var g = [];

document.getElementById("io").value="Hyperrrr";


function e(e){
  g.push(e);
  o++
}

setInterval(function(){
  o>=0?g.splice(0,1):o=0;
  g[0]==undefined?console.log(g):document.getElementById("io").value = g[0];
  o--
  console.log("Type more..")
}, 500);
