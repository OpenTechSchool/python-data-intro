---

layout: ots
title: Creating Charts

---

So far we haven't done anything to really explore IPython Notebook's features, but now we're going to use the library *matplotlib* to create some graphical charts based on our data.

Here's an example of a simple chart:

    import matplotlib.pyplot as plt
    vals = [3,2,5,0,1]
    plt.plot(vals)

Try this in Notebook and you'll see the line chart is plotted in the notebook, under the cell.

matplotlib can also output charts in other formats like image files, but being able to edit the code and regenerate the chart inline is one of the nice features of IPython Notebook!

## Radish Votes

Let's start by using matplotlib to generate a bar graph to display the vote counts from the radish variety program we just wrote.

If you already have the radish program loaded in IPython Notebook, then you should have generated the variable named "counts" which holds a dictionary mapping each radish name to the vote count. Let's use that to plot the vote counts.

You can add this as a new cell in your notebook:

    import matplotlib.pyplot as plt
    import numpy as np
    
    names = []
    votes = []
    # Split the dictionary of name:votes into two lists, one for names and one for vote count
    for radish in counts:
        names.append(radish)
        votes.append(counts[radish])
    
    # The X axis can just be numbered 0,1,2,3...
    x = np.arange(len(counts))
    
    plt.bar(x, votes)
    plt.xticks(x + 0.5, names, rotation=90)

* TODO Picture

There's a lot going on here so we'll go through it line by line. Don't be afraid to add `print()` statements, or tweak some of the values, or comment out certain lines (like the xticks line) and rerun the code in order to figure out what's going on here.

    import matplotlib.pyplot as plt
    import numpy as np

We're importing two modules - pyplot is one way to plot graph data with Matplotlib. It's modelled on the way charting works in another popular commercial program, MATLab.

NumPy is a module providing lots of numeric functions for Python.

    names = []
    votes = []
    # Split the dictionary of names->votes into two lists, one holding names and the other holding vote counts
    for radish in counts:
        names.append(radish)
        votes.append(counts[radish])

This loop processes the dictionary into a format that's easy to send to matplotlib - a list of radish names (for the labels on the bars) and a list of vote counts (for the actual graph.)

    # The X axis can just be numbered 0,1,2,3...
    x = np.arange(len(counts))

We create a range of indexes for the X values in the graph, one entry for each data point in the graph numbered 0,1,2,3. This will spread out the graph bars evenly across the X axis on the plot.

`np.arange` is a NumPy function like the `range()` function in Python, only it produces a NumPy array as a result. We'll see why this is useful in a second.

    plt.bar(x, votes)

* TODO image showing just the bar section

`bar()` creates a bar graph, using the "x" values as the X axis positions and the values in the votes array (ie the vote counts) as the height of each bar.

    plt.xticks(x + 0.5, names, rotation=90)

* TODO image showing just the ticks

`xticks()` specifies a range of values to use as labels ("ticks") for the X axis.

`x + 0.5` is a special expression because x is a NumPy array. NumPy arrays have some special capabilities that normal lists or `range()` objects don't have. `x + 0.5` for a normal Python range would be erroneous (you can't add a plain number to a list), but for [NumPy arrays this means](http://docs.scipy.org/doc/numpy/reference/arrays.ndarray.html#arithmetic-and-comparison-operations) "add 0.5 to all of the numbers in the array."

This means that `0,1,2,3`,etc. becomes `0.5,1.5,2.5,3.5`,etc. This is what positions the X axis labels in the middle of each bar. If you remove the `+ 0.5` then the labels move across to the left hind side of the bar. Try it and see!

Finally, `rotation=90` ensures that the labels are drawn sideways (90 degree angle) not straight. You can experiment with different rotations to create different effects.


## Advanced Charting

*matplotlib* and *pyplot* are both extremely powerful charting frameworks.

To take a look at some of what they can do (and the sample Python code that does it), take a moment to browse through the [Matplotlib thumbnail gallery](http://matplotlib.org/gallery.html#pylab_examples) and the [Pyplot tutorial](http://matplotlib.org/users/pyplot_tutorial.html).

Because these tools are fairly complex it can also be helpful to copy and tweak an existing example from the gallery, if you're looking to create a new chart.

(You'll notice the term "pylab" used on some of those pages. Pylab just means Pyplot combined with Numpy.)
