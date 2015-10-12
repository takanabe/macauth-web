import React from "react";

export default React.createClass({
  render() {
    return (
      <div className="component">
        Test!, {this.props.name}!
      </div>
    );
  },
});
