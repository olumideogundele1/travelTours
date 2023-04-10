import Header from "../components/Header";
import { useState, useContext, useEffect } from "react";
import Modal from "../components/Modal";
import ModalContext from "../context/ModalContext";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Destination from "../components/Destination";
import Services from "../services/Services";
import Reviews from "../components/reviews/Reviews";
const Home = () => {
  const { setModal } = useContext(ModalContext);
  const [state] = useState({
    heading: "We are travel buddies",
    paragraph: "Come and Join us we travel the most famous and" + "beautiful places in the world",
  });
  const [registerModal] = useState("registerModal");
  const [loginModal] = useState("loginModal");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() => {
            setModal({ type: "OPEN_MODAL", payload: registerModal });
          }}
        >
          Get Started
        </button>
      </Header>
      <Modal current={registerModal}>
        <Register current={loginModal} />
      </Modal>
      <Modal current={loginModal}>
        <Login current={registerModal} />
      </Modal>
      <Destination />
      <Services />
      <Reviews />
    </>
  );
};

export default Home;
