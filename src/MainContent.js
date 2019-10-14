import React from "react";
import WholeTutorial from "./components/WholeTutorial";

const fracs = {
  title: "Fractions",
  explanation1:
    "To write a fraction in TeX, use the \\frac command. Input the numerator and denominator in curly brackets.",
  explanation2: "Use \\displaystyle\\frac to create a vertical fraction.",
  prompt: "-\\frac{1}{12}",
  test:
    "e = \\displaystyle\\lim_{n \\rightarrow \\infty} (1 + \\displaystyle\\frac{1}{n})^n",
  hint: "Use \\displaystyle\\frac"
};

const sums = {
  title: "Sums",
  explanation1:
    "To use summation notation in TeX, use the \\sum command. Input expressions below or above the summation using the _ and ^ characters respectively.",
  explanation2:
    "Use \\displaystyle\\sum to create a larger sum (this is most commonly used).",
  prompt: "\\sum_{k=0}^n",
  test: "(x+y)^n = \\displaystyle\\sum_{k=0}^n \\binom{n}{k}x^{n}y^{n-k}",
  hint: "Use \\displaystyle\\sum"
};

function MainContent() {
  return (
    <>
      <WholeTutorial lesson={fracs} />
    </>
  );
}

export default MainContent;
