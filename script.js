var B = document.querySelector('#B')
var Co = document.querySelector('#Co')
var Ca = document.querySelector('#Ca')
var Coef = document.querySelector('#Coef')
var resultado = document.querySelector('Span')


function math() {
    resultado.innerHTML = (((((parseFloat(Co.value) + parseFloat(B.value)) / 2)) ** 2) * (parseFloat(Coef.value) * parseFloat(Ca.value)))
}


var C = document.querySelector('#C')
var L = document.querySelector('#L')
var A = document.querySelector('#A')
var retangulo = document.querySelector('#calc2')


function calc2() {
    retangulo.innerHTML = parseFloat(C.value) * parseFloat(L.value) * parseFloat(A.value)
}

var B1 = document.querySelector('#B1')
var B2 = document.querySelector('#B2')
var A1 = document.querySelector('#A1')
var trapezio = document.querySelector('#calc21')


function calc21() {
    trapezio.innerHTML = (((parseFloat(B1.value) + parseFloat(B2.value)) * parseFloat(A1.value))) / 2
}


var Ls = document.querySelector('#Ls')
var Bs = document.querySelector('#Bs')
var y1 = document.querySelector('#y1')
var y2 = document.querySelector('#y2')
var y3 = document.querySelector('#y3')
var y4 = document.querySelector('#y4')
var y5 = document.querySelector('#y5')
var y6 = document.querySelector('#y6')
var y7 = document.querySelector('#y7')
var y8 = document.querySelector('#y8')
var y9 = document.querySelector('#y9')
var y10 = document.querySelector('#y10')
var y11 = document.querySelector('#y11')
var regra1 = document.querySelector('#simp1')

function simp1() {
    regra1.innerHTML = ((((parseFloat(Ls.value) / 10)) / 3) * ((1 * (parseFloat(y1.value))) + (4 * (parseFloat(y2.value))) + (2 * (parseFloat(y3.value))) + (4 * (parseFloat(y4.value))) + (2 * (parseFloat(y5.value))) + (4 * (parseFloat(y6.value))) + (2 * (parseFloat(y7.value))) + (4 * (parseFloat(y8.value))) + (2 * (parseFloat(y9.value))) + (4 * (parseFloat(y10.value))) + (1 * (parseFloat(y11.value))))) * parseFloat(Bs.value)
}

var Comp = document.querySelector('#Comp')
var Boca = document.querySelector('#Boca')
var yy1 = document.querySelector('#yy1')
var yy2 = document.querySelector('#yy2')
var yy3 = document.querySelector('#yy3')
var yy4 = document.querySelector('#yy4')
var yy5 = document.querySelector('#yy5')
var yy6 = document.querySelector('#yy6')
var yy7 = document.querySelector('#yy7')
var yy8 = document.querySelector('#yy8')
var yy9 = document.querySelector('#yy9')
var yy10 = document.querySelector('#yy10')
var yy11 = document.querySelector('#yy11')
var yy12 = document.querySelector('#yy12')
var yy13 = document.querySelector('#yy13')
var regra2 = document.querySelector('#simp2')

function simp2() {
    regra2.innerHTML = (((((3 / 8) * (parseFloat(Comp.value) / 12))) * ((1 * (parseFloat(yy1.value))) + (3 * (parseFloat(yy2.value))) + (3 * (parseFloat(yy3.value))) + (2 * (parseFloat(yy4.value))) + (3 * (parseFloat(yy5.value))) + (3 * (parseFloat(yy6.value))) + (2 * (parseFloat(yy7.value))) + (3 * (parseFloat(yy8.value))) + (3 * (parseFloat(yy9.value))) + (2 * (parseFloat(yy10.value))) + (3 * (parseFloat(yy11.value))) + (3 * (parseFloat(yy12.value))) + (1 * (parseFloat(yy13.value))))) * parseFloat(Boca.value))
}

var Loa = document.querySelector('#Loa')
var Lpp = document.querySelector('#Lpp')
var Barq = document.querySelector('#Barq')
var Coarq = document.querySelector('#Coarq')
var Coef1 = document.querySelector('#Coef1')
var C1 = document.querySelector('#C1')
var L1 = document.querySelector('#L1')
var A1 = document.querySelector('#A1')
var C2 = document.querySelector('#C2')
var L2 = document.querySelector('#L2')
var A2 = document.querySelector('#A2')

var BCO = document.querySelector('#BCO')
var CARQ = document.querySelector('#CARQ')
var MULTI = document.querySelector('#M')
var VEF = document.querySelector('#VEF')
var K1 = document.querySelector('#K1')
var AB = document.querySelector('#AB')

