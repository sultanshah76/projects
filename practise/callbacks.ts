function callback(data:string){
    console.log(data);}

function fetchdata(callback:(data:string)=>void){
 let data:string =("data");
 setTimeout(() => {callback(data)}, 1000);
}
    console.log("before");
    fetchdata(callback);
    console.log("after");
    
