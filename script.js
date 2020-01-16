function palindrome(str) {
  let regex = /[^a-zA-Z0-9]/g;
  let arr = str.replace(regex, "").toLowerCase().split("");
  if (arr.join("") == arr.reverse().join("")){
    return true;
  }else{
    return false;
  }
}

palindrome("eye");