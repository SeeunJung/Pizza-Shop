//Network Call Code
    /*const promise = fetch(URL);     //Assign to Thread
    console.log('Promise is ', promise)
    promise.then(response=>{
        console.log('Response is', response);
        const promise2 = response.json();    //Deserialization(JSON->Object)
        promise2.then(data=>console.log('Data is ', data))
.catch(e=>console.log('JSON parse Error', e));
    }).catch(err=>{
        console.log('Error is ', err);
    }) => Old Fashion*/

import URL from '../utils/constant.js';
async function makeNetworkCall(){
    try{
        const response = await fetch(URL);  //Block
        const object = await response.json();   //Block
        return object;  //Wrap promise
    }
    catch(err){
        console.log('Some Problem in API Call', err);
        throw err;
    }
}
export default makeNetworkCall;


