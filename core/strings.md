---

layout: ots
title: Working with Strings

---

# A problem

Now we know how to work with text files, we'll use that knowledge to solve a problem:

Suppose you're a greengrocer, and you run a survey to see what radish varieties your customers prefer the most. You have your assistant type up the survey results into a text file on your computer, so you have 300 lines of survey data in the file [radishsurvey.txt](../files/radishsurvey.txt). Each line consists of a name, a hyphen, then a radish variety:

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

<a href="http://www.flickr.com/photos/brixton/2045816352/" title="Radishes radishes radishes by brixton, on Flickr"><img src="http://farm3.staticflickr.com/2298/2045816352_25cba9e434_m.jpg" width="240" height="180" alt="Radishes radishes radishes"></a>

You want to know:

* What's the most popular radish variety?
* What are the least popular?
* Did anyone vote twice?

# Useful?

... as _ridiculously contrived_ as this example is, I'm sure lots of you have come across situations where you have some data and you want to extract some relevant information from it.


# Reading The Survey

Save the file [radishsurvey.txt](../files/radishsurvey.txt) to your computer. How do we write a program to find out which person voted for each radish preference? 

From the previous chapter, we know that we can easily go through the file line by line, and each line will have a value like `"Jin Li - White Icicle\n"`. We also know that we can strip off the trailing newline with the `strip()` method:

    for line in open("radishsurvey.txt"):
        line = line.strip()
        # Do something with each line

