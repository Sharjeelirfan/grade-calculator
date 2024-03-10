function cal(){
    let total = document.getElementById("total").value;
    let obtained = document.getElementById("obtained").value;
    let sum = obtained / total  * 100
    document.getElementById("ans").innerHTML = `your percentage is ${sum}%`

}