/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Container } from "react-bootstrap";

import { getContactCss } from "./contact.styles";

export const Contact = () => {
  const { containerCss } = getContactCss();

  return (
    <section css={containerCss}>
      <Container>
        <h2>Let's Chat!</h2>
        <Row>
          <Col>Hello</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
