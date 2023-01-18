<?php
interface Calcule{
    public function Mycalcule();
}
class Somme implements Calcule{
    public $a;
    public $b;
    public function __construct($a,$b)
    {
        $this->a=$a;
        $this->b=$b;
    }
    public function Mycalcule()
    {
        $somme=$this->a+$this->b;
        echo "la somme de a+b= ".$somme;
    }
}
class Div implements Calcule{
    public $a;
    public $b;
    public function __construct($a,$b)
    {
        $this->a=$a;
        $this->b=$b;
    }
    public function Mycalcule()
    {
        $div=$this->a / $this->b;
        echo "la div de a/b= ".$div;
    }
}
$affiche=new Somme(1,2);
$affiche->Mycalcule();
echo'<br/>';
$affiche2=new Div(8,2);
$affiche2->Mycalcule();
?>