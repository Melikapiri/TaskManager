# TaskManager
A task management application built with React using a component-based architecture. It enables users to add, edit, delete, and track tasks efficiently. The app features form validation to ensure proper input, and editing is handled elegantly via a modal dialog. React Router DOM provides smooth client-side navigation, while tasks are persistently stored in LocalStorage to maintain data across sessions. The UI is styled with Tailwind CSS, making it fully responsive and visually clean across various screen sizes. Additionally, users can seamlessly change task statuses by clicking buttons like "To Do," "In Progress," and "Done," allowing easy movement of tasks between different states.

## API Usage
This project fetches the initial list of ToDo tasks from the JSON Placeholder API to provide sample data.

## Technologies Used

- **React** — Frontend UI library
- **React Router DOM** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework for styling and responsiveness
- **LocalStorage** — Persistent task storage on the client side
- **JSONPlaceholder API** — For fetching initial sample tasks data


## Features

- **Add, Edit, and Delete Tasks:** Easily manage your tasks with simple forms and controls.
- **Task Status Management:** Seamlessly move tasks between "To Do," "In Progress," and "Done" statuses by clicking dedicated buttons to update their state.
- **Form Validation:** Input fields are validated to ensure titles are at least 3 characters and descriptions at least 5 characters long.
- **Edit Modal:** Edit existing tasks via a user-friendly modal dialog for better UX.
- **Persistent Storage:** Tasks are saved in LocalStorage to keep your data safe across browser sessions.
- **Smooth Navigation:** Utilize React Router DOM for client-side routing between different views.
- **Responsive Design:** Built with Tailwind CSS to ensure the app looks great on all screen sizes and devices.
- **Component-Based Architecture:** The project is structured with reusable and clean React components for maintainability and scalability.



## Getting Started

To run the project locally, follow these steps:

```bash
git clone https://github.com/Melikapiri/TaskManager.git
cd TaskManager
npm install
npm start
