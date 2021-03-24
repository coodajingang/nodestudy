import React from 'react'

export default class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.text, id: this.props.id}
  }

  render() {
    return (
      <h1 nid={this.state.id}  contentEditable='true'>{this.state.data}</h1>
    );
  }
}