import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { fetchMacInfo} from '../actions';

import mui, {
              Paper,
              RaisedButton,
              Table,
              TableBody,
              TableFooter,
              TableHeader,
              TableHeaderColumn,
              TableRow,
              TableRowColumn,
              TextField,
              Toolbar,
              ToolbarGroup,
              ToolbarSeparator
            } from 'material-ui';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleTextFieldChange= this.handleTextFieldChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, fetchedData} = this.props
    dispatch(fetchMacInfo(0))
  }

  handleTextFieldChange(e){
    this.setState({ text: e.target.value })
  }

  handleSearchButton() {
    let { dispatch } = this.props;

    console.log("Click search");
    dispatch(fetchMacInfo(7));
    console.log("After search");
  }

  render() {
    const { mac_addresses } = this.props.fetchedData
    let elem;


    let styles = {
      root: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        overflow: 'hidden'
      },
      tableHeader: {
        marginTop: 'auto',
        marginButtom: 'auto',
        textAlign: 'center',
        fontSize: 30
      },
      tableHeaderColumn: {
        textAlign: 'center',
        fontSize: 15
      },
      tableRowColumn: {
        textAlign: 'center'
      },
      searchButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        overflow: 'hidden'
      },
      editButton: {
        float: 'right',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      deleteButton: {
        float: 'right',
        marginLeft: 20,
        marginRight: 'auto'
      },
      textfield: {
        width: '80%'
      }
    };

    console.log("Before calc length");
    console.log(mac_addresses);
    if(0 < mac_addresses.length) {
      elem = mac_addresses.map(elem =>
              <TableRow>
              <TableRowColumn style={styles.tableRowColumn} >{elem['id']}</TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} >{elem['user_group_id']}</TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} >{elem['vlan_id']}</TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} >{elem['information']}</TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} >{elem['created_at']}</TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} >{elem['updated_at']}</TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} ><RaisedButton label="Edit" /></TableRowColumn>
              <TableRowColumn style={styles.tableRowColumn} ><RaisedButton label="Delete" /></TableRowColumn>
              </TableRow>
             );
    }else{
      console.log("nothing");
      elem  = null;
    }

    return (
      <div>
        <Paper style={styles.root}>
            <TextField
              style={styles.textfield}
              hintText="Please input words you want to search.(Not implemented Now)" />
            <RaisedButton
              label="Search"
              style={styles.searchButton}
              onTouchTap={this.handleSearchButton} />
        </Paper><br/>
        <Table
          height={this.props.height}
          fixedHeader={this.props.fixedHeader}
          fixedFooter={this.props.fixedFooter}
          selectable={this.props.selectable}
          multiSelectable={this.props.multiSelectable}
          onRowSelection={this._onRowSelection}>
          <TableHeader enableSelectAll={this.props.enableSelectAll}>
            <TableRow>
              <TableHeaderColumn colSpan="8"  style={styles.tableHeader}>
                Registered MAC Address information
                <RaisedButton
                  label="Delete Checked Rows"
                  style={styles.deleteButton}
                  />
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={styles.tableHeaderColumn} tooltip='The value of MAC Address'>MAC Address</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn} tooltip='The Name of User group that this MAC Address belongs to'>User Group Name</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn} tooltip='The value of VLAN that this MAC Address belongs to'>VLAN</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn} tooltip='The information such as username, device model, etc...'>Other Information</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn}>Created Date(UTC)</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn}>Updated Date(UTC)</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn}>Action1</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableHeaderColumn}>Action2</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={this.props.deselectOnClickaway}
            showRowHover={this.props.showRowHover}
            stripedRows={this.props.stripedRows}>
            {elem}
          </TableBody>
          <TableFooter>
          </TableFooter>
        </Table>
        {/* Pagination */}
        <div className="container">
          <div className="pagination">
            <span>&lt;</span>
            <span isActive='true'>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>&gt;</span>
          </div>
        </div>

      </div>
    );
  }
}

Search.propTypes = {
};



function mapStateToProps(state) {
  console.log(state);
  const { fetchedData } = state

  return {
    fetchedData,
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    height: '520px'
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//   };
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Search);
