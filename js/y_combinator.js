var magic_factorial = function (n) {
    return (n? n * magic_factorial(n - 1) : 1);
};

// var part_factorial = function (self, n) {
//     return (n? n * self(self, n - 1) : 1);
// };
//
// var factorial = function (n) {
//     return part_factorial(part_factorial, n)(n);
// };

// var part_factorial = function (self) {
//     return function (n) {
//         var f = function (x) {
//             return self(self)(x);
//         };
//     
//         return (n? n * f(n - 1) : 1);
//     };
// };

// var part_factorial = function (self) {
//     var f = function (x) {
//         return self(self)(x);
//     };
//     
//     return function (f) {    
//         return function (n) {
//             return (n? n * f(n - 1) : 1);
//         };
//     }(f);
// };

var almost_factorial = function (f) {
    return function (n) {
        return (n? n * f(n - 1) : 1);
    };
};

// var part_factorial = function (self) {
//     var f = function (x) {
//         return self(self)(x);
//     };
//     
//     return almost_factorial(f);
// };

var part_factorial = function (self) {
    return function (x) {
        return almost_factorial(self(self))(x);
    };
};

// var factorial = function (n) {
//     return part_factorial(part_factorial)(n);
// };

// var factorial = function (n) {
//     return function (self) {
//         return function (x) {
//             return almost_factorial(self(self))(x);
//         };
//     }(
//         function (self) {
//             return function (x) {
//                 return almost_factorial(self(self))(x);
//             };
//         }
//     )(n);
// };

var make_recursive = function (f) {
    return function (self) {
        return function (x) {
            return f(self(self))(x);
        };
    }(
        function (self) {
            return function (x) {
                return f(self(self))(x);
            };
        }
    );
};

var factorial = function (n) {
    return make_recursive(almost_factorial)(n);
}

var Y_combinator = make_recursive; // TADA!

print(factorial(5));

