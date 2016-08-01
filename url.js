function geturl() {
  var name = document.getElementById("input").value;
  var element = document.getElementById("wv");
  if(element){
    element.src=name;
  }else{
    alert("put input here");
  }

  element.addEventListener('dialog',function(e){
    window.open("data:text/html,"+e.messageText);
  });
}

document.getElementById("Button").addEventListener("click",geturl);
document.getElementById("input").addEventListener('keypress', 
function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      geturl();
    }
});
