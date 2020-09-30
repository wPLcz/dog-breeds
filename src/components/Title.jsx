import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <Button onClick={()=> props.fetchBreed(props.title)}>
            {props.title}
        </Button>
    )
};

const Button = styled.button`
    border: none;
    transition: transform 250ms ease-out;
    background: transparent;    
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'PT Serif', serif;
    
    &:hover {
        transform: scale(1.5);
    }
`;

Title.propTypes = {
    title: PropTypes.string,
    fetchBreed: PropTypes.func,
};

Title.defaultProps = {
    title: '',
    fetchBreed: () =>{},
};

export default Title;
