import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { FormControl, Paper } from "@material-ui/core";
import { useSerialIds, wrap } from "highcharts";
import React, { useEffect, useState } from "react";
import { getCall, postCall } from "../../../../helpers/axiosUtils";
import { BASE_URL } from "../../../../helpers/constants";
import { toast } from "react-toastify";
import logo from "../../../../assets/images/transperent.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../../../assets/scss/BookAppointment.scss";
import BookedSuccessfully from "./BookedSuccessfully";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",

    "& .sidebar": {
      padding: "1em",
      boxShadow: "1px 1px 2px 0px grey",
    },

    "& .font-bold": {
      // fontWeight: "505",
    },
    "& .filter-heading": {
      padding: "0.7em",
      boxShadow: "1px 1px 3px 0px grey",
      fontSize: "1.1em",
      fontWeight: "405",
    },

    "& .filter-date": {
      marginTop: "1em",
      border: "none",
      boxShadow: "1px 1px 2px 0px grey",
      borderRadius: "0.1em",
      padding: "0.7em 1em",
      /* font-weight: 505; */
    },
    "& #gender": {
      border: "none",
      boxShadow: "1px 1px 2px 0px grey",
      borderRadius: "0.1em",
      /* font-weight: 505; */
      fontWeight: "405",
    },

    "& .apply-btn button": {
      width: "100%",
      padding: "0.6em",
      fontFamily: "Poppins",
      fontSize: "0.9em",
    },
  },
  card: {
    padding: "2em",
    boxShadow: "1px 1px 4px 0px grey",
    "& .doctor-img img": {
      width: "100%",
    },
  },

  timeslots: {
    display: "flex",
    "& .timeslot": {
      padding: "0.4em 1.3em",
      background: "#add8e6a1",
      color: "#2387c3",
      marginRight: "1em",
      fontWeight: "405",
      fontSize: "0.9em",
      flex: "1 1 0px",
      marginTop: "1em",
      textAlign: "center",
    },
  },

  daysSelector: {
    display: "flex",
    marginTop: "1em",
    justifyContent: "space-between",
    "& .day": {
      padding: "1em",
    },
  },

  datesSelector: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: wrap,
    "& .day": {
      padding: "1em",
      minWidth: "150px",
      textAlign: "center",
      fontWeight: "505",
    },
    overflowX: "auto",

    "::-webkit-scrollbar": {
      height: "4px" /* height of horizontal scrollbar ← You're missing this */,
      width: "4px" /* width of vertical scrollbar */,
      border: "1px solid #d5d5d5",
    },
  },
}));

