import React from 'react'
import TaskItem from './taskItem.jsx'

var Tasks = React.createClass({
  deleteTask: function(e) {
    console.log(e.target.value);
    var taskIndex = e.target.value;

    this.props.deleteTask(taskIndex);
  },
  render: function() {
    var taskList = this.props.tasks.map(function(task, index) {
      return <TaskItem index={index}
        key={index}
        ref='task'
        deleteTask={this.deleteTask}
        editTask={this.props.editTask}
        task={task}
        />
    }.bind(this));

    return <ul className='task-list__ul'>
      {taskList}
    </ul>
  }
});

module.exports = Tasks;
