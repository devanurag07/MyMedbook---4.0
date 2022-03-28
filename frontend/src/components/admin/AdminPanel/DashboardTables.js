import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Grid, Paper } from "@mui/material";
import { getCall } from "../../../helpers/axiosUtils";
import { BASE_URL } from "../../../helpers/constants";

const DashboardTables = () => {
  const [table_data, setTableData] = useState({
    customers_list: [],
    doctors_list: [],
  });

  const getDashboardTables = () => {
    getCall(BASE_URL + "api/admin_m/get-tables-data").then((resp) => {
      console.log(resp.data);
      let data = resp.data;
      if (resp.data.status == 200) {
        setTableData(data.response);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    getDashboardTables();
  }, []);

  return (
    <div>
      <div className="tables mt-2">
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Paper
              elevation={1}
              style={{
                marginBottom: "1em",
                marginTop: "2em",
                padding: "0em 2em",
              }}
            >
              <div
                className="header"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5
                  style={{ fontWeight: "505" }}
                  className="primary-font-color"
                >
                  Doctors List
                </h5>
                <div className="btn-container">
                  <button
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: "0.8em", padding: "0.2em 0.6em" }}
                  >
                    {" "}
                    View All
                  </button>
                </div>
              </div>
            </Paper>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Doctor Name</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Speciality</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Earned </b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Reviews </b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table_data.doctors_list.map((doctor) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
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
                                Dr. {doctor.first_name + " " + doctor.last_name}
                              </span>
                              <span
                                style={{
                                  fontWeight: "505",
                                  fontSize: "0.7em",
                                }}
                                className="primary-font-color"
                              ></span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="center">
                          {doctor.speciality}
                        </TableCell>
                        <TableCell align="center">
                          ₹{doctor.total_earning}
                        </TableCell>
                        <TableCell align="center">AFASF</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item sm={6}>
            <Paper
              elevation={1}
              style={{
                marginBottom: "1em",
                marginTop: "2em",
                padding: "0em 2em",
              }}
            >
              <div
                className="header"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5
                  style={{ fontWeight: "505" }}
                  className="primary-font-color"
                >
                  Patients List
                </h5>
                <div className="btn-container">
                  <button
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: "0.8em", padding: "0.2em 0.6em" }}
                  >
                    {" "}
                    View All
                  </button>
                </div>
              </div>
            </Paper>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Patient Name</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Mobile No.</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Last Visit </b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Amount Paid </b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table_data.customers_list.map((customer) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {customer.first_name + customer.last_name}
                        </TableCell>
                        <TableCell align="center">{customer.mobile}</TableCell>
                        <TableCell align="center">
                          {customer.last_visit}
                        </TableCell>
                        <TableCell align="center">
                          ₹{customer.total_paid}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardTables;
