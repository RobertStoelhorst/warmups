console.log("Time Conversion");

// const time = ("07:05:45PM")
// console.log(time);
// console.log(time[8]);
// if (time[8] == "p") {
//     time = time[0] + "10" && time[1] + "2";
// }
// console.log(time);

// const timeConversion = function (str) {
//     console.log(str);
//     if (str[8] === "P" || str[8] === "p") {
//         console.log("hi")
//         str = str.split(":");
//         str[2] = parseInt(str[2]), str[2] = str[2].toString();
//         str[0] = 12 + parseInt(str[0]), str[0] = str[0].toString(), str = str.join(":");
//     } else if (str[8] === "A" || str[8] === "a") {
//         console.log("no")
//         str = str.split(":");
//         str[2] = parseInt(str[2]), str[2] = str[2].toString();
//         str = str.join(":")
//     }
//     console.log(str);
// }

const timeConversion = function (s) {
    let amPm = s.charAt(8);
    // console.log(amPm)
    // console.log(s.substring(0,2));
    let militaryHour = "";
    if (amPm == "A") {
        if (s.substring(0,2) == "12") {
            militaryHour = "00";
        }
        else {
            militaryHour = s.substring(0,2);
        }
    } else { // PM "P"
        if (s.substring(0, 2) == "12") {
            militaryHour = s.substring(0, 2);
        }
        else {
            militaryHour = parseInt(s.substring(0, 2), 10) + 12;
            // console.log(militaryHour)
        }
    }
    return militaryHour + s.substring(2, 8);
}


// timeConversion("07:45:00PM");
console.log(timeConversion("12:09:00AM"));
// console.log(timeConversion("07:05:45PM"));

// let num1 ='20', num2 = '21';
// let ju = +num1 + +num2;

// console.log(ju)