import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'jack'
        };
        this.setName = this.setName.bind(this);
    }
    static propTypes: {
        father: 'me'
    }
    static defaultProps: {
        father: PropTypes.string
    }
    setName(event,e) {
        this.setState({name: event.target.value});
    }
    render() {
        return <div>
            <h4>{this.state.name}</h4>
            <input type="text" onChange={this.setName.bind(this, 'name')}/>
            <input type="text" onChange={this.setName.bind(this, 'age')}/>
        </div>
    }
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this));
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(`next props is ${nextProps}`);
        console.log('next state is ${nextState}');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`prev props is ${prevProps}`);
        console.log(`prev state is ${prevState}`);

    }

}

ReactDOM.render(<Content/>, document.querySelector('#app'));