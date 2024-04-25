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
      navigate('/search', { state: { movies } });
    };
    console.log(searchResults)
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