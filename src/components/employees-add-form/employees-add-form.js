import {Component} from 'react';
import "./employees-add-form.css"

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        if (this.state.name === '' || this.state.salary === '') return;
        this.props.onAddItem(name, salary);

        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавити нового працівника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Як його звуть?"
                           onChange={this.onValueChange}
                           name="name"
                           value={name}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}
                           name="salary"
                           value={salary}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавити
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;