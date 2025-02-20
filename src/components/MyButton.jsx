import styled from 'styled-components';

const MyButton = styled.button`
    background-color: ${props => props.color};
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;
    font-size: .8rem;
    cursor: pointer;
    width: 100px;
`;

export default MyButton;