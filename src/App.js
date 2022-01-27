import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [Greeting, setGreeting] = useState('');

    useEffect(() => {
        axios.get('/api')
        .then(response => setGreeting(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            여기는 리액트 페이지입니다.<br/>
            {Greeting} 는 스프링에서 가져왔습니다
        </div>
    );
}

export default App;
