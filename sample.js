var mY = 0;
window.onload = function(){
  document.body.addEventListener("mousemove", function(e){
  mY = e.pageY;
  console.log(mY);
  });
}

function mouse(){
  console.log(mY);
  document.getElementById("mouse").innerHTML = "Y座標：" + mY;
}

setInterval('mouse()', 1000);