import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Stanrute = () => {
    return (
        <StyledStanrute>
            <Container>
                <Navbar />

                <Footer />
            </Container>

        </StyledStanrute>
    );
};

export default Stanrute;

const StyledStanrute = styled.main`


`;