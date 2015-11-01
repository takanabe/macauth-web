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
      <TableRow>
        <TableRowColumn>{elem['id']}</TableRowColumn>
        <TableRowColumn>{elem['user_group_id']}</TableRowColumn>
        <TableRowColumn>{elem['vlan_id']}</TableRowColumn>
        <TableRowColumn>{elem['information']}</TableRowColumn>
        <TableRowColumn>{elem['created_at']}</TableRowColumn>
        <TableRowColumn>{elem['updated_at']}</TableRowColumn>
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




