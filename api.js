/*
*
*
* RESTful API
*
*
*/

// constants

var TWEET_YEAR_INDEX = 5;
var TWEET_URL_INFO = 0;

// Load JSON database
var favs = require('./favs.json');

/* Returns all tweets in db */
function getTweets() {
	var tweets = {};
	for (var tweet in favs) {
		tweets[favs[tweet].user.screen_name] = favs[tweet].text;
	}
	return tweets;
}

/* Returns all users in db */
function getUsers() {
	var users = {};
	for (var tweet in favs) {
		
		users[tweet] = {};
		
		users[tweet]["id_str"] = favs[tweet].user.id_str;
		users[tweet]["name"] = favs[tweet].user.name;
		users[tweet]["screen_name"] = favs[tweet].user.screen_name;
	}
	return users;
}

/* Returns all tweeted URLs */
function getLinks() {
	var links = [];
	for (var tweet in favs) {
		links.push(favs[tweet].entities.urls[TWEET_URL_INFO].expanded_url);
	}
	return links;
}

/* Returns tweet information given a tweet id */
function getTweetInfo(tweetId) {
	var tweetInfo = {};
	for (var tweet in favs) {
		if (tweetId == favs[tweet].id_str) {
			
			tweetInfo["id_str"] = favs[tweet].id_str;
			tweetInfo["created_at"] = favs[tweet].created_at;
			tweetInfo["user"] = favs[tweet].user.screen_name;
			tweetInfo["text"] = favs[tweet].text;
		}
	}
	return tweetInfo;
}

/* Returns profile information given a screen name */
function getProfileInfo(screenName) {
	var profileInfo = {};
	for (var tweet in favs) {
		if (favs[tweet].user.screen_name == screenName) {
			
			profileInfo["name"] = favs[tweet].user.name;
			profileInfo["location"] = favs[tweet].user.location;
			profileInfo["description"] = favs[tweet].user.description;
			profileInfo["followers_count"] = favs[tweet].user.followers_count;
			profileInfo["friends_count"] = favs[tweet].user.friends_count;
			profileInfo["created_at"] = favs[tweet].user.created_at;
			profileInfo["time_zone"] = favs[tweet].user.time_zone;
			
			break;
		}
	}
	return profileInfo;
}

/* Returns all tweets made in a specified year */
function getTweetsByYear(year) {
	var tweets = {};
	for (var tweet in favs) {

		if (favs[tweet].created_at.split(" ")[TWEET_YEAR_INDEX] == year) {
			
			tweets[tweet] = {};
			
			tweets[tweet]["user"] = favs[tweet].user.screen_name;
			tweets[tweet]["text"] = favs[tweet].text;
		}
	}
	return tweets;
}

// exports
module.exports.getTweets = getTweets;
module.exports.getUsers = getUsers;
module.exports.getLinks = getLinks;
module.exports.getTweetInfo = getTweetInfo;
module.exports.getProfileInfo = getProfileInfo;
module.exports.getTweetsByYear = getTweetsByYear;