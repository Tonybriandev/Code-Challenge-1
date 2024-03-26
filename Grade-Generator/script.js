let button = document.querySelector(".button")
let result = document.querySelector(".result");
let grade = document.querySelector(".grade")
function check() {
    // select the values maths,english,science,kiswahili and SSCR.
    let Maths = document.querySelector("#Mathematics").value;
    let English = document.querySelector("#English").value;
    let Science = document.querySelector("#Science").value;
    let Kiswahili = document.querySelector("#Kiswahili").value;
    let SSCR = document.querySelector("#SSCR").value;
    let totalMarks = document.querySelector('.total_marks');
    let percentage = document.querySelector('.Percentage')
    let sum = parseFloat(Maths) + parseFloat(English) + parseFloat(Science) + parseFloat(Kiswahili) + parseFloat(SSCR);
    let average = (sum / 500) * 100;

    // input Range
    if (Mathematics === '' || English === '' || Science === '' || Kiswahili === '' || SSCR === '' ||
        Mathematics < 0 || Mathematics > 100 || English < 0 || English > 100 || Science < 0 || Science > 100 ||
        Kiswahili < 0 || Kiswahili > 100 || SSCR < 0 || SSCR > 100) {
        // Display
        grade.innerHTML = `<p>Please Enter A Valid Value Between 0 and 100</p>`
        totalMarks.innerHTML = ``
        percentage.innerHTML = ``

    } 
    // Conditionals
    else {
        if (average > 79 && average <= 100) {
            grade.innerHTML = `Grade: A`
        } else if (average > 60 && average <= 79) {
            grade.innerHTML = `Grade: B`
        } else if (average > 49 && average <= 60) {
            grade.innerHTML = `Grade: C`
        } else if (average > 40 && average <= 49) {
            grade.innerHTML = `Grade: D`
        } else {
            grade.innerHTML = `Grade: E`
        }
        totalMarks.innerHTML = `Total Marks : ${sum}/500`
        percentage.innerHTML = `Percentage : ${Math.round(average)}%`
    }


}
button.addEventListener("click", check)