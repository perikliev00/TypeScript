enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
function getDayName(day: Day): string {
    return Day[day];
}
const today: Day=Day.Sunday;
console.log("Today is", getDayName(today));