---

layout: ots
title: Working with Strings

---

Let's return to the example we mentioned at the start of this course. We have a file, radishsurvey.txt which contains lines like this:

    Jin Li - White Iciclea
    Georgia McKellar - Bunny Tail
    Maximilian Avdeev - Cherry Belle
    Lorna Beneventi - White Icicle

In the format "Name - Radish Preference"

How can we find out how many people voted for each radish preference?

# Reading The Survey

From the previous chapter, we know that we can easily go through the file line by line, and each line will have a value like `"Jin Li - White Icicle\n"`. We also know that we can strip off the trailing newline with the `strip()` method:

    for line in open("radishsurvey.txt"):
        line = line.strip()
        # Do something with each line

We need a way to split each line into the name and the vote. Thankfully, Python comes with dozens of string functions including one called [split()](http://docs.python.org/3.3/library/stdtypes.html#str.split). Have a look at the linked documentation for `split()` and see if you can figure out how to split each line into the name and the vote.

(Don't worry if you can't write a program that does this just yet, but have a think about it before you skip to the solution.)

### Solution

    for line in open("radishsurvey.txt"):
       line = line.strip()
       parts = line.split(" - ")
       name = parts[0]
       vote = parts[1]
       print(name + " voted for " +  vote)

There's a few things going on here, so let's go through it line by line. *Walking through a program in your head and thinking about what each line does by itself is a good way to start to understand it*

    line = line.strip()

If `line` was `"Jin Li - White Icicle\n"`, this code strips the newline from the end so the value of `line` becomes `"Jin Li - White Icicle"`

    parts = line.split(" - ")

This code looks for the substring `" - "` anywhere inside `line`, and uses that as a *delimiter* to split the string up into a list of strings on either side.

After this line runs, `parts` has the value `['Jin Li', 'White Icicle']`.

`split()` is a very versatile function. Open a Python interpreter and try typing in a few split experiments yourself.

See if you can guess what each of these does before you run it in the Python interpreter:

    "1,2,3,4,5".split(",")

    "cheese".split(",")

    "Jin Li - White - Icicle".split(" - ")

    "Jin Li - White Icicle".split("-")


Once we've split the string into `parts`, we can use indexes in the `parts` list to get at the name (the first element in the list) and the vote (the second element in the list.)

    name = parts[0]
    vote = parts[1]

These two lines of code just make this clear to the reader by storing each field in a named variable. You could use `parts[0]` and `parts[1]` instead of creating these variables, but then your code would be harder for someone else to understand.

    print(name + " voted for " +  vote)

This last line *concatenates* (joins) the two variable values together with the string `" voted for "`, to make a message which is printed out.


# Inspecting Votes

Can you write a program which only prints out the votes for *White Icicle* radishes?

Use the previous example as a base. You'll need to compare the vote with the string `"White Icicle"`, for each line in the file.

### Solution

    for line in open("radishsurvey.txt"):
       line = line.strip()
       parts = line.split(" - ")
       name = parts[0]
       vote = parts[1]
       if vote == "White Icicle":
          print(name + " likes White Icicle!")


# Counting Votes

Can you write a program which counts the number of votes for *White Icicle* radishes?

Use the previous example as a base. You'll need a variable to hold the number of votes recorded for *White Icicle*, which you increment as part of the loop.

### Solution

    print("Counting votes for White Icicle...")
    count = 0
    for line in open("radishsurvey.txt"):
       line = line.strip()
       parts = line.split(" - ")
       name = parts[0]
       vote = parts[1]
       if vote == "White Icicle":
          count = count + 1
    print(count)


## Making a generic function

Can you rewrite this code as a *function definition* where you specify an argument with the name of the radish you want to count votes for, and the function returns the number of votes for that radish variety?

Using your function, can you write a program which counts votes for White Icicle, Daikon and Sicily Giant radishes, and prints out all three counts?

### Solution

    def count_votes(name):
        print("Counting votes for " + name + "...")
        count = 0
        for line in open("radishsurvey.txt"):
            line = line.strip()
            parts = line.split(" - ")
            name = parts[0]
            vote = parts[1]
            if vote == name:
                count = count + 1
        return count

    print(count_votes("White Icicle"))

    print(count_votes("Daikon"))

    print(count_votes("Sicily Giant"))


# Counting All The Votes

Counting votes for each radish variety is a bit time consuming, you have to know all the names in advance and you have to loop through the file multiple times. How about if you could automatically find all the varieties that were votes for, and count them all in one pass?

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

Meaning 65 votes for White Icicle, 63 votes for Snow Belle, etc, etc.

Can you create such a program? Start with one of your previous vote-counting programs and try to modify it to count all varieties.

Here are two snippets of code you might find useful:

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}

also

    if not vote in counts:
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
        parts = line.split(" - ")
        vote = parts[1]
        if not vote in counts:
            # First vote for this variety
            counts[vote] = 1
        else:
            # Increment the vote count
            counts[vote] = counts[vote] + 1
    print(counts)


# Cleaning ("Munging") data

# Checking if anyone voted twice

# Checking for specific values

