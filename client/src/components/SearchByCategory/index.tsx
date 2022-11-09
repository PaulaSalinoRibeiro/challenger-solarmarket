import { useDispatch, useSelector } from 'react-redux';
import { searchByCategory, removeFilter } from '../../app/filterProductSlice';
import { RootState } from '../../app/store';

export function SearchByCategory() {
  const { allCategories } = useSelector((state: RootState) => state.filters)
  const dispatch = useDispatch();

  return (
    <div>
      Pesquisar por categoria:
      {" "}
      <select
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
      </select>
      <button
        type="button"
        onClick={() => dispatch(removeFilter())}
      >
        Remover Filtro
      </button>
    </div>
  )
}