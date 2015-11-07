import React, { Component, PropTypes } from 'react'
import mui, {
              TableRow,
              TableRowColumn
            } from 'material-ui';


class TableItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elem } = this.props;
    let element = (
      <TableRow onClick={false}>
        <TableRowColumn onClick={console.log("teset")}>{elem['id']}</TableRowColumn>
        <TableRowColumn onClick={console.log("teset")}>{elem['user_group_id']}</TableRowColumn>
        <TableRowColumn onClick={console.log("teset")}>{elem['vlan_id']}</TableRowColumn>
        <TableRowColumn onClick={console.log("teset")}>{elem['information']}</TableRowColumn>
        <TableRowColumn onClick={console.log("teset")}>{elem['created_at']}</TableRowColumn>
        <TableRowColumn onClick={console.log("teset")}>{elem['updated_at']}</TableRowColumn>
      </TableRow>
    );

    return (
        {element}
    );
  }
}

TableItem.propTypes = {
};

export default TableItem;




