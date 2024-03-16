import { useState, useEffect, useReducer, useContext } from 'react';
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext';

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {...state, [action.field]: action.value}
      case "RESET_FORM":
        return { name: "", email: ""};
        default:
          return state;
  }
}

function App() { 
    const [items, setItems] = useState([1,2,3]);
    const [data, setData] = useState([]);
    const [formState, dispatchFormState] = useReducer(formReducer, {name: '', email: ''})

    const addCity = (city) => {
        setCities([...cities, city]);
    };

    useEffect (() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response)=> response.json())
      .then((data) => {
       setData(data); 
       console.log(data);
      });
   }, []);

    const handleFieldChange = (field, value) => {
      dispatchFormState({type: "CHANGE_FIELD", field, value})
    }

    const resetForm = () => {
      dispatchFormState({type: "RESET_FORM"})
    }
    const sendForm = (e) => {
      e.preventDefault();
      console.log(formState)
    }

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
    <form>
          <div>
            <label htmlFor='name'>Name:</label>
            <input 
              type='text'
              id='name'
              name='name'
              value={formState.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input 
              type='email'
              id='email'
              name='email'
              value={formState.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
          </div>
          <button onClick={resetForm}>Reset Form</button>
          <button onClick={sendForm}>Send</button>
      </form>    

    <Example cities={cities}></Example>
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

       <div className='grid grid-cols-4 gap-5'>
      {data.map((item) => (
          <div key={item.id} className='bg-slate-400 rounded-lg p-3'>
            <p className='text-red-500 mb-1'>userid: {item.userId}</p>
            <h2 className='text-xl mb-3'>{item.title}</h2>
            <p className='text-gray-800'>{item.body}</p>
          </div>
        ))}
      </div> 
    </>
  );
}

export default App;
