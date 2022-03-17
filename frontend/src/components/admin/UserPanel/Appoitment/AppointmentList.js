import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
import { getCall } from "../../../../helpers/axiosUtils";
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

const AppointmentList = ({ tableRows }) => {
  const classes = useStyles();

  return (
    <div>
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
                <b>Booking Date </b>
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

              const tags = row.doctor_tags;
              const tag_name = tags ? tags.join(",") : "";

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
                  <TableCell align="center">{row.appointmentDate}</TableCell>
                  <TableCell align="center">{date}</TableCell>
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
    </div>
  );
};

export default AppointmentList;
