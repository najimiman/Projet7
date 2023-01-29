<?php
abstract class Form{
    public $coleur;
    public $name;
    public static $counte=0;

    public function __construct($C,$N)
    {
        $this->coleur=$C;
        $this->name=$N;
        self::$counte++;
        
    }
    abstract public function phrase();
    public static function total(){
       return self::$counte;
    }
    // public function getcouleur(){
    //     return $this->coleur;
    // }
    // public function getname(){
    //     return $this->name;
    // }

}
interface shape{
    public function methode();
}
class Carré extends Form implements shape{
    public $coleur;
    public $name;
    public $coté;
    public function __construct($C,$N,$coté)
    {
        $this->coleur=$C;
        $this->name=$N;
        $this->coté=$coté;
        self::$counte++;
    }
    public function phrase(){
        echo "la coleur est ".$this->coleur."  le nom est: ".$this->name."  la surface de Carré est  :".$this->coté*$this->coté."<br/>";
    }
    public function methode(){
        echo "methode de carré est S=coté * coté <br/>";
    }
    
}
class Rectangle extends Form implements shape{
    public $coleur;
    public $name;
    public $longeur;
    public $largeur;
    public function __construct($C,$N,$longeur,$largeur)
    {
        $this->coleur=$C;
        $this->name=$N;
        $this->longeur=$longeur;
        $this->largeur=$largeur;
        self::$counte++;
    }
    public function phrase(){
        echo "la coleur est ".$this->coleur."  le nom est: ".$this->name."  la surface de rectangle est  :".$this->longeur*$this->largeur."<br/>";
    }
    public function methode(){
        echo "methode de rectangle est S=longeur * largeur <br/>";
    }
    
}

$show=new Carré('Blue','Carré',2);
$show->phrase();
$show->methode();
$show2=new Rectangle('noir','Rectangle',30,15);
$show2->phrase();
$show2->methode();
echo "total est :".Form::total();
?>