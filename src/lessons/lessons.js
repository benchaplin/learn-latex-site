const lessons = [
  {
    title: "Exponents",
    path: "/exps",
    explanation1: "To write an exponent in TeX, use the ^ character.",
    explanation2:
      "If the exponent has more than one character, wrap it in curly brackets.",
    prompt: "n^2 + n + 41",
    test: "x^{a + b + c} = (x^a)(x^b)(x^c)",
    hint: "Wrap multiple-character exponents in {}."
  },
  {
    title: "Subscripts",
    path: "/subs",
    explanation1: "To write a subscript in TeX, use the _ character.",
    explanation2:
      "If the subscript has more than one character, wrap it in curly brackets.",
    prompt: "X_1 + X_2 + ... + X_n",
    test: "a_nx^n + a_{n - 1}x^{n - 1} + \\ldots + a_1x + a_0 = 0",
    hint: "Wrap multiple-character subscripts in {}."
  },
  {
    title: "Square Roots",
    path: "/sqrts",
    explanation1: "To write a square root in TeX, use the \\sqrt command.",
    explanation2: "Always wrap square root expressions in curly brackets.",
    prompt: "\\sqrt{2}",
    test: "z = x + \\sqrt{-1}y",
    hint: "Wrap multiple-character expressions in {}."
  },
  {
    title: "Fractions",
    path: "/fracs",
    explanation1: "To write a fraction in TeX, use the \\frac command.",
    explanation2:
      "Always input the numerator and denominator in curly brackets.",
    prompt: "-\\frac{1}{12}",
    test:
      "f(a) + \\frac{f'(a)}{1!}(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + \\ldots",
    hint: "Wrap multiple-character numerators/denominators in {}."
  },
  {
    title: "Binomial Coefficients",
    path: "/binoms",
    explanation1:
      "To write a binomial coefficient in TeX, use the \\binom command.",
    explanation2:
      "Always input the top and bottom numbers/expressions in curly brackets.",
    prompt: "\\binom{52}{4}",
    test:
      "\\binom{n + 1}{k + 1} = \\frac{n!}{(n - k)!k!} + \\frac{n!}{(n - k - 1)!(k + 1)!}",
    hint: "Recall \\frac."
  },
  {
    title: "Logarithms",
    path: "/logs",
    explanation1:
      "To write a logarithm in TeX, use the \\log (or \\ln) command. Input the base using the _ character afterwards.",
    explanation2:
      "If base has more than one character, wrap it in curly brackets.",
    prompt: "\\log_2 xy^2",
    test:
      "\\frac{1}{\\log_2 x} + \\frac{1}{\\log_3 x} + \\frac{1}{\\log_4 x} = 1",
    hint: "Recall \\frac."
  },
  {
    title: "Sums",
    path: "/sums",
    explanation1:
      "To use summation notation in TeX, use the \\sum command. Input expressions below or above the summation using the _ and ^ characters respectively.",
    explanation2:
      "If either the expressions below or above the summation have more than one character, wrap them in curly brackets.",
    prompt: "\\sum_{k = 0}^n",
    test: "(x + y)^n = \\sum_{k = 0}^n \\binom{n}{k}x^{k}y^{n - k}",
    hint: "Recall \\frac and \\binom."
  },
  {
    title: "Integrals",
    path: "/ints",
    explanation1:
      "To write an integral in TeX, use the \\int command. Input expressions below or above the integral analogously to sums, using the _ and ^ characters.",
    explanation2:
      "If either the expressions below or above the summation have more than one character, wrap them in curly brackets.",
    prompt: "\\int_0^1 x^2",
    test: "\\int_0^\\infty \\sqrt{x} e^{-x} dx = \\frac{1}{2} \\sqrt{\\pi}",
    hint: "Recall \\frac and \\sqrt, use \\pi."
  }
];

const lessonList = function() {
  return lessons;
};

export { lessonList };
