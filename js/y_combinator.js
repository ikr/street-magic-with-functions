var magic_factorial = function (n) {
    return (n? n * magic_factorial(n - 1) : 1);
};

var part_factorial = function (self, n) {
    return (n? n * self(self, n - 1) : 1);
};

var factorial = function (n) {
    return part_factorial(part_factorial, n);
};

print(factorial(5));

