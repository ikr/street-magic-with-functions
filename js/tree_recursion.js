// TREE RECURSION
//
var fib = function fib (n) {
    return (n < 2? n : fib(n - 1) + fib(n - 2));
};

print(fib(10));