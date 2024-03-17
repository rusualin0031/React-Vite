import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Example from './components/Example'
import { useSelector } from "react-redux";
import { add } from "./redux/citisSlice";


function App() { 
    const [count, setCount] = useState(0);
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
      
    
    ]);
  return (
    <ProvaContext.Provider value={{ count, setCount}}>
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
      </ProvaContext.Provider>
  );
}

export default App;
