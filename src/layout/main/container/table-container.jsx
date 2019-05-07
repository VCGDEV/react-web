import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Card, Row, Col, Button } from "react-bootstrap";

const TableContainer = ({ columns, data, pageData, onClick }) => (
  <Card
    style={{
      height: "100%",
      width: "100%"
    }}
  >
    <Card.Header className="card-header-fixed">
      <Row>
        <Col xs="10" lg="10" sm="10" md="10">
          <h6>{pageData.pageTitle}</h6>
        </Col>
        <Col xs="2" lg="2" sm="2" md="2" className="pull-rigth">
          <Button size="sm" variant="outline-dark" onClick={pageData.action}>
            {pageData.buttonLegend}
          </Button>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body
      className="ag-theme-balham"
      style={{
        height: "80%",
        width: "100%"
      }}
    >
      <AgGridReact columnDefs={columns} rowData={data} />
    </Card.Body>
  </Card>
);

export default TableContainer;
