<!doctype html>
<html>
<head>
<title>Currency converter
</title>

<script>
function currency()
{
 var p=document.getElementsByName("euro")[0].value;
 var taka = Number(p) * 82;
  var usd = Number(p) * 1.01;
   var gbp = Number(p) * .05;
	//alert(mul);
	document.getElementsByName("taka")[0].value = taka;
	document.getElementsByName("usd")[0].value = usd;
	document.getElementsByName("gbp")[0].value = gbp;
}
</script>



</head>

<body>

<style> 
            body{
                margin-left:20%;
                padding-left:5%;
                padding-bottom: 5%;
                border:solid black 1px; 
                width:50%;
                padding-top:3%;
                height: 95%;
            }
        </style>
<form>

Euro: <input type='text' name='euro'><br>
Taka: <input type="text" name="taka"><br>
USD: <input type="text" name="usd"><br>
GBP: <input type="text" name="gbp"><br>
      <input type="button" value="Currency_converter" onclick="currency()"><br>
	  
	  <input type="button" value="Click" onclick="document.getElementsByName('String').innerHTML=random_array()">
	  
	  <p class="string"></p>
	  
	<script>
	
	function random_array()
{
var answers = [
  "Hey",
  "How are you",
  "Hello There",
  "Welcome",
  "Alright code is done"
]
var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
alert(randomAnswer);
}
	</script>
