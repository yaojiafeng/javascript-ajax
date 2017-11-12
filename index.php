<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <title>userlist</title>
    <link href="css.css" type="text/css" rel="stylesheet">
    <script src="js.js" type="text/javascript"></script>
</head>

<body>
    <h1>员工查询</h1>
    <label>请输入员工编号</label>
    <input type="text" id="keyword" />
    <button type="button" id="search" onclick="search1()">查询</button>
    <p id="searchResult"></p>

    <h1>员工创建</h1>
    <label>请输入员工姓名</label>
    <input type="text" id="staffName" /><br>
    <label>请输入员工编号</label>
    <input type="text" id="staffNumber" /><br>
    <label>请输入员工性别</label>
    <select id="staffSex">
        <option>男</option>
        <option>女</option>
    </select><br>
    <label>请输入员工职位</label>
    <input type="text" id="staffJob" /><br>
   <button type="button" id="save" onclick="createRequest()">保存</button>
   <p id="createResult"></p>
</body>

</html>