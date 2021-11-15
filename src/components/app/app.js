import {Component} from "react";

import AppInfo from "../app-info/app-info";
import './app.css'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Petro M.", increase: false, rise: false, salary: 800, id: 1},
                {name: "Katya L.", increase: false, rise: false, salary: 1000, id: 2},
                {name: "Stepan K.", increase: false, rise: false, salary: 5000, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return ({
                data: newArray
            })
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term === '') {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })

    }

    onUpdateSerch = (term) => {
        this.setState({term})
    }

    riseFilter = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary >= 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const {data, term, filter} = this.state;

        const employees = data.length;
        const increase = data.filter(item => item.increase).length;
        const visibleEmployees = this.riseFilter(this.searchEmployee(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    numberEmployees={employees}
                    numberEmployeesWithIncrease={increase}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSerch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList data={visibleEmployees}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAddItem={this.addItem}/>
            </div>
        )
    }
}

export default App;
