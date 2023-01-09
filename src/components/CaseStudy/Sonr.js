import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Sonr = () => {
    return (
        <StyledSonr>
            <Container>
                <Navbar />

                <Footer />
            </Container>

        </StyledSonr>
    );
};

export default Sonr;

const StyledSonr = styled.main`


`;