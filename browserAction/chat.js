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

//realtime databaseに書き込む
function writeUserData(comment) {


  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var date = new Date();
    var time = date.getTime();
    var path = tabs[0].url;

    firebase.database().ref("comments/").push({
      comment: comment,
      timeStamp: time,
      path : path
    });
});


}

var msgLog = [];



//ボタンでdatabaseに送信
document.getElementById("sendButton").onclick =function (e){
  var input_message = document.getElementById("input_message").value;
  writeUserData(input_message)
}

