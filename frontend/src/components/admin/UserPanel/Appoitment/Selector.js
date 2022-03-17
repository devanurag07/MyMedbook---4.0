import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import AppointmentList from "./AppointmentList";
import { getCall } from "../../../../helpers/axiosUtils";
import { BASE_URL } from "../../../../helpers/constants";
import PrescriptionsList from "./PrescriptionsList";
import BillingList from "./BillingList";

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
}));

const Selector = () => {
  const classes = useStyles();
  const [tableType, setTableType] = useState("appointment");
  const [tableRows, setTableRows] = useState([]);

  const getSelectedCls = (type) => {
    if (type == tableType) {
      return "selected";
    }
    return "";
  };

  const get_table = () => {
    getCall(BASE_URL + "api/userpanel/get-dashboard-table", {
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
              classes.selectorItem + " " + getSelectedCls("appointment")
            }
            onClick={(e) => setTableType("appointment")}
          >
            <h5>Appointments</h5>
          </Grid>
          <Grid
            item
            sm={4}
            className={
              classes.selectorItem + " " + getSelectedCls("prescription")
            }
            onClick={(e) => setTableType("prescription")}
          >
            <h5>Prescriptions</h5>
          </Grid>
          <Grid
            item
            sm={4}
            className={classes.selectorItem + " " + getSelectedCls("billing")}
            onClick={(e) => setTableType("billing")}
          >
            <h5>Billing</h5>
          </Grid>
        </Grid>

        {/* {tableType}
         */}

        {tableType == "appointment" && (
          <AppointmentList tableRows={tableRows} />
        )}
        {tableType == "prescription" && (
          <PrescriptionsList tableRows={tableRows} />
        )}

        {tableType == "billing" && <BillingList tableRows={tableRows} />}
      </Paper>
    </div>
  );
};

export default Selector;
