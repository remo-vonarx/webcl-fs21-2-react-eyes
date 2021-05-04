import React from 'react'


class Iris extends React.Component{
  constructor(props){
    super(props)
    this.iris = React.createRef();

    this.state= {
      isFollowing: true,
      mousePositionX: 0,
      mousePositionY: 0,
      originX: 0, 
      originY: 0,
      height: 0, 
      width: 0
    }
  }

  componentDidMount(){

    //origin auslesen
    const {x, y, width, height} = this.iris.current.getBoundingClientRect()
    
    this.setState({
      originX: x + (width/2),
      originY: y + (height/2), 
      height: height,
      width: width
    })

    this.setupMouseListener()
}


setupMouseListener = () => {

  document.addEventListener("mousemove", (event) => {
    const {clientX, clientY} = event

    const xMovement = clientX - this.state.originX
    const yMovement = clientY - this.state.originY 

    const maxIrisXMovement = (this.props.eyeWidth / 2) - (this.state.width / 1.5)
    const maxIrisYMovement = (this.props.eyeHeight / 2) - (this.state.height / 1.5)

    const maxMouseRange = 400

    const scaledX = xMovement * (maxIrisXMovement / maxMouseRange)
    const scaledY = yMovement * (maxIrisYMovement / maxMouseRange)

    let actualXMovement = xMovement > 0
                          ? Math.min(maxIrisXMovement, scaledX)
                          : Math.max(-maxIrisXMovement, scaledX)

    let actualYMovement = yMovement > 0
                          ? Math.min(maxIrisYMovement, scaledY)
                          : Math.max(-maxIrisYMovement, scaledY)

 
    this.iris.current.style.transform = `translateX(${actualXMovement}px) translateY(${actualYMovement}px)`;
  })
}
  
  render(){
    return(
      <div>
        <svg style={{visibility: this.props.isOpen ? 'visible' : 'hidden' }}>
          <radialGradient id="gradient1" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">
            <stop offset= "38%" stop-color="#000000" stop-opacity="1" />
            <stop offset= "46%" stop-color="#073F80" stop-opacity="1" />
            <stop offset= "90%" stop-color="#8EC0DD" stop-opacity="1" />
            <stop offset="100%" stop-color="#2F3A46" stop-opacity="1" />
          </radialGradient>
          <g ref={this.iris}>
            <ellipse cx="60" cy="60" rx="30" ry="30" opacity="1" fill="url(#gradient1)" />
            <ellipse cx="50" cy="50" rx="7"  ry="7"  opacity="1" fill="#FFFFFF" fill-opacity="0.8"/>
          </g>
        </svg>
      </div>
    )
  }
}
export default Iris;