import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCep } from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import { deleteShopCart } from '../../app/shopCartSlice';
import { RootState } from '../../app/store';
import { sendApi } from '../../api';

import * as S from './styled';


interface Address {
  neighborhood: string,
  local: string,
  street: string,
  uf: string,
  cep: string,
};

export function AddressForm() {
  const isCepLengthValied = 8;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cep, setCep] = useState('');
  const [alert, setAlert] = useState(false);
  const [address, setAddress] = useState<Address>(
    {neighborhood:'', local:'', street:'', uf:'', cep:''});

  const { productsList } = useSelector((state: RootState) => state.shopCart);

  const handleClick = async () => {
    const result = await fetchCep(cep);
   
    setCep('');

    if (result.erro) return setAlert(true);
    
    setAddress({
      neighborhood: result.bairro, 
      local: result.localidade,
      street: result.logradouro, 
      uf: result.uf, 
      cep: result.cep
    });
    setAlert(false);
  };

  const handleBought = async () => {   
    await Promise.all(productsList
      .map(item => sendApi(`salles/${item.code}`, { code: item.code, qty: item.qty || 0, address})));

    localStorage.setItem('@shopHistory', JSON.stringify({productsList, address}));

    dispatch(deleteShopCart());

    navigate('/checkout');
  };

  return (
    <S.Container>
      <S.CepContainer>
        <S.CepForm>
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
        </S.CepForm>
        <S.Btn
          onClick={() => handleClick()}
          disabled={cep.length !== isCepLengthValied}
          >
          Consultar CEP
        </S.Btn>
        {
          alert && <S.Alert>Não foi possivel encontrar o CEP informado</S.Alert>
        }
      </S.CepContainer>
      {
        address.cep && (
          <S.FormAddress>
            <label>
              Rua: 
              <input 
                type="text" 
                defaultValue={address.street}
              />
            </label>
            <label>
              Localidade: 
              <input 
                type="text" 
                defaultValue={address.local}
              />
            </label>
            <label>
              Bairro: 
              <input 
                type="text" 
                defaultValue={address.neighborhood}
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
          </S.FormAddress>
        )
      }
      {
        address.cep && (
          <S.BtnFinneshShop
            type="button"
            onClick={() => handleBought()}
          >
            Finalizar Compra
          </S.BtnFinneshShop>
        )
      }
    </S.Container>
  ) 
}