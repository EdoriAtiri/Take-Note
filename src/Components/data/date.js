let date = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let [day, month, year] = [
  date.getDate(),
  months[date.getMonth()],
  date.getFullYear(),
];

const todaysDate = `${day} ${month}, ${year}`;

export default todaysDate;
