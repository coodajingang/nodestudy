import React from 'react'

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.text, id: this.props.id}
  }

  render() {
    return (
      <p nid={this.state.id} contentEditable='true'>{this.state.data}</p>
    );
  }
}