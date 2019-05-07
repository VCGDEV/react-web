import React from "react";
import TableContainer from "../../layout/main/container/table-container";
class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.clickBtn = this.clickBtn.bind(this);
    this.state = {
      pageData: {
        pageTitle: "Customers",
        buttonLegend: "Add",
        action: this.clickBtn
      },
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          sortable: true,
          filter: true
        },
        {
          headerName: "Model",
          field: "model",
          sortable: true,
          filter: true
        },
        {
          headerName: "Price",
          field: "price",
          sortable: true,
          filter: true
        }
      ],
      rowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000
        }
      ]
    };
  }
  render() {
    return (
      <TableContainer
        columns={this.state.columnDefs}
        data={this.state.rowData}
        pageData={this.state.pageData}
        onClick={this.clickBtn}
      />
    );
  }

  clickBtn() {
    console.log("This is a test");
  }
}

export default CustomerList;
