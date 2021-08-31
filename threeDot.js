const ages = [34, 45, 67];
const age1 = [12, 23, 34];
const age2 = [1, 2, 4, 5];
const totalAges = ages.concat(age1).concat([5]).concat(age2);
const total1 = [ages, age1, age2, 6];
console.log(total1);
//console.log(totalAges);

const bus = 590;
const man = 560;
const tea = 300;
const max = Math.max(bus, man, tea);
console.log(max);
const onkase = [230, 120, 1000, 567, 10004];
const high = Math.max(...onkase);
console.log(high);