# Fruitopie

Fruitopie is a frontend application designed to help users manage and organize a collection of fruits with their calories. This project is built using React and TailwindCSS.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)
- [About](#about)

## Installation

To get started with Fruitopie, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ali-mohammadi/fruitopie.git
   cd fruitopie
   ```

2. **Install dependencies**:

   Use Yarn to install the project dependencies:

   ```bash
   yarn install
   ```

   This will install all the required packages as specified in the `package.json` file.

## Running the App

To start the development server and run the app locally, use the following command:

```bash
npm start
```

This will start the application on `http://localhost:3000/` by default.

## Testing

Fruitopie comes with a set of unit and integration tests to ensure the application behaves as expected. To run the tests, use the following command:

```bash
npm run test
```

## Project Structure

The project structure follows a standard React project layout:

```
fruitopie/
├── public/                 # Public assets
├── src/                    # Source code
│   ├── assets/             # Static assets
│   ├── components/         # React components
│   ├── configs/            # Configuration files
│   ├── hocs/               # Higher order components
│   ├── models/             # Models for types
│   ├── pages/              # App view pages
│   ├── reducers/           # React reducers
│   ├── styles/             # React css styles
│   ├── utility/            # Utility functions
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point
│   └── ...
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── yarn.lock               # Yarn lock file
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## About

This project is maintained by [Ali Teshnizi](mailto:your-email@example.com). Feel free to reach out via email if you have any questions.