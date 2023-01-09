import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Repute = () => {
    return (
        <StyledRepute>
            <Container>
                <Navbar />

                <Footer />
            </Container>

        </StyledRepute>
    );
};

export default Repute;

const StyledRepute = styled.main`


`;