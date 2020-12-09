const days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("full week array", days_of_the_week); // Log the days_of_the_week array

days_of_the_week.pop(); // Remove Sunday from last position
days_of_the_week.unshift("Sunday"); // add Sunday to the first position

console.log("shifted array", days_of_the_week);

const fullWeek = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ["Saturday", "Sunday"]
];

console.log(fullWeek[0]); // Log the first inner array
console.log(fullWeek[1]); // Log the second inner array

let weekdays = fullWeek.shift(); // Shift 1st inner array to a new array

console.log("shifted array", weekdays); // Log new weekDays array

weekdays.sort(); // Sort array alphabetically, (not always a reliable method)

console.log("sorted alphabetically", weekdays)

