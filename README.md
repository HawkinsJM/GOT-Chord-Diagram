# Game of Thrones Chord Diagram
[A chord diagram depicting how often characters from Game of Thrones appear in fan-fiction stories together.](https://hawkinsjm.github.io/GOT-Chord-Diagram/) The 13 most common connections between any characters from the book or tv series are shown. The characters are grouped by family, and the dark red coloring indicates what percentage of the stories were rated mature. The arcs and chords can be moused-over to highlight chords and view additional statistics.

## How it's made
* The data was scraped from [fanfiction.net](https://wwwfanfiction.net) using a [scraper](https://github.com/HawkinsJM/fanfiction-api) I made.
* Jupyter, Python, and Pandas were used to merge the book and tv series datasets and calculate the co-occurances.
* Javascript and D3.js were used to create the chord diagram.
* It is hosted on github as the docs portion of this repository.
