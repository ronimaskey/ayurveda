import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  border:0.05rem solid var(--mainGrey);
  
  background:${props => 
    props.cart ? "var(--lightBlue)" : "transparent"
  };
  
  
  font-size:1 rem;
  text-transform:capitalize;
  
  color: var(--mainGrey);
  padding: 0.2rem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
  &:hover{
    background: var(--mainGrey);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainerBack = styled.button`
    background: var(--lightBlue);
    border:0.05rem solid var(--mainGrey);
    font-size:1 rem;
    text-transform:capitalize;
    
    color: var(--mainGrey);
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
      background: var(--mainGrey);
      color: var(--mainBlue);
    }
    &:focus {
      outline: none;
    }
`;
