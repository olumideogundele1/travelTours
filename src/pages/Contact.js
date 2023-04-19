import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageContainer from "../components/pages-part/PageContainer";
import ContactImage from "../components/pages-part/ContactImage";
const Contact = () => {
  const [state] = useState({
    heading: "contact us",
    pageheading: "leave your message in the contact form",
    message:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="travel friends contact page" />
      </Helmet>
      <PageContainer data={state}>
        <ContactImage />
      </PageContainer>
    </>
  );
};

export default Contact;
