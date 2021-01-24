window.onload=function(){
    //マウス移動時のイベントをBODYタグに登録する
    document.body.addEventListener("mousemove", function(e){
    var Interval;
    //座標を取得する
    function get(){
      var mY = e.pageY;  //Y座標
    }

    function interval(){
        Interval = setInterval(get,1000);
    }
    //座標を表示する 
    document.getElementById("txtY").value = Interval;
    });
  }
  