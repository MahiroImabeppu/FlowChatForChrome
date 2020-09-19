// Initialize Firebase
var config = {
    apiKey: "*********your apikey**************",
    authDomain: "**YourDomain**.firebaseapp.com",
    databaseURL: "https://**YourDatabase**.firebaseio.com",
    projectId: "YourProjectId",
    storageBucket: "Your.appspot.com",
    messagingSenderId: "yourId",
    appId: "yourId",
    measurementId: "yourId"
  };
firebase.initializeApp(config);
var database = firebase.database();

var msgLog = [];

//ウェブページを起動したときの時間を記録
var date = new Date();
var launchTime = date.getTime();
var url = "";


//contents_script側にメッセージ送信
function sendToContent(msg){
  chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, msg.comment);
    url = tabs[0].url;
    //alert(msg.comment);
  });
}


//databaseに新しいメッセージが来ると自動で更新
database.ref().child("comments").on("child_added", function (snapshot){
  var msg = snapshot.val();//msgオブジェクト(comment, timeStampが入ってる)
  //自分が起動してからのコメントのみを取得・表示する


  chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
    url = tabs[0].url;
    //自分がブラウザ起動した後からのチャットのみ表示
    if(msg.timeStamp >= launchTime){ 
    
      if(url == msg.path){
        sendToContent(msg);
      }   
    }
  });
});
