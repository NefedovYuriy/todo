import React from 'react';
import Header from '../header';
import Main from '../main';
import './app.css'


const App = () => {
    const arrProp = [
        { className: 'completed',
          description: 'Completed task',
          creationTime: 'created 17 seconds ago'
        },
        { className: 'editing',
          description: 'Editing task',
          creationTime: 'created 5 minutes ago'
        },
        { className: 'active',
          description: 'Active task',
          creationTime: 'created 5 minutes ago'
        }
      ]
    return (
    <section className = 'todo-app'>
        <Header/>
        <Main todos = {arrProp}/>
    </section>
    )
}

export default App;