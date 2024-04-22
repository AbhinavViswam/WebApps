1.  Introduction

This application is a to-do list manager that allows users to create, manage, and track their tasks.

2.  Features

Task Creation: Users can add new tasks by entering a description in the designated input field and clicking the "SAVE" button. The application enforces a minimum character length of 3 to ensure a meaningful task description.
Task Management:
Users can view all created tasks in a dedicated list.
Completed tasks are visually distinguished using a strikethrough effect.
An optional filter allows users to hide completed tasks, focusing on the remaining workload.
Task Completion: Tasks can be marked as completed by clicking the checkbox next to the task description.
Task Editing: Users can edit existing tasks by clicking the "Edit" button for a specific task. This populates the input field with the current task description for modification. Upon confirmation (saving the edit), the application updates the task and reflects the changes in the list.
Task Deletion: Tasks can be deleted by clicking the "Delete" button associated with a specific task. The application prompts for confirmation before permanently removing the task.
Local Storage: The application utilizes the browser's local storage to persistently store the list of tasks. This ensures that tasks are saved even after the application window is closed and reopened.
3.  Technologies Used

React: A JavaScript library for building user interfaces.
Local Storage: A browser API that enables web applications to store data locally on the user's device.
UUID (Universally Unique Identifier): A library that generates unique identifiers for tasks, ensuring no conflicts arise.