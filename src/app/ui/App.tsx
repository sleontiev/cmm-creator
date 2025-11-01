import { useState, useEffect } from 'react';
import '../styles/global.css';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button className="border border-border-primary text-text-primary bg-primary px-[15px] py-[5px] rounded-[100px] cursor-pointer" onClick={toggleTheme}>Сменить тему</button>
    );
}

export default App;