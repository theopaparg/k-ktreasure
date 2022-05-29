"use strict";
// d6 variable declarations
const oneDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const twoDice = function () {
  return (
    Math.trunc(Math.random() * 6) + 1 + (Math.trunc(Math.random() * 6) + 1)
  );
};

// Random array element
function getRandomArrayElement(arr) {
  return arr[getRandomNumber(arr.length)];
}
// Τυχαίος αριθμός από το 1 μέχρι το max
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
//=================== ΚΑΘΟΡΙΣΜΟΣ ΚΟΣΜΗΜΑΤΟΣ ===================

// Τιμή κοσμήματος
let priceRange = [300, 500, 700, 1000, 1200, 1500];
let pricesArray = getRandomArrayElement(priceRange);
let jewelryPrice = "αξίας " + pricesArray * oneDice() + " διναρίων";

// Όνομα κοσμήματος
const jewelryFirstNameZeroTwo = ["Στέμμα ", "Βραχιόλι ", "Περιδέραιο "];
const jewelryFirstNameThree = [
  "Αγαλματίδιο",
  "Τελετουργικό όπλο",
  "Τελετουργική στολή",
];
const jewelryFirstNameTen = ["Υφάσματα", "Ελεφαντόδοντο", "Πίνακας"];
const jewelryFirstNameFifteen = ["Ακριβό χαλί", "Σεντούκι", "Πανοπλία"];
const jewelryFirstNameFifty = ["Σκαλιστός θρόνος", "Άγαλμα"];

// Υλικό κοσμήματος
const jewelryMaterialName1 = "από ελεφαντόδοντο δουλεμένο με ασήμι";
const jewelryMaterialName2 = "από χρυσοποίκιλτο ελεφαντόδοντο";
const jewelryMaterialName3 =
  "από χρυσοποίκιλτο ασήμι, με σκαλίσματα από χρυσάφι";
const jewelryMaterialName4 = "από πετραδοστόλιστο ασήμι";
const jewelryMaterialName5 = "από πετραδοστόλιστο χρυσάφι";
const jewelryMaterialName6 = "από πετραδοστόλιστη πλατίνα";

let jewelValue;
if (pricesArray === priceRange[0]) {
  jewelValue = jewelryPrice + " " + jewelryMaterialName1;
} else if (pricesArray === priceRange[1]) {
  jewelValue = jewelryPrice + " " + jewelryMaterialName2;
} else if (pricesArray === priceRange[2]) {
  jewelValue = jewelryPrice + " " + jewelryMaterialName3;
} else if (pricesArray === priceRange[3]) {
  jewelValue = jewelryPrice + " " + jewelryMaterialName4;
} else if (pricesArray === priceRange[4]) {
  jewelValue = jewelryPrice + " " + jewelryMaterialName5;
} else if (pricesArray === priceRange[5]) {
  jewelValue = jewelryPrice + " " + jewelryMaterialName6;
}

// Βάρος κοσμήματος
const jewelryMass = twoDice();
let jewelryKilos;
switch (jewelryMass) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
    jewelryKilos =
      getRandomArrayElement(jewelryFirstNameZeroTwo) +
      "βάρους " +
      0.2 +
      " λιθάρια";
    break;
  case 8:
  case 9:
    jewelryKilos =
      getRandomArrayElement(jewelryFirstNameThree) +
      " βάρους " +
      3 +
      " λιθάρια";
    break;
  case 10:
    jewelryKilos =
      getRandomArrayElement(jewelryFirstNameTen) + " βάρους " + 10 + " λιθάρια";
    break;
  case 11:
    jewelryKilos =
      getRandomArrayElement(jewelryFirstNameFifteen) +
      " βάρους " +
      15 +
      " λιθάρια";
    break;
  case 12:
    jewelryKilos =
      getRandomArrayElement(jewelryFirstNameFifty) +
      " βάρους " +
      50 +
      " λιθάρια";
    break;
}

// Καθορισμός κοσμήματος: Τελική ζαριά
const jewel = jewelryKilos + " " + jewelValue;

console.log(jewel);

