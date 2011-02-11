var Imperative = {
	exponentiate: function (base, exponent) {
		var i = 0, result = 1;
		
		for (; i < exponent; i++) {
			result *= base;
		}
		
		return result;
	}
};
 
var Functional = {
	exponentiate: function (base, exponent) {
		return (exponent <= 0? 1 : (base * this.exponentiate(base, exponent - 1)));
	}
};

// expt(2, 4)
// (* 2 expt(2, 3))
// (* 2 (* 2 expt(2, 2)))
// (* 2 (* 2 (* 2 expt(2, 2))))
// (* 2 (* 2 (* 2 (2 * expt(2, 1)))))
// (* 2 (* 2 (* 2 (2 * 1))))
//
print(Functional.exponentiate(2, 4));