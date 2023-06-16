import { Container } from "react-bootstrap";
import Accordions from "./components/accordions/Accordions";


function App() {
  return (
    <Container fluid className="my-5">
      <Container>
        <Accordions />
      </Container>
    </Container>
  );
}

export default App;
