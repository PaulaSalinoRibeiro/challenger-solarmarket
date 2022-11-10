import { useState } from 'react';
import { fetchCep } from '../../api';

interface Adddress {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string,
  cep: string,
}

export function AddressForm() {
  const isCepLengthValied = 8;
  const [cep, setCep] = useState('');
  const [alert, setAlert] = useState(false);
  const [address, setAddress] = useState<Adddress>(
    {bairro:'', localidade:'', logradouro:'', uf:'', cep:''});

  const handleClick = async () => {
    const result = await fetchCep(cep);
    setCep('');

    if (result.erro) return setAlert(true);
    
    setAddress(result);
  };

  return (
    <>
      <form>
        {
          alert && <p>Não foi possivel encontrar o CEP informado</p>
        }
        <label>
          CEP: 
          <input 
            type="text"
            value={cep}
            name="cep"
            onChange={({target}) => setCep(target.value)}
            placeholder="00000000"
          />
        </label>
      </form>
      <button
        onClick={() => handleClick()}
        disabled={cep.length !== isCepLengthValied}
      >
        Consultar CEP
      </button>
      {
        address.cep && (
          <form>
            <label>
              Rua: 
              <input 
                type="text" 
                defaultValue={address.logradouro}
              />
            </label>
            <label>
              Localidade: 
              <input 
                type="text" 
                defaultValue={address.localidade}
              />
            </label>
            <label>
              Bairro: 
              <input 
                type="text" 
                defaultValue={address.bairro}
              />
            </label>
            <label>
              Estado: 
              <input 
                type="text" 
                defaultValue={address.uf}
              />
            </label>
            <label>
              CEP: 
              <input 
                type="text" 
                defaultValue={address.cep}
              />
            </label>
          </form>
        )
      }
    </>
  ) 
}