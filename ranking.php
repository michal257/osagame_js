<?php
	session_start();
?>

<!DOCTYPE HTML>
<html lang="pl">

	<head>
		<meta charset="utf-8"/>
		<title>Osa Game</title>
		
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<link rel="stylesheet" href="tabela.css" type="text/css"/>
	</head>
	
	<body>
		<div id="container">
			 <div id="header">OSAGAME</div>
			 <table>
				<tr>
					<th>MIEJSCE</th><th>GRACZ</th><th>PUNKTY</th>
				</tr>
				<?php
					for ($i = 0; $i < 10; $i++)
					{
						$w = $i + 1;
						echo "<tr><td>".$w."</td><td>".$_SESSION['lista'][$i]['imie']."</td><td>".$_SESSION['lista'][$i]['punkty']."</td></tr>";
					}
				?>
			 </table>
			<div id="p_start"><a href="index.php" id="submits" >POWRÓT DO GRY</a></div>
		</div> <!-- conatainer -->
	</body>
</html>