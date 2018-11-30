var ucLoadLbs =0;
var ucLoadNewton = 0;
var ucDistInch = 0;
var ucDistMm = 0;
var ucPowHp = 0;
var ucPowKw = 0;
var ucTorqInLbf = 0;
var ucTorqNm = 0;
var ucSpeeInchSec = 0;
var ucSpeeMmSec = 0;
var ucWeiLbs = 0;
var ucWeiKg = 0;
var ucCycInHr = 0;
var ucCycMHr = 0;



function goUnitConversion() {
    hideAllCards();
    $('div#cal-unit-conversion').show();
    scrollTop('top');
}

function hideAllCards() {
    $('div.station').hide();
    $('div#cal-unit-conversion').hide();
}

function goCalculators() {
    hideAllCards();
    $('div.station').show();
    scrollTop('top');
}

function unitCalculate(){
    var ucLoadLbs = $('div#input[conversion-load-lbs]').val();
    var ucLoadNewton = $('div#input[conversion-load-n]').val();
    if ((ucLoadLbs != "") && (ucLoadNewton == "")){
        if (validateUnitConverInput()){
            updateUCnewton();
        }
    }
}

function updateUCnewton() {
    ucLoadNewton = calcRound((ucLoadLbs * 4.44822), 1);
}


// onclick="calcUnitConversion('calculators-unit-conversion');"

function validateUnitConverInput() {

    var vloadLbs = ucLoadLbs;
    var vloadN = ucLoadNewton;
    var vdisinch = ucDisInch;
    var vdismm = ucDisMm;
    var vpowhp = ucPowHp;
    var vpowkw = ucPowKw;
    var vtorinlbf = ucTorqInLbf;
    var vtornm = ucTorqNm;
    var vspeinchsec = ucSpeInchSec;
    var vspemmsec = ucSpeMmSec;
    var vweilbs = ucWeiLbs;
    var vweikg = ucWeiKg;
    var vcycinhr = ucCycInHr;
    var vcycmhr = ucCycMHr;

    if (vloadLbs < 0) {
        alert("Please enter a positive number for pounds.");
        return(false);
    }
    if (vloadN < 0) {
        alert("Please enter a positive number for Newtons.");
        return(false);
    }
    if (vdisinch < 0) {
        alert("Please enter a positive number Inches.");
        return(false);
    }
    if (vdismm < 0) {
        alert("Please enter a positive number Milimeters.");
        return(false);
    }
    if (vpowhp < 0) {
        alert("Please enter a positive number for Horse Power.");
        return(false);
    }
    if (vpowkw < 0) {
        alert("Please enter a positive number for kilowatts.");
        return(false);
    }
    if (vtorinlbf < 0) {
        alert("Please enter a positive number for inch-pounds.");
        return(false);
    }
    if (vtornm < 0) {
        alert("Please enter a positive number for Newton-meters.");
        return(false);
    }
    if (vspeinchsec < 0) {
        alert("Please enter a positive number for inch/sec.");
        return(false);
    }
    if (vspemmsec < 0) {
        alert("Please enter a positive number for mm/sec.");
        return(false);
    }
    if (vweilbs) {
        alert("Pleae enter a positive number for pounds.");
        return(false);
    }
    if (vweikg) {
        alert("Please enter a positive number for kilograms.");
        return(false);
    }
    if (vcycinhr) {
        alert("Please enter a positive number for inch/hr.");
        return(false);
    }
    if (vcycmhr) {
        alert("Please enter a positive number for m/hr.");
        return(false);
    }

    if ((isNaN(vloadLbs) || isNaN(vloadN) || isNaN(vdisinch) || isNaN(vdismm) || isNaN(vpowhp) || isNaN(vpowkw) || isNaN(vtorinlbf) || isNaN(vtornm) || isNaN(vspeinchsec) || isNaN(vspemmsec) || isNaN(vweilbs) || isNaN(vweikg) || isNaN(vcycinhr) || isNaN(vcycmhr)) && (vloadLbs != "" || vloadN != "" || vpowhp != "" || vpowkw != "" || vtorinlbf != "" || vtornm != "" || vspeinchsec != "" || vspemmsec != "" || vweilbs != "" || vweikg != "" || vcycinhr != "" || vcycmhr != "" )) {
        alert("Please enter a valid number.");
        testresult = false;
    }
    else {
        testresult = true;
    }
    return (testresult);
}
    

function calcRound(Num, Places) {
    if (Places > 0) {
        if ((Num.toString().length - Num.toString().lastIndexOf('.')) > (Places + 1)) {
            var Rounder = Math.pow(10, Places);
            return Math.round(Num * Rounder) / Rounder;
        }
        else return Num;
    }
    else return Math.round(Num);
}