import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';


class TodoItems extends Component {

 constructor(props){
        super(props);
this.onDeleteTodo = this.onDeleteTodo.bind(this);
}
   onDeleteTodo(keyIndex){
     this.props.delete(keyIndex);
   }

    render(){

         return(
          <Grid item xs={9} md={3}>
                              <div>
                                  <List>
                                      {this.props.taskEntries.map(todoTaskItems  => (
                                      <ListItem key={todoTaskItems.index}>
                                           <Checkbox tabIndex={-1} disableRipple/>
                                                <ListItemText primary={todoTaskItems.value}/>
                                                      <ListItemSecondaryAction >
                                                         <IconButton aria-label="Delete" >
                                                              <DeleteIcon onClick={this.onDeleteTodo.bind(todoTaskItems.index)}/>
                                                              </IconButton>
                                                      </ListItemSecondaryAction>
                                      </ListItem>
                                      ))}
                                  </List>
                              </div>
                          </Grid>
      );

    }

}

export default TodoItems;