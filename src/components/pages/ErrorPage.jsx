import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Error Page</h1>
            <button onClick={() => navigate('/login')}>Retourner vers la page d'accueil</button>
        </div>
    );
}
