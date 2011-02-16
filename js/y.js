var factorial = function (n) {
    return (n? n * factorial(n - 1) : 1);
};

var magic_factorial = function (n) {
    return (n? n * magic_factorial(n - 1) : 1);
};

var almost_factorial = function (f) {
    return function (n) {
        return (n? n * f(n - 1) : 1);
    };
};

var identity = function (n) {
    return n;
};

var factorial1 = function (n) {
    return almost_factorial(identity)(n);
};

var factorial2 = function (n) {
    return almost_factorial(factorial1)(n);
};

var factorial3 = function (n) {
    return almost_factorial(factorial2)(n);
};

// var factorial_infinity = function (n) {
//     return almost_factorial(
//         .
//         .
//         .
//         function (n) {
//             return almost_factorial(
//                 function (n) {
//                     return almost_factorial(identity)(n);
//                 }
//             )(n);
//         }
//         .
//         .
//         .
//     )(n);
// };


// fixpoint_of_f = f(fixpoint_of_f)
// fixpoint_of_f = Y(f)
// 
// Y(f) = f(Y(f));

var Y = function (f) {
    return f(
        function (n) {
            return Y(f)(n);
        }
    );
};

var factorial = function (n) {
    return Y(almost_factorial)(n);
};

print(factorial(6));
print(almost_factorial(magic_factorial)(6));

print(almost_factorial(magic_factorial)(3));
print(almost_factorial(factorial3)(3));

print(factorial(6));