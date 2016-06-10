import React from 'react'
import ReactDOM from 'react-dom'

var AddTasks = React.createClass({
  getInitialState: function() {
    return { newTask: '' };
  },
  submitNewTask: function(e) {
    e.preventDefault();
    var newTask = ReactDOM.findDOMNode(this.refs.newTask).value;

    if (newTask !== '') {
      this.props.addTask(newTask);
    }
  },
  render: function() {
    return <form id='addTasks' >
      <input type='text' ref='newTask' />
      <button onClick={this.submitNewTask}>Add</button>
    </form>
  }
});

module.exports = AddTasks;
