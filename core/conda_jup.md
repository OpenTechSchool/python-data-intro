---

layout: ots-jupyter
title: Intro to Anaconda and Jupyter Notebooks

---

This chapter provides a brief introduction to conda, a package management system, and Jupyter Notebooks, which provide an easy and efficient way analyze data and communicate insights, all in one document.

Is it possible to do data science without these tools? Yes, absolutely. Nevertheless, we recommend that you give them a try for a few reasons: First, they are extremely popular, so it is almost certain that you will encounter them at some point in your career. Second, both are tailor made for the data science workflow. And third, they can make your first steps into data science a little easier.  

# Getting started with Conda

### What is conda and why should you use it?

Conda is a package management system made with data scientists in mind, but what are packages? Packages are files containing function definitions and statements that can be imported into an active Python session to perform specific tasks. Many packages have been developed and shared by others that solve problems that we have as data scientists. For example, the NumPy, SciPy, and Pandas packages contain functions and data structures that can help us do things like linear algebra, machine learning, manipulate data frames, and perform time series analyses.

>__Note:__ Packages are typically called [modules](https://docs.python.org/3/tutorial/modules.html) by the Python community. We will continue to refer to "packages" in the present context since the topic at hand is the "package manager" conda. That said, in the other chapters we will maintain the Pythonic norm of calling them "modules".
 
If, for example, we need a random float between 0 and 1, we'll need to import the package `random` and use the function `random()`. Try entering the following into your console:

<div class = 'jupyter'>
```python
import random
random.random()
```
```python
0.9585919464556905
```
</div>

Many packages, like `random`, are bundled with the base Python distribution, but others need to be downloaded and installed, which is why we need a package manager. There are a number of pckage managers. For instance, `pip` is quite popular and is included in all Python binaries starting with Python 3.4. We prefer conda for reasons that will become clear below. 

The best way to get conda is to download the full [Anaconda](https://www.anaconda.com/download/) distribution. Anaconda not only includes many of the most important Python data science packages, it also has a graphical installer and a graphical user interface, the _Anaconda Navigator_, for package management, in case you don't yet feel comfortable using the command line.

Once you've installed Anaconda, run the Anaconda Navigator by clicking it's icon. You should see something like this:

![Anaconda Navigator Home](../images/anaconda_nav_home.png)

The _Home_ tab contains applications that can be installed – or launched if already installed.If you click on the _Environments_ tab you will see something like this:

![Anaconda Navigator Environments](../images/anaconda_nav_env.png)

Here we see that the user has created two environments on top of the `base (root)`: `python2` and `python3`. To create a new environment `py36` for Python 3.6 take the following steps:

1. Click __Create__ at the bottom of the middle panel.
2. Give your environment a name, e.g. _py36_.
3. Choose Python version 3.6.
4. Click the __Create__ button.

Behind the scenes, conda creates your environment and adds some necessary packages. Alternatively, open a terminal and enter the following:

    conda create -n py3 python=3.6


 
As data scientists it is important to ensure the _reproducibilty_ of our work, i.e. other data scientists should be able to follow the same steps and arrive at the same answers. This is where conda shines, because not only can we use it to download packages, we can also create _environments_ where different package versions can be maintained without conflicting with one another. We can even create environments with different Python versions!  
 
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

It will start the python interpreter in the background and show a browser page that is connected to python. The browser will let you interactively edit and run your python code on your local machine. In this tutorial, we will encourage you to use jupyter-notebooks as it is a tool often used in data science. The python code is the same whether you run it interactively in jupyter or not.

In the jupyter browser window, navigate to a directory where you want to start you python project and press the *new* button on the top right of the web page.

![create a new notebook in jupyter](../images/jupyter_new.png)


With jupyter and python running, lets recap some of the basic features of the python language. Type the code into a *cell* in jupyter and execute the cell by pressing the *Run* button or *Shift+Return* on your keyboard.

# Python language basics

## Loops

What does this code do?

<div class="jupyter">
```python
for i in [2, 4, 6, 8]:
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
