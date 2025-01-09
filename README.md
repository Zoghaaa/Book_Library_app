# Book Library App

A modern and responsive Book Library application built with React, Tailwind CSS, and powered by the Google Books API. This app allows users to search for books, view detailed book information, and explore different categories.

## Table of Contents

- [Features](#features)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Deployment](#deployment)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search Bar:** Allows users to search for books by title, author, or keyword using the Google Books API.
- **Book Details:** Displays detailed information about each selected book, including title, authors, description, and more.
- **Categories:** Allows users to filter books by various categories (e.g., Fiction, Non-Fiction, Science, etc.).
- **Contact Us:** A section where users can find contact information and send inquiries.
- **Responsive Design:** The app is fully responsive, built using Tailwind CSS to ensure it works across all screen sizes.
- **Deployment:** Deployed on Vercel for easy access and fast loading times.

## API Integration

This app uses the [Google Books API](https://www.googleapis.com/books/v1/volumes?q=search-term) to fetch book data. The API allows us to search for books based on a query and display relevant information like title, authors, publisher, and more.

## Technologies Used

- **React:** Frontend JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework used for styling the app.
- **Vercel:** Platform for deploying the app to production.
- **Google Books API:** Used to fetch book data.

## Project Structure



```
Book_Library_App/
├── public/
│ └── assets/
│         └── vite.svg
├── src/
│ ├── components/
│ │ ├── AnimatedCharacters.jsx
│ │ ├── BookDetails.jsx
│ │ ├── Categories.jsx
│ │ ├── ContactUs.jsx
│ │ ├── Hero.jsx
│ │ ├── SearchBar.jsx
│ │ └── SearchResults.jsx
├── pages/
│ │ ├── FanstasyBooks.jsx
│ │ ├── HorrorBooks.jsx
│ │ ├── HumourBooks.jsx
│ │ ├── PersonalDevelomentBooks.jsx
│ │ ├── RomanceBooks.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── ChangeLogs.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---
## Installation

To get started with the project, follow the steps below:

1. **Clone the repository:**
```
git clone https://github.com/Zoghaaa/Book_Library_App.git
cd Book_Library_App

```

2. **Install dependencies:**

npm install
text

3. **Run the app locally:**

npm run dev
text

4. Open your browser and visit `http://localhost:5173`.

## Deployment

The app is deployed on Vercel for easy access and fast loading times.

## Components

1. **AnimatedCharacters.jsx**
- This component displays animated text or characters to enhance user engagement on the homepage.

2. **BookDetails.jsx**
- This component shows detailed information about a selected book, including its cover image, description, authors, and other relevant details.

3. **Categories.jsx**
- This component allows users to filter books based on various categories such as personal development, horror,romance, fantasy, and humour.

4. **ContactUs.jsx**
- This component provides contact information and a form for users to send inquiries or feedback.

5. **Hero.jsx**
- This component serves as the landing section of the app, featuring a welcoming message and a navbar.

6. **SearchBar.jsx**
- This component contains an input field that allows users to search for books by title or author using the Google Books API.

7. **SearchResults.jsx**
- This component displays the results of the book search in a scrollable format with options to view more details about each book.

## Contributing

If you want to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request.

## License

This project is licensed under the MIT License.