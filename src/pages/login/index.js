import React from "react";

import { Container } from "../../styles/GlobalStyle";
import { Title } from "./styled";


export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Hey</small>
      </Title>
      <p>Lorem ipsum</p>
      <button type="button">Send</button>
    </Container>
  );
}
