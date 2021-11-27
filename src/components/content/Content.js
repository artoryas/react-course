import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Content.css';

export default function Content() {
    const { theme } = useContext(ThemeContext);
    const isDarkTheme = theme === 'dark';

    return (
        <section className={ isDarkTheme ? "dark-theme" : ""}>
            <div className="container">
                <div className={ isDarkTheme ? "card dark-card" : "card"}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate, perspiciatis nemo corporis illum reprehenderit magni quia eveniet corrupti maxime quas vero? Vel ipsa nemo eos ipsum veritatis, necessitatibus quos!
                </div>
            </div>
        </section>
    )
}