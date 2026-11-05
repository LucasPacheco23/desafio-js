let heroiName = "Felipao";
let quantXP = 5000;
let level = undefined;

switch (true) {
    case (quantXP < 1000):
        level = "Ferro";
        break;
    case (quantXP < 2000):
        level = "Bronze";
        break;
    case (quantXP < 5000):
        level = "Prata";
        break;
    case (quantXP < 7000):
        level = "Ouro";
        break;
    case (quantXP < 8000):
        level = "Platina";
        break;
    case (quantXP < 9000):
        level = "Ascendente";
        break;
    case (quantXP < 10000):
        level = "Imortal";
        break;
    case (quantXP > 10000):
        level = "Radiante";
}

console.log(`O herói de nome ${heroiName} está no nível ${level}`);