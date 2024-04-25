import NavItem from './NavItem'
import Input from '../SearchInput'
import Logo from '../Logo'
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';

const NavBar = () => {
    const { searchResults, setSearchResults } = useSearch(); 
    const navigate = useNavigate();

    const handleSearch = (movies) => {
      setSearchResults(movies);
      navigate('/search', { state: { movies } });
    };
    return (
        <div className='d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-md-between position-absolute z-3 w-100 mw-100 p-4 gap-3'>
            <nav>
                <NavItem to="/">
                    <Logo/>
                </NavItem>
            </nav>
            <Input onSearch={handleSearch}/>
        </div>
    )
}

export default NavBar