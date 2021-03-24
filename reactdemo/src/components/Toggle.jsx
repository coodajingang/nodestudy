import React from 'react'

// 1. export : 使用非export default方式导出  
// 2. 事件处理函数的bind this
export class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn : false}
    this.toggle= this.toggle.bind(this)
  }

  toggle(event) {
    this.setState ({
      isToggleOn: !this.state.isToggleOn
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.isToggleOn ? "ON" : "OFF"}</p>
        <button onClick={this.toggle}>Click Me</button>
      </div>
    );
  }
}
