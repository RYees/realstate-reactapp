import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' position='fixed' width='full' top='0px' borderBottom='1px' borderColor='gray.100' bg='blue.900' opacity='1'>
    <Box fontSize='3xl' color='white' position='relative' zIndex='10' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Find your Home</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu backgroundColor='red.900'>
        <MenuButton as={IconButton} bg='yellow.100' icon={<FcMenu />} variant='outline' color='gray.900' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;