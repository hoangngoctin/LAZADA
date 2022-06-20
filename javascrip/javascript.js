
// tìm số nhỏ nhất 

var x = [5, 6, 4, 1]
var min = x[0]
for (var i = 0; i < x.length; i = i + 1) {
    if (x[i] < min) {
        min = x[i]
        console.log(min)
    }
}

// tìm số lớn nhât
var x = [5, 6, 4, 1]
var max = x[0]
for (var i = 0; i < x.length; i = i + 1) {
    if (x[i] > max) {
        max = x[i]
    }
}
console.log(max)

console.log(x.length)

//tìm số chẵn
var x = [5, 6, 4, 1]
for (var i = 0; i < x.length; i = i + 1) {
    if (x[i] % 2 == 0) {
        console.log(x[i])
    }
}

//tìm số lẻ 
var x = [5, 6, 4, 1]
for (var i = 0; i < x.length; i = i + 1) {
    if (x[i] % 2 == 1) {
        console.log(x[i])
    }
}

//tìm số nguyên tố 
var x = [5, 6, 4, 1]
for (var i = 0; i < x.length; i = i + 1){
   if (x[i] > 1 && x[i] / x[i] == 1 )
}
