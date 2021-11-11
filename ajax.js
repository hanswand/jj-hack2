// Using Fetch:
// fetch("manifest.json") will send a request to the JSON file.
// .then(function(response)) will give the response to the response object.



// Using async
// We are going to use async so we can use await built in.
// async function showUserInConsole() {
//     // wait for the response to come back
//     const response = await fetch("data/user.json");
//     const user = await response.json();

//     console.log(user);
// }

// showUserInConsole();


// Using Vanila JS-ajax:
// const xhr = XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const user = JSON.parse(xhr.responseText);

//         console.log(user);
//     }
// }

// xhr.open("GET", "data/user.json", true);
// xhr.send();




// Using Jquery-ajax:
// $.ajax({
//     url: "manifest.json",
//     success: function(user) {
//         console.log(user);
//     }
// });