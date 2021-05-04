import React from 'react'
import Iris from "./Iris";
import EyeLid from "./EyeLid";


class Eye extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            eyeWidth: 0,
            eyeHeight: 0,
        }
    }

    //Open/close eyelid
    handleClick = () => {
        this.setState( {isOpen : !this.state.isOpen});
    }

    setEyeValues = (eyeWidth, eyeHeight) =>{
        this.setState({
            eyeWidth: eyeWidth,
            eyeHeight: eyeHeight
        })
    }

    //Blink from time to time
    componentDidMount() {
        setInterval(() => {
            this.setState({isOpen : false})
            setTimeout(() => {this.setState({isOpen : true})}, 200)
        }, 7000 );
    }

    //Unmount what has been mounted, to prevent memory leaks
    componentWillUnmount() {clearInterval(this.interval);}

    render() {
        return (
            <div onClick={this.handleClick} id={`${this.props.side}_eye`}>
                <EyeLid 
                    open={this.state.isOpen} 
                    side={this.props.side} 
                    setEyeValues={this.setEyeValues}
                />
                <Iris 
                    side={this.props.side}
                    eyeHeight = {this.state.eyeHeight}
                    eyeWidth = {this.state.eyeWidth}
                    isOpen={this.state.isOpen}
                />
            </div>
        )
    }
}
export default Eye;