We need a way to split each line into the name and the vote. Thankfully, Python comes with dozens of string methods including one called `split()`. [Have a look at the documentation for split()](http://docs.python.org/3.3/library/stdtypes.html#str.split) and see if you can figure out how to split each line into the name and the vote.

(Don't worry if you can't write a program that does this just yet, but at least have a think about it before you skip to the solution.)

### Solution

    for line in open("radishsurvey.txt"):
       line = line.strip()
       parts = line.split(" - ")
       name = parts[0]
       vote = parts[1]
       print(name + " voted for " + vote)

There's a few things going on here, so let's go through it line by line. *Walking through a program in your head and thinking about what each line does by itself is a good way to start to understand it*

    line = line.strip()

If `line` was `"Jin Li - White Icicle\n"`, this code strips the newline from the end so the value of `line` becomes `"Jin Li - White Icicle"`

    parts = line.split(" - ")

This code looks for the substring `" - "` anywhere inside `line`, and uses that as a *delimiter* to split the string up into a list of strings on either side.

After this line runs, `parts` has the value `['Jin Li', 'White Icicle']`.

`split()` is a very versatile function. Try typing in a few split experiments yourself in Notebook.

See if you can guess what each of these does before you run them:

    "1,2,3,4,5".split(",")

    "cheese".split(",")

    "Jin Li - White - Icicle".split(" - ")

    "Jin Li - White Icicle".split("-")


Once we've split the string into `parts`, we can use indexes in the `parts` list to get at the name (the first element in the list) and the vote (the second element in the list.)

    name = parts[0]
    vote = parts[1]

These two lines of code just make this clear to the reader by storing each field in a named variable. You could use `parts[0]` anywhere you used `name` and `parts[1]` anywhere that you used `vote`, but then your code would be harder for someone else to understand.

    print(name + " voted for " + vote)

This last line *concatenates* (joins) the two variable values together with the string `" voted for "`, to make a message which is printed out.


# Inspecting Votes

Can you write a program which only prints out the names of people who voted for *White Icicle* radishes?

Use the previous example as a base. You'll need to compare the vote with the string `"White Icicle"`, for each line in the file.

### Solution

    for line in open("radishsurvey.txt"):
       line = line.strip()
       parts = line.split(" - ")
       name, vote = parts
       if vote == "White Icicle":
          print(name + " likes White Icicle!")

You might notice that the code splitting the line has become even shorter here. Instead of assigning each element of parts separately, we can assign them together using a technique called "multiple assignment". The line `name, vote = parts` means to assign each variable to the corresponding item in the list.

### More about multiple assignment

Take a moment to play with multiple assignment in IPython Notebook (see the previous solution for an example of this.) Try some lines like these:

    a, b, c = [1, 2, 3]
    print(b)
    print(a)

Or this:

    name, cheese, cracker = "Fred,Jarlsberg,Rye".split(",")
    print(cheese)

You'll notice that multiple assignment only works when the number of elements being assigned on the left hand side of the " = " matches the number on the right.

For instance, this doesn't work:

    x, y, z = [1, 2]

Neither does this:

    name, cheese, cracker = "Fred,Jarlsberg,Rye,Buckwheat".split(",")

You may have noticed in the [documentation for split()](http://docs.python.org/3/library/stdtypes.html#str.split) that you can attach an optional second argument which is the maximum number of times to split the string. You can use this to prevent errors by creating too many elements, like this:

    name, cheese, cracker = "Fred,Jarlsberg,Rye,Buckwheat".split(",",2)
    print(name)
    print(cracker)

Confusion warning: The optional argument to split is the *number of times to split the string*, not the number of parts to split it into. So splitting it one time creates two strings, splitting it two times creates three strings, etc. A little "got you" moment for the unwary Python programmer!

# Tip

Multiple assignment actually makes use of a Python type called a 'tuple' and a notion called 'sequence unpacking'. Tuples and sequence unpacking aren't required knowledge to complete this workshop. However if you're feeling curious you can have a peek at the [Python tutorial](http://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences) where the concept of a tuple is explained.

# Counting Votes

Can you write a program which counts the total number of votes for *White Icicle* radishes?

Use your previous solution as a base. You'll need a variable to hold the number of votes recorded for *White Icicle*, which you increment (i.e add one to) as part of the loop.

### Solution

    print("Counting votes for White Icicle...")
    count = 0
    for line in open("radishsurvey.txt"):
       line = line.strip()
       name, vote = line.split(" - ")
       if vote == "White Icicle":
          count = count + 1
    print(count)


## Making a generic function

Can you rewrite this code as a *function definition* where you specify an argument with the name of the radish you want to count votes for, and the function returns the number of votes for that radish variety?

Using your function, can you write a program which counts votes for White Icicle, Daikon and Sicily Giant radishes, and prints out all three counts?

### Solution

    def count_votes(radish):
        print("Counting votes for " + radish + "...")
        count = 0
        for line in open("radishsurvey.txt"):
            line = line.strip()
            name, vote = line.split(" - ")
            if vote == radish:
                count = count + 1
        return count

    print(count_votes("White Icicle"))

    print(count_votes("Daikon"))

    print(count_votes("Sicily Giant"))


# Counting All The Votes

Counting votes for each radish variety is a bit time consuming, you have to know all the names in advance and you have to loop through the file multiple times. How about if you could automatically find all the varieties that were voted for, and count them all in one pass?

You'll need a data structure where you can associate a radish variety with the number of votes counted for it. A dictionary would be perfect!

Imagine a program that can count votes to create a dictionary with contents like this:

    {
        'White Icicle': 65,
        'Snow Belle': 63,
        'Champion': 76,
        'Cherry Belle': 58,
        'Daikon': 63,
        'French Breakfast': 72,
        'Bunny Tail': 72,
        'Sicily Giant': 57,
        'Red King': 56,
        'Plum Purple': 56,
        'April Cross': 72
    }

Meaning the key 'White Icicle' is associated with the value of 65 votes, the key 'Snow Belle' is associated with the value of 63 votes, 'Champion' has 76 votes, etc, etc.

Can you create such a program? Start with one of your previous vote-counting programs and try to modify it to count all varieties.

Here are two snippets of code you might find useful:

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}

also

    if vote not in counts:
        # First vote for this variety
        counts[vote] = 1
    else:
        # Increment the vote count
        counts[vote] = counts[vote] + 1

Remember that for dictionaries `counts[vote]` means "the value in `counts` which is associated with the key `vote`". In this case, the key is a string (radish name) and the value is a number (vote count.)

### Solution

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}

    for line in open("radishsurvey.txt"):
        line = line.strip()
        name, vote = line.split(" - ")
        if vote not in counts:
            # First vote for this variety
            counts[vote] = 1
        else:
            # Increment the vote count
            counts[vote] = counts[vote] + 1
    print(counts)

### Pretty printing

When you run this program the output is pretty hard for a person to read, even though it's all there. What we want is to print the data in a way which is easy for people to read. Programmers call this "pretty printing"

Instead of

    print(counts)

A pretty printing option could be:

    for name in counts:
        count = counts[name]
        print(name + ": " + str(count))

* This option prints each vote on its own line.

* Iterating through a dictionary (ie `for name in counts`) means iterating through the *keys* (radish variety names), so we still need to look up each *value* (the vote count) with `count = counts[name]`.

* Why do we use `str(count)` here? Try removing the `str()` call and see what python tells you! `str()` returns the string equivalent of the number, ie `str(12)` returns `"12"`.

Python needs to distinguish between strings and numbers for lots of reasons. For example, using numbers `12+1` is 13. Using strings, `"12" + "1"` *concatenates* the strings to give you `"121"`.

### Tip

Python actually has a built-in module called [pprint](http://docs.python.org/3/library/pprint.html) to make it easy to pretty-print things. You can use it like:

    from pprint import pprint
    pprint(some_dictionary)

Try it out with your program if you like!

### Sneakier Tip

IPython Notebook can automatically pretty-print things, you just need to make them the last thing in the cell.

So if you replace `print(counts)` with simply `counts` on the last line, this becomes the last thing in the cell and gets formatted nicely in the output.

The reason is that `print` is a built-in Python function and formats the dictionary the only way it knows - the simple ugly way. By the time IPython Notebook sees the dictionary contents it's already formatted as a string. Whereas `count` is still a dictionary, so IPython Notebook can apply smarts to format it in a better way.

# Cleaning ("Munging") data

There's some weird stuff in our vote count:

    Red King: 1
    red king: 3
    White Icicle: 1
     Cherry Belle: 2
    daikon: 4
    Cherry  Belle: 1

*Vote rigging!* Probably not, it's just unclean data. To a computer, "Red King" and "red King" look different because of the different capitalisation. So do "Cherry Belle" and " Cherry Belle" because of the leading space.

We need to clean up (sometimes called "munge") the data so it all looks the same.

We already know one munging function, `strip()`. Try applying `strip()` to each voting choice, to remove distinctions like " Cherry Belle" and "Cherry Belle".

How about "Red King" and "red king"? Take a look at the [Python string functions reference](http://docs.python.org/3/library/stdtypes.html#string-methods) and see if you can find a function that could transform these two so they look the same to the computer.

### Solution

There are lots of functions which could remove the case distinction. `str.lower()` would convert all the names to all lower case, `str.upper()` would CONVERT THEM ALL TO UPPER CASE, or `str.capitalize()` would Capitalise the first letter only. Here's one way:


    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}

    for line in open("radishsurvey.txt"):
        line = line.strip()
        name, vote = line.split(" - ")
        # munge the vote string to clean it up
        vote = vote.strip().capitalize()
        if not vote in counts:
            # First vote for this variety
            counts[vote] = 1
        else:
            # Increment the vote count
            counts[vote] = counts[vote] + 1
    print(counts)

If you're having trouble spotting the difference here, it's

    vote = vote.strip().capitalize()

Which means "take the variable called `vote`, and call the `strip()` function on it, and then call the `capitalize()` function on the result, and then assign that result back to the variable `vote`.

This could be written in two lines like this, if you prefer:

    vote = vote.strip()
    vote = vote.capitalize()

This would do the *same thing* when you run it. It's up to you which you use, a good practice is to use the version which is the most readable to a human being, without being unnecessarily verbose.

## Not quite there

There are still some funny votes counted in the output of this program:

    Sicily  giant: 1
    Plum  purple: 1
    Cherry  belle: 1

They all have something in common, a double space "  " between the first and second words. Damn typos!

strip() only cleaned up additional whitespace at the start and end of the string.

The `replace` function can be used to replace all double spaces with a single space:

    vote = vote.replace("  ", " ")

Try putting that into your program so those last few votes get counted correctly.

# Checking if anyone voted twice

So far we've counted votes without paying attention to the name of the person who voted.

Can you modify your program so it also prints out a warning if anyone voted twice?

## Hint

You will need to start making a list of the names of everyone who has voted so far. Each time you see a new name, check if it is already in the list of names. Starting with an empty list of names, you can use `voterlist.append(newentry)` to append a new entry to the end.

You'll need to apply the same data munging techniques to clean up people's names, so that "Joanne Smith" and "joanne smith" are counted as the same person.

### Solution

This is just one of many ways to do this:

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}
    
    # Create an empty list with the names of everyone who voted
    voted = []
    
    for line in open("radishsurvey.txt"):
        line = line.strip()
        name, vote = line.split(" - ")
        # clean up the person's name
        name = name.strip().capitalize().replace("  "," ")
        # check if this person already voted
        if name in voted:
            print(name + " has already voted! Fraud!")
            continue
        voted.append(name)
        # munge the vote string to clean it up
        vote = vote.strip().capitalize().replace("  "," ")
        if not vote in counts:
            # First vote for this variety
            counts[vote] = 1
        else:
            # Increment the vote count
            counts[vote] += 1
    
    print("Results:")
    print()
    for name in counts:
        print(name + ": " + str(counts[name]))


There's two new concepts in the code above:

`continue` means "stop whatever you were doing and go to the next iteration of the loop". In this case, if the person has already voted then we don't want to count their invalid vote - instead we `continue` and start the next iteration, with the next vote on the next line of the file.

`counts[vote] += 1` is a shorthand for `counts[vote] = counts[vote] + 1`. This shortcut can be used any time you are performing operations like arithmetic, for example these are equivalent:

    x = x + 1
    x += 1

And so are these:

    lemons = lemons * 3
    lemons *= 3

You can also use `-=` and `/=` in the same way.

# Factoring our code

Our program here is now getting a little bit long, and a little bit complex. There are lots of comments pointing out what specific sections do.

Perhaps we can split it into functions to make it easier to read:

* A function to clean up (munge) a string to make it easy to match against (because we do the exact same thing to clean up names as we do to clean up the vote choice.)
* A function to check if someone has voted before
* A function to count a vote

Have a try at breaking out some of the parts into functions, one function at a time, without breaking the program.

IPython Notebook makes this easy because you can run the cell (with Shift-Enter if you like) after each change, to check the program still works.

### Solution

This is just one possible way to break it down:

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}
    
    # Create an empty list with the names of everyone who voted
    voted = []
    
    # Clean up (munge) a string so it's easy to match against other     strings
    def clean_string(s):
        return s.strip().capitalize().replace("  "," ")
    
    # Check if someone has voted already and return True or False
    def has_already_voted(name):
        if name in voted:
            print(name + " has already voted! Fraud!")
            return True
        return False
    
    # Count a vote for the radish variety named 'radish'
    def count_vote(radish):
        if not radish in counts:
            # First vote for this variety
            counts[radish] = 1
        else:
            # Increment the radish count
            counts[radish] = counts[radish] + 1
    
    
    for line in open("radishsurvey.txt"):
        line = line.strip()
        name, vote = line.split(" - ")
        name = clean_string(name)
        vote = clean_string(vote)
    
        if not has_already_voted(name):
            count_vote(vote)
        voted.append(name)
    
    print("Results:")
    print()
    for name in counts:
        print(name + ": " + str(counts[name]))
    

