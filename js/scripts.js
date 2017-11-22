// scripts.js

var a = prompt ('podaj wartośc dla zmiennej a'),
    b = prompt ('podaj wartość dla zmiennej b'),
    value = (a * a) - (2 * a * b) - (b * b);

    console.log('Wynik działania :' + value);

if (value > 0) {
    console.log('Wynik działania jest dodatni');
} else if (value < 0) {
    console.log('Wynik działania jest ujemny');
} else {
    console.log('Wynik działania wynosi: 0')
}