# Book Library Application

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
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

## Future Enhancements

### Stretch Goals

1. **User Authentication**

   - Enable user login to save personal reading lists.

2. **Reading Progress Tracking**

   - Track books marked as "Currently Reading," "Completed," or "Want to Read."

3. **Reviews and Ratings**

   - Allow users to leave reviews and ratings for books.

4. **Enhanced Book Categories**

   - Add predefined categories like Fiction, Non-Fiction, Science, History.

5. **Offline Mode**

   - Cache book data for offline browsing.

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

For major changes, please open an issue first to discuss your proposal.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

