import React from "react";

class Image extends React.Component {
  render() {
    return (
      <img className={this.props.componentClass} src={this.props.image} alt={this.props.componentAlt} />
    )
  }
}

export default Image;