import React from 'react';
import FetchError from './FetchError';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper
  },
  progress: {
    margin: `${theme.spacing.unit * 2}px`,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

class TodoList extends React.Component {
  state = {
    filterValue: 0
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  componentWillReceiveProps(nextProps) {
    let filterValues = {
      all: 0,
      active: 1,
      completed: 2
    };

    this.setState({ filterValue: filterValues[nextProps.filter] });
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;

    fetchTodos(filter);
  }

  renderTodo(todo, onTodoClick) {
    return (
      <ListItem dense button key={todo.id} onClick={() => onTodoClick(todo.id)}>
        <Checkbox
          checked={todo.completed ? 'checked' : ''}
          tabIndex="-1"
          disableRipple
        />
        <ListItemText primary={todo.title} />
      </ListItem>
    );
  }

  handleChangeOfFilter = (event, value) => {
    let routes = {
      0: '/filter/all',
      1: '/filter/active',
      2: '/filter/completed'
    };

    this.setState({ filterValue: value });

    this.props.history.push(routes[value]);
  };

  renderFilterNavigation() {
    return (
      <Paper>
        <Tabs
          value={this.state.filterValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChangeOfFilter}
        >
          <Tab label="All" />
          <Tab label="Active" />
          <Tab label="Completed" />
        </Tabs>
      </Paper>
    );
  }

  render() {
    const { classes, toggleTodo, todos, isFetching, errorMessage } = this.props;

    if (isFetching && !todos.length) {
      return <CircularProgress className={classes.progress} />;
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }

    return (
      <div className={classes.root}>
        {this.renderFilterNavigation(this.state)}
        <List>
          {this.props.todos.map(todo => this.renderTodo(todo, toggleTodo))}
        </List>
      </div>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
