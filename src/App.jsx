import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap"
// import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
      {/* <HomeScreen /> */}
    </>
  );
}

export default App;
