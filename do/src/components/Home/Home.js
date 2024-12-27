import React, { useState } from 'react';
import List from '../List/List'; // Ensure this path is correct

function Home() {
    const [task, setTask] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
    const [list, setList] = useState([]); // Assuming you need this state to manage tasks

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            showAlert(true, 'danger', 'Please enter a value');
        } else if (task && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editId) {
                        return { ...item, title: task };
                    }
                    return item;
                })
            );
            showAlert(true, 'success', 'Value changed');
            setTask('');
            setEditId(null);
            setIsEditing(false);
        } else {
            setList([
                ...list,
                {
                    id: new Date().getTime().toString(), // Unique ID for each task
                    title: task,
                },
            ]);
            showAlert(true, 'success', 'Task added');
            setTask('');
        }
    };

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };

    return (
        <section className='section-center'>
            <form className='todo-form' onSubmit={handleSubmit}>
                <h3>Todo App</h3>
                <div className='form-control'>
                    <input
                        type='text'
                        className='todo'
                        placeholder='Enter a task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'Edit' : 'Submit'}
                    </button>
                </div>
            </form>
            <div className='todo-container'>
                <List items={list} /> {/* Pass list to List component if needed */}
                <button className='clear-btn' onClick={() => setList([])}>
                    Clear items
                </button>
            </div>
            {alert.show && (
                <div className={`alert alert-${alert.type}`}>
                    {alert.msg}
                </div>
            )}
        </section>
    );
}

export default Home;
