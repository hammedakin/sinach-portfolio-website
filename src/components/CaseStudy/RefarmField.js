import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const RefarmField = () => {
    return (
        <StyledRefarmField>
            <Container>
                <Navbar />

                <Footer />
            </Container>

        </StyledRefarmField>
    );
};

export default RefarmField;

const StyledRefarmField = styled.main`


`;