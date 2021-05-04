import React from 'react'
import Iris from "./Iris";
import EyeLid from "./EyeLid";


class Eye extends React.Component {
    interval;
    constructor(props) {
        super(props)
        this.state = {isOpen: true}
        this.handleClick = this.handleClick.bind(this);
    }

    //Open/close eyelid
    handleClick() {this.setState( {isOpen : !this.state.isOpen});}

    //Blink from time to time
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({isOpen : false})
            this.setState({isOpen : true})
        }, 10000 );
    }

    //Unmount what has been mounted, to prevent memory leaks
    componentWillUnmount() {clearInterval(this.interval);}

    render() {
        return (
            <div onClick={this.handleClick}>
                <EyeLid open={this.state.isOpen}/>
                <Iris/>
            </div>
        )
    }
}
export default Eye;