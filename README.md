# httpea
An iojs package that creates a simple http server for the current folder using ES 2015 features (has no dependencies or config). Inspired by python's `python -m SimpleHTTPServer`

## Installation

Run `npm install -g httpea`

## Usage

1. cd into the folder
2. run `httpea`
3. Enjoy

A simple http server will start running and serving the static files of your folder from `http://localhost`. If the port 80 is not available a random port will be selected (you'll see which one on the terminal/cmd output). If the path is a directory, the server will look for an `index.html` file.
