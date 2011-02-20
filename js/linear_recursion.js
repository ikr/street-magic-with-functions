function imperative_expt (base, exponent) {
    var i = 0, result = 1;

    for (; i < exponent; ++i) {
        result *= base;
    }

    return result;
}

print(imperative_expt(2, 10));

// LINEAR RECURSION
//
var functional_expt = function functional_expt (base, exponent) {
    return (exponent? (base * functional_expt(base, exponent - 1)) : 1);
};

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
print(functional_expt(2, 4));