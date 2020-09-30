import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const [index, getIndex] = useState(null);

    useEffect(() => {
        props.images && getIndex(Math.floor(Math.random() * props.images.length));
    }, []);

    return (
        <StyledModal>
            <Close onClick={props.closeModal}/>
            <Image src={index && props.images[index]}/>
            <Next onClick={() => getIndex(Math.floor(Math.random() * props.images.length))}>Next</Next>
        </StyledModal>
    )
};

const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: transform 150ms ease-in-out 50ms, background-color 250ms ease;
  cursor: pointer;
  
  &::before {
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 2px;
    transition: width 250ms ease-in-out, background-color 250ms ease;
    transform:rotate(45deg);
    background-color: #e94560;
    border-radius: 1px;
  }
  
  &::after {
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 2px;
    background-color: #e94560;
    transition: width 250ms ease-in-out, background-color 250ms ease;
    transform:rotate(-45deg);
    border-radius: 1px;
  }
  
  &:hover {
    transform: rotate(360deg);
    
      &::after {
        width: 4px;
      }
      
      &::before {
        width: 4px;
      }
  }
  
    &:hover:active {
    transform: rotate(360deg);
    
      &::after {
        transform:rotate(315deg);
        width: 6px;
      }
      
      &::before {
        transform:rotate(405deg);
        width: 6px;
      }
  }
  
  @media (min-width: 960px) {
    right: 75px;
    top: 75px;
    width: 75px;
    height: 75px;
  }
 
`;

const Next = styled.button`
    margin: auto;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 20%;
    width: 250px;
    height: 40px;
    border-color: #e94560;
    background-color: black;
    color: #e94560;
    text-transform: uppercase;
    cursor: pointer;
    
    &:hover {
        border-width: 2px;
    }
`;

const Image = styled.img`
    height: auto;
    width: 60%;
`;

const StyledModal = styled.div`
    position: fixed;
    background-color: black;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
`;

Modal.propTypes = {
    images: PropTypes.array,
    closeModal: PropTypes.func,
};

Modal.defaultProps = {
    images: [],
    closeModal: () => {},
};

export default Modal;
