//document.body.onload = addElement;

//var fs = require("fs");
//const inputfile = fs.readFileSync('C:/Users/azama/Documents/Plotnick/example.txt', 'utf8');
//console.log(inputfile.split('\n')[5]);

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;

  for (const file of fileList) {
    // Not supported in Safari for iOS.
    const name = file.name ? file.name : 'NOT SUPPORTED';
    // Not supported in Firefox for Android or Opera for Android.
    const type = file.type ? file.type : 'NOT SUPPORTED';
    // Unknown cross-browser support.
    const size = file.size ? file.size : 'NOT SUPPORTED';
    console.log({file, name, type, size});

    document.getElementById("val").innerHTML =  {file, name, type, size};
  }
  
});



/*
var globalMAX = 0;
var globalMIN = 0;
var data = [];


class datapoint{
    constructor(id,value){
        this.id = id;
        this.value = parseInt(value);
    }

    static createpoint(){
        var slider = document.createElement('input');
        slider.id = "point";
        slider.type = 'range';
        slider.min = globalMIN;
        slider.max = globalMAX;
        slider.value = this.value;
        slider.step = 0.1;
        document.body.appendChild(slider);
        i++
    }
}
*/
function addElement() {
    //const weekqty = inputfile.split('\n').length;
    //document.getElementById("val").innerHTML = inputfile.split('\n')[0];
    /* var i = 0;
    while (i < weekqty){
        var value = parseInt(inputfile.split('\n')[i]);
        //document.getElementById("val").innerHTML = value;
        let point = new datapoint(i,value);
        if (value < globalMIN) {globalMIN = value;  document.getElementById("minval").innerHTML = value;}
        if (value > globalMAX) {globalMAX = value;  document.getElementById("maxval").innerHTML = value;}
        data.push(point);
        i++;
    }

    for (let point of data) {
        point.createpoint();
    }*/
}