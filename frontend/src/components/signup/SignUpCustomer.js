import React, { Component } from "react";
import { updateObject, checkValidity } from "../../helpers/utils";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { NavLink } from "react-router-dom";
import "../../assets/scss/login.scss";
import { registerUser, authPatient } from "../../redux/actions";
import { connect } from "react-redux";
import { AvForm, AvInput } from "availity-reactstrap-validation";
import { Alert, FormFeedback } from "reactstrap";
import { postCall } from "../../helpers/axiosUtils";
import { BASE_URL } from "../../helpers/constants";
import Particles from "react-tsparticles";
import { toast } from "react-toastify";
import { setSession } from "../../redux/auth/saga";
import UpdateProfile from "./UpdateProfile";
import axios from "axios";

class AuthPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        first_name: "",
        email: "",
        mobile: "",
        password: "",
        otp: "",
      },
      emailExist: false,

      signUpForm: false,
    };
  }

  componentDidUpdate() {
    // console.log("Component did update", this.props.user);
  }

  inputChangedHandler = (controlName, event) => {
    const userEmail = this.props.user ? this.props.user.email : "";
    const userMobile = this.props.user ? this.props.user.mobile : "";

    if (controlName === "mobile") {
      this.setState({ mobile: event.target.value });

      if (userMobile == event.target.value) {
        this.setState({ mobileExist: false });
        return;
      }

      postCall(BASE_URL + `api/common/check-mobile-exist/`, {
        email: event.target.value,
      })
        .then((r) => {
          this.setState({ mobileExist: false });
          this.setState({ invalidMobile: false });
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.setState({ mobileExist: true });
            this.setState({ invalidMobile: false });
          }
          if (err.response.status == 500) {
            this.setState({ invalidMobile: true });
          }
        });
    } else {
      if (userEmail == event.target.value) {
        this.setState({ emailExist: false });
        return;
      }

      postCall(BASE_URL + `api/common/check-email-exist/`, {
        email: event.target.value,
      })
        .then((r) => {
          this.setState({ emailExist: false });
        })
        .catch((er) => {
          this.setState({ emailExist: true });
        });
    }
  };

  sendOTP(data) {
    postCall(BASE_URL + `api/common/auth-patient/`, data)
      .then((r) => {
        this.setState({ showOtp: true });
        toast.success("OTP Sent");
        console.log(r.data);
      })
      .catch((er) => {
        this.setState({ showOtp: false });
        toast.error("Something Went Wrong");
      });
  }
  submitHandler = (event, values) => {
    event.preventDefault();

    if (this.state.signUpForm) {
      const token = this.props.user.token;

      if (token) {
        axios
          .post(BASE_URL + `api/users/update-profile/`, values, {
            headers: {
              Authorization: `JWT ${token}`,
            },
          })
          .then((r) => {
            console.log(this.props.user);

            if (r.status == 200) {
              const user = r.data;

              setSession(user);
              this.props.history.push("/app/dashboard");
              toast.success("User Created Successfully.");
            }
          });
      }

      return;
    }

    if (values.otp) {
      let form_data = this.state.formValues;
      form_data["otp"] = values.otp;
      console.log(form_data);
      this.props.authPatient(form_data, this.props.history, this.setState);
    } else {
      this.setState({
        formValues: values,
      });
      values["create"] = true;
      this.sendOTP(values);
    }
  };
  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };
    });
  };

  setSignUpForm = (a) => {
    this.setState({ signUpForm: true });
  };
  render() {
    let formBtnLabel;
    if (this.state.signUpForm == true) {
      formBtnLabel = "Sign Up";
    } else {
      if (this.state.showOtp == true) {
        formBtnLabel = "Verify OTP";
      } else {
        formBtnLabel = "Get OTP";
      }
    }

    return (
      <React.Fragment>
        <section className="position-relative">
          <Particles
            id="particles-js"
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#1360ef",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#f94f15",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3,
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <div className="container">
            <div className="row  text-center">
              <div className="col">
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
        </section>
        {this.props.user && "he"}
        <div className="page-content">
          <section className="register">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12">
                  <div className="mb-6">
                    {" "}
                    <span className="badge badge-primary-soft p-2">
                      <i className="la la-exclamation ic-3x rotation"></i>
                    </span>
                    <h2 className="mt-3">Welcome To MyMedbook</h2>
                    <p className="lead">Enter Your Details...</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-10 ms-auto me-auto">
                  <div className="register-form text-center">
                    {this.props.registerError && (
                      <Alert
                        color="danger"
                        isOpen={this.props.registerError ? true : false}
                      >
                        <div>{this.props.registerError}</div>
                      </Alert>
                    )}
                    <AvForm
                      onValidSubmit={this.submitHandler}
                      model={this.state.formValues}
                    >
                      {this.state.signUpForm && (
                        <div
                          className="row"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className="col-md-6">
                            <div className="form-group">
                              <AvInput
                                type="text"
                                name="first_name"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <AvInput
                                type="text"
                                name="last_name"
                                className="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <AvInput
                                type="email"
                                autoComplete="off"
                                name="email"
                                onChange={this.inputChangedHandler.bind(
                                  this,
                                  "email"
                                )}
                                className="form-control"
                                validate={{ email: true }}
                                placeholder="Email"
                                required
                              />
                            </div>
                            {this.state.emailExist && (
                              <p className="text-danger">Email already exist</p>
                            )}
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <AvInput
                                type="password"
                                minLength="8"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                required
                                onChange={(e) => {
                                  this.setState({
                                    formValues: {
                                      ...this.state.formValues,
                                      password: e.target.value,
                                    },
                                  });
                                }}
                              />
                              <FormFeedback>
                                {8 -
                                  (this.state.formValues.password
                                    ? this.state.formValues.password.length
                                    : 0)}{" "}
                                chars left
                              </FormFeedback>
                            </div>
                          </div>
                        </div>
                      )}

                      {!this.state.showOtp && this.state.signUpForm === false && (
                        <div
                          className="row"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className="col-md-6">
                            <div className="form-group">
                              <AvInput
                                type="number"
                                name="mobile"
                                autoComplete="off"
                                onChange={this.inputChangedHandler.bind(
                                  this,
                                  "mobile"
                                )}
                                className="form-control"
                                validate={{ pattern: { value: /^\d{10}$/ } }}
                                placeholder="Mobile"
                                required
                              />
                              <FormFeedback>
                                {10 -
                                  (this.state.mobile
                                    ? this.state.mobile.length
                                    : 0)}{" "}
                                chars left
                              </FormFeedback>
                            </div>

                            {this.state.mobileExist && (
                              <p className="text-danger">
                                Mobile already exist
                              </p>
                            )}

                            {this.state.invalidMobile && (
                              <p className="text-danger">
                                Invalid Value for Mobile No.
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      <UpdateProfile setSignUpForm={this.setSignUpForm} />
                      {this.state.showOtp && this.state.signUpForm === false && (
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <AvInput
                                type="number"
                                name="otp"
                                className="form-control"
                                placeholder="Please enter otp"
                                required
                              />
                            </div>
                            <div className="form-text mb-2">
                              Please enter the otp that you received your
                              registered Mobile
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="submit"
                            // disabled={
                            //   this.state.mobileExist || this.state.emailExist
                            // }
                            value={formBtnLabel}
                            className="btn btn-primary"
                          />
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { user, loading, registerError } = state.Auth;
  return { user, loading, registerError };
};
export default connect(mapStateToProps, { authPatient })(AuthPatient);
