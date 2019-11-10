import React, { Component } from "react";

import "./intro.css";
class Intro extends Component {
  render() {
    return (
      <>
        <div
          id="Title"
          style={{
            fontSize: 70 + "px",
            textAlign: "center",
            color: "black",
            padding: 50 + "px"
          }}
        >
          <p>Eat Together</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block"></div>
                    <div className="col-lg-6">
                      {" "}
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Welcome Back!
                          </h1>
                        </div>
                        <form className="user">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter keycode"
                            />
                          </div>
                        </form>
                        <hr />
                        <button>Create New Room</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Intro;
