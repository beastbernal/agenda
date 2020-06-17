import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import Example from "./Components/Form";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    {/* <Header as="h3">Ejercicio clase 8: Un formulario estricto.</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="Documentación oficial de semantic ui"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List> */}
    {children}
  </Container>
);

// ESTILOS PARA SEMANTIC UI
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);