# React Native Todo App

This is a mobile application built using React Native that allows users to manage their to-do lists.

## Features

- Create new to-do items
- Edit existing to-do items
- Mark to-do items as completed
- Delete to-do items

## Tech Stack

The app is built using the following technologies:

- React Native: A framework for building mobile applications using JavaScript and React.
- Redux-Toolkit: A set of tools and conventions for managing the state of your React application.
- Redux Observable: A middleware for handling asynchronous actions with RxJS.
- Tsyringe: A dependency injection container for TypeScript.
- TypeScript: A statically typed superset of JavaScript that adds type safety to the codebase.

## Setup and Installation

1. Clone the repository.

```bash
git clone <repository-url>

```
1. Install dependencies

```bash
cd react-native-todo-app
npm install

```
2. Run the app

```bash
npm start
```

## Folder Structure

```bash
react-native-todo-app/
  ├── src/
  │   ├── components/       # React components
  │   ├── store/            # Redux store setup and configuration
  │   ├── types/            # TypeScript type definitions
  │   ├── services/         # Services for handling API calls or data fetching
  │   ├── utils/            # Utility functions and helpers
  │   ├── App.tsx           # Entry point of the app
  │   ├── index.tsx         # Root file to register the app
  │   └── ...
  ├── __tests__/            # Unit tests and integration tests
  ├── assets/               # Image and font assets
  ├── node_modules/         # Installed npm packages
  ├── package.json          # Project dependencies and scripts
  ├── tsconfig.json         # TypeScript configuration
  ├── .babelrc              # Babel configuration
  └── ...
  ```

## Testing
The app includes unit tests and integration tests to ensure code quality and functionality. You can run the tests using the following command:

```bash
npm test
```

## Simple Todo App


