<?php
!empty($_GET['id']) ? $id = $_GET['id'] : $id = null;

if(!is_null($id)){

    try{

        $dao = new DAO();
        $dao->delete($id);
        $dao->close();

        header("Location: index.php?page=admin");
    }
    catch (Exception $e) {
        echo $e->getMessage();
    }

}
else{
    include_once "view/admin.php";
}
