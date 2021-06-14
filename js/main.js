function getBirthday() {
    alert("Enter Your date of Birth to get Akan name");
    let dob = prompt("Enter Date of Birth mm/dd/yyyy");
    let gender = prompt("Enter gender 'M' for male, 'F' for female");

    getAkanName(dob, gender)

}

function getAkanName(dob, gender) {
    let dateStr = new Date(dob);
    let dayofWeek = dateStr.getDay();
    let male = [
        " Sunday: Kwasi ",
        "Monday: Kwadwo",
        "Tuesday: Kwabena",
        "Wednesday: Kwaku",
        "Thursday: Yaw",
        "Friday: Kofi",
        "Saturday: Kwame"
    ];
    let female = [
        "Sunday: Akosua",
        "Monday: Adwoa",
        "Tuesday: Abenaa",
        "Wednesday: Akua",
        "Thursday: Yaa",
        "Friday: Afua",
        "Saturday: Ama"
    ];
    if (gender == "M") {
        console.log(male[dayofWeek]);
        document.getElementById("Akandisplay").innerHTML = " Your Day of birth and Akan name is" + male[dayofWeek];



    } else if (gender == "F") {
        // console.log(female[dayofWeek]);
        document.getElementById("Akandisplay").innerHTML = " Your Day of birth and Akan name is" + female[dayofWeek];
    } else {

        console.log("The Gender or Date is wrong")
    }

}