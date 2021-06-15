function getBirthday() {
    
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("start").value;

    let dateStr = new Date(dob);
    let dayofWeek = dateStr.getDay();

     //console.log(dayofWeek);
     //console.log(gender);


     getAkanName(dayofWeek, gender);

};

function getAkanName(dayofWeek, gender) {
    let day = dayofWeek;
    let week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    let male = [
         "Kwasi",
         "Kwadwo",
         "Kwabena",
         "Kwaku",
         "Yaw",
         "Kofi",
         "Kwame"];

    let female = [ 
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Afua",
        "Ama"];


    if (gender === "Male") {
        let akanPair = male[day];

        let weekDay = week[day];

        document.getElementById("Akandisplay").innerHTML = " Your Akan name is " + akanPair + " since you were born on a " + weekDay;


    } else if (gender === "Female") {
        let akanPair = female[day];
        document.getElementById("Akandisplay").innerHTML = " Your Akan name is " + akanPair + " since you were born on a " + weekDay;
    } else {

        console.log("The Gender or Date can not be empty")
    }

}