// LINEAR ITERATION
//
var exptIter = function (product, counter, base, exponent) {
	return (
		counter === exponent?
			product :
			exptIter(base * product, counter + 1, base, exponent)
	);
};

var expt = function (base, exponent) {
	return exptIter(1, 0, base, exponent);
};

// (expt 2 4)
// (expt-iter 1 0 2 4)
// (expt-iter 2 1 2 4)
// (expt-iter 4 2 2 4)
// (expt-iter 8 3 2 4)
// (expt-iter 16 4 2 4)
//
print(expt(2, 4));