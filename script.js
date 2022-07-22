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
var y1 =document.querySelector('#y1')
var y2 =document.querySelector('#y2')
var y3 =document.querySelector('#y3')
var y4 =document.querySelector('#y4')
var y5 =document.querySelector('#y5')
var y6 =document.querySelector('#y6')
var y7 =document.querySelector('#y7')
var y8 =document.querySelector('#y8')
var y9 =document.querySelector('#y9')
var y10 =document.querySelector('#y10')
var y11 =document.querySelector('#y11')
var regra1 = document.querySelector('#simp1')

function simp1() {
    regra1.innerHTML = ((((parseFloat(Ls.value)/10))/3) * ((1 * (parseFloat(y1.value))) + (4 * (parseFloat(y2.value))) + (2 * (parseFloat(y3.value))) + (4 * (parseFloat(y4.value))) + (2 * (parseFloat(y5.value))) + (4 * (parseFloat(y6.value))) + (2 * (parseFloat(y7.value))) + (4 * (parseFloat(y8.value))) + (2 * (parseFloat(y9.value))) + (4 * (parseFloat(y10.value))) + (1 * (parseFloat(y11.value))))) * parseFloat(Bs.value)   
}

var Comp = document.querySelector('#Comp')
var Boca = document.querySelector('#Boca')
var yy1 =document.querySelector('#yy1')
var yy2 =document.querySelector('#yy2')
var yy3 =document.querySelector('#yy3')
var yy4 =document.querySelector('#yy4')
var yy5 =document.querySelector('#yy5')
var yy6 =document.querySelector('#yy6')
var yy7 =document.querySelector('#yy7')
var yy8 =document.querySelector('#yy8')
var yy9 =document.querySelector('#yy9')
var yy10 =document.querySelector('#yy10')
var yy11 =document.querySelector('#yy11')
var yy12 =document.querySelector('#yy12')
var yy13 =document.querySelector('#yy13')
var regra2 = document.querySelector('#simp2')

function simp2() {
    regra2.innerHTML = (((((3/8) * (parseFloat(Comp.value) /12))) * ((1 * (parseFloat(yy1.value))) + (3 * (parseFloat(yy2.value))) + (3 * (parseFloat(yy3.value))) + (2 * (parseFloat(yy4.value))) + (3 * (parseFloat(yy5.value))) + (3 * (parseFloat(yy6.value))) + (2 * (parseFloat(yy7.value))) + (3 * (parseFloat(yy8.value))) + (3 * (parseFloat(yy9.value))) + (2 * (parseFloat(yy10.value))) + (3 * (parseFloat(yy11.value))) + (3 * (parseFloat(yy12.value))) + (1 * (parseFloat(yy13.value))))) * parseFloat(Boca.value))   

}
