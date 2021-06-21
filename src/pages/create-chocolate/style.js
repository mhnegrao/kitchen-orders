import styled from 'styled-components';

export const ChocolateForm = styled.form`
  margin-top: 30px;

  input {
    padding: 10px;
    margin: 4px;
    border-radius: 5px;
    width: 300px;
    height: 50px;
    border-color: #855251;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    margin: 4px;
    margin-top: 30px;
    color: #fff;
    background-color: #855251;
    font-size: 14px;
    border: none;
    height: 50px;
  }

  button:hover {
    cursor: pointer;
    background-color: #ff9839;
  }
  display: flex;
  flex-direction: column;
`;