// =================== ΚΑΘΟΡΙΣΜΟΣ ΠΕΤΡΑΔΙΩΝ ===================
const gemstoneTen = ["Αζουρίτης", "Αχάτης", "Μαλαχίτης", "Αιματίτης"];
const gemstoneFifty = ["Όνυχας", "Ίασπις", "Σεληνόλιθος", "Χαλαζίας"];
const gemstoneOneHundred = ["Αλεξανδρίτης", "Αμέθυστος", "Κεχριμπάρι"];
const gemstoneFiveHundred = ["Μαργαριτάρι", "Τοπάζι"];
const gemstoneOneThousand = ["Διαμάντι", "Ρουμπίνι", "Ζαφείρι", "Σμαράγδι"];
const gemstoneFiveThousand = [
  "Μεγάλο διαμάντι",
  "Μεγάλο ρουμπίνι",
  "Μεγάλο σμαράγδι",
];

let gemstone;
switch (twoDice()) {
  case 2:
  case 3:
    gemstone = function () {
      return getRandomArrayElement(gemstoneTen) + " αξίας 10 διναρίων.";
    };
    break;
  case 4:
  case 5:
    gemstone = function () {
      return getRandomArrayElement(gemstoneFifty) + " αξίας 50 διναρίων.";
    };
    break;
  case 6:
  case 7:
  case 8:
    gemstone = function () {
      return getRandomArrayElement(gemstoneOneHundred) + " αξίας 100 διναρίων.";
    };
    break;
  case 9:
  case 10:
    gemstone = function () {
      return (
        getRandomArrayElement(gemstoneFiveHundred) + " αξίας 500 διναρίων."
      );
    };
    break;
  case 11:
    gemstone = function () {
      return (
        getRandomArrayElement(gemstoneOneThousand) + " αξίας 1000 διναρίων."
      );
    };
    break;
  case 12:
    gemstone = function () {
      return (
        getRandomArrayElement(gemstoneFiveThousand) +
        " αξίας 5000 διναρίων. Έπιασες την καλή!"
      );
    };
    break;
}

console.log(gemstone());
// =================== ΚΑΘΟΡΙΣΜΟΣ ΝΟΣΜΙΜΑΤΩΝ ===================
const bronzeArray = [
  20, 200, 400, 600, 1000, 1400, 1800, 2400, 3000, 3600, 5000, 6000, 8000,
  100000, 140000, 200000,
];
const silverArray = [
  10, 100, 200, 300, 500, 700, 900, 1200, 1500, 1800, 2500, 3000, 4000, 5000,
  7500, 10000,
];
const goldArray = [
  1, 10, 20, 30, 50, 70, 90, 120, 150, 180, 250, 300, 400, 500, 750, 1000,
];

// Τύπος θησαυρών
let treasureTypeArray = [];
for (var i = 0; i <= 15; i++) {
  treasureTypeArray.push(i);
}
let treasureType = getRandomArrayElement(treasureTypeArray);

// Αξία νομισμάτων
let bronzeValue;
if (twoDice() < 8) {
  bronzeValue = "-";
} else {
  bronzeValue =
    bronzeArray[treasureType] * oneDice() + " " + "Χάλκινα νομίσματα";
}

let silverValue;
if (twoDice() < 8) {
  silverValue = "-";
} else {
  silverValue =
    silverArray[treasureType] * oneDice() + " " + "Αργυρά νομίσματα";
}

let goldValue;
if (twoDice() < 9) {
  goldValue = "-";
} else {
  goldValue = goldArray[treasureType] * oneDice() + " " + "Xρυσά νομίσματα";
}

// let gems =
// // if (treasureType <= 1 && twoDice() >= 11) {
//   gems = gemstone();
// } else if (treasureType === 2 && twoDice() >= 10) {
//   gems = gemstone(), gemstone();
// } else if (treasureType <= 4 && twoDice() >= 9) {
//   gems = repeat(gemstone(), 2);
// } else if (treasureType === 5 && twoDice() >= 9) {
//   gems = repeat(gemstone(), 3);
// } else if (treasureType === 6 && twoDice() >= 9) {
//   gems = repeat(gemstone(), 4);
// } else if (treasureType === 7 && twoDice() >= 8) {
//   gems = repeat(gemstone(), 4);
// } else if (treasureType === 8 && twoDice() >= 8) {
//   gems = repeat(gemstone(), 5);
// } else if (treasureType === 9 && twoDice())
