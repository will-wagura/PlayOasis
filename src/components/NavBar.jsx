import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = ({ onSearch }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    // Add logic to handle login navigation
    console.log("Navigate to login page");
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    // Add logic to handle signup navigation
    console.log("Navigate to signup page");
  };

    return (<HStack padding="10px">
      <Image src={logo} boxSize="60px" width="80px"/>
      <SearchInput onSearch={onSearch}/>

      <a href="/login" onClick={handleLoginClick}>Login</a>
      <a href="/signup" onClick={handleSignupClick}>Sign Up</a>

      <ColorModeSwitch />
    </HStack>);
};
export default NavBar;
