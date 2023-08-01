function sol() {
    var SG = document.getElementById("SG").value; 
    var DP =
  document.getElementById("DP").value;      
  var first_line = (DP - 1) * SG ;
  var second_line = (SG-1)* DP;
  var calculation = (first_line/second_line)*100;
  var elemento = document.getElementById("resultado"); document.getElementById("sol").innerHTML = "%Sol " + calculation.toFixed(1);
  }
