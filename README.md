# Workshop Material

You can view the actual workshop material live at:
http://opentechschool.github.io/python-data-intro/

# Contributors README

This is a friendly how-to for contributors to the Introduction to Data Processing with Python course at OpenTechSchool. First, a quick refresher on the course:

> Have you ever found yourself doing something methodical and repetitive with a computer, and wondered why there wasn't a better way to do it? Have you ever had some data, maybe a text file or a set of numbers, that you'd like to know some simple things about? 

> You will only need a laptop and a very basic understanding of Python. If you've done our Introduction to Programming workshop then this will be perfect.

This course is aimed at following on directly from the Introduction to Programming. This means it only covers the basics of reading, writing and processing text files with Python. Programmers looking to become "Data Scientists" will need to wait for a later course. :)

# Class format

At OpenTechSchool we tend to go *practical* and *at your own pace*.

Practical meaning that we aren't big on theory, or requiring that people understand something completely before using it. We aren't expecting any of the students to become computer scientists. Generally programming for our students is a way of solving some practical problem. If they want to accomplish it with LISP or a spreadsheet is entirely up to them.

At your own pace means that we provide access to the complete course notes at the beginning of the session. Then students can progress individually. Some students will get through very quickly, others will take some time, and most will finish the core work with time to spare. The core work should be completable by everyone. To keep things interesting we supply various additional topics which are entirely optional.

A class schedule looks like this:

    1200 - Students still arriving, writing name tags, setting up laptops.
    1230 - Introductions, wifi instructions and location of coursework.
    1235 - Students learn stuff.
    1545 - Thankyous, maybe demonstrations.

As you can see, the schedule just has a big chunk of 'learn stuff'. We like to keep things open.

# Author Guide

So, fork this repository. The guide is written as a [Jekyll](http://jekyllrb.com/) site, hosted on GitHub pages. It's set up so you can just write pages in Markdown.  A markup guide is below.

Course work goes under `core/` or `extras/`. It's all linked together by `index.md` in the root direcory.

* `core/` covers the basic goals of the course. Put any images in `core/images/`
* `extras/` are all the interesting things people can do once they have completed the basics.

It's easiest to start at the end. Think of a fun and interesting topic to add to the extras. Then you can copy this file to get an idea for formatting.

# Previewing content

When you push to github, the official site at http://opentechschool.github.io/python-data-intro gets automatically updated.

To generate and view the site (with correct CSS, etc.) with your on your local computer, you can install Jekyll and then run it like this:

    jekyll --serve --auto
    # or
    jekyll serve --watch

Then browse to http://localhost:4000/python-data-intro/index.html to view the generated workshop content. If you leave the server running then Jekyll will automatically regenerate the site when it changes.

## Editing Text

* We use long-lines (no newlines in paragraphs) to keep diffs moderately sane.
* Code is indented with 4 spaces.
* HTML/CSS is indented with 2 spaces.

I use Emacs 24, with markdown-mode (Ubuntu emacs-goodies-el) and gfm-mode (GitHub markdown minor-mode). Set `longlines-show-hard-newlines` if you want to see where all the newlines are. These settings are useful:

    (add-to-list 'auto-mode-alist '("\\.md\\'" . markdown-mode))
    (setq-default indent-tabs-mode nil)

In Vim, you might like these settings:

    set tabstop=4
    set shiftwidth=4
    set expandtab

# Markup Guide

# First level section
## Second level section
### Third level section
#### Fourth level section

* List item
  * Sub item
  * Sub item 2
* List it m 2

1. Ordered list item
2. Ordered list item 2
3. Ordered list item 3
  * Sub item 1
  * Sub item 2
4. Ordered list item 4
  1. Ordered sub item 1
  2. Ordered sub item 2
5. Ordered list item 5


*emphasis text* for emphasis

**strong text** for strong

Getting literal with `backticks`

    Or use an indent of 4 spaces, 
	to get yourself a code block, 
	that looks lovely.

> Do a bit of blockquoting. You can still reflow the text as much as you like.  Newlines are awesome.  And made of win.

[links for nerds](http://slashdot.org)

[links for internal stuff](section8.html)

This is a horizonal rule:

******

If you want to highlight some ruby code:

    def foo
        puts 'foo'
    end

Bit of command line:

    $ holla holla
    get dolla
    $ 

For a more complete list of languages see [highlight.js](http://softwaremaniacs.org/media/soft/highlight/test.html)
