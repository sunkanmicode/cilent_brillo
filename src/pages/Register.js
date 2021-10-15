import React from 'react'

export default function Register() {
    return (
      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="tel"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="phoneNumber">
                        Phone Number
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <select class="select form-control-lg">
                        <option value="1" disabled>
                           Choose 
                        </option>
                         <option value="2">Football</option>
                         <option value="3">Basketball</option>
                         <option value="4">Ice Hockey</option>
                         <option value="4">Motorsports</option>
                         <option value="4">Skiing</option>
                        
                      </select>
                      
                      {/* <label class="form-label select-label">
                       Choose option 
                      </label> */}
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

 