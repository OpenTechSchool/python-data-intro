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

These two lines of code just make this clear to the reader by storing each field in a named variable. You could use `parts[0]` anywhere you used `name` and `parts[1]` anywhere that you used `vote`, but then your code would be harder for someone else to understand.

    print(name + " voted for " +  vote)

This last line *concatenates* (joins) the two variable values together with the string `" voted for "`, to make a message which is printed out.


# Inspecting Votes

Can you write a program which only prints out the names of people who voted for *White Icicle* radishes?

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

Can you write a program which counts the total number of votes for *White Icicle* radishes?

Use the previous example as a base. You'll need a variable to hold the number of votes recorded for *White Icicle*, which you increment (ie add one to) as part of the loop.

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

    def count_votes(radish):
        print("Counting votes for " + radish + "...")
        count = 0
        for line in open("radishsurvey.txt"):
            line = line.strip()
            parts = line.split(" - ")
            name = parts[0]
            vote = parts[1]
            if vote == radish:
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

### Pretty printing

When you run this program the output is pretty hard for a person to read, even though it's all there. What we want is to print the data in a way which is easy for people to read. Programmers call this "pretty printing"

Instead of

    print(counts)

A pretty printing option could be:

    for name in counts:
        count = counts[name]
        print(name + ": " + str(count))

* This option prints each vote on its own line.

* Iterating through a dictionary means iterating through the *keys* (radish variety names), so we still need to look up each *value* (the vote count) with `count = counts[name]`.

* When we get the count back, it's a number so we can't `print()` it straight away. `str()` returns the string equivalent of the number, ie `str(12)` returns `"12"`.

Python needs to distinguish between strings and numbers for lots of reasons. For example, using numbers `12+1` is 13. Using strings, `"12" + "1"` *concatenates* the strings to give you `"121"`.

### Tip

Python actually has a built-in module called [pprint](http://docs.python.org/3/library/pprint.html) to make it easy to pretty-print things. Try it out with your program if you like!


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

## Solution

There are lots of functions which could remove the case distinction. `str.lower()` would convert all the names to all lower case, `str.upper()` would CONVERT THEM ALL TO UPPER CASE, or `str.capitalize()` would Capitalise the first letter only. Here's one way:


    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}

    for line in open("radishsurvey.txt"):
        line = line.strip()
        parts = line.split(" - ")
        vote = parts[1]
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

Or it could be condensed even further:

    vote = parts[1].strip().capitalize()

... these all do the *same thing* when you run them. It's up to you which you use, a good practice is to use the version which is the most readable to a human being, without being unnecessarily verbose.

## Not quite there

There are still some funny votes counted in the output of this program:

    Sicily  giant: 1
    Plum  purple: 1
    Cherry  belle: 1

They all have something in common, a double space "  " between the first and second words. Damn typos!

strip() only cleaned up additional whitespace at the start and end of the string.

The `replace` function can be used to replace all double spaces "  " with a single space " ":

    vote = vote.replace("  ", " ")

Try putting that into your program so those last few votes get counted correctly.

# Checking if anyone voted twice

So far we've counted votes without paying attention to the name of the person who voted.

Can you modify your program so it also prints out a warning if anyone voted twice?

## Hint

You will need to start making a list of the names of everyone who has voted so far. Each time you see a new name, check if it is already in the list of names. Starting with an empty list of names, you can use `list.append(newentry)` to append a new entry to the end. Or you can use + like this:

    list = list + [ newentry ]

You'll need to apply the same data munging techniques you used to clean up the radish names, so that "Joanne Smith" and "joanne smith" are counted as the same person.

## Solution

This is just one of many ways to do this:

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}
    
    # Create an empty list with the names of everyone who voted
    voted = []
    
    for line in open("radishsurvey.txt"):
        line = line.strip()
        parts = line.split(" - ")
        name = parts[0]
        # clean up the person's name
        name = name.strip().capitalize().replace("  "," ")
        # check if this person already voted
        if name in voted:
            print(name + " has already voted! Fraud!")
            continue
        voted.append(name)
        vote = parts[1]
        # munge the vote string to clean it up
        vote = vote.strip().capitalize().replace("  "," ")
        if not vote in counts:
            # First vote for this variety
            counts[vote] = 1
        else:
            # Increment the vote count
            counts[vote] = counts[vote] + 1
    
    print("Results:")
    print()
    for name in counts:
        print(name + ": " + str(counts[name]))


There's a new concept in the code above, `continue`, which means "stop whatever you were doing and go to the next iteration of the loop". In this case, if the person has already voted then we don't want to carry on to count their second vote - instead we `continue` and start the next iteration, with the next line of the file.


# Factoring our code

Our program here is now getting a little bit long, and a little bit complex. There are lots of comments pointing out what specific sections do.

Perhaps we can split it into functions to make it easier to read:

* A function to clean up (munge) a string to make it easy to match against (because we do the exact same thing to clean up names as we do to clean up the vote choice.)
* A function to check if someone has voted before
* A function to count a vote

Have a try at breaking out some of the parts into functions, one function at a time, without breaking the program.

## Solution

This is just one possible way to break it down:

    # Create an empty dictionary for associating radish names
    # with vote counts
    counts = {}
    
    # Create an empty list with the names of everyone who voted
    voted = []
    
    # Clean (munge) up a string so it's easy to match against other     strings
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
        parts = line.split(" - ")
        name = clean_string(parts[0])
        vote = clean_string(parts[1])
    
        if not has_already_voted(name):
            count_vote(vote)
        voted.append(name)
    
    print("Results:")
    print()
    for name in counts:
        print(name + ": " + str(counts[name]))
    

What do you think? Is that easier to read and understand?

For small programs it's not as important as big programs, but with big programs it becomes very important to factor things out so you can understand them - as well as so parts can be reused.


# Finding the winner

Our program prints the number of votes cast for each radish variety, but it doesn't declare a winner. Can you update the program so it goes through the votes counted and finds the one with the most votes?

(You may want to add this as a totally separate section, at the end of the program, rather than modifying any of the existing loops.)

## Solution

You can add something like this at the end of your program:

    # Record the winning name and the votes cast for it
    winner_name = "No winner"
    winner_votes = 0
    
    for name in counts:
        if counts[name] > winner_votes:
            winner_votes = counts[name]
            winner_name = name
    
    print("The winner is: " + winner_name)

## Challenge

Can you refactor the part of the program that finds the winner into a function?

## Bigger Challenge

The loop shown above keeps track of one name, winner_name, and the number of votes cast for it. Each turn of the loop it checks if there is a name with more votes than the current winner, and updates it if so. However, it doesn't do anything special if it finds another entry with the same number of votes as the current winner.

Can you write a winner function that could deal with a tie?
