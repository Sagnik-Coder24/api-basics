# Reddit API Search App

A simple React application using Vite that allows users to search for subreddits and fetch posts from Reddit's API. Users can choose between Axios or Superagent to make API calls.

## Features

- Search for any subreddit
- Fetch data from Reddit API
- Display a list of posts with clickable links
- Option to use either Axios or Superagent for API requests

## Built With

- [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces
- [**Vite**](https://vitejs.dev/) - Next Generation Frontend Tooling
- [**Axios**](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js
- [**Superagent**](https://visionmedia.github.io/superagent/) - Small progressive client-side HTTP request library
- [**Reddit API**](https://www.reddit.com/dev/api/) - Official API provided by Reddit for fetching subreddit data

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sagnik-Coder24/api-basics.git
   cd api-basics

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev

   ```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

3. Use the search input to enter a subreddit name and fetch posts.

## Switching between Axios and Superagent

In the app's settings, you can toggle between using Axios and Superagent for making API calls. This will allow you to see how each library handles requests and responses.

## API Reference

The application fetches data from the following endpoint:

- https://www.reddit.com/r/{subreddit}.json

Replace `{subreddit}` with the name of the subreddit you want to search.

## Example Usage

1. Enter a subreddit name (e.g., `reactjs`) in the search input.
2. Click the search button to fetch posts.
3. A list of posts will be displayed, each linking to the respective Reddit post page.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## Acknowledgments

- [Reddit API](https://www.reddit.com/dev/api/) - For providing the data
- [React](https://reactjs.org/) - For making UI development simple and efficient
- [Vite](https://vitejs.dev/) - For the modern build tool
