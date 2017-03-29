# GOT Chord Diagram
[A chord diagram depicting how often characters from Game of Thrones appear in fan fiction stories together.](https://hawkinsjm.github.io/GOT-Chord-Diagram/) The 13 most common connections between any characters from the book or tv series are shown. The characters are grouped by family, and the dark red coloring indicates what percentage of the stories were rated mature. The arcs and chords can be moused-over to highlight chords and view additional statistics.

## How it's made
The data was scrapped from [fanfiction.net](https://wwwfanfiction.net) using a the scraper I made in [this](https://github.com/HawkinsJM/fanfiction-api) repo.
Python and Pandas were used to merge the book and tv series datasets and calculate the co-occurances.
Javascript and D3.js were used to create the chord diagram, and it is hosted on github as part of this repo.
