---

layout: ots-jupyter
title: Recap of Python Basics

---

This chapter reviews some of the basic concepts first presented in the [_Introduction to Programming with Python_](http://opentechschool.github.io/python-beginners/) course. Feel free to skip ahead if that course is still fresh in your memory.

## Loops

What does this code do?

<div class="jupyter">
```python
for i in [2, 4, 6, 8]
    print(i)
```

    2
    4
    6
    8
</div>

This code prints the even numbers 2 through 8, one per line.

### Bonus Challenge

Python has a built-in function called `range` that can automatically generate a range of numbers like \[2, 4, 6, 8\]. For example, `range(1,10)` is a sequence of the numbers 1 through 9 (a common but sometimes confusing thing in programming is for the "end" number not to be included in a sequence.)

<div class="jupyter">
```python
for i in range(1,10):
    print(i)
```
</div>

Can you make a `range` equivalent to \[2, 4, 6, 8\]? To get some clues, type `help(range)`. The useful details are near the top. The help utility is available for most python functions and once you know how to read them, they are very useful.


## Variables

You can use variables to manipulate values inside code. What does this code do?

<div class="jupyter">
```python
total = 0
for i in 1, 3, 7:
    total = total + i
print(total)
```

    11
</div>

This code prints the sum of the numbers 1, 3 and 7.

### Bonus Challenge

If you don't want to use a `for` loop for some reason, Python actually has a built-in function called `sum` that lets you bypass it completely. You can get the same result with this:

<div class="jupyter">
```python
print(sum([1,3,7]))
```
</div>

Can you make a one line Python statement that uses both `sum` and `range` to print the sum of the numbers 1 through 10?


## Functions

You can define your own functions with parameters in order to reuse some code again with slight differences. What does this code print?

<div class="jupyter">
```python
def say_hello_to(name):
    print("Hello " + name)

say_hello_to("Miranda")
say_hello_to("Fred")
```

    Hello Miranda
    Hello Fred
</div>

## Conditionals

You can use the 'if' statement to execute some statements only if a condition is true. What does this code print?

<div class="jupyter">

```python
angle = 5
if angle > 0:
    print("Turning clockwise")
elif angle < 0:
    print("Turning anticlockwise")
else:
    print("Not turning at all")

```

    Turning clockwise
</div>


## Next Chapter

All set with Python? On to the next chapter, [Data Structures in Python](data.html)
