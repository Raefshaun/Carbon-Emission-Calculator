let householdNumber = 1;
let transportationEmission = 0;
let energyEmission = 0;
let waterEmission = 0;
let wasteEmission = 0;
let dietEmission = 0;
let pages = ["transportation", "main-menu", "energy", "water", "waste", "diet", "total"]

function noDecimals(e) {
    if (e.key == '.') {
        e.preventDefault();
    }
}

function getEnergyEmission() {
    let energy = Number(document.getElementById("energy-usage").value);
    energyEmission = energy;
}

function getWaterEmission() {
    let water = Number(document.getElementById("water-usage").value);
    waterEmission = water;
}

function getWasteEmission() {
    let waste = Number(document.getElementById("waste-weekly").value);
    wasteEmission = waste;
}

function getDietEmission() {
    let diet = Number(document.getElementById("diet-daily").value);
    dietEmission = diet;
}

function getTransportationEmission() {
    let motorbikeE = Number(document.getElementById("motorbike").value);
    let carE = Number(document.getElementById("car").value);
    let publicE = Number(document.getElementById("public-transportation").value);

    transportationEmission = (((motorbikeE / 3) + carE + (publicE / 5)).toFixed(2));
}

function saveHousehold() {
    householdNumber = document.getElementById("household-number").value;
}

function switchPage(btn) {
    pages.forEach(hide);

    switch (btn.value) {
        case "Transportation":
            document.getElementById("transportation").style.display = "flex";
            break;
        case "Back":
            document.getElementById("main-menu").style.display = "flex";
            break;
        case "Energy Usage":
            document.getElementById("energy").style.display = "flex";
            break;
        case "Water Usage":
            document.getElementById("water").style.display = "flex";
            break;
        case "Waste Management":
            document.getElementById("waste").style.display = "flex";
            break;
        case "Diet":
            document.getElementById("diet").style.display = "flex";
            break;
        case "Total Carbon Emission":
            document.getElementById("total").style.display = "flex";
            computeTotals();
            break;
        default:
            break;
    }
}

function hide(item) {
    document.getElementById(item).style.display = "none";
}

function computeTotals() {
    document.getElementById("transpo-emission").innerText = transportationEmission + "kg CO2";
    document.getElementById("transpo-rating").innerText = getRating(transportationEmission);

    let energyEmissionF = (((energyEmission / 30 / householdNumber) * 0.5).toFixed(2))
    document.getElementById("energy-emission").innerText = energyEmissionF + "kg CO2";
    document.getElementById("energy-rating").innerText = getRating(energyEmissionF);
    
    let waterEmissionF = (((waterEmission / 30 / householdNumber) * 3).toFixed(2))
    document.getElementById("water-emission").innerText = waterEmissionF + "kg CO2";
    document.getElementById("water-rating").innerText = getRating(waterEmissionF);

    let wasteEmissionF = (((wasteEmission / 7 / householdNumber) * 0.5).toFixed(2))
    document.getElementById("waste-emission").innerText = wasteEmissionF + "kg CO2";
    document.getElementById("waste-rating").innerText = getRating(wasteEmissionF);

    let dietEmissionF = ((dietEmission * 15).toFixed(2))
    document.getElementById("diet-emission").innerText = dietEmissionF + "kg CO2";
    document.getElementById("diet-rating").innerText = getRating(dietEmissionF);

    let totalEmission = ((Number(transportationEmission) + Number(energyEmissionF) + Number(waterEmissionF) + Number(wasteEmissionF) + Number(dietEmissionF)).toFixed(2));
    console.log(totalEmission);
    document.getElementById("total-emission").innerText = totalEmission  + "kg CO2";
    document.getElementById("total-rating").innerText = getRating(totalEmission);
}

function getRating(value) {
    if (Number(value) <= Number(5)) {
        return "Low";
    }
    else if (Number(value) <= Number(15)) {
        return "Moderate";
    }
    else {
        return "High";
    }
}