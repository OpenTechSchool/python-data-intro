---

layout: ots
title: Alternative Approaches

---

In this workshop we've mostly looked at processing unstructured data
from plain text files. This is a very common and simple way to come
across data, but it's not the only way and it's not always the easiest
way to work with data.

# Relational Databases

Relational databases provide a way of storing data in tables with
relationships between them. Many large organisations and websites
store their data in some kind of relational database.

For instance, the OpenFlights data we worked with in the
[CSV](../core/csv.html) chapter is almost certainly exported from a
relational database of some kind. The relational database holds all of
its data in tables, for instance the "airports" table hold all the
airports and the "routes" table would hold all the airline routes.

However the relational database also holds *relations* between
different kinds of data - for example it can know that all airline
routes in the routes table contain references to a source and a
destination airport, and that these airports should exist in the
airports table.

We often use a query language called SQL to retrieve information from
a relational database. For example, here is a made-up SQL query to
count the number of airports in Russia:

    SELECT COUNT(*) FROM airports WHERE country = 'Russia';

You can integrate SQL queries into other general purpose programming
languages like Python.

OpenTechSchool doesn't have specific workshops about SQL yet, although
"Django 101" uses SQL for its databases. In the meantime you might
want to check out Zed Shaw's book
[Learn SQL The Hard Way](http://sql.learncodethehardway.org/) (free to
read online.)


# Pandas

[Pandas](http://pandas.pydata.org/) is a suite of data analysis tools
for Python, and it allows you to do more complex data modelling and
analysis with Python.

For this workshop we haven't needed Pandas, but if you're looking to
use Python for a lot of numerical data analysis then you should look
into it - there are tutorials linked from the homepage. Pandas can
make complex tasks much easier to work with.

Pandas also makes it easy to integrate with more complex data sources
than simple text files. For example, here's [an IPython Notebook that
uses Pandas to import data the Guardian published regarding the Gaza-Israel 2012 crisis](https://gistpynb.herokuapp.com/4121857).
The Guardian publishes this data in the format of "Google Fusion
Tables", and Pandas can read this format directly from the web.


