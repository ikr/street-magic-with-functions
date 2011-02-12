var factorial = function (n) {
	return (n? n * factorial(n - 1) : 1);
};

print(factorial(6));