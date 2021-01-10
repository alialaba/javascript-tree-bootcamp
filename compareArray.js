let profile = ['alaba', 15, true, 'student'];
let countries = ['Ghana', 'Nigeria', 'San Fransico', null, 100, false, 'verified'];
let arr1 = profile.length;
console.log('The length of the array is ' + arr1);
let arr2 = countries.length;
console.log('The length of the array is ' + arr2);

if (arr1 === arr2) {
    console.log('They are the same!');
} else {
    console.log('Two different sizes');
}