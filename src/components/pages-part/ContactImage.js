import { useState } from "react";

const ContactImage = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sendContactMessage = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(contactForm);
  };
  return (
    <form onSubmit={sendContactMessage}>
      <div className="group">
        <h3 className="page__contact__heading">Contact Form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name="name"
          className="group__control"
          placeholder="Your name eg Smith Rowe"
          onChange={(e) => {
            setContactForm({ ...contactForm, name: e.target.value });
          }}
          value={contactForm.name}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name="email"
          className="group__control"
          placeholder="Your name eg SmithRowe@gmail.com"
          onChange={(e) => {
            setContactForm({ ...contactForm, email: e.target.value });
          }}
          value={contactForm.email}
        />
      </div>
      <div className="group">
        <textarea
          name="message"
          id=""
          cols="12"
          rows="8"
          className="group__textarea"
          placeholder="Write your message"
          defaultValue={contactForm.message}
          onChange={(e) => {
            setContactForm({ ...contactForm, message: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send mail &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};
export default ContactImage;
