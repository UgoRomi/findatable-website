import { List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
const Home: NextPage = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.100' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      {/* You can also use custom icons from react-icons */}
      <ListItem>
        <ListIcon as={MdSettings} color='green.500' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  );
};

export default Home;