const BookAppoinment = () => {
  const { doctor_id } = useParams();

  const classes = useStyles();
  const [dayWise, setDayWise] = useState(false);
  const [dates, setDates] = useState([]);

  // TimeSlot Nav
  const [selectedDate, setSelectedDate] = useState("");
  const [timeslots, setTimeSlots] = useState([]);
  const [dateTimeslots, setDateTimeslots] = useState([]);
  const [tcChecked, setTcChecked] = useState(false);

  // User Details
  const user = useSelector((state) => state.Auth.user);

  // Card Info
  const [cardInfo, setCardInfo] = useState({});

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // TimeSlot Nav
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTimeslot, setSelectedTimeslot] = useState({});
  const [doctorData, setDoctorData] = useState({ tags: [] });

  const [formStep, setFormStep] = useState(1);

  // On Succes
  const [appointmentData, setAppointmentData] = useState({});

  const getDoctorData = () => {
    getCall(BASE_URL + `api/common_m/${doctor_id}/get-doctor/`).then((resp) => {
      if (resp.status == 200) {
        if (resp.data) {
          const doctorData = resp.data;
          setDoctorData(doctorData);
        }
      }
    });
  };

  const getDayTimeSlots = () => {
    getCall(BASE_URL + `api/userpanel/${doctor_id}/get-timeslots-daywise`, {
      params: {
        day: selectedDay,
      },
    }).then((resp) => {
      if (resp.status == 200) {
        if (resp.data) {
          let timeslots = resp.data.timeslots;
          timeslots = timeslots ? timeslots : [];
          setTimeSlots(timeslots);
          console.log(timeslots);
        }
      }
    });
  };

  const getDates = () => {
    getCall(
      BASE_URL + `api/userpanel/${doctor_id}/get-timeslots-datewise/`
    ).then((resp) => {
      if (resp.status == 200) {
        if (resp.data) {
          const dates = resp.data.dates;
          setDates(dates);
        }
      }
    });
  };

  const getDateTimeSlots = () => {
    getCall(BASE_URL + `api/userpanel/${doctor_id}/get-timeslots-datewise/`, {
      params: {
        date: selectedDate,
      },
    }).then((resp) => {
      if (resp.status == 200) {
        if (resp.data) {
          let timeslots = resp.data.timeslots;
          timeslots = timeslots ? timeslots : [];
          setDateTimeslots(timeslots);
        }
      }
    });
  };

  const nextStep = () => {
    if (selectedTimeslot.id == undefined) {
      toast.warning("Please select Timeslot...", {
        variant: "warning",
      });
    } else {
      setFormStep(2);
    }
  };

  // Payment
  const displayRazorpay = (amount) => {
    postCall(BASE_URL + `api/payment/payment-order-appointment/`, {
      amount: amount,
      doctor_id: doctor_id,
      timeslot: selectedTimeslot,
    })
      .then((r) => {
        let res = r.data;
        let options = {
          key_id: "rzp_test_ztkFQhmCLT9v2A",
          amount: res.amount,
          currency: "INR",
          name: "MyMedBook",
          description: "Appoitment Request..." + "My MedBook",
          image: { logo },
          order_id: res.id,
          handler: (resp) => {
            const appointmentId = res.appointment_id;
            console.log(res);
            handlePaymentResponse(resp, appointmentId);
          },
          prefill: {
            name: user.full_name,
            email: user.email,
            contact: user.mobile,
            method: "card",
            // card: {
            //   name: cardInfo.card_name,
            //   number: cardInfo.card_number,
            //   expiry: cardInfo.card_exp_month + "/" + cardInfo.card_exp_year,
            //   cvv: cardInfo.card_cvv,
            // },
            "card[name]": cardInfo.card_name,
            "card[number]": cardInfo.card_number,
            "card[expiry]":
              cardInfo.card_exp_month + "/" + cardInfo.card_exp_year,
            "card[cvv]": cardInfo.cvv,
          },
          notes: {
            address: "note value",
          },
          theme: {
            color: "#05A5AF",
          },
        };
        let rzp = new window.Razorpay(options);
        rzp.open();
      })
      .catch((err) => {
        const data = err.response.data;
        if (data) {
          const msg = data.msg;
          if (msg) {
            toast.error(msg);
          }
        }
        console.log(err.response);
      });
  };

  const handlePaymentResponse = (res, appointment_id) => {
    const req_data = { ...res, appointment_id };
    postCall(BASE_URL + `api/payment/payment-success-appointment/`, req_data)
      .then((r) => {
        if (r.status == 200) {
          const data = r.data.data;
          if (data) {
            setAppointmentData(data);
            setFormStep(3);
          }
        }
        console.log("Payment Success");
      })
      .catch((err) => {
        toast.success(err.response.data.msg);
      });
  };

  const handleCardInfoChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setCardInfo({ ...cardInfo, [inputName]: inputValue });
    console.log(cardInfo);
  };

  useEffect(() => {
    getDayTimeSlots();
  }, [selectedDay]);

  useEffect(() => {
    getDates();
    getDoctorData();
  }, [""]);

  useEffect(() => {
    if (selectedDate == "") {
      return;
    }
    getDateTimeSlots();
  }, [selectedDate]);

  return (
    <div>
      {" "}
      <div className={classes.card}>
        {formStep == 1 && (
          <div className="step-1">
            <Grid container spacing={4}>
              <Grid item sm={3}>
                <div className="doctor-img">
                  <img
                    src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item sm={5}>
                <div className="doctor-desc">
                  <h5>Dr. {doctorData.first_name}</h5>
                  <p style={{ fontSize: "0.8em", margin: "0" }}>
                    {doctorData.clinic_name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#1360ef",
                      fontWeight: "505",
                    }}
                  >
                    {doctorData.tags.join(",")}
                  </p>
                  <div className="address " style={{ display: "flex" }}>
                    <LocationOnIcon style={{ color: "grey" }} />

                    <p
                      style={{ fontSize: "0.8em", margin: "0", color: "grey" }}
                    >
                      {doctorData.address_line1}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                sm={4}
                style={{
                  display: "flex",
                  padding: "1em",
                  justifyContent: "flex-end",
                  alignItems: "end",
                  flexDirection: "column",
                }}
              ></Grid>
            </Grid>

            <div
              className="select-timeslot"
              style={{
                marginTop: "2em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ fontWeight: "405" }}>Select Date & Time Slot</h5>
              <div className="timeslot-type" style={{ marginTop: "2em" }}>
                <select
                  name="timeslot-type"
                  id="timeslot-type"
                  value={dayWise == true ? "day" : "date"}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value == "date") {
                      setDayWise(false);
                    }
                    if (value == "day") {
                      setDayWise(true);
                    }
                    console.log(value);
                    console.log(dayWise);
                  }}
                >
                  <option value="date">DateWise</option>
                  <option value="day">DayWise</option>
                </select>
              </div>
            </div>
            {dayWise == false && (
              <div className="date-timeslots">
                <div>
                  <Paper className={classes.root}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6 className="primary-font-color mt-3 mb-3">
                        Date Wise TimeSlots
                      </h6>
                    </div>

                    <div className={classes.datesSelector}>
                      {dates.map((date) => {
                        return (
                          <div
                            className="day"
                            style={
                              selectedDate == date
                                ? { background: "#0d6efd", color: "white" }
                                : {}
                            }
                            onClick={() => setSelectedDate(date)}
                          >
                            {date}
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1em",
                      }}
                    >
                      <h6 className="primary-font-color mt-3 mb-3">
                        TimeSlots
                      </h6>
                    </div>
                    <div className={classes.timeslots}>
                      {dateTimeslots.map((timeslot, index) => {
                        let style = {};
                        if (
                          timeslot.id == selectedTimeslot.id &&
                          timeslot.date == selectedTimeslot.date
                        ) {
                          style = {
                            background: "green",
                            color: "white",
                          };
                        }

                        return (
                          <div
                            className="timeslot"
                            onClick={() => {
                              console.log(timeslot);
                              setSelectedTimeslot(timeslot);
                            }}
                            style={style}
                          >
                            {timeslot.start_time}
                          </div>
                        );
                      })}
                    </div>
                  </Paper>
                </div>
              </div>
            )}

            {dayWise == true && (
              <div>
                <Paper className={classes.root}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6 className="primary-font-color mt-3 mb-3">
                      Day Wise TimeSlots
                    </h6>
                  </div>

                  <div className={classes.daysSelector}>
                    {days.map((day) => {
                      return (
                        <div
                          className="day"
                          style={
                            selectedDay == day
                              ? { background: "#0d6efd", color: "white" }
                              : {}
                          }
                          onClick={() => setSelectedDay(day)}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1em",
                    }}
                  >
                    <h6 className="primary-font-color mt-3 mb-3">TimeSlots</h6>
                  </div>

                  <div className={classes.timeslots}>
                    {timeslots.map((timeslot, index) => {
                      let style = {};
                      if (
                        timeslot.id == selectedTimeslot.id &&
                        timeslot.day == selectedTimeslot.day
                      ) {
                        style = {
                          background: "green",
                          color: "white",
                        };
                      }
                      return (
                        <div
                          className="timeslot"
                          onClick={() => {
                            setSelectedTimeslot(timeslot);
                          }}
                          style={style}
                        >
                          {timeslot.start_time}
                        </div>
                      );
                    })}
                  </div>
                </Paper>
              </div>
            )}

            <div
              className="action-btns"
              style={{
                display: "flex",
                marginTop: "2em",
                justifyContent: "space-between",
              }}
            >
              <div className="space"></div>
              <Button
                color="primary"
                size="small"
                variant="contained"
                onClick={nextStep}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {formStep == 2 && (
          <div className="step-2">
            <h5>Personal Information</h5>

            <div className="payment-form">
              <Grid container>
                <Grid item xs={8}>
                  <Grid container spacing={4} className="mt-1">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        type={"text"}
                        size={"small"}
                        value={user.first_name}
                        disabled
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        type={"text"}
                        size={"small"}
                        value={user.last_name}
                        disabled
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={4} className="mt-1">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        type={"text"}
                        size={"small"}
                        disabled
                        fullWidth
                        value={user.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Mobile Number"
                        type={"text"}
                        size={"small"}
                        value={user.mobile}
                        disabled
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <h5 className="mt-3">Payment Method</h5>

                  <Grid container spacing={4} className="mt-1">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Name On Card"
                        type={"text"}
                        size={"small"}
                        name="card_name"
                        value={cardInfo.card_name}
                        onChange={(e) => handleCardInfoChange(e)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Card Number"
                        type={"number"}
                        size={"small"}
                        name="card_number"
                        value={cardInfo.card_number}
                        onChange={(e) => handleCardInfoChange(e)}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={4} className="mt-1">
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Expiry Month"
                        type={"number"}
                        size={"small"}
                        name="card_exp_month"
                        onChange={(e) => handleCardInfoChange(e)}
                        value={cardInfo.card_exp_month}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Expiry Year"
                        type={"number"}
                        size={"small"}
                        name="card_exp_year"
                        onChange={(e) => handleCardInfoChange(e)}
                        value={cardInfo.card_exp_year}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="CVV Number"
                        type={"number"}
                        size={"small"}
                        name="card_cvv"
                        onChange={(e) => handleCardInfoChange(e)}
                        value={cardInfo.card_cvv}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <div
                    className="term-conditions mt-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="checkbox-tc"
                      checked={tcChecked}
                      onChange={(e) => {
                        setTcChecked(e.target.checked);
                      }}
                    />
                    <label htmlFor="checkbox-tc" style={{ margin: "0 1em" }}>
                      I have read and accepted the Terms & Conditions
                    </label>
                  </div>

                  <div
                    className="action-btn mt-2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="end"></div>

                    <div className="btns">
                      <Button
                        variant="contained"
                        size="small"
                        style={{ marginRight: "2em", background: "gray" }}
                        onClick={() => setFormStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        className=""
                        onClick={() => {
                          displayRazorpay(400);
                        }}
                        disabled={tcChecked == true ? false : true}
                      >
                        Proceed To Pay
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        )}

        {formStep == 3 && (
          <BookedSuccessfully appointment_data={appointmentData} />
        )}
      </div>
    </div>
  );
};

export default BookAppoinment;
