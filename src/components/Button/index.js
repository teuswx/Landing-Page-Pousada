import './Button.css'
import { Link } from 'react-router-dom';

function Button({ name, rota }) {
    const handleClick = () => {
        
        window.scrollTo(0, 0);
    };

    return (
        <Link
            to={`/${rota}`}
            onClick={handleClick}  
            className="btn btn-lg btn-all"
        >
            {name}
        </Link>
    );
}

export default Button;
