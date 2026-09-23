function submitMarks() {
    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);
    let hindi = parseInt(document.getElementById("hindi").value);
    let english = parseInt(document.getElementById("english").value);

    document.getElementById("mathsTd").innerHTML = maths;
    document.getElementById("scienceTd").innerHTML = science;
    document.getElementById("hindiTd").innerHTML = hindi;
    document.getElementById("englishTd").innerHTML = english;

    let total = maths + science + hindi + english;
    let percent = (total / 400) * 100;

    document.getElementById("totalTd").innerHTML = total;
    document.getElementById("percentTd").innerHTML = percent + "%";

    let declare = document.querySelector(".declare");
    if (percent >= 33) {
        declare.innerHTML = "PASS";
        declare.style.color = "green";
    } else {
        declare.innerHTML = "FAIL";
        declare.style.color = "red";
    }

    document.getElementById("formSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
}

