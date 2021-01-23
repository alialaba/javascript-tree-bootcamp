let firstName = "ali";
let gender = 'male';
let profile = {
    name: 'alaba',
    age: 12,
}
let countries = {
    name: 'Nigeria',
    curreny: 'NGA',
}
console.log(typeof firstName);
console.log(typeof profile);

if (typeof firstName === typeof gender) {
    console.log("Same Type");
} else if (typeof profile === typeof countries) {
    console.log("Same Type");
} else {
    console.log("Not the same");
}