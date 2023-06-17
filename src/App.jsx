import { Container } from "react-bootstrap";
import Accordions from "./components/accordions/Accordions";


function App() {
  return (
  <section>
    <Container fluid className="my-5">
      <Container >
        <Accordions />
      </Container>
    </Container>
  </section>
  );
}

export default App;
