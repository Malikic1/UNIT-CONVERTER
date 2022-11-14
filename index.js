function lengthConverter(inpVal){
  var CM= inpVal*100
  document.getElementById("cm").innerHTML=CM+" "+"cm"
  document.getElementById("km").innerHTML=(inpVal/1000).toFixed(2)+ " " + "km"
  document.getElementById("mm").innerHTML=inpVal*1000 + " " + "mm"
  document.getElementById("inch").innerHTML=(inpVal*39.37008).toFixed(2)+ " " + "in"
document.getElementById("ft").innerHTML=(inpVal*3.28).toFixed(2)+ " " + "ft"
document.getElementById("yard").innerHTML=(inpVal*1.093613).toFixed(2)+ " " + "yard"
}