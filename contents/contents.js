var div = document.createElement("div");

div.className = "marquee";

var msgArray = [];
let cmtLimit = 20;

document.body.appendChild(div);


//チャット表示など
function showChat(msg){
  var p = document.createElement("p");
  p.textContent = msg;

  let cmtPos = getRandomInt(0,document.body.clientHeight-100);
  if (cmtPos > document.body.clientHeight){
    cmtPos = body.clientHeight-100;
  }
  p.style.top = cmtPos + "px";
  msgArray.push(p);
  console.log(msgArray);
  div.appendChild(p)

  if(msgArray.length >= cmtLimit){
    div.removeChild(div.firstChild);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//back groundからメッセージ受け取り
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("get message");
  showChat(message);
});



