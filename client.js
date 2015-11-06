/*
*
*
* Client-side logic
*
*/

/* Returns data from RESTful API given a specific request */
function queryAPI(requestData, requestParam) {
		$.ajax({
			data: {"rd": requestData, "param": requestParam}
		}).done(function (response) {
			$("#json_display").html(response);
			console.log(response);
		});
}