import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Nav() {
    const theme = useSelector(store => store);
    const dispatch = useDispatch();

    return (
        <nav className={ theme === 'dark' ? "wrapper wrapper-dark" : "wrapper"}>
            <div className="container">
                <ul>
                    <li>Home</li>
                    <li>Friends</li>
                    <li>Posts</li>
                </ul>
                <span className="theme-toggler" onClick={() => dispatch({type: 'toggle'})}>
                    {	theme === 'light' ? '🔦' : '💡' }
                </span>
            </div>
        </nav>
    )
}