<?php
  $azure_mysql_connstr = $_SERVER["MYSQLCONNSTR_localdb"];

    $azure_mysql_connstr_match = preg_match(
      "/".
        "Database=(?<database>.+);".
        "Data Source=(?<datasource>.+);".
        "User Id=(?<userid>.+);".
        "Password=(?<password>.+)".
      "/u",
      $azure_mysql_connstr,
      $_);        

    $link = mysql_connect($_["datasource"], $_["userid"], $_["password"], $_["database"]);
    if ($link) {
       $db_selected = mysql_select_db($_["database"], $link);

    $sql = "INSERT INTO `coordinate`(`id`, `datetime`, `y_coordinate`) VALUES ('1','2021-01-24 17:00:00','100')";
    $result_flag = mysql_query($sql);
//あああ
    if ($result_flag) {
        echo "成功しました";
    } else {
        die('INSERTクエリーが失敗しました。'.mysql_error());
    }           

    mysql_close($link);
    }
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>サンプル</title>
  <link rel="stylesheet" href="style.css">
  <script src="sample.js"></script>
</head>
<body>
    <h2>マウスポインタを動かしてください!!!</h2>
    <div id="mouse">
      
    </div>
</body>
</html> 