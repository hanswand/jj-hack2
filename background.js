let onOrOff = false;
chrome.browserAction.setBadgeText({text: 'OFF'});
// When the listener clicks the extension app. (run buttonClicked function)
chrome.browserAction.onClicked.addListener(buttonClicked);
// chrome.browserAction.setBadgetBackgroundColor({color: '#4688F1'});
function buttonClicked(tab) {
onOrOff = !onOrOff;
// changes the icon to 'ON'
if (onOrOff === true)
    chrome.browserAction.setBadgeText({text: 'ON'});
// changes the icon to "OFF"
else {
    chrome.browserAction.setBadgeText({text: 'OFF'});
}


execute(getting);
// invoke another method/function and pass in all other tabs associated with the 
}

// function getCurrentWindowTabs() {
//     return chrome.tabs.query({currentWindow: true});
//   }
// get all the current tabs
// chrome.tabs.getAllInWindow({
//     windowId: 485,
//     execute(buttonClicked)
// })


function execute (tabs){
    console.log (tabs)
}
// creates a new tab that opens a pop-up w/ list of tabs.
// function 

// // Moving the current tab to the first position when clicked

// chrome.tabs.onActivated.addListner(activeInfo => moveBy(activeInfo));

// async function move(activeInfo) {
//     try {
//         await chrome.tabs.move(activeInfo.tabId, {index: 0});
//         console.log('Sucess.');
//     } catch (error) {
//         if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
//             setTimeout(() => move(activeInfo), 50);
//         }
//     }
// }
    
//     // // Opening a page in a new tab.
    
//     // chrome.runtime.onInstalled.addListener((reason) => {
//         //     if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//             //         chrome.tabs.create({
//                 //             url: 'onboarding.html'
//                 //         });
//                 //     }
//                 // });
//     // // Getting the current tab.
                
//     // async function getCurrentTab() {
//     //     let queryOptions = { active: true, currentWindow: true};
//     //     let [tab] = await chrome.tabs.query(queryOptions);
//     //     return tab;
//     // }