var calcar = document.querySelector('#calcarq')
var calcar2 = document.querySelector('#calcarq2')
var calcar3 = document.querySelector('#calcarq3')
var calcar4 = document.querySelector('#calculark1')
var calcar5 = document.querySelector('#ab')

var comparq1 = document.querySelector('#comparq')

function calcarq() {
    calcar.innerHTML = parseFloat(Barq.value) + parseFloat(Coarq.value)
}

/*function calcarq2() {
    calcar2.innerHTML = (0.5 * (parseFloat(Lpp.value) + parseFloat(Loa.value)))
}*/

function M() {
    MULTI.innerHTML = (((parseFloat(Barq.value) + parseFloat(Coarq.value)) / 2) ** 2) * parseFloat(Coef1.value)
}

function calcarq3() {
    calcar3.innerHTML = (((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value))))
}


function calculark1() {

    var volume = (((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value))));

    if (volume >= 1 && volume < 2) {
        calcar4.innerHTML = ((0.2000 + (0.2060 - 0.2000) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 1)) / (2 - 1)));
    }

    else if (volume >= 2 && volume < 3) {
        calcar4.innerHTML = (0.2060 + (0.2095 - 0.2060) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 2) / (3 - 2)));
    }

    else if (volume >= 3 && volume < 4) {
        calcar4.innerHTML = (0.2095 + (0.2120 - 0.2095) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 3) / (4 - 3)));
    }

    else if (volume >= 4 && volume < 5) {
        calcar4.innerHTML = (0.2120 + (0.2139 - 0.2120) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 4) / (5 - 4)));
    }

    else if (volume >= 5 && volume < 6) {
        calcar4.innerHTML = (0.2193 + (0.2155 - 0.2193) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 5) / (6 - 5)));
    }

    else if (volume >= 6 && volume < 7) {
        calcar4.innerHTML = (0.2155 + (0.2169 - 0.2155) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 6) / (7 - 6)));
    }

    else if (volume >= 7 && volume < 8) {
        calcar4.innerHTML = (0.2169 + (0.2180 - 0.2169) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 7) / (8 - 7)));
    }

    else if (volume >= 8 && volume < 9) {
        calcar4.innerHTML = (0.2180 + (0.2190 - 0.2180) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 8) / (9 - 8)));
    }

    else if (volume >= 9 && volume < 10) {
        calcar4.innerHTML = (0.2190 + (0.2200 - 0.2190) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 9) / (10 - 9)));
    }

    else if (volume >= 10 && volume < 20) {
        calcar4.innerHTML = (0.2200 + (0.2260 - 0.2200) * ((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 10) / (20 - 10));
    }

    else if (volume >= 20 && volume < 30) {
        calcar4.innerHTML = (0.2260 + (0.2295 - 0.2260) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 20) / (30 - 20)));
    }

    else if (volume >= 30 && volume < 40) {
        calcar4.innerHTML = (0.2295 + (0.2320 - 0.2295) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 30) / (40 - 30)));
    }

    else if (volume >= 40 && volume < 50) {
        calcar4.innerHTML = (0.2320 + (0.2340 - 0.2320) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 40) / (50 - 40)));
    }

    else if (volume >= 50 && volume < 60) {
        calcar4.innerHTML = (0.2340 + (0.2356 - 0.2340) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 50) / (60 - 50)));
    }

    else if (volume >= 60 && volume < 70) {
        calcar4.innerHTML = (0.2356 + (0.2369 - 0.2356) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 60) / (70 - 60)));
    }

    else if (volume >= 70 && volume < 80) {
        calcar4.innerHTML = (0.2369 + (0.2381 - 0.2369) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 70) / (80 - 70)));
    }

    else if (volume >= 80 && volume < 90) {
        calcar4.innerHTML = (0.2381 + (0.2391 - 0.2381) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 80) / (90 - 80)));
    }

    else if (volume >= 90 && volume < 100) {
        calcar4.innerHTML = (0.2391 + (0.2400 - 0.2391) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 90) / (100 - 90)));
    }

    else if (volume >= 100 && volume < 200) {
        calcar4.innerHTML = (0.2400 + (0.2460 - 0.2400) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 100) / (200 - 100)));
    }

    else if (volume >= 200 && volume < 300) {
        calcar4.innerHTML = (0.2460 + (0.2495 - 0.2460) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 200) / (300 - 200)));
    }

    else if (volume >= 300 && volume < 400) {
        calcar4.innerHTML = (0.2495 + (0.2520 - 0.2495) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 300) / (400 - 300)));
    }

    else if (volume >= 400 && volume < 500) {
        calcar4.innerHTML = (0.2520 + (0.2540 - 0.2520) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 400) / (500 - 400)));
    }

    else if (volume >= 500 && volume < 600) {
        calcar4.innerHTML = (0.2540 + (0.2556 - 0.2540) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 500) / (600 - 500)));
    }

    else if (volume >= 600 && volume < 700) {
        calcar4.innerHTML = (0.2556 + (0.2569 - 0.2556) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 600) / (700 - 600)));
    }

    else {
        calcar4.innerHTML = NaN;
    }

}

