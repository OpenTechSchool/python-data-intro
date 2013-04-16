---

layout: ots
title: Recap of Python Essentials

---

This chapter is just a recap of some of the important points of the Introduction to Programming with Python course. Feel free to skip ahead if this course is still fresh in your memory.

# Running Python

After installing Python on your system successfully, you can start the
interactive Python prompt by typing `python` in the command line and
pressing `<Enter>`.  It will show you some context information about
Python similar to this::

    Python 2.7.2 (default, Feb  1 2012, 00:28:57) 
    [GCC 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2335.15.00)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> 

On Windows you can open Python through the Start Menu.

To exit the Python interpreter, press `Ctrl-D`.

To run a program saved Python file, you can run it from the command line like so:

    python program.py

On Windows you can run a Python file by double-clicking it.


# Loops

What does this code do?

    for i in range(10):
        print(i)

Clue: To find out what the expression `range(10)` evaluates to, open a Python interpreter and then type that expression in by itself. The output you see is a Python `list`, something we cover in the next chapter.

### Solution

This code prints the numbers 0 through 9, one per line.

# Variables

You can use variables to manipulate values inside code. What does this code do?

    total = 0
    for i in range(10):
        total = total + i
    print(total)

### Solution

This code prints 45 - the sum of the numbers 0 through 9.

### Bonus Detail

Python actually has a built-in function called `sum` that sums a sequence of values automatically, you don't need the `for` loop. You can get the same result with this:

    print(sum(range(10)))


# Functions

You can define your own functions with parameters in order to reuse some code again with slight differences. What does this code print?

    def say_hello_to(name):
        print("Hello " + name)
    
    say_hello_to("Miranda")
    say_hello_to("Fred")
    
### Solution

    Turning anticlockwise!

