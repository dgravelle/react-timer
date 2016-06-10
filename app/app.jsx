import React from 'react'
import {render} from 'react-dom'

import Tasks from './js/components/Tasks.jsx'
import AddTasks from './js/components/AddTasks.jsx'




    var App = React.createClass({
      getInitialState: function() {
        return {
          tasks: ['Get milk', 'workout', 'do laundry', 'drink beer']
        }
      },
      addTask: function(newTask) {
        var newState = this.state.tasks;

        newState.unshift(newTask);
        this.setState({ tasks: newState });
      },
      editTask: function (editValue, index) {
        console.log('hit');
        this.state.tasks[index] = editValue;
        this.setState({ tasks: this.state.tasks });
      },
      deleteTask: function (task) {
        console.log(task);
        var newState = this.state.tasks;

        newState.splice(task,1);
        this.setState({ tasks: newState });
      },
      render: function() {
        return <div>
        <AddTasks ref='newTasks' addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          ref='tasks'/>
        </div>
      }
    });

    render(<App />, document.getElementById('app'));

// render(<App />, document.getElementById('app'));
