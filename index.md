---

layout: ots
title: Introduction to Data Processing with Python

---

This is the course content for Introduction to Data Processing with Python, which has been developed and maintained by [OpenTechSchool](http://www.opentechschool.org).

# Welcome

Welcome to Introduction to Data Processing with Python. In this workshop we will take you through the fundamentals of working with text and other types of data with Python. After the workshop you'll know how to use Python to process files, extract information from the data in those files, and reprocess the data into different formats.

We only expect you to know a little Python, just the things covered in the [Introduction to Programming](http://opentechschool.github.com/python-beginners/en/index.html) workshop. You definitely do not need to know a lot. You will need Python 3+ installed, the [Introduction to Programming](http://opentechschool.github.com/python-beginners/en/index.html) course uses that version (and contains instructions on how to install it.)

## What we'll do today

Suppose you're a greengrocer, and you run a survey to see what radish varieties your customers prefer the most. You have your assistant type up the survey results into a text file on your computer, so you have 300 lines of survey data, each line has a name and a radish variety:

    Angelina Belmore - Plum Purple
    Fred Smith - Red king
    Matthew Wroe - White Icicle
    Keira Cani - Sicily Giant
    Isaac Hallstrom - Red King
    Jin Li - White Icicle
    Georgia McKellar - Bunny Tail
    Maximilian Avdeev - Cherry Belle
    Lorna Beneventi - White Icicle
    Lara Tunnecliffe - Plum Purple
    Hugo Sodersten - Daikon
... and so on

You want to know:

* What's the most popular radish variety?
* What are the least popular?
* Did anyone vote twice?
* Did your arch-enemy "Rich McKnight" vote?

Maybe for next time you'll update the survey so people can choose their top three radish varieties.

### Useful?

... as _ridiculously contrived_ as this example is, I'm sure lots of you have come across situations where you have some data and you want to extract some relevant information from it.

By the end of this workshop, you should have the knowledge to quickly write a program in Python in order to quickly and easily solve this problem, and many more besides.

# Core workshop material

* [Background recap](core/setup.html) - A quick recap of some of the Introduction to Programming essentials.

* [Working With Text Files](core/text-files.html) - What is a text file? How do we get them in and out of Python?
* [Working With Strings](core/strings.html) - Once we have our text in Python, what can we do with it?
* [Regular Expressions](core/regex.html) - A powerful way to find patterns in text.
* [Strings and Numbers](core/numbers.html) - Converting strings to numbers and back again, working with numeric data.
* [CSV Files](core/csv.html) - Reading and writing comma-separated data with the csv module

# Extra fun stuff

* [Basic statistics with NumPy](extras/numpy.html) - Using NumPy to perform some basic statistical operations on data.
* [Fundamentals of String Encoding](extras/encoding.html) - Basics of Unicode to work with non-Latin characters, or even these: ☃☃👍.

# Reference material

* ...
