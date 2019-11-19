# Learn LaTeX

[learn-latex.web.app](learn-latex.web.app)

Learn LaTeX is a learn-by-example web app for the TeX typesetting language. It consists of a set of lessons and challenges on basic LaTeX commands. 

<img src="https://github.com/benchaplin/learn_latex_site/blob/master/images/IMG_5B63F8C7D5F3-1.jpeg" width=300 />

As seen above, mobile is also supported.

## Dependencies 

Learn LaTeX is a React + Node app, with the help of [KaTeX](https://github.com/KaTeX/KaTeX) and [react-katex](https://github.com/talyssonoc/react-katex) for live LaTeX compiling.

Styling is aided by Bootstrap 4 and Fontawesome.

## Contribute

If you have an idea for a lesson, feel free to edit learn_latex_site/src/lessons/lessons.js and submit a pull request. Make sure the new lesson object is created with the same properties as the existing ones.

<b>Desired functionality:</b>
<ul>
  <li>Must wrap TeX in '$' to signify math mode, else prints string</li>
  <li>Multi-line lesson set: teach environments (equation vs. inline, align, def/lemma/thm/cor etc.)</li>
</ul>
