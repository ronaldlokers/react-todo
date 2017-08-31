import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

const FetchError = ({ message, onRetry }) => (
  <Dialog open={true} onRequestClose={this.handleRequestClose}>
    <DialogTitle>{'Could not fetch todos'}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onRetry} color="primary">
        Try again
      </Button>
    </DialogActions>
  </Dialog>
);

export default FetchError;
