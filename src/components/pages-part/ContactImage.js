const ContactImage = () => {
  return (
    <form action="">
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
          className="group_textarea"
          placeholder="write your message"
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send mail &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};
export default ContactImage;
