import {
  ChakraProvider,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <Layout>
      <ChakraProvider>
        <Card text='Faça Login' buttonText='Fazer login' event={login} />
      </ChakraProvider>
    </Layout>
  );
}

export default App;
