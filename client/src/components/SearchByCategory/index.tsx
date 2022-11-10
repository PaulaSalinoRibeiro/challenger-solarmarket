import { useDispatch, useSelector } from 'react-redux';
import { searchByCategory, removeFilter } from '../../app/filterProductSlice';
import { RootState } from '../../app/store';

import * as S from './styled';

export function SearchByCategory() {
  const { allCategories } = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  return (
    <S.Container>
      Pesquisar por categoria:
      <S.Select
        onChange={({target}) => dispatch(searchByCategory(target.value))}
      >
        {
          allCategories.map(category => (
            <option
              key={category} 
              value={category}>
                {category}
            </option>
          ))
        }
      </S.Select>
      <S.Button
        type="button"
        onClick={() => dispatch(removeFilter())}
      >
        Remover Filtro
      </S.Button>
    </S.Container>
  )
}