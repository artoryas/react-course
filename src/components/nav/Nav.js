import './Nav.css';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext, useEffect } from 'react';

export default function Nav() {
    const { theme, setTheme } = useContext(ThemeContext);
		const isDarkTheme = theme === 'dark';
		
		useEffect(() => {
			console.log('I was re-rendered!');
		}, []);

		function onToggleTheme() {
			setTheme(isDarkTheme ? 'light' : 'dark');
		}

    return (
        <nav className={ isDarkTheme ? "wrapper wrapper-dark" : "wrapper"}>
            <div className="container">
                <ul>
                    <li>Home</li>
                    <li>Friends</li>
                    <li>Posts</li>
                </ul>
                <span className="theme-toggler" onClick={onToggleTheme}>
                    {	theme === 'light' ? '🔦' : '💡' }
                </span>
            </div>
        </nav>
    )
}