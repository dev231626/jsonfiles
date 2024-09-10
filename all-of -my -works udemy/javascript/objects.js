


// .........objects...........//  


var mCars = {
    "p1" : "350 kmph",
    "gallardo": "320 kmph",
    "veyron" : "409 kmph",
    "agera" : "429 kmph",

}

console.log(mCars);
console.log(typeof(mCars));
// which prints objects...






var mCars = {
    "p1" :"350 kmg",
    "gallerdo" :"40kmph",
    "veyron": "409kmph",
    "agera" : "34kmph"
}

var tesla = {
    name : "tesla",
    manufacturer:{
    name : "tesla Plc",
    location : 'usa'
},
    topSpeed : "567",
    color : "black",
    spoilers : false,
    applyBreaks: function(){
        setTimeout(function(){
            console.log('car stopped');
        }, 5000)
    }
}




var tesla = {
    name : tesla,
    manufacturer:{
        name : "tesla Plc",
        location : 'usa'
    },
     topSpeed: "890kmph",
     color: "black",
     spoilers:false,
     applyBreaks: function(){
        setTimeout (function(){            
            console.log('Car Stopped')
        }, 5000 )
       
     }
     

}

// .........questions........
//  javascript objects 
// applying-breaks ?







var tesla = {
    name : "tesla",
    manufacturer:{
        name :"elon-musk",
        location : "usa"
    },
    topSpeed : 429,
    color: "Black",
    spoilers:false,
    applyBreaks: function(){
        setTimeout(function(){
            console.log('Car Stopped');
        }, 5000)
    } 
}

 var tesla = {
    company:"TESLA_PLC",
    Manufacturer_stock_supporters: {
        name : 'black_rock',
        location: 'Washington_usa'
    },
    Global_reward: "International_stock_and_Manufacturing_champion"
    
 }






console.log(tesla.manufacturer.location );


var neba ={
    name: "neba",
    manufacturer:{
      name : "Plc",
      location: "arada"
    },
    topSpeed : "340kmph",
    
}

console.log(neba.manufacturer.name);




switch (day_in_weeks){
    case 'mon':
        var project ={
            name : 'Git_hub_initialization',
            time : 'from 3:00 - 6:00'
        }
    case 'Tue':
        var project={
            name:'websit_building',
            time: 'from 3:00 - 8:00'

        }    
    case 'Wed':
        var project={
            name:'websit_launching',
            time: 'from 3:00 - 8:00'

        }    
    case 'Thur':
        var project={
            name:'websit_Deployment',
            time: 'from 3:00 - 8:00'

        }    
    case 'Fri':
        var project={
            name:'Marketing',
            time: 'from 3:00 - 8:00'

        }    
    case 'Sat':
        var project={
            name:'Sales_advetising',
            time: 'from 3:00 - 8:00'

        }    
    case 'Sun':
        var project={
            name:'Accounting_Profit',
            time: 'from 3:00 - 8:00'

        }    
}

