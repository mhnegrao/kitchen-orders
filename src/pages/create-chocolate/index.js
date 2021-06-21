import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components/container';
import { localStorageGetToken } from '../../services/localStorage';
import { ChocolateForm } from './style';
import api from '../../services/api';

function CreateChocolate() {
  const history = useHistory();

  const token = localStorageGetToken();

  if (!token) {
    history.push('/login');
  }

  const [infos, setInfos] = useState({
    chocolateName: '',
    chocolatePrice: '',
    chocolateDesc: '',
  });

  const formData = new FormData();

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.tartet.value,
    });
  };

  const handleImageChange = (e) => {
    formData.append('file', e.target.files[0]);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    Object.keys(infos).forEach((key) => formData.append(key, infos[key]));

    try {
      const response = await api({
        method: 'post',
        url: '/chocolate',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status !== 201) {
        return console.log('Houve um problema para cadastrar chocolate');
      }
      return history.push('/');
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="chocolate">
      <Container>
        <h1>Cadastrar chocolate</h1>

        <ChocolateForm onSubmit={onFormSubmit}>
          <input
            type="text"
            name="chocolateName"
            id="chocolateName"
            placeholder="Nome do chocolate"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="chocolatePrice"
            id="chocolatePrice"
            placeholder="Valor do chocolate"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="chocolateDesc"
            id="chocolateDesc"
            placeholder="Mais infos do chocolate"
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="chocolateImage"
            id="chocolateImage"
            onChange={handleImageChange}
          />
          <button type="submit">Cadastrar chocolate</button>
        </ChocolateForm>
      </Container>
    </div>
  );
}

export default CreateChocolate;
