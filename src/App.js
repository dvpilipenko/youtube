import './App.css';
import { useRef, useState } from "react";
import List from "./List";

const apiKey = 'AIzaSyDkEeC-Jr6jsq6NYZMLWZPfL9r7maZNFOg'

const search = (search)=> {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${apiKey}`)
        .then((response) => response.json()).then((data) => {
        return (data)
    })
}

function App() {
    const [ list, setList ] = useState([])
    const refInput = useRef(null)
    const handleSearch = async () => {
        const result = await search(refInput.current.value)
        setList(result.items)
    }


    return (
    <div className="App">
        <input ref={refInput}/>
        <button onClick={handleSearch}>Search</button>
        <List items={list}></List>
    </div>
    );
}

export default App;
