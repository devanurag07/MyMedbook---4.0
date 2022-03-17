import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
// import { getCall } from "../../../../helpers/axiosUtils";

// import { BASE_URL } from "../../../../helpers/constants";
import { BASE_URL } from "../../../../helpers/constants";
import { getCall } from "../../../../helpers/axiosUtils";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PrintIcon from "@mui/icons-material/Print";
import { Button, IconButton } from "@mui/material";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import PrescriptionPage from "../../DoctorPanel/BillingPages/PrescriptionPage";
import InvoicePage from "../../DoctorPanel/BillingPages/InvoicePage2";
import { ReactComponent as DoctorSvg } from "../../../../assets/images/doctor_svg.svg";

const useStyles = makeStyles((theme) => ({
  root: {},

  tableHead: {
    "& th": {
      fontSize: "15px",
      fontWeight: "405",
      fontFamily: "Poppins",
    },
  },
  tableBody: {
    "& td": {
      fontSize: "16px",
      color: "#4a4848",
      fontFamily: "Poppins",
      fontWeight: "505",
    },
    "& th": {
      fontWeight: "bold",
      fontSize: "16px",
    },
  },
  doctor_svg: {
    width: "40px",
  },
}));

const BillingList = ({ tableRows }) => {
  const classes = useStyles();

  const [printPdfModal, setPrintPdfModal] = useState(false);
  const [invoiceData, setInvoiceData] = useState({});

  const tooglePrintPdf = () => {
    setPrintPdfModal(!printPdfModal);

    // return { ...this.state, printPdfModal: !this.state.printPdfModal };
  };

  const viewBillingHandler = (invoice) => {
    setInvoiceData(invoice);
    tooglePrintPdf();
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center">
                <b>Invoice No.</b>
              </TableCell>
              <TableCell align="center">
                <b>Doctor</b>
              </TableCell>
              <TableCell align="center">
                <b>Amount </b>
              </TableCell>
              <TableCell align="center">
                <b>Paid on </b>
              </TableCell>
              <TableCell align="center">
                <b> </b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {/* {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}

            {tableRows.map((row) => {
              console.log(row);
              const billing_date = row.billing_date;
              const date = billing_date ? billing_date.split("T")[0] : "";

              const doctor_info = row.doctor_data;
              const tags = doctor_info ? doctor_info.tags : [];
              const tag_name = tags ? tags.join(",") : "";

              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">Invoice No. #{row.id}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoctorSvg className={classes.doctor_svg} />
                      <div
                        className="patient-name"
                        style={{
                          display: "flex",

                          flexDirection: "column",
                        }}
                      >
                        <span style={{ textAlign: "start" }}>
                          Dr. {doctor_info ? doctor_info.first_name : ""}
                        </span>
                        <span
                          style={{ fontWeight: "505", fontSize: "0.7em" }}
                          className="primary-font-color"
                        >
                          {tag_name}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell align="center">
                    {row.consultation_charges}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <div className="patient-name">{date}</div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="icons">
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        style={{
                          fontWeight: "605",
                          background: "#5299e38a",
                          color: "#4d88e1",
                          marginRight: "10px",
                        }}
                        onClick={() => viewBillingHandler(row)}
                      >
                        <VisibilityIcon
                          fontSize="small"
                          style={{ marginRight: "5px" }}
                        />
                        View
                      </Button>
                      <Button
                        size="small"
                        style={{ fontWeight: "605" }}
                        variant="contained"
                      >
                        <PrintIcon
                          fontSize="small"
                          style={{ marginRight: "5px" }}
                        />
                        Print
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="modal-col">
        <Modal
          isOpen={printPdfModal}
          toggle={tooglePrintPdf}
          // className={className}
          // className={classes.root}
        >
          <ModalHeader toggle={tooglePrintPdf}>Print Prescription</ModalHeader>
          <ModalBody>
            {/* <PrescriptionPdf
              medicine_list_={getMedicinesList()}
              data={queueData}
              doctor_info={
                queueData.doctor_info ? queueData.doctor_info : undefined
              }
            /> */}

            <InvoicePage
              invoiceData={invoiceData}
              doctor_info={invoiceData.doctor_data}
            />

            {/* <InvoicePage
              medicine_list_={getMedicinesList()}
              customer_data_={queueData}
              doctor_info={
                queueData.doctor_info ? queueData.doctor_info : undefined
              }
            /> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={tooglePrintPdf} size="sm">
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default BillingList;
