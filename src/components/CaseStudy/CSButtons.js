import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledButton } from '../GlobalStyles.styled';

const CSButtons = ({ prev, next }) => {
    return (
        <div className="d-flex justify-content-between">
            <Link to={`/works/${ prev }`}>
                <StyledButton>
                    <FaArrowLeft /> Back
                </StyledButton>
            </Link>

            <Link to={`/works/${ next }`}>
                <StyledButton>
                    Next   <FaArrowRight />
                </StyledButton>
            </Link>
        </div>
    );
};

export default CSButtons;