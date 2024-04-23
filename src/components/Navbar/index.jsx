import NavItem from './NavItem'
import Input from '../SearchInput'
import Logo from '../Logo'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (movies) => {
      setSearchResults(movies);
      // Redirecionar para a página de busca com os resultados da pesquisa na URL
      navigate('/search', { state: { movies } });
    };
    
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <nav >
                <NavItem to="/">
                    <Logo />
                </NavItem>
            </nav>
            <Input onSearch={handleSearch}/>
        </div>
    )
}

export default NavBar