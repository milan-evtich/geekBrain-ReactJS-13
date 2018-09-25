import  React from 'react';

class DataHolder extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
        this.state = {
            isDateOn: false,
            date: date
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isDateOn: !state.isDateOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isDateOn ? this.state.date : 'Show date'}
            </button>
        );
    }

    // constructor() {
    //     super();
    //
    //     var today = new Date(),
    //         date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    //
    //     this.state = {
    //         date: date
    //     };
    // }

}

export default DataHolder;