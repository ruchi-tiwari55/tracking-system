import React from 'react';
import styles from './taskForm.module.css';

function TaskForm({ handleSubmit, toggleHiringForm }) {
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        // Handle task form submission
        handleSubmit();
        toggleHiringForm();
    };

    return (
        <div>
            <div className={styles.top}>
                <div>
                    <h4>Complete the task</h4>
                    <p>It's quick and easy.</p>
                </div>
                <span className={styles.close} onClick={toggleHiringForm}>&times;</span>
            </div>
            <div>
                <h4>Project Task: Build a Todo List App</h4>
                <h5>Description:</h5>
                <p>
                    You are tasked with building a simple Todo List application using React.<br /> The application should allow users to add, delete, and mark tasks as<br /> completed. Additionally, users should be able to filter tasks based on<br /> their completion status (all tasks, completed tasks, or active tasks).
                </p>
                <h5>Requirements.</h5>
                <p>
                    1. User Interface.<br />
                    2. Functionality.<br />
                    3. State Management.<br />
                    4. Styling.<br />
                    5. Additional Features (Optional).
                </p>
                <h5>Deliverables:</h5>
                <p>A fully functional Todo List application built using React.<br />
                    Source code hosted on a version control system like GitHub.<br />
                    Clear documentation explaining how to run the application locally<br /> and any additional features implemented.</p>
                <h5>Evaluation Criteria:</h5>
                <p>Correctness and completeness of the implemented features.<br />
                    Code quality, including adherence to best practices, readability, and maintainability.<br />
                    User interface design and user experience.<br />
                    Responsiveness and compatibility with different devices and browsers.<br />
                    Attention to detail and ability to handle edge cases.</p>
            </div>
            <form onSubmit={handleTaskSubmit}>
                <div className={styles.bottom}>
                    <div>
                        <label htmlFor="taskFile">Upload Task Document:</label>
                        <input type="file" id="taskFile" name="taskFile" accept=".doc,.docx,.pdf" required />
                    </div>
                    <button type="submit">Submit Task</button>
                </div>

            </form>
        </div>

    );
}

export default TaskForm;
