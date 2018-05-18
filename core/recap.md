---

layout: ots
title: Python and Jupyter-Notebook (Recap)

---

This chapter is a recap of some of the important points of the Introduction to Programming with Python course. Feel free to skip ahead if this course is still fresh in your memory. In addition, we will introduce jupyter-notebooks, an interactive way to execute python scripts.

# Installing Python and Jupyter

The easiest way to install python on your computer is to use *anaconda*. There are many other ways to get python and jupyter but this one is most suitable for beginners. Follow the instructions for your operating system on [https://www.anaconda.com/download/].

With the anaconda package, you get the anaconda navigator, an interactive program that lets you install addons and run programs.

Use the anaconda navigator to install jupyter notebook. Alternatively, you can use the command line and type
```
conda install jupyter notebook
```



# Running Python and Jupyter

After installing Python on your system successfully, you can start the
interactive Python prompt by typing `python` in the command line and
pressing `<Enter>`.  It will show you some context information about
Python similar to this::
    
    Python 3.6.5 (default, Apr  1 2018, 05:46:30) 
    [GCC 7.3.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>> 

On Windows you can open Python through the Start Menu.

To exit the Python interpreter, press `Ctrl-D`.

To run a program saved in a Python file, you can run it from the command line like so:

    python program.py

On Windows you can run a Python file by double-clicking it.

But there is a much more interactive and fast way to start using python. Launch jupyter notebook from the anaconda navigator or by typing on the command line

```
jupyter notebook
```

It will start the python interpreter in the background and show a browser page, that is connected to python and will interactively edit and run your python code.

Navigate to a directory where you want to start you python project and press the *new* button on the top right of the web page.




# Loops

What does this code do?

<div class="jupyter">
```python
for i in 2, 4, 6, 8:
    print(i)
```

    2
    4
    6
    8
</div>

### Solution

This code prints the even numbers 2 through 8, one per line.

### Bonus Challenge

Python has a built-in function called `range` that can automatically generate a range of numbers like \[2, 4, 6, 8\]. For example, `range(1,10)` is a sequence of the numbers 1 through 9 (a common but sometimes confusing thing in programming is for the "end" number not to be included in a sequence.)

    for i in range(1,10):
        print(i)

Can you make a `range` equivalent to \[2, 4, 6, 8\]? To get some clues, you can open an interactive Python Interpreter and type `help(range)`. The useful details are near the top. Press 'q' to exit the help viewer when you're done.


# Variables

You can use variables to manipulate values inside code. What does this code do?

    total = 0
    for i in 1, 3, 7:
        total = total + i
    print(total)

### Solution

This code prints 11 - the sum of the numbers 1, 3 and 7.

### Bonus Challenge

If you don't want to use a `for` loop for some reason, Python actually has a built-in function called `sum` that lets you bypass it completely. You can get the same result with this:

    print(sum([1,3,7]))

Can you make a one line Python statement that uses both `sum` and `range` to print the sum of the numbers 1 through 10?


# Functions

You can define your own functions with parameters in order to reuse some code again with slight differences. What does this code print?

    def say_hello_to(name):
        print("Hello " + name)

    say_hello_to("Miranda")
    say_hello_to("Fred")

### Solution

    Hello Miranda
    Hello Fred


# Conditionals

You can use the 'if' statement to execute some statements only if a condition is true. What does this code print?

    angle = 5
    if angle > 0:
        print("Turning clockwise")
    elif angle < 0:
        print("Turning anticlockwise")
    else:
        print("Not turning at all")

### Solution

    Turning clockwise


## Next Chapter

All set with Python? On to the next chapter, [Data Structures in Python](data.html)
