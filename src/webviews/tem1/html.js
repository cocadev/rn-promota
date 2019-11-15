export const html1 = `
<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Modak|Parisienne&display=swap" rel="stylesheet">

<style>

.margin {margin-bottom: 12px;}
.bg { 
  background-color: #474e5d; /* Dark Blue */
  color: #ffffff;
}
.container-fluid {
  padding-top: 30px;
  padding-bottom: 10px;
}
.left {
    float: left;
    margin-left: 12px
}
.right {
    float: right;
    margin-right: 12px
  }
  #p0 {
    font-size: 120px;
    color: #03a9f4;
    line-height: 100px;
    font-family: 'Modak', cursive;
  }
  #p2, #p3, #p4, #p5, #p6, #p1 {
    color: #76ff03;
    line-height:40px;
    font-size: 40px;
    font-family: 'Parisienne', cursive;
  }

</style>

</head>

<body>
<div class="container-fluid bg text-center">
<div class="row">
<div class="col-xs-4">
  <img 
    id="myImg0" 
    src="https://paddyk.files.wordpress.com/2012/08/hipster-beard.jpg" 
    class="img-circle margin" 
    style="display:inline" 
    alt="Need Online Image" 
    width="250" 
    height="250"
  >
  <img 
    id="myImg1" 
    src="https://cdn4.vectorstock.com/i/1000x1000/83/13/garden-swing-cartoon-vector-618313.jpg" 
    class="img-circle margin" 
    style="display:inline" 
    alt="Need Online Image" 
    width="90" 
    height="90"
  >
</div>
<div class="col-xs-8">
<p id="p0">Varun. K.</p>
<p id="p1">Best handsome guy</p>
<p id="p2">Awesome Actor</p>
<p id="p3">United Kingdom</p>
<p id="p4">AliBa Company</p>
<p id="p5">Bitcoin CEO</p>
<p id="p6">DesertSoftware Instructor</p>

</div>
</div>

<script>

window.addEventListener("message", function(event) {

    document.getElementById("p0").style.color = JSON.parse(event.data).colors[0];
    document.getElementById("p1").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p2").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p3").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p4").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p5").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p6").style.color = JSON.parse(event.data).colors[1];

    document.getElementById("p0").innerHTML = JSON.parse(event.data).texts[0];
    document.getElementById("p1").innerHTML = JSON.parse(event.data).texts[1];
    document.getElementById("p2").innerHTML = JSON.parse(event.data).texts[2];
    document.getElementById("p3").innerHTML = JSON.parse(event.data).texts[3];
    document.getElementById("p4").innerHTML = JSON.parse(event.data).texts[4];
    document.getElementById("p5").innerHTML = JSON.parse(event.data).texts[5];
    document.getElementById("p6").innerHTML = JSON.parse(event.data).texts[6];

    document.getElementById("myImg0").src = JSON.parse(event.data).images[0]
    document.getElementById("myImg1").src = JSON.parse(event.data).images[1]

    console.log("Received post message"); //Work!!!
}, false);

setTimeout(()=>window.postMessage("WhatsAppMANNN!!!"),5000) //doesn\`t work ((
</script>
</body>

</html>
`