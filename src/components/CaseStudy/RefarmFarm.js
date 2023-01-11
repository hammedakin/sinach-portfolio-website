import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const RefarmFarm = () => {
    return (
        <StyledRefarmFarm>
            <Container>
                <Navbar />

                <Footer />
            </Container>

        </StyledRefarmFarm>
    );
};

export default RefarmFarm;

const StyledRefarmFarm = styled.main`


`;