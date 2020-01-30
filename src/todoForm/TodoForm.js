import React from 'react';

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
            <div class="container mt-5">
                <form class="d-flex">
                    <input
                        className="form-control form-control-lg d-inline mr-3"
                        onChange={ this.handleChange }
                        onKeyPress={ this.handleKeyPress }
                        placeholder="What you wanna do?"
                        ref={ (input) => { this.inputTodo = input; } }
                        type="text"
                        value={ this.state.value } />
                    <button
                        className="btn btn-primary btn-lg d-inline"
                        disabled={ this.state.btnDisabled }
                        onClick={ this.handleClick } >
                        <i class="fas fa-plus"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
