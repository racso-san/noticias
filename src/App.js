import React,{Fragment, useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticiaas from './components/ListadoNoticias';
import Noticias from './components/Noticias';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria,guardarCategoria] = useState('');
  const [noticias,guardarNoticias] = useState([]);


  useEffect(() => {

    const consultarAPI = async () => {
  
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=2dde9f2995d74b08bc84d36e0bbcec05`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscar noticias'
      />

        <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias
            noticias={noticias}
          />

        </div>

    </Fragment>
  );
}

export default App;
