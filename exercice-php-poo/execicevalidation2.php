<?php
abstract class Form {
 public $nom;
 public $Color;
 
  public function Presentation(){
    return 'Form ';
 }
 public function __construct($C,$N)
     {
         $this->nom=$C;
         $this->Color=$N; 
     }
 abstract public function methode();
}
 interface IGestionForm   {

     public function Add($data);
     public function Remove($data);
     
}
 class GestionForm implements IGestionForm  {
    static $counter = 0;
     public function Add($data)
    {
        self::$counter++;
    }
     public function Remove($data){
        self::$counter--;
     }
}

class Carré extends Form {
public $coté;
    function __construct($nom,$color,$coté)
    {
        $this->nom = $nom;
        $this->Color = $color;
        $this->coté=$coté;

        return [$this->nom ,$this->Color ,$this->coté] ;
    }
    public function Presentation(){
      return 'is carré';

    }
    public function methode(){
                echo "la coleur est ".$this->Color."  le nom est: ".$this->nom."  la surface de Carré est  :".$this->coté*$this->coté."<br/>";
            }

}
class Rectangle  extends Form {
    public $longeur;
    public $largeur;
    function __construct($nom,$color,$longeur,$largeur)
    {
        $this->nom = $nom;
        $this->Color = $color;
        $this->longeur=$longeur;
        $this->largeur=$largeur;
        return [$this->nom ,$this->Color,$this->longeur,$this->largeur] ;
    }
    public function Presentation(){
        return 'is rectangle';
      }
      public function methode(){
        echo "la coleur est ".$this->Color."  le nom est: ".$this->nom."  la surface de rectangle est  :".$this->longeur*$this->largeur."<br/>";
    }
}

// test program
$carré = new Carré('carré','Blue','4');
echo $carré->Presentation() ."<br>" ;// is carré
echo $carré->methode() ."<br>" ;// methode

$rectangle = new Rectangle('Rectangle','Blue',20,12);
echo $rectangle->Presentation()."<br>";// is rectangle
echo $rectangle->methode() ."<br>" ;// methode

$management = new GestionForm;

$management->Add($carré);
$management->Add($rectangle);
$management->Add($rectangle);

echo GestionForm::$counter ."<br>";// echo :
$management2 = new GestionForm;
$management2->Add($carré);
$management2->Add($rectangle);

echo GestionForm::$counter."<br>";//output : 



?>