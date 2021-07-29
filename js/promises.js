"use strict";

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

alert("Hello Jack!")

fetch('https://api.github.com/users/jjmac7777777/events/public', {headers:
        {'Authorization':'token' + gitFetchAPIKEY}})
    .then(function(response) {
        console.log(response);
        return response.json();


    }).then(function(jsonData){
console.log(jsonData);
});



            // $ curl -I https://api.github.com/users/tater/events
            //     > HTTP/2 200
            // > X-Poll-Interval: 60
            // > ETag: "a18c3bded88eb5dbb5c849a489412bf3"