/**
* 
*
* Node.js server 
*
*
*/

var http = require('http');
var fs = require('fs');

// RESTful API
var api = require('./api.js'); 

// Register an HTTP event listener on server startup
http.createServer(function(request, response) {
	fs.readFile('./index.html', function(err, html) {
		
		if (err) throw err;

		/* on client connect serve html */
		if (request.url === '/') {
			response.write(html);
		}
		
		/* extract additional parameters from request when relevant */
		if (request.url.includes('&')) {
			var reqArray = request.url.split('&');
			
			var requestType = reqArray[0].substr(5);
			var param = reqArray[1].substr(6);
			
			// debug purposes
			console.log(requestType);
			console.log(param);
		}
		
		/* determine client request type */
		if (requestType === 'getTweets') {
			var tweets = api.getTweets();
			response.write(JSON.stringify(tweets, null, 1));
		}
		
		if (requestType === 'getUsers') {
			var users = api.getUsers();
			response.write(JSON.stringify(users, null, 1));
		}
		
		if (requestType === 'getLinks') {
			var links = api.getLinks();
			response.write(JSON.stringify(links, null, 1));
		}
		
		if (requestType === 'getTweetInfo') {
			var tweetInfo = api.getTweetInfo(param);
			response.write(JSON.stringify(tweetInfo, null, 1));
		}
		
		if (requestType === 'getProfileInfo') {
			var profileInfo = api.getProfileInfo(param);
			response.write(JSON.stringify(profileInfo, null, 1));
		}
		
		if (requestType === 'getTweetsByYear') {
			var tweets = api.getTweetsByYear(param);
			response.write(JSON.stringify(tweets, null, 1));
		}
		
		// requested data has been transmitted to client
		response.end();
	});
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');