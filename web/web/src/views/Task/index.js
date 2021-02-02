import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import typeIcons from '../../utils/typeIcons';

function Task() {
  
  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      
      setLateCount(response.data.length)

    }).catch(error => {

      console.error(error);

    });
  }


  //AO RECARREGAR A TELA OU O ESTADO FILTERACTIVED MUDAR CHAMA ESSE BLOCO
  useEffect(() => {

    lateVerify();

  }, []);

  return (
    <S.Container>
      <Header lateCount={lateCount} />

      <S.Form>

          <S.TypeIcons>
              {
                  typeIcons.map((icon, index) => (
                      
                    index > 0 && 
                     <img src={icon} alt="Ícone" />

                  ))
              }

          </S.TypeIcons>

      </S.Form>

      <Footer/>
    </S.Container>
  )
}

export default Task;
