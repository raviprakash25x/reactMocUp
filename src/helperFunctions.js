/*all reusable functions to be defined here*/

/*
	returns json data for a given URL
	(proper handing of returned data required as 
	 it returns a promise json object)
*/
export function getJSONdata(dUrl) {
   return fetch(dUrl)
   .then((response) => response.json())
   .then((responseJson) => {
	 //console.log(responseJson);
     return responseJson;
   })
   .catch((error) => {
     console.error(error);
   });
}