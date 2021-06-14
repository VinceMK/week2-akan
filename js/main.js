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
        "Ama"
    ];


    if (gender === "Male") {
        let akanPair = male[day];

        console.log(akanPair);
        document.getElementById("Akandisplay").innerHTML = " Your Day of birth and Akan name is" + male[dayofWeek];



    } else if (gender === "Female") {
        let akanPair = female[day];
        console.log(akanPair);
        document.getElementById("Akandisplay").innerHTML = " Your Day of birth and Akan name is" + female[dayofWeek];
    } else {

        console.log("The Gender or Date can not be empty")
    }

}