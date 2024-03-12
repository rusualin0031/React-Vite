import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Example from './components/Example'


function App() { 

    const addCity = (city) => {
        setCities([...cities, city]);
    };

    const [cities,setCities] = useState ([
      {
        id: 0,
        name: "Parigi",
        description: "Description for one single Card lorem ipsum",
        imgURL: "https://images.pexels.com/photos/2220257/pexels-photo-2220257.jpeg",
        isVisited: true,
      },
      {
        id: 1,
        name: "Milano",
        description: "Description for one single Card lorem ipsum",
        imgURL: "https://images.pexels.com/photos/16154165/pexels-photo-16154165/free-photo-of-punto-di-riferimento-italia-chiesa-monumento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isVisited: false,
      },
      {
        id: 2,
        name: "Bucarest",
        description: "Description for one single Card lorem ipsum",
        imgURL: "https://images.pexels.com/photos/18291184/pexels-photo-18291184/free-photo-of-citta-punto-di-riferimento-urbano-paesaggio-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isVisited: true,
      },
      {
        id: 3,
        name: "Los Angeles",
        description: "Description for one single Card lorem ipsum",
        imgURL: "https://images.pexels.com/photos/3166785/pexels-photo-3166785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isVisited: false,
      }
    
    ]);
  return (
    <>
    <Example></Example>
    <CardForm addCity={addCity}></CardForm>
      <div className='grid grid-cols-4 gap-5'>
      {cities.map((city) => (
        <Card
          key={city.id}
          title={city.name}
          isVisited={city.isVisited}
          imgURL={city.imgURL}>
          {city.description}
          </Card>
      ))}
      </div>    
    </>
  );
}

export default App;
