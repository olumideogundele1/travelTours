const ContactImage = () => {
  return (
    <form action="">
      <div className="group">
        <h3 className="page__contact__heading">Contact Form</h3>
      </div>
      <div className="group">
        <input type="text" name="" className="group__control" placeholder="Your name eg Smith Rowe" />
      </div>
      <div className="group">
        <input type="email" name="" className="group__control" placeholder="Your name eg SmithRowe@gmail.com" />
      </div>
      <div className="group">
        <textarea
          name=""
          id=""
          cols="12"
          rows="8"
          className="group__textarea"
          placeholder="Write your message"
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send mail &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};
export default ContactImage;
