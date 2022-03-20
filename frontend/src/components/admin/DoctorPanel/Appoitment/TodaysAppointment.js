import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { getCall } from "../../../../helpers/axiosUtils";
import { BASE_URL } from "../../../../helpers/constants";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .selected": {
      borderBottom: "2px solid #0A58CA",

      "& h5": {
        color: "#0A58CA",
      },
    },
  },
  selectorItem: {
    padding: "1em",
    display: "flex",
    justifyContent: "center",

    "& h5": {
      textAlign: "center",
    },
  },
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

const TodaysAppointment = () => {
  const classes = useStyles();
  const [tableType, setTableType] = useState("todays_appointments");
  const [tableRows, setTableRows] = useState([]);

  const getSelectedCls = (type) => {
    if (type == tableType) {
      return "selected";
    }
    return "";
  };

  const get_table = () => {
    getCall(BASE_URL + "api/doctors_m/get-dashboard-table", {
      params: {
        type: tableType,
      },
    })
      .then((resp) => {
        if (resp.status == 200) {
          if (resp.data) {
            let tableRows = resp.data.table_rows;
            console.log(resp.data);

            if (tableRows) {
              setTableRows(tableRows);
              console.log(resp.data);
            }
          }
        }
      })
      .catch((e) => {
        setTableRows([]);
      });
  };

  useEffect(() => {
    get_table();
  }, [tableType]);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container>
          <Grid
            item
            sm={4}
            className={
              classes.selectorItem + " " + getSelectedCls("todays_appointments")
            }
            onClick={(e) => setTableType("todays_appointments")}
          >
            <h5>Todays Appointments</h5>
          </Grid>
          <Grid
            item
            sm={4}
            className={
              classes.selectorItem +
              " " +
              getSelectedCls("upcoming_appointments")
            }
            onClick={(e) => setTableType("upcoming_appointments")}
          >
            <h5>Upcoming Appointments</h5>
          </Grid>
        </Grid>

        {/* {tableType}
         */}
        {/* 
        {tableType == "appointment" && (
        )}
        {tableType == "prescription" && (
         
        )} */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell align="center">
                  <b>Doctor Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>Appointment Date</b>
                </TableCell>
                <TableCell align="center">
                  <b>Type </b>
                </TableCell>
                <TableCell align="center">
                  <b>Paid Amount</b>
                </TableCell>
                <TableCell align="center">
                  <b>Status </b>
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

                const booking_date = row.booking_date;
                const date = booking_date ? booking_date.split("T")[0] : "";

                const status = row.status;
                let status_component = <div></div>;
                let status_style = {
                  background: "green",
                  padding: "0.3em",
                  color: "white",
                  borderRadius: "0.3em",
                };
                if (status == 0) {
                  status_style.background = "gray";
                  status_component = <div style={status_style}>Pending</div>;
                } else if (status == 1) {
                  status_style.background = "green";
                  status_component = <div style={status_style}>Confirmed</div>;
                } else if (status == 2) {
                  status_style.background = "red";
                  status_component = <div style={status_style}>Failed</div>;
                }

                const patient_id = 34;
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="patient-name"
                          style={{
                            display: "flex",

                            flexDirection: "column",
                          }}
                        >
                          <span style={{ textAlign: "start" }}>
                            {row.patient_name}
                          </span>
                          <span
                            style={{ fontWeight: "505", fontSize: "0.7em" }}
                            className="primary-font-color"
                          >
                            #PT00{patient_id}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center">{row.appointmentDate}</TableCell>
                    <TableCell align="center">
                      {row.old_patient == true ? "Old Patient" : "New Patient"}
                    </TableCell>
                    <TableCell align="center">
                      ₹ {row.consultation_charges}
                    </TableCell>
                    <TableCell align="center">{status_component}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default TodaysAppointment;
