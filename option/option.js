let cmtColor = document.getElementById('colorBtnDiv');
let cmtPos = document.getElementById("cmtPosDiv");

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
const cmtPos = [0,30,60,100,150,200];

function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}


constructOptions(kButtonColors);