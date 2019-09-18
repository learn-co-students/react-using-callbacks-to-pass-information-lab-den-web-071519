import React, { Component } from 'react';

export default class Cell extends Component {
  

  
    state = {
      color: this.props.color
    }

    getSelectedColor = () => {
      const selected = this.props.getColor()
      this.setState({color: selected})
    }


  render(){
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.getSelectedColor()}>
      </div>
    )
  }
    
}

