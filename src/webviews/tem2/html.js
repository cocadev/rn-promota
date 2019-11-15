export const html2 = `
<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Caveat&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Permanent+Marker|Righteous&display=swap" rel="stylesheet">

<style>

.margin {margin-bottom: 12px;}
.bg-1 { 
  background-color: #1abc9c; /* Green */
  color: #ffffff;
}
.bg-2 { 
  background-color: #474e5d; /* Dark Blue */
  color: #ffffff;
}
.bg-3 { 
  background-color: #ffffff; /* White */
  color: #555555;
}
.bg-4 { 
  background-color: #2f2f2f; /* Black Gray */
  color: #fff;
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
    font-size: 80px;
    font-family: 'Luckiest Guy', cursive;
    color: #3f51b5
  }
  #p1, #p2 {
    color: #ffc107;
    font-size: 22px;
    font-family: 'Permanent Marker', cursive;
  }

</style>

</head>

<body>
<div class="container-fluid bg-1 text-center">
  <img id="myImg" src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282__340.jpg" class=" img-circle margin" style="display:inline" alt="Need Online Image" width="250" height="250">
  <p id="p0">John Finnegan</p>
  <p id="p1" class="right">I am an adventurer</h3>
  <p id="p2" class="left">React-Native developer</h3>

</div>

<script>

window.addEventListener("message", function(event) {

    document.getElementById("p0").style.color = JSON.parse(event.data).colors[0];
    document.getElementById("p1").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p2").style.color = JSON.parse(event.data).colors[1];

    document.getElementById("p0").innerHTML = JSON.parse(event.data).texts[0];
    document.getElementById("p1").innerHTML = JSON.parse(event.data).texts[1];
    document.getElementById("p2").innerHTML = JSON.parse(event.data).texts[2];
    document.getElementById("myImg").src = JSON.parse(event.data).images[0]

    console.log("Received post message"); //Work!!!



    console.log("Received post message"); //Work!!!
}, false);

setTimeout(()=>window.postMessage("WhatsAppMANNN!!!"),5000) //doesn\`t work ((
</script>
</body>

</html>
`