# Alluvium Todo App

A React Native todo application with a clean component structure and organized routing system.

## Project Structure

```
alluvium-todo/
├── .expo/
├── android/
├── assets/
├── ios/
├── node_modules/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EmptyDataScreen/
│   │   │   └── index.tsx
│   │   ├── TodoTaskList/
│   │   │   ├── index.tsx
│   │   │   ├── TaskFilter.tsx
│   │   │   ├── TaskInput.tsx
│   │   │   └── TaskItem.tsx
│   │   └── styles/
│   │       └── TaskStyles.tsx
│   └── routes/
│       └── index.tsx
├── app.json
├── App.tsx
├── declaration.d.ts
├── eas.json
├── index.ts
├── package-lock.json
└── package.json
```

## Features

- Task management functionality
- Empty state handling
- Task filtering capabilities
- Responsive design
- Clean component architecture

## Components

### Main Components

- **EmptyDataScreen**: Displays when no tasks are present
- **TodoTaskList**: Main container for the todo list functionality
- **TaskInput**: Component for adding new tasks
- **TaskItem**: Individual task component
- **TaskFilter**: Filtering mechanism for tasks

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm expo start
```


## Development

This project uses:
- React Native
- Expo
- TypeScript

## Project Configuration

The project includes several configuration files:
- `app.json`: Expo configuration
- `eas.json`: EAS Build configuration
- `declaration.d.ts`: TypeScript declarations
## clone the repo 

1. Clone the repository:
```bash
git clone git@github.com:khushi-lachhwani-pro/alluvium-ToDoTask-app.git
cd alluvium-todo
```
## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
