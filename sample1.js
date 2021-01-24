window.onload=function(){
  //マウス移動時のイベントをBODYタグに登録する
  document.body.addEventListener("mousemove", function(e){
 
    //座標を取得する
    var mX = e.pageX;  //X座標
    var mY = e.pageY;  //Y座標
 
    //座標を表示する
    document.getElementById("txtX").value = mX;
    document.getElementById("txtY").value = mY;
  });
}