let sum = "";
function display() {
  document.getElementById("text").value = sum;
}
function calculate(s) {
  sum = sum + s;
  display();
}
function myFunction() {
  sum = document.getElementById("text").value;
}
function answer() {
  try {
    sum = math.evaluate(sum);
    sum = sum.toString();
    display();
  } catch {
    alert("Invalid Expression.Please enter expression carefully");
  }
}
function extract() {
  if (sum.length == 0) {
    alert("Please enter something before deleting");
  } else {
    sum = sum.substr(0, sum.length - 1);
    display();
  }
}
function remove_All() {
  sum = "";
  display();
}
