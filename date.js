exports.getdate = function (){

    var today = new Date();
    var currentday =today.getDay();
    
    let options ={
        weekday:"long",
        day : "numeric",
        month : "long"
    } ;
    
    let day = today.toLocaleDateString("en-US",options);

    return day;
    
}