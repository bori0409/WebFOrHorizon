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

setInterval(myFunc, 2000)
setInterval(drawChart, 2000)
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function myFunc() {
  axios.get("http://motioninmotions.azurewebsites.net/api/motion")
    .then(function (res) {
      var myresults: something[];
      myresults = res.data;

      var p = document.createElement("p");
      p.innerText = myresults[0].pitch.toString();

      document.getElementById("content").appendChild(p);
    })
    .catch(function (err) {
      console.log(err);
    });
}
// this also works



function drawChart() {
  var loadchart = axios.get("http://motioninmotions.azurewebsites.net/api/motion/1")
    .then(function (response: AxiosResponse) {
      //var responseData: motion[];
      var  responseData = response.data;

      console.log(response); // this works, until here
      console.log(responseData);// this works, until here
      var datas = new google.visualization.DataTable();  
      datas.addColumn('number', 'Line');

      responseData.forEach(function (json) {
        datas.addRow([
          json[0], json[1]]);
      });
      datas.addRow





      var options = {
        title: "test"
      };
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(datas, options);
    });

}
function greeter(person: Person): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}


let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");