function ab() {

    var volume1 = (((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value))));

    if (volume1 >= 1 && volume1 < 2) {
        calcar5.innerHTML = ((0.2000 + (0.2060 - 0.2000) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 1)) / (2 - 1))) * volume1;
    }

    else if (volume1 >= 2 && volume1 < 3) {
        calcar5.innerHTML = (0.2060 + (0.2095 - 0.2060) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 2) / (3 - 2))) * volume1;
    }

    else if (volume1 >= 3 && volume1 < 4) {
        calcar5.innerHTML = (0.2095 + (0.2120 - 0.2095) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 3) / (4 - 3))) * volume1;
    }

    else if (volume1 >= 4 && volume1 < 5) {
        calcar5.innerHTML = (0.2120 + (0.2139 - 0.2120) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 4) / (5 - 4))) * volume1;
    }

    else if (volume1 >= 5 && volume1 < 6) {
        calcar5.innerHTML = (0.2193 + (0.2155 - 0.2193) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 5) / (6 - 5))) * volume1;
    }

    else if (volume1 >= 6 && volume1 < 7) {
        calcar5.innerHTML = (0.2155 + (0.2169 - 0.2155) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 6) / (7 - 6))) * volume1;
    }

    else if (volume1 >= 7 && volume1 < 8) {
        calcar5.innerHTML = (0.2169 + (0.2180 - 0.2169) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 7) / (8 - 7))) * volume1;
    }

    else if (volume1 >= 8 && volume1 < 9) {
        calcar5.innerHTML = (0.2180 + (0.2190 - 0.2180) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 8) / (9 - 8))) * volume1;
    }

    else if (volume1 >= 9 && volume1 < 10) {
        calcar5.innerHTML = (0.2190 + (0.2200 - 0.2190) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 9) / (10 - 9))) * volume1;
    }

    else if (volume1 >= 10 && volume1 < 20) {
        calcar5.innerHTML = (0.2200 + (0.2260 - 0.2200) * ((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 10) / (20 - 10)) * volume1;
    }

    else if (volume1 >= 20 && volume1 < 30) {
        calcar5.innerHTML = (0.2260 + (0.2295 - 0.2260) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 20) / (30 - 20))) * volume1;
    }

    else if (volume1 >= 30 && volume1 < 40) {
        calcar5.innerHTML = (0.2295 + (0.2320 - 0.2295) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 30) / (40 - 30))) * volume1;
    }

    else if (volume1 >= 40 && volume1 < 50) {
        calcar5.innerHTML = (0.2320 + (0.2340 - 0.2320) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 40) / (50 - 40))) * volume1;
    }

    else if (volume1 >= 50 && volume1 < 60) {
        calcar5.innerHTML = (0.2340 + (0.2356 - 0.2340) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 50) / (60 - 50))) * volume1;
    }

    else if (volume1 >= 60 && volume1 < 70) {
        calcar5.innerHTML = (0.2356 + (0.2369 - 0.2356) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 60) / (70 - 60))) * volume1;
    }

    else if (volume1 >= 70 && volume1 < 80) {
        calcar5.innerHTML = (0.2369 + (0.2381 - 0.2369) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 70) / (80 - 70))) * volume1;
    }

    else if (volume1 >= 80 && volume1 < 90) {
        calcar5.innerHTML = (0.2381 + (0.2391 - 0.2381) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 80) / (90 - 80))) * volume1;
    }

    else if (volume1 >= 90 && volume1 < 100) {
        calcar5.innerHTML = (0.2391 + (0.2400 - 0.2391) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 90) / (100 - 90))) * volume1;
    }

    else if (volume1 >= 100 && volume1 < 200) {
        calcar5.innerHTML = (0.2400 + (0.2460 - 0.2400) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 100) / (200 - 100))) * volume1;
    }

    else if (volume1 >= 200 && volume1 < 300) {
        calcar5.innerHTML = (0.2460 + (0.2495 - 0.2460) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 200) / (300 - 200))) * volume1;
    }

    else if (volume1 >= 300 && volume1 < 400) {
        calcar5.innerHTML = (0.2495 + (0.2520 - 0.2495) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 300) / (400 - 300))) * volume1;
    }

    else if (volume1 >= 400 && volume1 < 500) {
        calcar5.innerHTML = (0.2520 + (0.2540 - 0.2520) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 400) / (500 - 400))) * volume1;
    }

    else if (volume1 >= 500 && volume1 < 600) {
        calcar5.innerHTML = (0.2540 + (0.2556 - 0.2540) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 500) / (600 - 500))) * volume1;
    }

    else if (volume1 >= 600 && volume1 < 700) {
        calcar5.innerHTML = (0.2556 + (0.2569 - 0.2556) * (((((((parseFloat(Coarq.value) + parseFloat(Barq.value)) / 2)) ** 2) * (parseFloat(Coef1.value) * (parseFloat(comparq1.value)))) + ((parseFloat(C1.value) * parseFloat(L1.value) * parseFloat(A1.value)) + ((parseFloat(C2.value) * parseFloat(L2.value) * parseFloat(A2.value)))) - 600) / (700 - 600))) * volume1;
    }

    else {
        calcar5.innerHTML = NaN;
    }

    return calcar5.innerHTML;
}

