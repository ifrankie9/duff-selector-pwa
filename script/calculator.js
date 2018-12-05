
var ucLoadLbs = 0;
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

var hpinlbs = 0;
var hprpm = 0;
var hphp = 0;

var cspeedlength = 0;
var cspeedrotdia = 0;
var cspeedspeed = 0;
var cspeedsafespeed = 0;



function goUnitConversion() {
    hideAllCards();
    $('div#cal-unit-conversion').show();
    // scrollTop('top');
}

function goHorsepower() {
    hideAllCards();
    $('div#cal-horsepower').show();
    // scrollTop('top');
}

function goCritSpeed() {
    hideAllCards();
    $('div#cal-critical-speed').show();
}

function goCalculators() {
    hideAllCards();
    $('div.station').show();
    scrollTop('top');
}

function hideAllCards() {
    $('div.station').hide();
    $('div#cal-unit-conversion').hide();
    $('div#cal-horsepower').hide();
    $('div#cal-critical-speed').hide();
}

//**********  Conversion Calculator Port  **********//
function unitCalculate(portId) {
    ucLoadLbs = $("div#" + portId + " input[name=conversion-load-lbs]").val();
    ucLoadNewton = $("div#" + portId + " input[name=conversion-load-n]").val();
    ucDistInch = $("div#" + portId + " input[name=conversion-distance-in]").val();
    ucDistMm = $("div#" + portId + " input[name=conversion-distance-mm]").val();
    ucPowHp = $("div#" + portId + " input[name=conversion-power-hp]").val();
    ucPowKw = $("div#" + portId + " input[name=conversion-power-kW]").val();
    ucTorqInLbf = $("div#" + portId + " input[name=conversion-torque-in-lbf]").val();
    ucTorqNm = $("div#" + portId + " input[name=conversion-torque-Nm]").val();
    ucSpeeInchSec = $("div#" + portId + " input[name=conversion-speed-in-sec]").val();
    ucSpeeMmSec = $("div#" + portId + " input[name=conversion-speed-mm-sec]").val();
    ucWeiLbs = $("div#" + portId + " input[name=conversion-weight-lbs]").val();
    ucWeiKg = $("div#" + portId + " input[name=conversion-weight-kg]").val();
    ucCycInHr = $("div#" + portId + " input[name=conversion-dutycycle-in-hr]").val();
    ucCycMHr = $("div#" + portId + " input[name=conversion-dutycycle-m-hr]").val();

    if ((ucLoadLbs == "") && (ucLoadNewton != "")) {
        if (validateUnitConverInput()) {
            updateUCLoadLbf();
        }
    }
    else if ((ucLoadLbs != "") && (ucLoadNewton == "")) {
        if (validateUnitConverInput()) {
            updateUCLoadNewton();
        }
    }
    else if ((ucLoadLbs != "") && (ucLoadNewton != "")) {
        if (validateUnitConverInput()) {
            updateUCLoadNewton();
        }
    }
    if ((ucDistInch == "") && (ucDistMm != "")) {
        if (validateUnitConverInput()) {
            updateUCDistanceInch();
        }
    }
    else if ((ucDistInch != "") && (ucDistMm == "")) {
        if (validateUnitConverInput()) {
            updateUCDistanceMm();
        }
    }
    else if ((ucDistInch != "") && (ucDistMm != "")) {
        if (validateUnitConverInput()) {
            updateUCDistanceMm();
        }
    }
    if ((ucPowHp == "") && (ucPowKw != "")) {
        if (validateUnitConverInput()) {
            updateUCPowerHp();
        }
    }
    else if ((ucPowHp != "") && (ucPowKw == "")) {
        if (validateUnitConverInput()) {
            updateUCPowerKw();
        }
    }
    else if ((ucPowHp != "") && (ucPowKw != "")) {
        if (validateUnitConverInput()) {
            updateUCPowerKw();
        }
    }
    if ((ucTorqInLbf == "") && (ucTorqNm != "")) {
        if (validateUnitConverInput()) {
            updateUCTorqInLbf();
        }
    }
    else if ((ucTorqInLbf != "") && (ucTorqNm == "")) {
        if (validateUnitConverInput()) {
            updateUCTorqNm();
        }
    }
    else if ((ucTorqInLbf != "") && (ucTorqNm != "")) {
        if (validateUnitConverInput()) {
            updateUCTorqNm();
        }
    }
    if ((ucSpeeInchSec == "") && (ucSpeeMmSec != "")) {
        if (validateUnitConverInput()) {
            updateUCSpeedinsec();
        }
    }
    else if ((ucSpeeInchSec != "") && (ucSpeeMmSec == "")) {
        if (validateUnitConverInput()) {
            updateUCSpeedmmsec();
        }
    }
    else if ((ucSpeeInchSec != "") && (ucSpeeMmSec != "")) {
        if (validateUnitConverInput()) {
            updateUCSpeedmmsec();
        }
    }
    if ((ucWeiLbs == "") && (ucWeiKg != "")) {
        if (validateUnitConverInput()) {
            updateUCWeightlbs();
        }
    }
    else if ((ucWeiLbs != "") && (ucWeiKg == "")) {
        if (validateUnitConverInput()) {
            updateUCWeightkg();
        }
    }
    else if ((ucWeiLbs != "") && (ucWeiKg != "")) {
        if (validateUnitConverInput()) {
            updateUCWeightkg();
        }
    }
    if ((ucCycInHr == "") && (ucCycMHr != "")) {
        if (validateUnitConverInput()) {
            updateUCDutyinhr();
        }
    }
    else if ((ucCycInHr != "") && (ucCycMHr == "")) {
        if (validateUnitConverInput()) {
            updateUCDutymhr();
        }
    }
    else if ((ucCycInHr != "") && (ucCycMHr != "")) {
        if (validateUnitConverInput()) {
            updateUCDutymhr();
        }
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');

    $("div#" + portId + " input[name=conversion-load-lbs]").val(ucLoadLbs);
    $("div#" + portId + " input[name=conversion-load-n]").val(ucLoadNewton);
    $("div#" + portId + " input[name=conversion-distance-in]").val(ucDistInch);
    $("div#" + portId + " input[name=conversion-distance-mm]").val(ucDistMm);
    $("div#" + portId + " input[name=conversion-power-hp]").val(ucPowHp);
    $("div#" + portId + " input[name=conversion-power-kW]").val(ucPowKw);
    $("div#" + portId + " input[name=conversion-torque-in-lbf]").val(ucTorqInLbf);
    $("div#" + portId + " input[name=conversion-torque-Nm]").val(ucTorqNm);
    $("div#" + portId + " input[name=conversion-speed-in-sec]").val(ucSpeeInchSec);
    $("div#" + portId + " input[name=conversion-speed-mm-sec]").val(ucSpeeMmSec);
    $("div#" + portId + " input[name=conversion-weight-lbs]").val(ucWeiLbs);
    $("div#" + portId + " input[name=conversion-weight-kg]").val(ucWeiKg);
    $("div#" + portId + " input[name=conversion-dutycycle-in-hr]").val(ucCycInHr);
    $("div#" + portId + " input[name=conversion-dutycycle-m-hr]").val(ucCycMHr);
}

function validateUnitConverInput() {

    var vloadLbs = ucLoadLbs;
    var vloadN = ucLoadNewton;
    var vdisinch = ucDistInch;
    var vdismm = ucDistMm;
    var vpowhp = ucPowHp;
    var vpowkw = ucPowKw;
    var vtorinlbf = ucTorqInLbf;
    var vtornm = ucTorqNm;
    var vspeinchsec = ucSpeeInchSec;
    var vspemmsec = ucSpeeMmSec;
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
    if (vweilbs < 0) {
        alert("Pleae enter a positive number for pounds.");
        return(false);
    }
    if (vweikg < 0) {
        alert("Please enter a positive number for kilograms.");
        return(false);
    }
    if (vcycinhr < 0) {
        alert("Please enter a positive number for inch/hr.");
        return(false);
    }
    if (vcycmhr < 0) {
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

function updateUCLoadNewton() {
    ucLoadNewton = calcRound((ucLoadLbs * 4.44822), 1);
}

function updateUCLoadLbf() {
    ucLoadLbs = calcRound((ucLoadNewton * 0.224809), 1);
}

function updateUCDistanceInch() {
    ucDistInch = calcRound((ucDistMm * 0.0393701), 1);
}

function updateUCDistanceMm() {
    ucDistMm = calcRound((ucDistInch * 25.4), 1);
}

function updateUCPowerKw() {
    ucPowKw = calcRound((ucPowHp * 0.73549875), 1);
}

function updateUCPowerHp() {
    ucPowHp = calcRound((ucPowKw * 1.341022), 1);
}

function updateUCTorqNm() {
    ucTorqNm = calcRound((ucTorqInLbf * 0.113), 1);
}

function updateUCTorqInLbf() {
    ucTorqInLbf = calcRound((ucTorqNm * 8.8507), 1);
}

function updateUCSpeedmmsec() {
    ucSpeeMmSec = calcRound((ucSpeeInchSec * 25.4), 1);
}

function updateUCSpeedinsec() {
    ucSpeeInchSec = calcRound((ucSpeeMmSec * 0.0393701), 1);
}

function updateUCWeightlbs() {
    ucWeiLbs = calcRound((ucWeiKg * 2.20462), 1);
}

function updateUCWeightkg() {
    ucWeiKg = calcRound((ucWeiLbs * 0.453592), 1);
}

function updateUCDutyinhr() {
    ucCycInHr = calcRound((ucCycMHr * 39.3701), 1);
}

function updateUCDutymhr() {
    ucCycMHr = calcRound((ucCycInHr * 0.0254), 1);
}

//**********  HP Calculator Port  **********//
function validateHp() {
    var vhpInLbf = hpinlbs;
    var vhpRpm = hprpm;
    var vhpHp = hphp;

    if(vhpInLbf < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vhpRpm < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vhpInLbf)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vhpRpm)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function hpCalculate(portId) {

    hpinlbs = $("div#" + portId + " input[name=cal-hp-inlbs]").val();
    hprpm = $("div#" + portId + " input[name=cal-hp-rpm]").val();
    hphp = $("div#" + portId + " input[name=cal-hp]").val();

    if ((hpinlbs != "") && (hprpm == "")) {
        alert("Please enter a positive number for Torque and RPM.");    
    }
    else if ((hpinlbs == "") && (hprpm != "")) {
        alert("Please enter a positive number for Torque and RPM.");    
    }
    else if ((hpinlbs != "") && (hprpm != "")) {
        if (validateHp()) {
            updateHp();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');  
    $("div#" + portId + " input[name=cal-hp]").val(hphp);

}

function updateHp() {
    hphp = calcRound(((hpinlbs * hprpm) / 63025), 2);
}

//**********  Critical Speed Calculator Port  **********//
function validateCritSpeed() {
    var vcritspeedlength = cspeedlength;
    var vcritspeedrootdia = cspeedrotdia;

    if(vcritspeedlength < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(vcritspeedrootdia < 0) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcritspeedlength)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else if(isNaN(vcritspeedrootdia)) {
        alert("Please enter a positive number.");
        return(False);
    }
    else {
        testresult = true;
    }
    return (testresult);
}

function critSpeedCalculate(portId) {

    cspeedlength = $("div#" + portId + " input[name=cal-crit-speed-length]").val();
    cspeedrotdia = $("div#" + portId + " input[name=cal-crit-speed-rotdia]").val();
    cspeedspeed = $("div#" + portId + " input[name=cal-crit-speed-speed]").val();
    cspeedsafespeed = $("div#" + portId + " input[name=cal-crit-speed-speed-safe]").val();

    if ((cspeedlength != "") && (cspeedrotdia == "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((cspeedlength == "") && (cspeedrotdia != "")) {
        alert("Please enter a positive number for Length and Root Diameter.");    
    }
    else if ((cspeedlength != "") && (cspeedrotdia != "")) {
        if (validateCritSpeed()) {
            updateCritSpeed();
        }    
    }

    $("div#" + portId + " div.mdl-textfield").addClass('is-dirty');  
    $("div#" + portId + " input[name=cal-crit-speed-speed]").val(cspeedspeed);
    $("div#" + portId + " input[name=cal-crit-speed-speed-safe]").val(cspeedsafespeed);
}
function updateCritSpeed() {
    cspeedspeed = calcRound((4760000 * (cspeedrotdia / (cspeedlength * cspeedlength))), 2);
    cspeedsafespeed = calcRound((cspeedspeed * 0.8), 2)
}

//**********   MAIN Functions  **********//
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


function clearInputs(portId){
    if (portId == 'cal-unit-conversion') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=conversion-load-lbs]").val("");
        $("div#" + portId + " input[name=conversion-load-n]").val("");
        $("div#" + portId + " input[name=conversion-distance-in]").val("");
        $("div#" + portId + " input[name=conversion-distance-mm]").val("");
        $("div#" + portId + " input[name=conversion-power-hp]").val("");
        $("div#" + portId + " input[name=conversion-power-kW]").val("");
        $("div#" + portId + " input[name=conversion-torque-in-lbf]").val("");
        $("div#" + portId + " input[name=conversion-torque-Nm]").val("");
        $("div#" + portId + " input[name=conversion-speed-in-sec]").val("");
        $("div#" + portId + " input[name=conversion-speed-mm-sec]").val("");
        $("div#" + portId + " input[name=conversion-weight-lbs]").val("");
        $("div#" + portId + " input[name=conversion-weight-kg]").val("");
        $("div#" + portId + " input[name=conversion-dutycycle-in-hr]").val("");
        $("div#" + portId + " input[name=conversion-dutycycle-m-hr]").val("");
    }
    if (portId == 'cal-horsepower') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=cal-hp-inlbs]").val("");
        $("div#" + portId + " input[name=cal-hp-rpm]").val("");
        $("div#" + portId + " input[name=cal-hp]").val("");
    }
    if (portId == 'cal-critical-speed') {
        $("div#" + portId + " div.mdl-textfield").removeClass('is-dirty');

        $("div#" + portId + " input[name=cal-crit-speed-rotdia]").val("");
        $("div#" + portId + " input[name=cal-crit-speed-length]").val("");
        $("div#" + portId + " input[name=cal-crit-speed-speed]").val("");
        $("div#" + portId + " input[name=cal-crit-speed-speed-safe]").val("");
    }
}

