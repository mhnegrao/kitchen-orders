import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Container } from '../../components/container';
import { ChocolateList } from './style';
import api from '../../services/api';
import { localStorageGetToken } from '../../services/localStorage';

function Home() {
  const token = localStorageGetToken();
  const history = useHistory();

  if (!token) {
    history.push('/login');
  }

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    (async function loadInfos() {
      try {
        const { status, data } = await api.get('/chocolates');

        console.log(data);

        if (status !== 200) {
          return setInfos([]);
        }

        return setInfos(data.chocolates);
      } catch (e) {
        setInfos([]);
        return console.log(e);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Feed de chocolates</h1>

        <ChocolateList>
          {infos.map((info) => (
            <li key={info.name}>
              <div>
                <img src={info.image} alt="Imagem do chocolate" />
                <div>
                  <h2>{info.name}</h2>
                  <p>R$ {info.value}</p>
                </div>
              </div>
            </li>
          ))}
        </ChocolateList>
      </Container>
    </div>
  );
}

export default Home;
