// We are going to have a merge button on our extension.
// When we click the merge button, it will listen to the click, and send a request to background.js.
    // Then, we will grab every elements from the tabs array, and push all the tabs into our new object of tabs.
    // When we click on the newTab, it will pop up a list of all the tabs that are inside this newTab.


// Use document.querySelector('tab names') to grab the tabs and change the titles to just the domains name.
// receives the request
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log (message.txt)
    let contentsParent = contents.parentNode;
    contents.parentNode.removeChild(contents);
    let image = document.createElement("img");
    image.src = chrome.extension.getURL("meme.jpg");
    contentsParent.prepend(image);
    newChild = document.createElement('p');
    newChild.innerText = "What the fuck is up?!"
    contentsParent.appendChild(newChild);
    let tabFolder = [];

}










let contents = document.getElementById('contents'); 
//csx: 
// let contents = document.getElementById('contents');
let contentsParent = contents.parentNode;

contents.parentNode.removeChild(contents);
let image = document.createElement("img");
image.src = chrome.extension.getURL("meme.jpg");
contentsParent.prepend(image);
newChild = document.createElement('p');
newChild.innerText = "What the fuck is up?!"
contentsParent.appendChild(newChild);

// let contentsParent = contents.parentNode;
// contentsParent.removeChild(contents);
// let image = document.createElement("img");
// image.src = chrome.extension.getURL("meme.jpg");
// contentsParent.prepend(image);

// need reference to style.css