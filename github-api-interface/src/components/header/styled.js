import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;  
width: 100%;
justify-content: space-between;
padding: 4px;
input{
    border: 1.5px solid black;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
}
button{
    background-color: white;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    border: 1.5px solid black;
    font-weight: bold;
    font-size: 16px;
    &:hover{
        background-color: black;
        color: white;
        box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    }
}

`;
