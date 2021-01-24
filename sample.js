// window.onload=function(){
//   var Interval;
//   //マウス移動時のイベントをBODYタグに登録する
// function get(){
//   var mY = e.pageY;
// }

// function interval(){
//   Interval = setInterval(get,1000);
// }

//  setInterval(function(){
  
//     //座標を表示する
//     document.getElementById("txtY").value = Interval;
//   });
//  },1000);
// }

window.onload=function(){
  //マウス移動時のイベントをBODYタグに登録する

  var mmY = function(){
    document.body.addEventListener("mousemove", function(e){
    const log = function(){
      var mY = e.pageY;  //Y座標
    }
    console.log(log);
    // //座標を表示する 
    // document.getElementById("txtY").value = Interval;
    });
}
var a = setInterval(mmY,1000);
console.log(a);
document.getElementById("txtY").value = a;

}