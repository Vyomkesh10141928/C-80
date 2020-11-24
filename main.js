function viewparagraph() {
    var inputs=[];
    for (var i = 1; i <= 10; i++) {
        inputs.push(document.getElementById("1" + i).value);
    }
  
    document.getElementById("p1").innerHTML =  inputs.join(".");
}