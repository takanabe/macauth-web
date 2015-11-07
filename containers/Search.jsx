import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { fetchMacInfo, changeCurrentPage } from '../actions';
import Pagination from '../components/Pagination';

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
    this.handlePagination= this.handlePagination.bind(this);
    this.handlePaginationToFirstPage= this.handlePaginationToFirstPage.bind(this);
    this.handlePaginationToLastPage= this.handlePaginationToLastPage.bind(this);
    this.handlePaginationToNextPage= this.handlePaginationToNextPage.bind(this);
    this.handlePaginationToPreviousPage= this.handlePaginationToPreviousPage.bind(this);
  }

  componentDidMount() {
    const { dispatch, fetchedData} = this.props
    dispatch(fetchMacInfo('', fetchedData.current_page))
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.selectedReddit !== this.props.selectedReddit) {
    //   const { dispatch, selectedReddit } = nextProps
    //   dispatch(fetchPostsIfNeeded(selectedReddit))
    // }
  }


  handleTextFieldChange(e){
    this.setState({ text: e.target.value })
  }

  handleSearchButton(page) {
    let keywords = this.refs.searchField.getValue();
    let { dispatch,fetchedData } = this.props;
    console.log("Click search");
    dispatch(fetchMacInfo(keywords, page));
    console.log("After search");
  }

  handlePagination(e){
    let { dispatch,fetchedData } = this.props;
    dispatch(changeCurrentPage(e.target.innerHTML))
    this.handleSearchButton(e.target.innerHTML);
  }

  handlePaginationToFirstPage(){
    let { dispatch,fetchedData } = this.props;
    dispatch(changeCurrentPage(1))
    this.handleSearchButton(1);
  }

  handlePaginationToLastPage(){
    let { dispatch,fetchedData } = this.props;
    let offset_limit = 10
    let last_page = Math.ceil(fetchedData.total_pages/offset_limit)
    dispatch(changeCurrentPage(last_page))
    this.handleSearchButton(last_page);
  }

  handlePaginationToPreviousPage(){
    let { dispatch,fetchedData } = this.props;
    dispatch(changeCurrentPage(fetchedData.current_page - 1))
    this.handleSearchButton(fetchedData.current_page - 1);
  }

  handlePaginationToNextPage(){
    let { dispatch,fetchedData } = this.props;
    dispatch(changeCurrentPage(fetchedData.current_page + 1))
    this.handleSearchButton(fetchedData.current_page + 1);
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
              ref="searchField"
              onEnterKeyDown = {this.handleSearchButton}
              hintText="Please input words you want to search.(if you feel search function is too slow, please enter keywords and press search button.)" />
            <RaisedButton
              label="Search"
              style={styles.searchButton}
              onTouchTap={this.handleSearchButton} />
        </Paper><br/>
        <Table
          height={this.props.height}
          fixedHeader={this.props.fixedHeader}
          fixedFooter={this.props.fixedFooter}
          selectable={true}
          multiSelectable={true}
          onCellClick={false}
          onRowSelection={false}>
          <TableHeader
             enableSelectAll={true}>
            <TableRow>
              <TableHeaderColumn colSpan="6"  style={styles.tableHeader}>
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
            </TableRow>
          </TableHeader>
          <TableBody
            >
            {elem}
          </TableBody>
          <TableFooter>
            <TableRow>
              <Pagination handlePagination={this.handlePagination}
                          handlePaginationToLastPage={this.handlePaginationToLastPage}
                          handlePaginationToFirstPage={this.handlePaginationToFirstPage}
                          handlePaginationToNextPage={this.handlePaginationToNextPage}
                          handlePaginationToPreviousPage={this.handlePaginationToPreviousPage}
                          page_data={this.props.fetchedData} />
            </TableRow>
          </TableFooter>
        </Table>

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
    // reducer経由で変更
    fetchedData,
    // 固定値
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    height: '300px'
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
