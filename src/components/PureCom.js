import React, { PureComponent } from 'react'

 class PureCom extends PureComponent {
  render() {
    
    console.log("Pure component render...");
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}
export default PureCom