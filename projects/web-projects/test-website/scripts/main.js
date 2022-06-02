let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moshe-goldring.png') {
      myImage.setAttribute('src','images/wolf-website.png');
    } else {
      myImage.setAttribute('src','images/moshe-goldring.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Moshe Goldring\'s website, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Moshe Goldring\'s website, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
