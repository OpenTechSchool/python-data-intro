#!/usr/bin/env python3

# take a list of names from names.txt, read in a list of radish breeds in radishes.txt,
# output radishsurvey.txt with each name choosing a random radish breed

import random

output = open("radishsurvey.txt", "w")

# Radish names are cribbed from https://en.wikipedia.org/wiki/Radish
radishes = [
    "April Cross",
    "Bunny Tail",
    "Cherry Belle",
    "Champion",
    "Red King",
    "Sicily Giant",
    "Snow Belle",
    "White Icicle",
    "French Breakfast",
    "Plum Purple",
    "Daikon",
    ]

for line in open("names.txt"):
    radish = random.choice(radishes)
    output.write(line.strip() + " - " + radish + "\n")
