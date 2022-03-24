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

const PrescriptionsList = ({ tableRows }) => {
  const classes = useStyles();

  const [prescriptionData, setPrescriptionData] = useState({
    prescription_list: [],
  });

  const [queueData, setQueueData] = useState({});
  const currentUser = useSelector((state) => state.Auth.user);

  const [printPdfModal, setPrintPdfModal] = useState(false);

  const getPrescriptionData = (presc_id) => {
    const url = `${BASE_URL}api/common_m/${presc_id}/get-prescription/`;
    axios.get(url).then((resp) => {
      setPrescriptionData(resp.data.data);
      getMedicinesList();
    });
  };

  const tooglePrintPdf = () => {
    setPrintPdfModal(!printPdfModal);

    // return { ...this.state, printPdfModal: !this.state.printPdfModal };
  };

  const getQueueDetails = (queueId) => {
    getCall(BASE_URL + `api/queue/${queueId}/get-queue/`).then((r) => {
      // let response = r.data;
      // if (response.status != 0) {
      //   props.history.push(`/app/dashboard`);
      // }

      if (r.status == 200) {
        let queueData = r.data;
        setQueueData(queueData);
        console.log("que");
        console.log(queueData);
      } else {
        if (r.status == 401) {
          toast("You do not have access to queue details");
        }
      }
    });
  };

  const getMedicinesList = () => {
    const medicines_list = [];
    let idx = 0;
    for (let obj of prescriptionData.prescription_list) {
      medicines_list.push({
        idx,
        medicine_name: obj.name,
        drug_to_taken: obj.drug_to_taken,
        note: obj.note,
      });

      idx += 1;
    }

    return medicines_list;
  };

  const viewPrescHandler = (presc_id) => {
    getPrescriptionData(presc_id);
    tooglePrintPdf();
  };

  useEffect(() => {
    if (prescriptionData.queue != undefined) {
      getQueueDetails(prescriptionData.queue);
    }
  }, [prescriptionData.queue]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center">
                <b>Date</b>
              </TableCell>
              <TableCell align="center">
                <b>Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Created By </b>
              </TableCell>
              <TableCell align="center">
                <b> </b>
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
              const created_at = row.created_at;
              const date = created_at ? created_at.split("T")[0] : "";

              const tags = row.doctor_tags;
              const tag_name = tags ? tags.join(",") : "";

              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <div className="patient-name">{date}</div>
                  </TableCell>
                  <TableCell align="center">Prescription {row.id}</TableCell>
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
                          Dr. {row.doctor_name}
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
                    <div className="icons">
                      {/* <IconButton size="small"> */}
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
                        onClick={() => viewPrescHandler(row.id)}
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

            <PrescriptionPage
              medicine_list_={getMedicinesList()}
              data={queueData}
              doctor_info={
                queueData.doctor_info ? queueData.doctor_info : undefined
              }
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

export default PrescriptionsList;
