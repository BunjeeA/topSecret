let count = 0;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function submit() {
    let answer1 = "E";
    let answer2 = "0";
    let answer3 = "W";
    let answer4 = "W";
    let answer5 = "T";
    let answer6 = "W";
    let answer7 = "B";
    let answer8 = "4";
    let answer9 = "V";
    let answer10 = "2";
    let answer11 = "J";
    let answer12 = "9";
    let answer13 = "J";
    let answer14 = "8";
    let answer15 = "3";
    let answer16 = "K";

    let field1 = document.getElementById('input1');
    let field2 = document.getElementById('input2');
    let field3 = document.getElementById('input3');
    let field4 = document.getElementById('input4');
    let field5 = document.getElementById('input5');
    let field6 = document.getElementById('input6');
    let field7 = document.getElementById('input7');
    let field8 = document.getElementById('input8');
    let field9 = document.getElementById('input9');
    let field10 = document.getElementById('input10');
    let field11 = document.getElementById('input11');
    let field12 = document.getElementById('input12');
    let field13 = document.getElementById('input13');
    let field14 = document.getElementById('input14');
    let field15 = document.getElementById('input15');
    let field16 = document.getElementById('input16');

    if (field1.value != answer1) {
        field1.style.borderColor = "red";
        field1.value = "";
    }
    else {
        field1.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field2.value != answer2) {
        field2.style.borderColor = "red";
        field2.value = "";
    }
    else {
        field2.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field3.value != answer3) {
        field3.style.borderColor = "red";
        field3.value = "";
    }
    else {
        field3.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field4.value != answer4) {
        field4.style.borderColor = "red";
        field4.value = "";
    }
    else {
        field4.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field5.value != answer5) {
        field5.style.borderColor = "red";
        field5.value = "";
    }
    else {
        field5.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field6.value != answer6) {
        field6.style.borderColor = "red";
        field6.value = "";
    }
    else {
        field6.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field7.value != answer7) {
        field7.style.borderColor = "red";
        field7.value = "";
    }
    else {
        field7.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field8.value != answer8) {
        field8.style.borderColor = "red";
        field8.value = "";
    }
    else {
        field8.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field9.value != answer9) {
        field9.style.borderColor = "red";
        field9.value = "";
    }
    else {
        field9.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field10.value != answer10) {
        field10.style.borderColor = "red";
        field10.value = "";
    }
    else {
        field10.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field11.value != answer11) {
        field11.style.borderColor = "red";
        field11.value = "";
    }
    else {
        field11.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field12.value != answer12) {
        field12.style.borderColor = "red";
        field12.value = "";
    }
    else {
        field12.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field13.value != answer13) {
        field13.style.borderColor = "red";
        field13.value = "";
    }
    else {
        field13.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field14.value != answer14) {
        field14.style.borderColor = "red";
        field14.value = "";
    }
    else {
        field14.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field15.value != answer15) {
        field15.style.borderColor = "red";
        field15.value = "";
    }
    else {
        field15.style.borderColor = "#ACCDD8";
        count++;
    }

    if (field16.value != answer16) {
        field16.style.borderColor = "red";
        field16.value = "";
    }
    else {
        field16.style.borderColor = "#ACCDD8";
        count++;
    }
    if(count == 16){
        window.alert('You did it! Go get your nintendo switch ;)\nYour code is: E0WWTWB4V2J9J83K');
    }
}
