function cal(){
    let total = document.getElementById("total").value;
    let obtained = document.getElementById("obtained").value;
    let sum = obtained / total  * 100;

    let grade = ""

    if(sum >= 80){
        grade = 'A+'
    }else if(sum >=70){
        grade = 'A'
    }else if(sum >= 60){
        grade = 'B'
    }else if(sum >= 50){
        grade = 'C'
    }else if(sum >= 40){
        grade = 'D'
    }else if(sum >= 0){
        grade = 'Fail'
    }
    document.getElementById("ans").innerHTML = "your grade is " + grade

}