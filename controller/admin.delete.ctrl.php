<?php
use Model\DAO;

!empty($_GET['id']) ? $id = $_GET['id'] : $id = null;
!empty($_GET['name']) ? $name = $_GET['name'] : $name = null;

if(!is_null($id)){

    try {

        $dao = new DAO();
        $dao->delete($id);
        $dao->close();
        $name = str_replace(" ", "_", $name);
        if (file_exists("musique/mp3/".$name.".mp3")){
            unlink("musique/mp3/".$name.".mp3");
        }
        if (file_exists("view/img/".$name.".jpg")){
            unlink("view/img/".$name.".jpg");
        }
        header("Location: index.php?page=admin");
    }
    catch (Exception $e) {
        echo $e->getMessage();
    }

}
else{
    include_once "view/admin.php";
}
