import React from "react";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import Nav from "./Nav";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import WholeTutorial from "./components/WholeTutorial";

const exps = {
  title: "Exponents",
  explanation1: "To write an exponent in TeX, use the ^ character.",
  explanation2:
    "If the exponent has more than one character, wrap it in curly brackets.",
  prompt: "n^2 + n + 41",
  test: "x^{a + b + c} = (x^a)(x^b)(x^c)",
  hint: "Wrap multiple-character exponents in {}"
};

const subs = {
  title: "Subscripts",
  explanation1: "To write a subscript in TeX, use the _ character.",
  explanation2:
    "If the subscript has more than one character, wrap it in curly brackets.",
  prompt: "X_1 + X_2 + ... + X_n",
  test: "a^nx^n + a^{n - 1}x^{n - 1} + ... + a_1x + a_0 = 0",
  hint: "Wrap multiple-character subscripts in {}"
};

const sqrts = {
  title: "Square Roots",
  explanation1: "To write a square root in TeX, use the \\sqrt command.",
  explanation2:
    "If the expression beneath the square root has more than one character, wrap it in curly brackets.",
  prompt: "-\\sqrt{2}",
  test: "z = x + \\sqrt{-1}i",
  hint: "Wrap multiple-character square roots in {}"
};

const fracs = {
  title: "Fractions",
  explanation1: "To write a fraction in TeX, use the \\frac command.",
  explanation2: "Always input the numerator and denominator in curly brackets.",
  prompt: "-\\frac{1}{12}",
  test: "f(a) + \\frac{f'(a)}{1!}(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + ...",
  hint: "Wrap multiple-character numerators/denominators in {}"
};

const binoms = {
  title: "Binomial Coefficients",
  explanation1:
    "To write a binomial coefficient in TeX, use the \\binom command.",
  explanation2:
    "Always input the top and bottom numbers/expressions in curly brackets.",
  prompt: "\\binom{52}{4}",
  test:
    "\\binom{n + 1}{k + 1} = \\frac{n!}{(n - k)!k!} + \\frac{n!}{(n - k - 1)!(k + 1)!}",
  hint: "Recall \\frac"
};

const sums = {
  title: "Sums",
  explanation1:
    "To use summation notation in TeX, use the \\sum command. Input expressions below or above the summation using the _ and ^ characters respectively.",
  explanation2:
    "If either the expressions below or above the summation have more than one character, wrap them in curly brackets.",
  prompt: "\\sum_{k = 0}^n",
  test: "(x + y)^n = \\sum_{k = 0}^n \\binom{n}{k}x^{k}y^{n - k}",
  hint: "Recall \\frac and \\binom"
};

const ints = {
  title: "Integrals",
  explanation1:
    "To write an integral in TeX, use the \\int command. Input expressions below or above the integral analogously to sums, using the _ and ^ characters.",
  explanation2:
    "If either the expressions below or above the summation have more than one character, wrap them in curly brackets.",
  prompt: "\\int_0^1 x^2",
  test: "\\int_0^\\infty \\sqrt{x} e^{-x} dx = \\frac{1}{2} \\sqrt{\\pi}",
  hint: "Recall \\frac and \\sqrt and use \\pi"
};

function App(props) {
  return (
    <div className="general">
      <Header />
      <div className="row">
        <div className="col-sm-2">
          <Nav />
        </div>
        <div className="col-sm-10">
          <Switch>
            <Route path="/" exact render={props => <Home isAuthed={true} />} />
            <Route
              path="/exps"
              render={props => <WholeTutorial lesson={exps} isAuthed={true} />}
            />
            <Route
              path="/subs"
              render={props => <WholeTutorial lesson={subs} isAuthed={true} />}
            />
            <Route
              path="/sqrts"
              render={props => <WholeTutorial lesson={sqrts} isAuthed={true} />}
            />
            <Route
              path="/fracs"
              render={props => <WholeTutorial lesson={fracs} isAuthed={true} />}
            />
            <Route
              path="/binoms"
              render={props => (
                <WholeTutorial lesson={binoms} isAuthed={true} />
              )}
            />
            <Route
              path="/sums"
              render={props => <WholeTutorial lesson={sums} isAuthed={true} />}
            />
            <Route
              path="/ints"
              render={props => <WholeTutorial lesson={ints} isAuthed={true} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
