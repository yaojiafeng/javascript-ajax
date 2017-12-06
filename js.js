/**
 * 
 */
function search1() {
	// 发送Ajax查询请求并处理
	var request = new XMLHttpRequest();
	request.open("GET", "server.php?number="
			+ document.getElementById("keyword").value);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState === 4) {//下载操作已完成。
			if (request.status === 200) {
				document.getElementById("searchResult").innerHTML = request.responseText;
			} else {
				alert("发现错误：" + request.status);
			}
		}
	}
}
function createRequest() {
	var request = new XMLHttpRequest();
	request.open("POST", "server.php");
	var data = "name=" + document.getElementById("staffName").value
			+ "&number=" + document.getElementById("staffNumber").value
			+ "&sex=" + document.getElementById("staffSex").value 
			+ "&job="+ document.getElementById("staffJob").value;
	request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	request.send(data);
	request.onreadystatechange=function(){
		if(request.readyState===4){
			if(request.status===200){
				document.getElementById("createResult").innerHTML=request.responseText;
			}else{
				alert("发现错误："+request.status);
			}
		}
	}

}
