---
title: "Types of Research I: Basic, Applied; Quantitative, Qualitative"
teaching: 10
exercises: 4
---

:::::::::::::::::::::::::::::::::::::: questions 

1. What is the difference between basic and applied research?
2. When would you use qualitative instead of quantitative research?
3. Can a study be both qualitative and quantitative?
4. How do different research types affect the kind of data you collect?

::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::: objectives

Learners will be able to:

- Distinguish between basic and applied research.
- Compare and contrast quantitative or qualitative research.
- Identify when and why each type is used.
- Connect each research type to real-world examples and questions.

::::::::::::::::::::::::::::::::::::::::::::::::

## Introduction

Let’s go back to our earlier curiosity:  
_Why are so many students distracted by their phones during lectures?_

Now imagine five different researchers trying to answer this question, each with their own method and mindset:

- One carefully observes students and documents their behavior.
- Another hands out a questionnaire to hundreds of students.
- A third digs into journal articles to find trends across universities.
- Another conducts interviews to understand students’ perspectives.
- And yet another runs an experiment to see if a new teaching method reduces phone use.

Are all of these research? Yes.  
Are they all the same type of research? Not quite.
 
This episode explores the **various pathways of research**, each tailored to a particular kind of question, context, or goal. 
You'll learn how different kinds of research give us different kinds of answers.

## How do we categorise research?
There's more than one way to slice the research pie. But most research falls into one or more of the broad categories below:

### 1. Basic vs. Applied Research

#### Basic (or Pure) Research
This is aimed at expanding our general knowledge, without necessarily needing immediate application. That is, we don't intend to solve a problem today.

Instead, basic research asks: How does the world work?

Thus, it is common in theoretical disciplines or foundational sciences.

- **Example**: Studying how memory works in the brain, even if no product or intervention is being developed.


:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: instructor

Inline instructor notes can help inform instructors of timing challenges
associated with the lessons. They appear in the "Instructor View"

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::: challenge 

## Challenge 1: Can you do it?

What is the output of this command?

```r
paste("This", "new", "lesson", "looks", "good")
```

:::::::::::::::::::::::: solution 

## Output
 
```output
[1] "This new lesson looks good"
```

:::::::::::::::::::::::::::::::::


## Challenge 2: how do you nest solutions within challenge blocks?

:::::::::::::::::::::::: solution 

You can add a line with at least three colons and a `solution` tag.

:::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::

## Figures

You can use standard markdown for static figures with the following syntax:

`![optional caption that appears below the figure](figure url){alt='alt text for
accessibility purposes'}`

![You belong in The Carpentries!](https://raw.githubusercontent.com/carpentries/logo/master/Badge_Carpentries.svg){alt='Blue Carpentries hex person logo with no text.'}

::::::::::::::::::::::::::::::::::::: callout

Callout sections can highlight information.

They are sometimes used to emphasise particularly important points
but are also used in some lessons to present "asides": 
content that is not central to the narrative of the lesson,
e.g. by providing the answer to a commonly-asked question.

::::::::::::::::::::::::::::::::::::::::::::::::


## Math

One of our episodes contains $\LaTeX$ equations when describing how to create
dynamic reports with {knitr}, so we now use mathjax to describe this:

`$\alpha = \dfrac{1}{(1 - \beta)^2}$` becomes: $\alpha = \dfrac{1}{(1 - \beta)^2}$

Cool, right?

::::::::::::::::::::::::::::::::::::: keypoints 

- Use `.md` files for episodes when you want static content
- Use `.Rmd` files for episodes when you need to generate output
- Run `sandpaper::check_lesson()` to identify any issues with your lesson
- Run `sandpaper::build_lesson()` to preview your lesson locally

::::::::::::::::::::::::::::::::::::::::::::::::

[r-markdown]: https://rmarkdown.rstudio.com/

