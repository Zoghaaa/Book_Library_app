# Book Library Application

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Reusable Components](#reusable-components)
- [API Usage Examples](#api-usage-examples)
- [Deployment](#deployment)
- [Tailwind Customization](#tailwind-customization)
- [Dark Mode](#dark-mode)
- [Future Enhancements](#future-enhancements)
- [Acknowledgements](#acknowledgements)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

The **Book Library Application** is a modern, React-based web application that allows users to browse, search, and manage a collection of books. This project demonstrates the use of React, Vite, and Tailwind CSS to create an interactive, responsive, and user-friendly library experience. The application integrates the Open Library API for fetching book data dynamically.

### Objectives

This application was built as part of a capstone project for the Frontend Web Development program, aiming to consolidate and demonstrate skills in:

- API integration
- React development
- State management
- Responsive UI design
- Deployment on a hosting platform

---

## Features

- **Interactive Book Catalog**: Browse a list of books fetched from the Open Library API.
- **Search Functionality**: Search books by title, author, or genre.
- **Add and Remove Books**: Manage a personal library by adding and removing books.
- **Filters**: Filter books by genre, publication year, or alphabetical order.
- **Responsive Design**: Mobile-first approach for an optimized user experience.
- **Dark Mode**: Toggle between light and dark themes for better usability.

---

## Technologies Used

- **Frontend**: React (JavaScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **API**: Open Library API
- **Deployment**: Netlify

---

## Project Structure

```
Book Library
├── node_modules/           # Installed dependencies
├── public/                 # Static assets
├── src/                    # Application source code
│   ├── components/         # Reusable React components
│   │   ├── SearchBar.js    # Search bar component
│   │   ├── BookCard.js     # Individual book display component
│   │   ├── BookDetails.js  # Detailed view of book information
│   ├── pages/              # Page-level components
│   ├── assets/             # Images and other media
│   ├── App.js              # Main application component
│   ├── index.js            # React DOM entry point
│   └── styles/             # Tailwind and custom CSS
├── .gitignore              # Git ignore rules
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── LICENSE                 # Project license
```

---

## Setup and Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Zoghaaa/Book_Library_app.git
   cd Book_Library_app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:5173`.

---

## Usage

### Browsing the Library

- View a catalog of books fetched from the Open Library API.
- Use filters to narrow down books by genre, year, or alphabetical order.

### Searching for Books

- Use the search bar to find books by title, author, or genre.

### Managing Personal Library

- Add books to your library for easy access.
- Remove books you no longer wish to keep in your library.

---

## Reusable Components

### SearchBar
- A component that provides a search interface for users to find books by title, author, or genre.
- **Props**: `onSearch` (function to handle search input changes).

### BookCard
- A component to display a single book's information such as title, author, and cover image.
- **Props**: `book` (object containing book details), `onAdd` (function to handle adding the book to the library), `onRemove` (function to handle removing the book).

### BookDetails
- A component to display detailed information about a book, including description, genre, and publication year.
- **Props**: `book` (object containing detailed book data).

---
## Screenshots
![Home Page](path/to/homepage-screenshot.png)
![Book Details](path/to/book-details-screenshot.png)
![Dark Mode Toggle](path/to/dark-mode-screenshot.png)
 
---
## API Usage Examples

- **Search for Books by Title**:
  Endpoint: `https://openlibrary.org/search.json?title=<title>`
- **Search for Books by Author**:
  Endpoint: `https://openlibrary.org/search.json?author=<author>`
- **Fetch Book Details by ISBN**:
  Endpoint: `https://openlibrary.org/api/books?bibkeys=ISBN:<isbn>&format=json&jscmd=data`
- **Fetch Book Covers**:
  Use the `cover_id` parameter in the book data to display book covers.
  Example URL: `https://covers.openlibrary.org/b/id/<cover_id>-L.jpg`

---

## Deployment

This application is deployed using [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).  
- **Live Demo**: [Your Deployment Link](#)
- To deploy on your own:
  1. Build the production version:
     ```bash
     npm run build
     ```
  2. Use the platform’s CLI or GUI to upload the `dist` folder.

---

## Tailwind Customization

The `tailwind.config.js` file is configured to scan `src/**/*.{js,jsx}` for class usage and includes custom color palettes and typography for a consistent design. Example:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2',
        secondary: '#50e3c2',
      },
    },
  },
};
```

---

## Dark Mode

- **Description**: A toggle button allows users to switch between light and dark themes for better usability.
- **Implementation**: 
  - Tailwind's dark mode classes are used with React state for toggling.
  - The state persists using localStorage to retain the user's preference.

---

## Future Enhancements

### Stretch Goals

1. **User Authentication**
   - **Details**: Implement user login functionality using Firebase or Auth0 to save personal reading lists securely.
   - **Benefits**: Users can access their libraries from any device.

2. **Reading Progress Tracking**
   - **Details**: Add features to mark books as "Currently Reading," "Completed," or "Want to Read."
   - **Benefits**: Helps users keep track of their reading habits.

3. **Reviews and Ratings**
   - **Details**: Allow users to leave reviews and ratings for books using a simple form submission.
   - **Benefits**: Encourages community engagement and helps other users make informed decisions.

4. **Enhanced Book Categories**
   - **Details**: Create predefined categories like Fiction, Non-Fiction, Science, History that users can browse through.
   - **Benefits**: Improves navigation and helps users discover new books.

5. **Offline Mode**
   - **Details**: Use service workers to cache book data so users can browse their library without an internet connection.
   - **Benefits**: Increases accessibility and usability in low-connectivity areas.

---

## Acknowledgements

- [Open Library API](https://openlibrary.org/developers/api): For providing book data.
- [Tailwind CSS](https://tailwindcss.com/): For responsive styling.
- [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/): For deployment solutions.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your forked repository.
4. Submit a pull request for review.

For detailed contributing guidelines, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### About MIT License
The MIT License is a permissive free software license that allows for reuse within proprietary software, as long as all copies include the original license and copyright notice. This means you can use, modify, and distribute this software freely!



