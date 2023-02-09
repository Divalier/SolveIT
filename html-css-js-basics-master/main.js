
/** Write your code below this comment */

function calculus(num) {
  summ=0;
  for (var i = 0; i < num.length; i++) {
    summ= summ+num[i];
    if (i== (num.length-1)) {
      console.log(summ);
      return summ;
    }
  }
}

function vowel(myname) {
  out="";
  for (var i = 0; i < myname.length; i++) {
    if (myname[i]!=="A" && myname[i]!=="a" && myname[i]!=="E" && myname[i]!=="e" && myname[i]!=="I" && myname[i]!=="i" && myname[i]!=="O" && myname[i]!=="o" && myname[i]!=="U" && myname[i]!=="u") {
      out= out+myname[i];
    if (i== (myname.length-1)) {
      console.log(out);
      return out;
    }}
  }
}

function deduce() {
  let iput = document.forms["myForm"]["fname"].value;
  let stIput = iput.toString();
  total = 0;
  for (var i = 0; i < stIput.length; i++) {
    total = total + parseInt(stIput[i]);
    if ( i == (stIput.length-1)) {
      document.forms["myForm"]["fname"].value=total;
    }
  }
}
