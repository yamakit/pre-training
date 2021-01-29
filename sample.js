var mY = 0;
window.onload = function(){
  //ページをロードした時にマウスのY座標を取得
  document.body.addEventListener("mousemove", function(e){
  mY = e.pageY;
  });
}

function mouse(){
  //Y座標を表示する
  console.log(mY);
  document.getElementById("mouse").innerHTML = "Y座標：" + mY;
}

setInterval('mouse()', 1000);