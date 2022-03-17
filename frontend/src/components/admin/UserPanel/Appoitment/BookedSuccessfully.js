import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@material-ui/core";

const BookedSuccessfully = ({ appointment_data }) => {
  const doctor_name = appointment_data.doctor_name;
  const time = appointment_data.start_time;
  const date = appointment_data.appointmentDate;
  return (
    <div className="wrapper">
      <h5>Book an Appointment</h5>
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card-container"
          style={{
            minHeight: "60vh",
            height: "60vh",
            textAlign: "center",
          }}
        >
          <CheckCircleIcon
            color="primary"
            style={{ fontSize: "100px", marginBottom: "0.5em" }}
          />
          <h2 style={{ fontWeight: "505" }}>
            Appointment booked Successfully!
          </h2>
          <div className="para" style={{ fontSize: "1.2em" }}>
            Appointment booked with <b>{doctor_name}</b> <br />
            on .{" "}
            <b>
              {date}@{time}
            </b>
          </div>

          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: "2em" }}
          >
            View My Bookings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookedSuccessfully;
