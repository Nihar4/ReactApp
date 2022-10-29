import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="abs@xyz.com" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input type="text" placeholder="enter your query." />
          </div>
          <button>SEND</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
