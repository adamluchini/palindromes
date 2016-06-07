function isPalindrome(word) {
     var i;

     for (i = 0; i < word.length; i++) {
         if (word.charAt(i) != word.charAt(word.length-1-i)) {
             return ("no");
         }
     }
     return ("it is. great.");
 }


$(document).ready(function() {
$("#sentence").submit(function(event) {

  $("#answer").text(isPalindrome($("#response").val()));
  event.preventDefault();
  });
});
