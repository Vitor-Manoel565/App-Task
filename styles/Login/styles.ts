import styled  from  'styled-components' ;


export const ContainerForms = styled.form`
    height: 50vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #727272;
    background-color: #f5f5f5;
    padding: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* border-radius: 20px; */
`;


export const ContainerTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    color: #727272;
`;


export const Input = styled.input`
    height: 50px;
    width: 80%;
    border-radius: 10px;
    /* border: 1px solid #727272; */
    border: none;
    box-shadow: 0 0 10px #727272;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #727272;
    outline: none;
`;

export const ButtonLogin = styled.button`
    height: 50px;
    width: 80%;
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background-color: #66dfd3;
    cursor: pointer;
    :hover {
        box-shadow: 0 0 10px #727272;
        cursor: pointer;
        scale: 1.1;
    }
`;

export const ButtonSingin = styled.button`
    height: 50px;
    width: 80%;
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    background-color: #d5504d;
    color: white;
    cursor: pointer;
    :hover {
        box-shadow: 0 0 10px #727272;
        cursor: pointer;
        scale:  1.1;
    }
`;