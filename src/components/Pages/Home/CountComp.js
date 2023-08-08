import React, { Component } from 'react'

export class CountComp extends Component {
    state={
        count:0
    }
    componentDidMount(){
        console.log("did mount", this.props.countValue)
        this.setState({count:this.props.count})
       let int = setInterval(()=>{
        if(this.state.count < this.props.countValue){
            let x = this.state.count;
            x++;
            this.setState({count:x})
        }else{
            clearInterval(int)
        }
       }, 100)
    }
  render() {
    const {item, countValue} = this.props;
    const {count} = this.state
    return (
        <div className='about-we-icems-container'>
        <p className="about-we-home-count">
        
         {count}
        </p>
        <p className="about-we-home-desc">{item?.title}</p>
    </div>
    )
  }
}

export default CountComp