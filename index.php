<?php

	session_start();

?>

<!DOCTYPE HTML>
<html lang="pl">

	<head>
	
		<meta charset="utf-8"/>
		<title>Osa Game</title>
		
		<link rel="stylesheet" href="jquery-ui.min.css" type="text/css"/>
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
		<script src="jquery-ui.min.js"></script>
		
		
	
	</head>
	
	<body onload="changeColor()">
	
		
		<div id="container">
			 
			 <div id="header"></div>
			 
			 
			 <div class="window" style="margin-left: 3.5%;">
				<div class="window_in" id="pole0"><img src = "pliki/1.png"/></div>
				<div class="window_in" id="pole1"><img src = "pliki/3.png"/></div>
				<div class="window_in" id="pole2"><img src = "pliki/5.png"/></div>
			 </div>
			 
			 <div class="window">
				<div class="window_in" id="pole3"><img src = "pliki/2.png"/></div>
				<div class="window_in" id="pole4"><img src = "pliki/4.png"/></div>
				<div class="window_in" id="pole5"><img src = "pliki/1.png"/></div>
			 </div>
			 
			 <div class="window" style="margin-right: 3.5%;">
			 <div class="window_in" id="pole6"><img src = "pliki/2.png"/></div>
			 <div class="window_in" id="pole7"><img src = "pliki/6.png"/></div>
			 <div class="window_in" id="pole8"><img src = "pliki/5.png"/></div>
			 </div>
			 
			 <div style="clear: both;"></div>
			 
			 
			 <div id="kredyt" class="point"><?php
			 
				$wartoscPoczatkowa = 100;
			 
				if (isset($_SESSION['wartoscPunkty']))
				{
				echo $_SESSION['wartoscPunkty'];
				}
				else
				{
					echo $wartoscPoczatkowa;
				}
				?></div>
			 
			 <div id="stawka" class="point"></div>
			 
			 <div style="clear: both;"></div>
			 
			 <div id="p_reset"><a id="submit" onclick="location.reload()">RESET</a></div>
			 <div id="p_stawka"><a id="submit" onclick="stawkaa()">STAWKA</a></div>
			 <div id="p_wyplata"><a id="submit" onclick="zapis()">WYPŁATA</a></div>
			 <div id="p_start"><a id="submits" onclick="czysc()">START</a></div>
			 
			 
		</div> <!-- conatainer -->
		
		<div id="register" style="display:<?php if (isset($_SESSION['display'])) echo $_SESSION['display']; ?>;">
		
			<h1 class="colorfull"> Zapisz się na liście zwycięzców </h1> <br/><br/><br/>
			<h2> Podaj swoje imie, lub ksywkę: </h2> <br/><br/>
			
			<form action="dodaj.php" method="post" id="form">
			
				<input id="form_name" type="text" name="name"/><br/><br/>
				<input id="form_pkt" type="text" name="points" class="colorfull" max="10" readonly/ value="<?php
			 
				$wartoscPoczatkowa = 100;
			 
				if (isset($_SESSION['wartoscPunkty']))
				{
				echo $_SESSION['wartoscPunkty'];
				}
				else
				{
					echo $wartoscPoczatkowa;
				}
				?>"><br/><br/><br/>
				
				<input type="submit" id="submit" value="ZAPISZ"/>
			</form>	
				<div><a href="pokaz_tabele.php" id="submit" onclick="">TABELA</a></div>
				<div id="p_anuluj"><a id="submit">ANULUJ</a></div>
			
			<br/><br/><br/>
			
			 <p id="info"><?php if (isset($_SESSION['info'])) echo $_SESSION['info']; ?></p>
		
		</div> <!-- register -->
		
		<script type="text/javascript" src="script.js"></script>
	</body>
	<?php
		unset($_SESSION['display']);
		unset($_SESSION['wartoscPunkty']);
		unset($_SESSION['info']);
	?>
</html>