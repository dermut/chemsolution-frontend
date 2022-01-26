import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const [Greeting, setGreeting] = useState('');

    useEffect(() => {
        axios.get('/api')
        .then(response => setGreeting(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            여기는 리액트 페이지입니다
            {Greeting}  은 스프링에서 가져왔습니다
        </div>
    );
}

export default Home