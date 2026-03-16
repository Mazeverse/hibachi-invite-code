
function copyCode(){
var code=document.getElementById("code").innerText;
navigator.clipboard.writeText(code);
alert("Code copied!");
}
