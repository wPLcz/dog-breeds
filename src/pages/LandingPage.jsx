import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {v4 as uuidv4} from 'uuid';
import {actions} from "../store/reducers/landingPage";
import Title from "../components/Title";
import Modal from "../components/Modal";

const LandingPage = props => {
    const dispatch = useDispatch();
    const [modal, toggleModal] = useState(false);

    useEffect(() => {
        dispatch(props.fetchDogsList());
    }, []);

    const closeModal = () => {
        toggleModal(!modal);
    }

    const renderList = collection => collection.map(race => (
        <Title
            title={race}
            key={uuidv4()}
            fetchBreed={breed => {
                toggleModal(!modal);
                props.fetchBreed(breed)
            }}
        />
    ))

    return (
        <Container>
            {!modal && props.data &&
            <>
                <Header>Alphabetical dog races list</Header>
                {renderList(props.data)}
            </>
            }
            {modal && props.images && <Modal closeModal={closeModal} images={props.images}/>}
        </Container>
    );
};

const Header = styled.h1`
  justify-items: center;
  font-weight: 700; 
  font-family: 'PT Serif', serif;
  
`;

const Container = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`;

const mapStateToProps = state => ({
    data: state.landingPage.data,
    images: state.landingPage.images,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchDogsList: bindActionCreators(actions.fetchDogsList, dispatch),
        fetchBreed: bindActionCreators(actions.fetchBreed, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
