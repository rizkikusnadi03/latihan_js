const umur = 20;

// Operator penjumlahan
let totalUmur = umur + 10;
console.log("total umur", totalUmur);

// Operator pengurangan
totalUmur = umur - 5;
console.log("pengurangan", totalUmur);

// Operator perkalian
totalUmur = umur * 2;
console.log("perkalian", totalUmur);

// Operator pembagian
totalUmur = umur / 2;
console.log(totalUmur);

// Operator modulus
let sisaUmur = umur % 3;
console.log(sisaUmur);

// Operator penugasan
let nilai = 15;
nilai += 5; // sama dengan nilai = nilai + 5
console.log(nilai);

nilai -= 3; // sama dengan nilai = nilai - 3
console.log(nilai);

nilai *= 2; // sama dengan nilai = nilai * 2
console.log(nilai);

nilai /= 4; // sama dengan nilai = nilai / 4
console.log(nilai);

nilai %= 3; // sama dengan nilai = nilai % 3
console.log(nilai);

// Operator perbandingan
console.log(umur == 20); // sama dengan
console.log(umur != 25); // tidak sama dengan
console.log(umur > 15);  // lebih dari
console.log(umur < 25);  // kurang dari
console.log(umur >= 20); // lebih dari atau sama dengan
console.log(umur <= 30); // kurang dari atau sama dengan

// Operator logika
const isAdult = umur >= 18;
const hasID = true;

console.log(isAdult && hasID); // AND
console.log(isAdult || hasID); // OR
console.log(!hasID);            // NOT

let total = 1 + 2 * 3
console.log(total); // Output: 7

let kaya = true;
let sehat = true
bahagian = kaya && sehat;
console.log("kuat bahagia:", bahagian);
let bahagian = kaya || sehat;
console.log("mungkin bahagia:", bahagian);