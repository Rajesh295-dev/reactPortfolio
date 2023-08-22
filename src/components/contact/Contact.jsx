import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k063izo",
        "template_plxehj2",
        formRef.current,
        "So74aFFoFHrjh5K30"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div class="section-title">
        <h2>Contact</h2>
        <p>
          Hello! I'm a passionate developer actively seeking new job
          opportunities. If you're looking for a skilled and dedicated developer
          to join your team, I'd love to hear from you. I'm enthusiastic about
          tackling challenging projects and contributing my knowledge to help
          businesses grow. Whether it's a full-time position, freelance work, or
          a collaborative project, I'm open to exploring exciting opportunities.
        </p>
      </div>

      <div className="c-wrapper">
        <div className="c-left">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50549.59902019796!2d-76.51565824783091!3d39.407220335336966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7e27661dd494b%3A0x7fc0ab87ad5dc423!2sPerry%20Hall%2C%20MD!5e0!3m2!1sen!2sus!4v1690415780835!5m2!1sen!2sus"
              width="100%"
              height="270"
              title="Google Map of Perry Hall, MD"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 814 737 2474
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              rajeshgautam766@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Perry Hall, Maryland, USA
            </div>
          </div>
          <h3 className="c-title">Let's talk about your project!</h3>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Have questions, feedback, or want to get in touch with me? </b>
            Please fill out the form below or use the provided contact
            information. I'll get back to you <b>ASAP</b>.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />

            <div>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
            </div>

            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="E-mail"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "  Your message has been sent..."}
          </form>
        </div>
      </div>
      <div className="upArrow">
        <a href="#home">
          <img src="../images/UP.png" alt="First slide" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
