---

layout: ots
title: Reading and writing comma-separated data

---

Comma-separated values (CSV) is a way of expressing structured data in flat text files:

    "Coffee","Water,Milk,Icecream"
    "Espresso","No,No,No"
    "Long Black","Yes,No,No"
    "Flat White","No,Yes,No"
    "Cappuccino","No,Yes - Frothy,No"
    "Affogato","No,No,Yes"

It's a common way to transfer data between programs like Spreadsheet software, where the data is tabular.

Python comes with a [CSV module](http://docs.python.org/3/library/csv.html) which provides one way to easily work with CSV-delimited data:

Try downloading the [coffee.csv](../files/coffee.csv) file, which contains the rows shown above, and then run this program in IPython Notebook:

    import csv
    f=open("coffee.csv")
    for row in csv.reader(f):
        print(row)

You may have to replace "coffee.csv" with the full path to the CSV file, depending on where IPython Notebook was started from.

Each row is read as a list of strings representing the fields in the row.

## Why not use .split()/.strip()?

You may have noticed that in the example above the CSV reader is doing something that you could achieve a different way we already learned, using `split(",")` to split each row, and `strip()` to take off the quote marks.

There are a few good reasons to use CSV here:

* The csv module makes it clear to anyone reading your code.
* The csv module is less likely to contain an error that splits some lines the wrong way.
* The csv module [has a lot of other features, documented here](http://docs.python.org/3/library/csv.html). These allow it to process differently formatted files, so you can easily update your program if the file format changes.


## Reading Airport data

We're going to do some processing of real-world data now, using freely available airline data sets from the [Open Flights project](http://www.openflights.org/).

Visit the [Open Flights data page](http://openflights.org/data.html) and download their airports data file - "airports.dat". This is a file in CSV format.

Can you use this file to print all of the airport names for a particular country (say, Australia or Russia)?

To get you started, on the OpenFlights web page it shows that "Name" is the second field in each row of data. This means in the list of fields it will have index 1 (index 0 is the first field.)

Here's some code that prints the name of every airport:

    import csv
    f = open("airports.dat")
    for row in f:
        print(row[1])

Can you expand on that to only print airports for a certain country?

How about writing a program that counts the number of airports in each country? This would be quite similar to the radishes problem we looked at back in the [Working with Strings](strings.md) chapter.
