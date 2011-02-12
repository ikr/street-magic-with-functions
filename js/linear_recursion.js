var Imperative = {
	expt: function (base, exponent) {
		var i = 0, result = 1;
		
		for (; i < exponent; i++) {
			result *= base;
		}
		
		return result;
	}
};

// LINEAR RECURSION
//
var Functional = {
	expt: function (base, exponent) {
		return (exponent? (base * this.expt(base, exponent - 1)) : 1);
	}
};

print(Imperative.expt(2, 10));

// (expt 2 4)
// (* 2 (expt 2 3))
// (* 2 (* 2 (expt 2 2)))
// (* 2 (* 2 (* 2 (expt 2 1))))
// (* 2 (* 2 (* 2 (* 2 (expt 2 0)))))
// (* 2 (* 2 (* 2 (* 2 1))))
// (* 2 (* 2 (* 2 2)))
// (* 2 (* 2 4))
// (* 2 8)
// 16
//
print(Functional.expt(2, 4));