import axios from '../../node_modules/axios/dist/axios';

interface Person {
  firstName: string;
  lastName: string;
}
interface something {
  deviceId: number;
  id: number;
  myDataTime: Date;
  pitch: number;
  roll: number;
  yaw: number;
}
interface motion {
  deviceId: number;
  id: number;
  myDataTime: Date;
  pitch: number;
  roll: number;
  yaw: number;

}

//setInterval(myFunc, 2000)
setInterval(drawLine, 500)

var colorOfTheBody: string;

// this also works
function CheckTheWeather(){
  axios.get("http://api.openweathermap.org/data/2.5/weather?id=2614481&APPID=cd4a85e753c0e926b1d9d169a381fa61")
  .then(function (weatherresponse) {
console.log(" did2");
console.log(weatherresponse);
var Cloudsdataprocent;
Cloudsdataprocent = weatherresponse.data.clouds.all;
console.log(Cloudsdataprocent);
if(Cloudsdataprocent< 10){
  colorOfTheBody = "#CECECE"
  var trytochangecolorlookig =  document.getElementById("thebody");
  //  trytochangecolorlookig.innerHTML = trytochangecolorlookig.innerHTML.replace(default,'<body id="thebody" style="background-color:gray;">)
  //trytochangecolorlookig.innerHTML = '<body id="thebody" style="background-color:gray;">'
}
if(Cloudsdataprocent= 100){
  colorOfTheBody = "##000000"
  //var trytochangecolorlookig2 =  document.getElementById("thebody");
  //trytochangecolorlookig2.innerHTML = '<body id="thebody" style="background-color:##000000;"></body>'
}
    })
}

///
function drawLine(){
  axios.get("http://motioninmotions.azurewebsites.net/api/motion/1")
  .then(function (response) {

    console.log("did");
    var responseData: motion[];
     responseData = response.data;
      let deg=responseData[0].pitch;
      let deg2=responseData[1].pitch;
      var nula : number;
      nula = 0;
      var kryg : number;
      kryg = 360;
      var obratno = kryg - deg2;
      console.log(deg);
      console.log(deg2);
      console.log(kryg);
      
      
     if (document.getElementById("line")==null){
       
        
       var newElement = document.createElement('div');
       newElement.innerHTML = '<div id="line" style="background-color:white;width:800px;height:5px;transform:rotate(0 deg);"></div>'
       var elementIlookFor =  document.getElementById("thebody");
       elementIlookFor.appendChild(newElement)
       var neshto = document.createElement("h1")
       var vremeto;
       //neshto = CheckTheWeather.toString();
       CheckTheWeather()

     // document.getElementsByTagName("body")[0].innerHTML+='<div id="line" style="background-color:red;width:500px;height:10px;transform:rotate('+deg+'deg);"></div>'
      }
      else(document.getElementById("line")!=null){
        var newElement2 = document.getElementById("line");
       newElement2.innerHTML = '<div id="line2" style="background-color:blue;width 1500px;height:8px;transform:rotate('+deg+'deg);">'
       var elementIlookFor =  document.getElementById("thebody");
       elementIlookFor.appendChild(newElement2)
      //document.getElementById("thebody")innerHTML+='<div id="line2" style="background-color:red;width:500px;height:10px;transform:rotate('+deg+'deg);"></div>'
        //document.replaceChild(document.getElementById("line2"),document.getElementById("line"));
        

           }
      

  })



  
}



///



let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");



