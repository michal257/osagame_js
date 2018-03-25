var liczby=new Array();
var i =0;
var kredyt = $('#kredyt').html();
var stawka = 5;
var red = 255;
var green = 0;
var blue = 0;
 
$('#stawka').text("STAWKA: " + stawka);
$('#kredyt').html("KREDYT: " + kredyt);
$('#header').text("OSAGAME");

$('#p_anuluj').click(function()
{
	$('#register, #info').hide(1250);
	
});

function zapis()
{
	$('#register').show(1250);
	$('#form_pkt').val(kredyt);
}

function owoc(f)
{
	if (liczby[f] == 1)
	{
		kredyt = kredyt + stawka;
	}
	else if ( liczby[f] == 2 || liczby[f] == 4)
	{
		kredyt = kredyt + 8*stawka;
	}
	else if (liczby[f] == 3)
	{
		kredyt = kredyt + 12*stawka;
	}
	else if (liczby[f] == 5)
	{
		kredyt = kredyt + 16*stawka;
	}
	else if (liczby[f] == 6)
	{
		kredyt = kredyt + 140*stawka;
	}
			
}

function efekt(a, b, c)
{
	$('#kredyt').text("KREDYT: " + kredyt);
	$('#pole' + a).effect('highlight', 1500);
	$('#pole' + b).effect('highlight', 1500);
	$('#pole' +c).effect('highlight', 1500);
}

function podlicz()
{
	$('#stawka').text("STAWKA: " + stawka);
	
	if (kredyt <= 0)
	{
		$('#header').text("GAME OVER");
		$('#container').effect('shake', 1500);
	}
	else if (stawka > kredyt)
	{
		stawka = 50;
		$('#stawka').text("STAWKA: " + stawka);
		$('#p_start').html("<a id=\"submits\" onclick=\"czysc()\">START</a>");
		if (stawka > kredyt)
		{
			stawka = 30;
			$('#stawka').text("STAWKA: " + stawka);
			if (stawka > kredyt)
			{
				stawka = 20;
				$('#stawka').text("STAWKA: " + stawka);
				if (stawka > kredyt)
				{
					stawka = 10;
					$('#stawka').text("STAWKA: " + stawka);
					if (stawka > kredyt)
					{
						stawka = 5;
						$('#stawka').text("STAWKA: " + stawka);
					}
				}
			}
		}
		
	}
	else
	{
	$('#p_start').html("<a id=\"submits\" onclick=\"czysc()\">START</a>");
	}
}
 
