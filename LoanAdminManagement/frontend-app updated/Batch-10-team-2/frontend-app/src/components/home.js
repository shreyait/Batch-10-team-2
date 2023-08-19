import Button from "react-bootstrap/Button";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import logoPng from "./../assets/lama-logo.png";
import homeJpg from "./../assets/home.jpg";
import Card from "react-bootstrap/Card";
import styles from "./home.module.css";
import CustomButton from "./customButton";

export default function Home() {
  return (
    <div>
      <Card className={styles["cardStyle"]}>
        <Card.Img className={styles["cardImg"]} variant="top" src={homeJpg} />
        <Card.Body>
          <Card.Title>
            <img className={styles["homelogo"]} src={logoPng} />
          </Card.Title>
          <br></br>
          <Card.Text className={styles["cardtext"]}>
            Your go to place for Loans!
          </Card.Text>
          <CustomButton className={styles["homeBtn"]} as={Link} to="/login">
            Get Started
          </CustomButton>
        </Card.Body>
      </Card>
    </div>
  );
}
