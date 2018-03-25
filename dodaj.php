<?php

	session_start();
	
	require_once "connect.php";
	
	$polonczenie = @new mysqli($host, $db_user, $db_password, $db_name);
	
	if ($polonczenie->connect_errno!=0)
	{
		echo "Error problem z baza";
	}
	else
	{
		$imie = addslashes(trim($_POST['name']));
		$punkty = $_POST['points'];
		
		require_once "cenzura.php";
		
		$wielkosctab = count($cenzura);
		
		for ($i = 0; $i < $wielkosctab; $i++)
		{
			if (strstr($imie, $cenzura[$i]))
			{
				$_SESSION['info'] = "Użyto niecenzuralnego słowa: ".$cenzura[$i].".<br/>Użyj innego sformułowania!";
				$_SESSION['wartoscPunkty'] = $punkty;
				$_SESSION['display'] = "block";
				header('Location: index.php');
				$polonczenie->close();
				exit();
			}
			
		}
		$sql1= "SELECT MIN(punkty) FROM (SELECT punkty FROM ranking ORDER BY punkty DESC LIMIT 10) AS temp";
		
				if ($rezultat1 = $polonczenie->query($sql1))
				{
					$wiersz1 = $rezultat1->fetch_assoc();
					$wynik1 = $wiersz1['MIN(punkty)'];
					$rezultat1->close();
			
					if ($wynik1 >= $punkty)
					{
						$_SESSION['info'] = "Zbyt mało punktów by zapisać się w pierwszej dziesiątce najlepszych :)";
						$_SESSION['wartoscPunkty'] = $punkty;
						$_SESSION['display'] = "block";
						header('Location: index.php');
					}
					else
					{
						$sql2 = "INSERT INTO ranking set imie='$imie', punkty='$punkty'";
				
						if ($polonczenie->query($sql2))
						{
							$sql3 = "SELECT * FROM ranking ORDER BY punkty DESC LIMIT 10";
							if ($rezultat3 = $polonczenie->query($sql3))
							{
								while($wiersz3 = $rezultat3->fetch_assoc())
								{
									$wynik3[] = $wiersz3;
								}
				
								$_SESSION['lista'] = $wynik3;
				
								header('Location: ranking.php');
				
								$rezultat3->close();
							}
							else
							{
								echo "Nastapil problem z baza danych."; 
							}
						}
						else
						{
							echo "Nastapil problem z baza danych."; 
						}
					}
				
				}
				else
				{
					echo "Nastapil problem z baza danych."; 
				}
		
		$polonczenie->close();
	}
?>