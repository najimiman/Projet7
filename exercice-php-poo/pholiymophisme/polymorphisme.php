<?php
interface Mobile{
    public function Myhome();
}
class Iphone implements Mobile{
    public function Myhome()
    {
        echo "hello Iphone";
    }
}
class Opo implements Mobile{
    public function Myhome()
    {
        echo "hello Opo";
    }
}

// $result=new Iphone();
// $result->Myhome();
// // echo'<pre>';print_r($result);echo'</pre>';
// $result2=new Opo();
// $result2->Myhome();
// //echo'<pre>';print_r($result2);echo'</pre>';

function affichage($affiche)
{
	foreach ($affiche as $value) {
		echo $value->Myhome() . '<br>';
	}
}
$affiche = [
	new Opo(),
	new Iphone(),
	
];

affichage($affiche);
?>