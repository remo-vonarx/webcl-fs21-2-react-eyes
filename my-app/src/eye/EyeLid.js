import React from 'react'

class EyeLid extends React.Component {
    constructor(props) {
        super(props);
        this.eyeLid = React.createRef()
    }

    componentDidMount(){
        //origin auslesen
        const {width, height} = this.eyeLid.current.getBoundingClientRect()
        
        //setzt seine Origin
        this.props.setEyeValues(width, height)
    }
    
    
    render() {
        return(
            <svg id = {`${this.props.side}_eye-lid`}>
                <filter id="shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset       dx="0" dy="8" />
                    <feColorMatrix  type="matrix"
                                    values="0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 .5 0"/>
                    <feBlend        in="SourceGraphic" mode="normal"/>
                </filter>
                {
                    this.props.open 
                    ?   <g ref = {this.eyeLid}>
                            <path d="M0 60 A60,60 0 0,1 120,60 A60,30 0 0,0 0,60 Z" opacity="1" fill="#FDDC99" fill-opacity="1" filter="url(#shadow)" />
                            <path d="M0 60 A60,60 0 0,0 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill="#F4CB76" fill-opacity="1" />
                        </g>
                    :   <g ref = {this.eyeLid}>
                            <path d="M0 60 A60,60 0 0,1 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill="#FDDC99" fill-opacity="1" />
                        </g>
                }
            </svg>
        )
    }
}
export default EyeLid;