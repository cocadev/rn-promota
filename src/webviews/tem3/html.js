export const html3 = `
<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Courgette|Modak|Pacifico|Shadows+Into+Light&display=swap" rel="stylesheet">

<style>

.margin {margin-bottom: 12px;}
.bg { 
  background-color: #e0e0e0; /* Green */
  color: #e0e0e0;
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
    color: #000;
    font-size: 60px;
    margin-top: 10px
    font-family: 'Pacifico', cursive;
  }
  #p1 {
    color: #4a148c;
    font-size: 30px;
    font-family: 'Pacifico', cursive;
  }
  #p2 {
    color: #03a9f4;
    font-size: 30px;
    font-family: 'Pacifico', cursive;
    margin-top: 20px
  }

  #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10, #p11, #p12, #p13, #p14 {
    color: #607d8b;
    font-size: 18px;
    font-family: 'Shadows Into Light', cursive;
  }

</style>

</head>

<body>
<div class="container-fluid bg text-center">    
  <p id="p0">Desert Software Company</p>
  <p id="p1">Australia</p>

<br>
  <div class="row">
    <div class="col-sm-2"> 
      <img id="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimMWH4OLIN9Db1qnrswxuG8qOkTy5W8D6xlcck7p7NnNvKPfx" alt="Image" width="130" height="130">
      <p id="p3">Zepers. Nick.</p>
      <p id="p4">Graphic Designer</p>
    </div>
    <div class="col-sm-2">
      <img id="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_rR45lEd8Ywq4WHdONVwnUAWIwskq2D3kstmtgkEat5Q78us" alt="Image" width="130" height="130">
      <p id="p5">John. Smith.</p>
      <p id="p6">CEO</p>
    </div>
    <div class="col-sm-2"> 
      <img id="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tJeskN7VcaMg7oa4C1bGZIAePRIkTdjCOoB10TD59EONoZxa" alt="Image" width="130" height="130">
      <p id="p7">Rouge. Night.</p>
      <p id="p8">CTO</p>
    </div>
    <div class="col-sm-2"> 
      <img id="img4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpfDtIzx2cJwAUL9vU9U3rkKsZVnRulsLPKPhoZI8uHzfXtks" alt="Image" width="130" height="130">
      <p id="p9">Poy. Jane.</p>
      <p id="p10">Bitcoin Expert</p>
    </div>
    <div class="col-sm-2"> 
      <img id="img5" src="https://paddyk.files.wordpress.com/2012/08/hipster-beard.jpg" alt="Image" width="130" height="130">
      <p id="p11">Gamie. Zend.</p>
      <p id="p12">Software Manager</p>
    </div>
    <div class="col-sm-2"> 
      <img id="img6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2H44QprLZrwQnC_SWrJ25uSmrjU3JMB8PTI8LxmmzM0zimK6f" alt="Image" width="130" height="130">
      <p id="p13">Ruy. Mark.</p>
      <p id="p14">FullStack developer</p>
    </div>

    <p id="p2">CopyRight@2019</p>

  </div>
</div>

<script>

window.addEventListener("message", function(event) {

    document.getElementById("p0").style.color = JSON.parse(event.data).colors[0];
    document.getElementById("p1").style.color = JSON.parse(event.data).colors[1];
    document.getElementById("p2").style.color = JSON.parse(event.data).colors[2];
    document.getElementById("p3").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p4").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p5").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p6").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p7").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p8").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p9").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p10").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p11").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p12").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p13").style.color = JSON.parse(event.data).colors[3];
    document.getElementById("p14").style.color = JSON.parse(event.data).colors[3];

    document.getElementById("p0").innerHTML = JSON.parse(event.data).texts[0];
    document.getElementById("p1").innerHTML = JSON.parse(event.data).texts[1];
    document.getElementById("p2").innerHTML = JSON.parse(event.data).texts[2];
    document.getElementById("p3").innerHTML = JSON.parse(event.data).texts[3];
    document.getElementById("p4").innerHTML = JSON.parse(event.data).texts[4];
    document.getElementById("p5").innerHTML = JSON.parse(event.data).texts[5];
    document.getElementById("p6").innerHTML = JSON.parse(event.data).texts[6];
    document.getElementById("p7").innerHTML = JSON.parse(event.data).texts[7];
    document.getElementById("p8").innerHTML = JSON.parse(event.data).texts[8];
    document.getElementById("p9").innerHTML = JSON.parse(event.data).texts[9];
    document.getElementById("p10").innerHTML = JSON.parse(event.data).texts[10];
    document.getElementById("p11").innerHTML = JSON.parse(event.data).texts[11];
    document.getElementById("p12").innerHTML = JSON.parse(event.data).texts[12];
    document.getElementById("p13").innerHTML = JSON.parse(event.data).texts[13];
    document.getElementById("p14").innerHTML = JSON.parse(event.data).texts[14];

    document.getElementById("img1").src = JSON.parse(event.data).images[0]
    document.getElementById("img2").src = JSON.parse(event.data).images[1]
    document.getElementById("img3").src = JSON.parse(event.data).images[2]
    document.getElementById("img4").src = JSON.parse(event.data).images[3]
    document.getElementById("img5").src = JSON.parse(event.data).images[4]
    document.getElementById("img6").src = JSON.parse(event.data).images[5]

    console.log("Received post message"); //Work!!!

}, false);

setTimeout(()=>window.postMessage("WhatsAppMANNN!!!"),5000) //doesn\`t work ((
</script>
</body>

</html>
`