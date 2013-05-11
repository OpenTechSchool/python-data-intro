---

layout: ots
title: Working With Text Files

---

# What's a text file?

A text file is any file containing only readable characters.

A character can be a number like 3 or 6, or a letter of the alphabet like M or p. Taken together, programmers call numbers and letters the the set of *alphanumeric* characters.

Characters also include non-alphanumeric symbols like # or $, or even more exotic symbols like 汉 or Й. Each of these is a single character

(The last characters in the paragraph above will only appear correctly if your browser is using a font that supports Simplified Chinese and Cyrillic characters, respectively.)

Symbols in text files can have special meanings, for example Python source code files are a type of plain text file.

HTML files are another kind of plain text file. Even though HTML tags like &lt;i&gt; or &lt;div&gt; mean special things to a web browser they are still stored in a plain text format that can be viewed in any text editor.


# What isn't a text file?

The opposite of text files, "binary" files are any files where the format isn't made up of readable characters. Binary files can range from image files like JPEGs or GIFs, audio files like MP3s or binary document formats like Word or PDF.

This section has been a bit dry, so here's a link to a <a href="http://forgifs.com/gallery/d/161206-4/Firefighter-kitten-slides-down-banister.gif?" target="_blank">binary GIF file of a kitten</a>.

The main difference between a text file and a binary file is that binary files need special programs (or knowledge of the special format) to make sense. Text files can be edited by any program that edits plain text, and are easy to process in programming languages like Python.

### An aside about programmers

Programmers tend to like text files, and can get quite irked about complex binary files in proprietary formats. For example check out [this rant](https://code.google.com/p/xee/source/browse/XeePhotoshopLoader.m?r=f16763d221dfca6253983824b470adf553a19e06#108) contributed by an open source programmer who had to write a program to read the Adobe Photoshop binary file format.

The details aren't important, but note that noone has ever gotten quite this cranky about plain text files. That's why we're sticking to text files today!

# Reading files into Python

Download this text file, [months.txt](../files/months.txt) containing names of months of the year

    January
    February
    March

... etc

What do you think the following code does, if you run it in the same directory as *months.txt*?

    f = open("months.txt")
    print(f.read())

### Solution:
It prints the contents of the text file out on the console.

## What's really happening here?

* The `open` function creates a *file object* (a way of getting at the contents of the file), which is then stored in the variable `f`.

* `f.read()` tells the file object to read the full contents of the file, and return it as a string.

## Reading by smaller pieces

`read()` can also take an argument, which is the maximum number of characters to read from a file.

Once `read()` has reached the end of the file, it returns an empty string (zero characters, the string "")

Can you work out what this code would do?

    f = open("months.txt")
    next = f.read(1)
    while next != "":
        print(next)
        next = f.read(1)

### Solution:
It prints the contents of the file, one character at a time, until the end of the file is reached:

    J
    a
    n
    u
    a
    r
    y
    
    F
    e
    b
    r

... and so on

### Bonus Question #1

What is the `while` statement in the above code doing? When does the program exit the while loop?

### Bonus Question #2

What would happen if you replaced the `read(1)`s in the code above with `read(2)`s? Think about it first, then try it and see what happens!


# Reading files line by line

So far we can read a whole file, or we can read a certain number of characters from a file. How about if you just want to read a single line from a file?

## How lines are represented

In text files, lines are broken up by special invisible characters that mark *end of line*. Invisible characters like these are sometimes called *control characters*.

In Python, the control character for the end of a line is always represented as `\n`. You can use `\n` in a string anywhere that you want to break a line:

    print("I want two lines!\nThe newline character gives me two lines.")

Produces:

    I want two lines!
    The newline character gives me two lines.

Control characters like `\n` date from the days when computers had typewriter style interfaces (see "Teletype machines".) Characters had literal meanings like *Press the Carriage Return Lever* or *Press the Line Feed button*.

<a href="http://www.flickr.com/photos/dancentury/3916969051/" title="A Teletype Machine by DanCentury, on Flickr"><img src="http://farm3.staticflickr.com/2553/3916969051_ecc076867e.jpg" width="500" height="375" alt="A Teletype Machine"></a>

### Enough about typewriters!

Yes, back to Python files! To read a file line by line you could just keep reading one character a time with `.read(1)`, until you run into a newline character `\n`.

There's an easier way though, which os to use the `.readline()` method in place of `.read()`.

Have another look at the one-character-per-line code example from earlier in this chapter. Can you modify it to read from the file line by line instead of character by character?

### Solution:

    f = open("months.txt")
    next = f.readline()
    while next != "":
        print(next)
        next = f.readline()

How's that look? Something's not quite right, is it?

    January

    February

    March

... `readline()` also returns the newline `\n` at the end of the line, and `print()` automatically appends a newline as well - having two newlines in a row means there is a the blank line between each line with content.

You can strip newlines (and other "whitespace" characters) from each end of a string by using the [.strip() method](http://docs.python.org/3.3/library/stdtypes.html#str.strip). We used this briefly in the Introduction to Python course.

Can you remember how to use it? (take a look at the documentation link above to refresh your memory.)

### Solution:

You can either replace

    print(next)

With

    print(next.strip())

Or you can make it into two lines, like this:

    next = next.strip()
    print(next)

In the two line alternative you update the `next` variable to hold the "stripped" version. This might be useful if you intend to use the value of `next` again, later on.

## Reading Every Line

`readline()` will let you read through a file line by line. However, there are two even easier ways to read an entire file this way:

    f = open("months.txt")
    print(f.readlines())

The `readlines()` method reads all the lines in a file and returns them as a Python list.

You can then iterate over the list of lines like this:

    f = open("months.txt")
    for month in f.readlines():
       print("Month " + month.strip())

In fact, you don't even have to call `readlines()` - Python implicitly detects that if you try to iterate through a text file with a for loop, you probably want to iterate through it line by line:

    f = open("months.txt")
    for month in f:
       print("Month " + month.strip())


# Writing to files

When you `open()` a file, you can optionally specify a *file mode*, which tells Python what you want to do with the file. The default mode is `r` for read, but another mode is `w` to write to a file.

    f = open("awesomenewfile.txt", "w")

There are actually a whole lot of file modes, `r` and `w` are just the most common. [There is a full list in the Python documentation for the open function](http://docs.python.org/3/library/functions.html#open) or you can open a Python interpreter and type `help(open)` to see it in the interpreter.

Can you guess how to write a string to a file in Python?

### Hint
File objects have a method for writing. You can find out about it by viewing the built-in help for the file object. Open a Python interpreter and type:

    f = open("awesomenewfile.txt", "w")
    help(f)

... Use the arrow keys to navigate the Python help display, and press *q* to exit once you've found the method you want.

### Solution

    f = open("awesomenewfile.txt", "w")
    f.write("Awesome message!")


### Why do you use 'print' to write things on the console, but 'write' for files?

I don't know. I think it's just been that way forever.

There is one important difference, `print()` automatically ends the line. `write()` doesn't, if you want to end the line you'll need to add the newline character `\n` yourself.

Can you write a program which creates a two line text file?

### Hint
To look at the contents of a text file, you can open it in your text editor.

Alternatively, if you're using OS X or Linux you can type `cat <filename>` in a terminal (not a Python interpreter, the plain terminal shell you run Python from), to print the contents out. In the Windows terminal, you can use `type <filename>` to do the same thing.

### Solution:

    f = open("mylongfile.txt", "w")
    f.write("First line\n")
    f.write("Second line")

