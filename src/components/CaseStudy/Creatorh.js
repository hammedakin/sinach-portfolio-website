import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Creatorh = () => {
    return (
        <StyledCreatorh>
            <Container>
                <Navbar />

                <Footer />
            </Container>

        </StyledCreatorh>
    );
};

export default Creatorh;

const StyledCreatorh = styled.main`


`;