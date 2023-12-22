import React from "react";

function Adventure() {
  return (
    // <div>
    //   <p className="text-center">
    //     <h3>The Adventure Begins </h3>
    //     <h6>
    //       Get regular inspiration straight to your inbox from Exodous experts
    //     </h6>
    //     <form>
    //     <div className="row">
    //       <div className="col-auto">
    //         <label for="staticEmail2" className="visually-hidden">
    //           Email
    //         </label>
    //         <input
    //           type="text"
    //           readonly
    //           className="form-control-plaintext"
    //           id="staticEmail2"
    //           value="email@example.com"
    //         />
    //       </div>
    //       <div className="col-auto">
    //         <label for="inputPassword2" className="visually-hidden">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="inputPassword2"
    //           placeholder="Password"
    //         />
    //       </div>
    //       <div className="col-auto">
    //         <button type="submit" className="btn btn-primary mb-3">
    //           Confirm identity
    //         </button>
    //       </div>
    //     </div>
    //     </form>
    //   </p>
    // </div>
    <div className="container d-flex flex-column justify-content-center align-items-center pb-4">
      <h3 className="fw-bold">The Adventure Begins </h3>
      <h6>
        Get regular inspiration straight to your inbox from Exodous experts
      </h6>

      <form>
        <div className="row mt-3">
         
          <div className="col">
            <label for="inputPassword2" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputPassword2"
              placeholder="Your Email"
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary mb-3">
              SIGN UP
            </button>
          </div>
        </div>
      </form>
      <p>View our Privacy Policy. You can unsubscribe at any time.</p>
      <p>Protected by Google reCAPTCHA. See Privacy Policy & Terms apply.</p>
    </div>
  );
}

export default Adventure;
