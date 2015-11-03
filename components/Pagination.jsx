import React, { PropTypes, Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let styles = {
      current_page: {
        background: '#2196F3',
        borderRadius: '50%',
        color: 'white'
      },
      other_page: {

      }
    };

 // * Pagination Setting Start * //
    // DB情報の数を取りあえず固定値で渡す
    const {page_data} = this.props
    // let num_row = page_data.total_pages
    let num_row = page_data.total_pages
    let offset_limit = 10; // RAILS API側のoffset:5 limit:10固定値
    let total_pages = Math.ceil(num_row/offset_limit)
    let pagination;
    let previous_page;


    let next_page;
    // let current_page = this.props.current_page
    let current_page = parseInt(page_data.current_page)
    let displayed_page_start = (page_data.current_page -1) * offset_limit + 1;
    let displayed_page_end = (page_data.current_page -1) * offset_limit + page_data.current_page_size;

    if(current_page !== 1){
      previous_page = <span onClick={this.props.handlePaginationToPreviousPage}>&lt;</span>
    }
    if(current_page !== total_pages){
      next_page = <span onClick={this.props.handlePaginationToNextPage}>&gt;</span>
    }
    console.log("Before Pagination");
    if(num_row < 100){
      let n = Math.ceil(num_row/offset_limit);
      let pagination_num_array = new Array(n);
      for (let i = 0; i < n; i++) {
          pagination_num_array[i] = i + 1; //page番号を1からスタートさせる
      }
      pagination = pagination_num_array.map(elem =>
                                    <span value={elem} onClick={this.props.handlePagination}>{elem}</span>
                                   );
      console.log(pagination);
    }else if(total_pages - (offset_limit - 1) <= current_page){
      let n = Math.ceil(total_pages - (current_page-1));
      let pagination_num_array = new Array(n);
      for (let i = 0; i < n; i++) {
          pagination_num_array[i] = current_page + i;
      }
      pagination = pagination_num_array.map((elem,index) =>
                                    <span value={elem}
                                          style={(index == 0) ? styles.current_page : styles.other_page}
                                          onClick={this.props.handlePagination}>{elem}</span>

                                             );
    }else{
      if(current_page == 1){
        let pagination_num_array = new Array(10);
        for (let i = 0; i < 10; i++) {
          pagination_num_array[i] = current_page + i; //page番号を1からスタートさせる
        }
        pagination = pagination_num_array.map((elem,index) =>
                                              <span value={elem} style={(index == 0) ? styles.current_page : styles.other_page} onClick={this.props.handlePagination}>{elem}</span>
                                             );
        // pagination = pagination_num_array.map(elem =>
        //                                       <span value={elem}  onClick={this.props.handlePagination}>{elem}</span>
        //                                      );
      }else{
        // offset = (current_page - 1) * 10 - 1;
        console.log("in pagination test")
        console.log("current page: " + current_page)
        let pagination_num_array = new Array(10);
        for (let i = 0; i < 10; i++) {
          pagination_num_array[i] = current_page + i; //page番号を1からスタートさせる
        }
        pagination = pagination_num_array.map((elem,index) =>
                                              <span value={elem} style={(index == 0) ? styles.current_page : styles.other_page} onClick={this.props.handlePagination}>{elem}</span>
                                             );
      }
    }
    // * Pagination Setting End * //
    return (
        <div className="container">
          <div className="pagination">
            <span onClick={this.props.handlePaginationToFirstPage}>&lt;&lt;</span>
            {previous_page}
            {pagination}
            {next_page}
            <span onClick={this.props.handlePaginationToLastPage}>&gt;&gt;</span>
          </div>
            items #{displayed_page_start} - {displayed_page_end} / {num_row} are displayed, current_page: #{current_page}/ {total_pages}
        </div>
    );
  }
}

export default Pagination;