var pontal1 = document.querySelector('#pontal')
var hmoldado1 = document.querySelector('#hmoldado')
var hleve1 = document.querySelector('#hleve')
var hcarregado1 = document.querySelector('#hcarregado1')
var compregra1 = document.querySelector('#compregra')
var comparq1 = document.querySelector('#comparq')
var numtrip1 = document.querySelector('#numtrip')
var n11 = document.querySelector('#n1')
var n22 = document.querySelector('#n2')
var volumecarga1 = document.querySelector('#volumecarga')

var caln1n21 = document.querySelector('#caln1n2')
var calVU1 = document.querySelector('#calVU')
var I = document.querySelector('#calI')
var II = document.querySelector('#calII')
var III = document.querySelector('#calIII')
var calcar6 = document.querySelector('#al')
var calI11 = document.querySelector('#calI1')
var calI22 = document.querySelector('#calI2')



function caln1n2() { /* N1 + N2*/

    caln1n21.innerHTML = parseFloat(n11.value) + parseFloat(n22.value)
}

function calVU() { /* N1 + N2*/
    var vused = parseFloat(n11.value) + parseFloat(n22.value)

    if (vused < 13) {
        calVU1.innerHTML = 0;
    }

    else {
        calVU1.innerHTML = parseFloat(n11.value) + parseFloat(n22.value);
    }

}

function calI() { /* (4H/3P)² */

    I.innerHTML = ((4 * parseFloat(hmoldado1.value)) / (3 * parseFloat(pontal1.value))) ** 2;
}


function calI1() {

    var vused1 = ((4 * parseFloat(hmoldado1.value)) / (3 * parseFloat(pontal1.value))) ** 2

    if (vused1 <= 1) {
        calI11.innerHTML = ((4 * parseFloat(hmoldado1.value)) / (3 * parseFloat(pontal1.value))) ** 2;
    }

    else if (vused1 > 1) {
        calI11.innerHTML = 1; /* CONFIRMAR NA NORMAM */
    }

    else {
        calI11.innerHTML = NaN;
    }

    return calI11.innerHTML;
}

var k21 = document.querySelector('#K2')

