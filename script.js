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
    display();
    sum = "";
  } catch {
    alert("Invalid Expression.Please enter expression carefully");
  }
}
