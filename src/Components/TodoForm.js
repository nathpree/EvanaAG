import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TodoItems from './TodoItems';

class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state = {
         todoTask : [{index: 1, value: "Go for a Walk"},
                     {index: 2, value: "Check G Calender"}],
         userInput: "",
         }
         this.handleOnChange = this.handleOnChange.bind(this);
         this.onAddTodo = this.onAddTodo.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
         }


    handleOnChange(event){
       this.setState({
                 userInput: event.target.value,
               });
    }

    onAddTodo(event){

     if(this.state.userInput !== "") {
         this.state.todoTask.unshift({
         index: this.state.todoTask.length+1,
         value:this.state.userInput
        });

         this.setState((prevState)=> {
         return{
             todoTask : this.state.todoTask,
             userInput : ""

           };
         });
      }
       event.preventDefault();
    }

    deleteItem(keyIndex){
        this.state.todoTask.splice(keyIndex,1);
        this.setState({todoTask: this.state.todoTask});
    }

    render(){
        return(
            <div>
                <Toolbar variant="dense">
                         <TextField
                              name="TodoForm"
                              placeholder="Whats in list today?"
                              type="text"
                              onChange={this.handleOnChange}
                          />

                 <Button variant="contained" mini aria-label="Add" size="small" color="primary" onClick={this.onAddTodo}>
                           <AddIcon />
                         </Button>
                </Toolbar>

                <TodoItems taskEntries = {this.state.todoTask}
                           delete={this.deleteItem}/>

           </div>

        );
    }

}

export default TodoForm;