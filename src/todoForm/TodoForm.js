import React from 'react';
import './todoForm.css';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            btnDisabled: true,
            value: ''
        };
    }

    componentDidMount(){
        this.inputTodo.focus();
    }

    handleChange = (e) => {
        this.setState({
            btnDisabled: e.target.value !== '' ? false : true,
            value: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.handleClick();
        }
    }

    handleClick = () => {
        this.props.handleNewItem(this.state.value);
        this.clearItem();
        this.inputTodo.focus();
    }

    clearItem = () => {
        this.setState({
            btnDisabled: true,
            value: ''
        });
    }

    render() {
        return (
            <div className="todo-form">
                <input
                    type="text"
                    value={ this.state.value }
                    onChange={ this.handleChange }
                    onKeyPress={ this.handleKeyPress }
                    placeholder="What you wanna do?"
                    ref={ (input) => { this.inputTodo = input; } } />
                <button
                    className="button-primary"
                    disabled={ this.state.btnDisabled }
                    onClick={ this.handleClick } >
                    +
                </button>
            </div>
        );
    }
}

export default TodoForm;
