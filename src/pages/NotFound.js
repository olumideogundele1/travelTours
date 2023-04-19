import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  const [state] = useState({
    heading: "Oops, 404",
    pageheading: "",
    paragraph: "Sorry, the page you are looking for does not exist",
    image: "/assets/404/404.jpg",
    message:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  });
  return (
    <>
      <Helmet>
        <title>Not Found Page</title>
        <meta name="not found page" content="not found page" />
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph} img={state.image}>
        <Link to="/" className="btn-default">
          go to home
        </Link>
      </Header>
    </>
  );
};

export default NotFound;
