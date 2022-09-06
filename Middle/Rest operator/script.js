const log = function(a, b, ...rest){
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

//spread operator может разлодить массив на несколько сущностей
// rest operator может собрать в массив несколько сущностей

function calcOrDouble(number, basis = 2){
    //basis = basis || 2;
    console.log(number*basis);
}
calcOrDouble(3,5);