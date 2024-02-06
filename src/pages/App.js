import { useState } from 'react';
import gitLogo from '../assets/logogit.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {Container} from './styles';
import Button from '../components/Button';
import {api} from '../services/api';

function App() {
  
  const [currentRepo, setCurrentRepo] = useState('');
  const [respos, setRespos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const isExist = respos.find(repo => repo.id === data.id);

      if (!isExist){
        setRespos(prev=>[...prev, data]);
        setCurrentRepo('');
        return
      }

    }
    
    alert('Repositório não encontrado');
    
  }

  const handleRemoveRepo = (id) => {
    
  }


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onclick={handleSearchRepo}/>
      {respos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
