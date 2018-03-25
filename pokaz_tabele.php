<?php
	
	session_start();
	
	require_once "connect.php";
	
	$polonczenie = @new mysqli($host, $db_user, $db_password, $db_name);
	
	if ($polonczenie->connect_errno!=0)
	{
		echo "Error";
	}
	else
	{
		$sql2= "SELECT * FROM ranking ORDER BY punkty DESC LIMIT 10";
		if ($rezultat = $polonczenie->query($sql2))
		{
			while($wiersz = $rezultat->fetch_assoc())
			{
				$wynik[] = $wiersz;
			}	
			$_SESSION['lista'] = $wynik;
				
			header('Location: ranking.php');
				
			$rezultat->close();		
		}
		else{
			echo "Nastapil problem z baza danych."; 
		}
		$polonczenie->close();
	}
?>