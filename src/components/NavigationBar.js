import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
};

function NavigationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Todos
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//
// const NavigationBar = () =>
//  (
//   <Navbar inverse>
//     <Grid>
//       <Navbar.Header>
//         <Navbar.Brand>
//           <a href="/">React Todo App</a>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Nav>
//           <LinkContainer to="/filter/all">
//             <NavItem>All</NavItem>
//           </LinkContainer>
//           <LinkContainer to="/filter/active">
//             <NavItem>Active</NavItem>
//           </LinkContainer>
//           <LinkContainer to="/filter/completed">
//             <NavItem>Completed</NavItem>
//           </LinkContainer>
//         </Nav>
//       </Navbar.Collapse>
//     </Grid>
//   </Navbar>
// );

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationBar);
