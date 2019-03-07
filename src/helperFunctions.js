

export function getJSONdata(dUrl) {
   return fetch(dUrl)
   .then((response) => response.json())
   .then((responseJson) => {
	 //console.log(responseJson[0].dates[0]);
     return responseJson[0];
	 //jsonInput.push(responseJson[0]);
   })
   .catch((error) => {
     console.error(error);
   });
}