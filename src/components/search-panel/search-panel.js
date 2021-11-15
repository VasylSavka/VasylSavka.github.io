import {Component} from 'react';

import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.props.onUpdateSearch(term);
        this.setState({term});
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти працівника"
                onChange={this.onUpdateSearch}
                value={this.state.term}
            />
        )
    }
}

export default SearchPanel;