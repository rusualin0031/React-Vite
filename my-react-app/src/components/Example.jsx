

function Example (cities) {
    const { count, setCount } = useContext(ProvaContext);

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}  

export default Example