function K2() {


    if (parseFloat(volumecarga1.value) >= 1 && parseFloat(volumecarga1.value) < 2) {
        k21.innerHTML = 0 + (((parseFloat(volumecarga1.value) - 0) / (2 - 0)) * (0.2060 - 0));
    }

    else if (parseFloat(volumecarga1.value) >= 2 && parseFloat(volumecarga1.value) < 3) {
        k21.innerHTML = 0.2000 + (((parseFloat(volumecarga1.value) - 1) / (3 - 1)) * (0.2095 - 0.2000));
    }

    else if (parseFloat(volumecarga1.value) >= 3 && parseFloat(volumecarga1.value) < 4) {
        k21.innerHTML = 0.2060 + (((parseFloat(volumecarga1.value) - 2) / (4 - 2)) * (0.2120 - 0.2060));
    }

    else if (parseFloat(volumecarga1.value) >= 4 && parseFloat(volumecarga1.value) < 5) {
        k21.innerHTML = 0.2095 + (((parseFloat(volumecarga1.value) - 3) / (5 - 3)) * (0.2139 - 0.2095));
    }

    else if (parseFloat(volumecarga1.value) >= 5 && parseFloat(volumecarga1.value) < 6) {
        k21.innerHTML = 0.2120 + (((parseFloat(volumecarga1.value) - 4) / (6 - 4)) * (0.2155 - 0.2120));
    }

    else if (parseFloat(volumecarga1.value) >= 6 && parseFloat(volumecarga1.value) < 7) {
        k21.innerHTML = 0.2139 + (((parseFloat(volumecarga1.value) - 5) / (7 - 5)) * (0.2169 - 0.2139));
    }

    else if (parseFloat(volumecarga1.value) >= 7 && parseFloat(volumecarga1.value) < 8) {
        k21.innerHTML = 0.2155 + (((parseFloat(volumecarga1.value) - 6) / (8 - 6)) * (0.2180 - 0.2155));
    }

    else if (parseFloat(volumecarga1.value) >= 8 && parseFloat(volumecarga1.value) < 9) {
        k21.innerHTML = 0.2169 + (((parseFloat(volumecarga1.value) - 7) / (9 - 7)) * (0.2190 - 0.2169));
    }

    else if (parseFloat(volumecarga1.value) >= 9 && parseFloat(volumecarga1.value) < 10) {
        k21.innerHTML = 0.2180 + (((parseFloat(volumecarga1.value) - 8) / (10 - 8)) * (0.2200 - 0.2180));
    }

    else if (parseFloat(volumecarga1.value) >= 10 && parseFloat(volumecarga1.value) < 20) {
        k21.innerHTML = 0.2190 + (((parseFloat(volumecarga1.value) - 9) / (20 - 9)) * (0.2260 - 0.2190));
    }

    else if (parseFloat(volumecarga1.value) >= 20 && parseFloat(volumecarga1.value) < 30) {
        k21.innerHTML = 0.2200 + (((parseFloat(volumecarga1.value) - 10) / (30 - 10)) * (0.2295 - 0.2200));
    }

    else if (parseFloat(volumecarga1.value) >= 30 && parseFloat(volumecarga1.value) < 40) {
        k21.innerHTML = 0.2260 + (((parseFloat(volumecarga1.value) - 20) / (40 - 20)) * (0.2320 - 0.2260));
    }

    else if (parseFloat(volumecarga1.value) >= 40 && parseFloat(volumecarga1.value) < 50) {
        k21.innerHTML = 0.2295 + (((parseFloat(volumecarga1.value) - 30) / (50 - 30)) * (0.2340 - 0.2295));
    }

    else if (parseFloat(volumecarga1.value) >= 50 && parseFloat(volumecarga1.value) < 60) {
        k21.innerHTML = 0.2320 + (((parseFloat(volumecarga1.value) - 40) / (60 - 40)) * (0.2356 - 0.2320));
    }

    else if (parseFloat(volumecarga1.value) >= 60 && parseFloat(volumecarga1.value) < 70) {
        k21.innerHTML = 0.2340 + (((parseFloat(volumecarga1.value) - 50) / (70 - 50)) * (0.2369 - 0.2340));
    }

    else if (parseFloat(volumecarga1.value) >= 70 && parseFloat(volumecarga1.value) < 80) {
        k21.innerHTML = 0.2356 + (((parseFloat(volumecarga1.value) - 60) / (80 - 60)) * (0.2381 - 0.2356));
    }

    else if (parseFloat(volumecarga1.value) >= 80 && parseFloat(volumecarga1.value) < 90) {
        k21.innerHTML = 0.2369 + (((parseFloat(volumecarga1.value) - 70) / (90 - 70)) * (0.2391 - 0.2369));
    }

    else if (parseFloat(volumecarga1.value) >= 90 && parseFloat(volumecarga1.value) < 100) {
        k21.innerHTML = 0.2381 + (((parseFloat(volumecarga1.value) - 80) / (100 - 80)) * (0.2400 - 0.2381));
    }

    else if (parseFloat(volumecarga1.value) >= 100 && parseFloat(volumecarga1.value) < 200) {
        k21.innerHTML = 0.2391 + (((parseFloat(volumecarga1.value) - 90) / (100 - 90)) * (0.2460 - 0.2391));
    }

    else if (parseFloat(volumecarga1.value) >= 200 && parseFloat(volumecarga1.value) < 300) {
        k21.innerHTML = 0.2400 + (((parseFloat(volumecarga1.value) - 100) / (300 - 100)) * (0.2495 - 0.2400));
    }

    else if (parseFloat(volumecarga1.value) >= 300 && parseFloat(volumecarga1.value) < 400) {
        k21.innerHTML = 0.2460 + (((parseFloat(volumecarga1.value) - 200) / (400 - 200)) * (0.2520 - 0.2460));
    }

    else if (parseFloat(volumecarga1.value) >= 400 && parseFloat(volumecarga1.value) < 500) {
        k21.innerHTML = 0.2495 + (((parseFloat(volumecarga1.value) - 300) / (500 - 300)) * (0.2540 - 0.2495));
    }

    else if (parseFloat(volumecarga1.value) >= 500 && parseFloat(volumecarga1.value) < 600) {
        k21.innerHTML = 0.2520 + (((parseFloat(volumecarga1.value) - 400) / (600 - 400)) * (0.2556 - 0.2520));
    }

    else if (parseFloat(volumecarga1.value) >= 600 && parseFloat(volumecarga1.value) < 700) {
        k21.innerHTML = 0.2540 + (((parseFloat(volumecarga1.value) - 500) / (700 - 500)) * (0.2569 - 0.2540));
    }

    else if (parseFloat(volumecarga1.value) >= 700 && parseFloat(volumecarga1.value) < 800) {
        k21.innerHTML = 0.2556 + (((parseFloat(volumecarga1.value) - 600) / (800 - 600)) * (0.2581 - 0.2556));
    }

    else if (parseFloat(volumecarga1.value) >= 800 && parseFloat(volumecarga1.value) < 900) {
        k21.innerHTML = 0.2569 + (((parseFloat(volumecarga1.value) - 700) / (900 - 700)) * (0.2591 - 0.2569));
    }

    else if (parseFloat(volumecarga1.value) >= 900 && parseFloat(volumecarga1.value) < 1000) {
        k21.innerHTML = 0.2581 + (((parseFloat(volumecarga1.value) - 800) / (1000 - 800)) * (0.2600 - 0.2581));
    }

    else if (parseFloat(volumecarga1.value) >= 1000 && parseFloat(volumecarga1.value) < 2000) {
        k21.innerHTML = 0.2591 + (((parseFloat(volumecarga1.value) - 900) / (2000 - 900)) * (0.2660 - 0.2591));
    }

    else if (parseFloat(volumecarga1.value) >= 2000 && parseFloat(volumecarga1.value) < 3000) {
        k21.innerHTML = 0.2600 + (((parseFloat(volumecarga1.value) - 1000) / (3000 - 1000)) * (0.2695 - 0.2600));
    }

    else if (parseFloat(volumecarga1.value) >= 3000 && parseFloat(volumecarga1.value) < 4000) {
        k21.innerHTML = 0.2660 + (((parseFloat(volumecarga1.value) - 2000) / (4000 - 2000)) * (0.2720 - 0.2660));
    }

    else if (parseFloat(volumecarga1.value) >= 4000 && parseFloat(volumecarga1.value) < 5000) {
        k21.innerHTML = 0.2695 + (((parseFloat(volumecarga1.value) - 3000) / (5000 - 3000)) * (0.2740 - 0.2695));
    }

    else if (parseFloat(volumecarga1.value) >= 5000 && parseFloat(volumecarga1.value) < 6000) {
        k21.innerHTML = 0.2720 + (((parseFloat(volumecarga1.value) - 4000) / (6000 - 4000)) * (0.2756 - 0.2720));
    }

    else if (parseFloat(volumecarga1.value) >= 6000 && parseFloat(volumecarga1.value) < 7000) {
        k21.innerHTML = 0.2740 + (((parseFloat(volumecarga1.value) - 5000) / (6000 - 5000)) * (0.2769 - 0.2740));
    }

    else if (parseFloat(volumecarga1.value) >= 7000 && parseFloat(volumecarga1.value) < 8000) {
        k21.innerHTML = 0.2756 + (((parseFloat(volumecarga1.value) - 6000) / (8000 - 6000)) * (0.2781 - 0.2756));
    }

    else if (parseFloat(volumecarga1.value) >= 8000 && parseFloat(volumecarga1.value) < 9000) {
        k21.innerHTML = 0.2769 + (((parseFloat(volumecarga1.value) - 7000) / (9000 - 7000)) * (0.2791 - 0.2769));
    }

    else {
        k21.innerHTML = 0;
    }
}