function losuj()
{
	liczby[i] = Math.floor(Math.random() * 6 +1);
	$('#pole'+i).html("<img src = \"pliki/"+liczby[i]+".png\"/>");
	i++;
	if (i<9) setTimeout("losuj()", 200);
	else 
	{	
		i=0;
		if  (liczby[0] == liczby[3] && liczby[3] == liczby[6] && liczby[6] == liczby[1] && liczby[1] == liczby[4] && liczby[4] == liczby[7] && liczby[7] == liczby[2] && liczby[2] == liczby[5] && liczby[5] ==liczby[8])
		{
			$('#kredyt').text("KREDYT: " + kradyt);
			for (var z=0; z<9; z++)
			{
				$('#pole'+z).effect('highlight', 1500);
			}
		}
		else if (liczby[0] == liczby[3] && liczby[3] == liczby[6])
		{	
			
			owoc(0);
			efekt(0, 3, 6);
			if (liczby[1] == liczby[4] && liczby[4] == liczby[7])
			{
				owoc(1);
				efekt(1, 4, 7);
				if (liczby[2] == liczby[5] && liczby[5] == liczby[8])
				{
					owoc(2);
					efekt(2, 5, 8);
					if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
					{
						owoc(0);
						efekt(0, 4, 8);
						if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
						{
							owoc(6);
							efekt(6, 4, 2);
						}
					}
					else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
					{
						owoc(6);
						efekt(6, 4, 2);
					}
				}
				else if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
				{
					owoc(0);
					efekt(0, 4, 8);
					if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
					{
						owoc(6);
						efekt(6, 4, 2);
					}
				}
				else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
				{
					owoc(6);
					efekt(6, 4, 2);
				}
			}
			else if (liczby[2] == liczby[5] && liczby[5] == liczby[8])
			{
				owoc(2);
				efekt(2, 5, 8);
				if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
				{
					owoc(0);
					efekt(0, 4, 8);
					if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
					{
						owoc(6);
						efekt(6, 4, 2);
					}
				}
				else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
				{
					owoc(6);
					efekt(6, 4, 2);
				}
			}
			else if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
			{
				owoc(0);
				efekt(0, 4, 8);
			}
			else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
			{
				owoc(6);
				efekt(6, 4, 2);
			}
		}
		//-------------------------------------------------------------
		else if (liczby[1] == liczby[4] && liczby[4] == liczby[7])
		{
			owoc(1);
			efekt(1, 4, 7);
			if (liczby[2] == liczby[5] && liczby[5] == liczby[8])
			{
				owoc(2);
				efekt(2, 5, 8);
				if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
				{
					owoc(0);
					efekt(0, 4, 8);
					if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
					{
						owoc(6);
						efekt(6, 4, 2);
					}
				}
				else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
				{
					owoc(6);
					efekt(6, 4, 2);
				}
			}
			else if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
			{
				owoc(0);
				efekt(0, 4, 8);
			}
			else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
			{
				owoc(6);
				efekt(6, 4, 2);
			}
		}
		//----------------------------------------------------------------
		else if (liczby[2] == liczby[5] && liczby[5] == liczby[8])
		{
			owoc(2);
			efekt(2, 5, 8);
			if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
			{
				owoc(0);
				efekt(0, 4, 8);
				if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
				{
					owoc(6);
					efekt(6, 4, 2);
				}
			}
			else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
			{
				owoc(6);
				efekt(6, 4, 2);
			}
		}
		//---------------------------------------------------------------
		else if (liczby[0] == liczby[4] && liczby[4] == liczby[8])
		{
			owoc(0);
			efekt(0, 4, 8);
			if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
			{
				owoc(6);
				efekt(6, 4, 2);
			}
		}
		//--------------------------------------------------------------
		else if (liczby[6] == liczby[4] && liczby[4] == liczby[2])
		{
			owoc(6);
			efekt(6, 4, 2);
		}
		podlicz();
	}
	
}



function czysc()
{
	kredyt = kredyt - stawka;
	$('#kredyt').text("KREDYT: " + kredyt);
	$('#p_start').html("<a id=\"submits\">START</a>");
	for (var j=0; j<9; j++)
	{
		document.getElementById('pole'+j).innerHTML = "";
	}
	losuj();
}

function stawkaa()
{
	if        (stawka == 5 && kredyt>=stawka+5) stawka = 10;
	else if (stawka == 10 && kredyt>=stawka+10) stawka = 20;
	else if (stawka == 20 && kredyt>=stawka+10) stawka = 30;
	else if (stawka == 30 && kredyt>=stawka+20) stawka = 50;
	else if (stawka == 50 && kredyt>=stawka+50) stawka = 100;
	else stawka = 5;
	$('#stawka').html("STAWKA: " + stawka);
}


function changeColor()
{
	
	$('#header').css("color", "rgba("+red+","+green+","+blue+",1)");
	$('.colorfull').css("color", "rgba("+red+","+green+","+blue+",1)");
	
	if (red==255 && green==0 && blue<255)
	{	
		blue+=5;
		setTimeout("changeColor()",5);
	}
	else if (red>0 && green ==0 && blue==255)
	{	
		red-=5;
		setTimeout("changeColor()",5);
	}
	else if (red ==0 && green<255 && blue == 255)
	{
		green+=5;
		setTimeout("changeColor()",5);
	}
	else if (red == 0 && green == 255 && blue>0)
	{
		blue-=5;
		setTimeout("changeColor()",5);
	}
	else if (red<255 && green == 255 && blue == 0)
	{
		red+=5;
		setTimeout("changeColor()",5);
	}
	else if (red == 255 && green > 0 && blue ==0)
	{
		green-=5;
		setTimeout("changeColor()",5);
	}
}



		
	  

		
				
		 
	 
 


