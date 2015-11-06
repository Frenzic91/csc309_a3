* Had problems including external CSS and Javascript (including the jquery library) so I copied everything into the HTML file... sorry for the mess
(the files are still included seperately if needed)
* I used str.includes() method to parse the client URL request which apparently isn't supported on IE or Opera

- "node server.js" to start the server 


HTTP Requests:

* GET Method used for all requests
* Host is http://127.0.0.1:3000
* URI is /?rd=requestType&param=requestParameter
	- requestType possible values:
		- getTweets
		- getUsers
		- getLinks
		- getTweetInfo (requestParameter is a tweet id)
		- getProfileInfo (requestParameter is a screen name)
		- getTweetsByYear (requestParameter is a year)