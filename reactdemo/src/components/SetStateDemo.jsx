import React from "react"; 

export default class SetStateDemo extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count+1
    });
    console.log(this.state.count);
  }

  async incrementAsync() {
      await this.setStateAsync({count: this.state.count+1});
      console.log(this.state.count)
  }
  setStateAsync(state) {
    // return Promise.resolve((resolve)=>{
    //   this.setState(state, resolve);
    // })
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }

  render() {
    return (
      <div>
        SetStateDemo 
        <p>{this.state.count}</p> 
        <button onClick={this.increment}>modiffy</button>
        <button onClick={this.incrementAsync.bind(this)}>modiffy Async</button>
      </div>
    )
  }
}