var factorial = function (n) {
    return (n? n * factorial(n - 1) : 1);
};

var magic_factorial = function (n) {
    return (n? n * magic_factorial(n - 1) : 1);
};

var almost_factorial = function (f) {
    return function (n) {
        return (n? n * f(n - 1) : 1);
    }
};

print(factorial(6));
print(almost_factorial(magic_factorial)(6));