What do you think? Is that easier to read and understand?

For small programs it's not as important as big programs, but with big programs it becomes very important to factor things out so you can understand them - as well as so parts can be reused.

<a href="http://www.flickr.com/photos/lisanorwood/3556903213/" title="Radishes by Lisa Norwood, on Flickr"><img src="http://farm4.staticflickr.com/3654/3556903213_522f78d2fe_n.jpg" width="213" height="320" alt="Radishes"></a>

# Finding the winner

Our program prints the number of votes cast for each radish variety, but it doesn't declare a winner. Can you update the program so it goes through the votes counted and finds the one with the most votes?

(You may want to add this as a totally separate cell, after the previous cells, rather than modifying your existing loops.)

## Hint

You can make a for loop which iterates over all of the keys in a dictionary by using the syntax `for key in dictionary:`. In this case it might be `for name in counts:`.

### Solution

You can do something like this:

    # Record the winning name and the votes cast for it
    winner_name = "No winner"
    winner_votes = 0
    
    for name in counts:
        if counts[name] > winner_votes:
            winner_votes = counts[name]
            winner_name = name
    
    print("The winner is: " + winner_name)

The loop shown above keeps track of one name, `winner_name`, and the number of votes cast for it. Each iteration through the loop it checks if there is a name with more votes than the current winner, and updates it if so.

## Challenge

Can you refactor the part of the program that finds the winner into a function?

## Bigger Challenge

The solution shown above can't deal with ties. It only updates `winner_name` if it finds another name with more votes than it, a second name with an equal number of votes will be ignored.

Can you write a winner function that could deal with a tie?

## Next Chapter

When you're done counting radish votes, the next chapter is [Creating Charts](charts.html)