function calII() { /* K2Vc(4H/3P)²*/


    if (parseFloat(volumecarga1.value) >= 1 && parseFloat(volumecarga1.value) < 2) {
        II.innerHTML = (0 + ((((parseFloat(volumecarga1.value) - 0) / (2 - 0)) * (0.2060 - 0)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 2 && parseFloat(volumecarga1.value) < 3) {
        II.innerHTML = (0.2000 + ((((parseFloat(volumecarga1.value) - 1) / (3 - 1)) * (0.2095 - 0.2000)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 3 && parseFloat(volumecarga1.value) < 4) {
        II.innerHTML = (0.2060 + ((((parseFloat(volumecarga1.value) - 2) / (4 - 2)) * (0.2120 - 0.2060)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 4 && parseFloat(volumecarga1.value) < 5) {
        II.innerHTML = (0.2095 + ((((parseFloat(volumecarga1.value) - 3) / (5 - 3)) * (0.2139 - 0.2095)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 5 && parseFloat(volumecarga1.value) < 6) {
        II.innerHTML = (0.2120 + ((((parseFloat(volumecarga1.value) - 4) / (6 - 4)) * (0.2155 - 0.2120)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 6 && parseFloat(volumecarga1.value) < 7) {
        II.innerHTML = (0.2139 + ((((parseFloat(volumecarga1.value) - 5) / (7 - 5)) * (0.2169 - 0.2139)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 7 && parseFloat(volumecarga1.value) < 8) {
        II.innerHTML = (0.2155 + ((((parseFloat(volumecarga1.value) - 6) / (8 - 6)) * (0.2180 - 0.2155)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 8 && parseFloat(volumecarga1.value) < 9) {
        II.innerHTML = (0.2169 + ((((parseFloat(volumecarga1.value) - 7) / (9 - 7)) * (0.2190 - 0.2169)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 9 && parseFloat(volumecarga1.value) < 10) {
        II.innerHTML = (0.2180 + ((((parseFloat(volumecarga1.value) - 8) / (10 - 8)) * (0.2200 - 0.2180)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 10 && parseFloat(volumecarga1.value) < 20) {
        II.innerHTML = (0.2190 + ((((parseFloat(volumecarga1.value) - 9) / (20 - 9)) * (0.2260 - 0.2190)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 20 && parseFloat(volumecarga1.value) < 30) {
        II.innerHTML = (0.2200 + ((((parseFloat(volumecarga1.value) - 10) / (30 - 10)) * (0.2295 - 0.2200)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 30 && parseFloat(volumecarga1.value) < 40) {
        II.innerHTML = (0.2260 + ((((parseFloat(volumecarga1.value) - 20) / (40 - 20)) * (0.2320 - 0.2260)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 40 && parseFloat(volumecarga1.value) < 50) {
        II.innerHTML = (0.2295 + ((((parseFloat(volumecarga1.value) - 30) / (50 - 30)) * (0.2340 - 0.2295)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 50 && parseFloat(volumecarga1.value) < 60) {
        II.innerHTML = (0.2320 + ((((parseFloat(volumecarga1.value) - 40) / (60 - 40)) * (0.2356 - 0.2320)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 60 && parseFloat(volumecarga1.value) < 70) {
        II.innerHTML = (0.2340 + ((((parseFloat(volumecarga1.value) - 50) / (70 - 50)) * (0.2369 - 0.2340)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 70 && parseFloat(volumecarga1.value) < 80) {
        II.innerHTML = (0.2356 + ((((parseFloat(volumecarga1.value) - 60) / (80 - 60)) * (0.2381 - 0.2356)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 80 && parseFloat(volumecarga1.value) < 90) {
        II.innerHTML = (0.2369 + ((((parseFloat(volumecarga1.value) - 70) / (90 - 70)) * (0.2391 - 0.2369)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 90 && parseFloat(volumecarga1.value) < 100) {
        II.innerHTML = (0.2381 + ((((parseFloat(volumecarga1.value) - 80) / (100 - 80)) * (0.2400 - 0.2381)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 100 && parseFloat(volumecarga1.value) < 200) {
        II.innerHTML = (0.2391 + ((((parseFloat(volumecarga1.value) - 90) / (100 - 90)) * (0.2460 - 0.2391)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 200 && parseFloat(volumecarga1.value) < 300) {
        II.innerHTML = (0.2400 + ((((parseFloat(volumecarga1.value) - 100) / (300 - 100)) * (0.2495 - 0.2400)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 300 && parseFloat(volumecarga1.value) < 400) {
        II.innerHTML = (0.2460 + ((((parseFloat(volumecarga1.value) - 200) / (400 - 200)) * (0.2520 - 0.2460)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 400 && parseFloat(volumecarga1.value) < 500) {
        II.innerHTML = (0.2495 + ((((parseFloat(volumecarga1.value) - 300) / (500 - 300)) * (0.2540 - 0.2495)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 500 && parseFloat(volumecarga1.value) < 600) {
        II.innerHTML = (0.2520 + ((((parseFloat(volumecarga1.value) - 400) / (600 - 400)) * (0.2556 - 0.2520)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 600 && parseFloat(volumecarga1.value) < 700) {
        II.innerHTML = (0.2540 + ((((parseFloat(volumecarga1.value) - 500) / (700 - 500)) * (0.2569 - 0.2540)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 700 && parseFloat(volumecarga1.value) < 800) {
        II.innerHTML = (0.2556 + ((((parseFloat(volumecarga1.value) - 600) / (800 - 600)) * (0.2581 - 0.2556)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 800 && parseFloat(volumecarga1.value) < 900) {
        II.innerHTML = (0.2569 + ((((parseFloat(volumecarga1.value) - 700) / (900 - 700)) * (0.2591 - 0.2569)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 900 && parseFloat(volumecarga1.value) < 1000) {
        II.innerHTML = (0.2581 + ((((parseFloat(volumecarga1.value) - 800) / (1000 - 800)) * (0.2600 - 0.2581)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 1000 && parseFloat(volumecarga1.value) < 2000) {
        II.innerHTML = (0.2591 + ((((parseFloat(volumecarga1.value) - 900) / (2000 - 900)) * (0.2660 - 0.2591)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 2000 && parseFloat(volumecarga1.value) < 3000) {
        II.innerHTML = (0.2600 + ((((parseFloat(volumecarga1.value) - 1000) / (3000 - 1000)) * (0.2695 - 0.2600)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 3000 && parseFloat(volumecarga1.value) < 4000) {
        II.innerHTML = (0.2660 + ((((parseFloat(volumecarga1.value) - 2000) / (4000 - 2000)) * (0.2720 - 0.2660)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 4000 && parseFloat(volumecarga1.value) < 5000) {
        II.innerHTML = (0.2695 + ((((parseFloat(volumecarga1.value) - 3000) / (5000 - 3000)) * (0.2740 - 0.2695)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 5000 && parseFloat(volumecarga1.value) < 6000) {
        II.innerHTML = (0.2720 + ((((parseFloat(volumecarga1.value) - 4000) / (6000 - 4000)) * (0.2756 - 0.2720)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 6000 && parseFloat(volumecarga1.value) < 7000) {
        II.innerHTML = (0.2740 + ((((parseFloat(volumecarga1.value) - 5000) / (6000 - 5000)) * (0.2769 - 0.2740)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 7000 && parseFloat(volumecarga1.value) < 8000) {
        II.innerHTML = (0.2756 + ((((parseFloat(volumecarga1.value) - 6000) / (8000 - 6000)) * (0.2781 - 0.2756)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else if (parseFloat(volumecarga1.value) >= 8000 && parseFloat(volumecarga1.value) < 9000) {
        II.innerHTML = (0.2769 + ((((parseFloat(volumecarga1.value) - 7000) / (9000 - 7000)) * (0.2791 - 0.2769)))) * parseFloat(volumecarga1.value) * calI1();
    }

    else {
        II.innerHTML = 0;
    }

    return II.innerHTML;

}

/* SUBSTITUR AS VARIÁVEIS.INNERHTML SE NÃO NÃO VAI DAR CERTO OS RESULTADOS */
var ABK2 = 0.25 * calcar5.innerHTML

function calI2() {

    if (calII() <= ABK2) {
        calI22.innerHTML = 0.25 * ab();
    }

    else if (calII() > ABK2) {
        calI22.innerHTML = calII();
    }

    else {
        calI22.innerHTML = NaN;
    }

    return calI22.innerHTML;
}



function calIII() {
    III.innerHTML = 0.3 * ab();

    return III.innerHTML;
}


function al() {
    calcar6.innerHTML =  parseFloat(calI2()) + (1.25 * (parseFloat(ab()) + 10000) / 10000 * (parseFloat(n11.value) + (parseFloat(n22.value) / 10)))

    return calcar6.innerHTML; 
}

var arqliqfinal = document.querySelector('#alf')


function alf() {
    if (al >= calIII()) {
        arqliqfinal.innerHTML = al();
    }

    else if (al < calIII()) {
        arqliqfinal.innerHTML = calIII();
    }

    else {
        arqliqfinal = NaN;
    }
}

