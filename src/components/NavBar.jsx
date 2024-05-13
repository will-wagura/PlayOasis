import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = ({ onSearch }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    // Add logic to handle login navigation
    console.log("Navigate to login page");
  };

    return (<HStack padding="10px" justify="space-between">
      <Image src={logo} boxSize="60px" width="80px"/>
      <SearchInput onSearch={onSearch}/>

      <Link to="/login" onClick={handleLoginClick}>Login</Link>

      <ColorModeSwitch />
    </HStack>);
};
export default NavBar;
