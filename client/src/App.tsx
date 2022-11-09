import { fetchApi } from './api';


function App() {

  fetchApi('products').then(response => console.log(response))

  return (
    <div>
      <h1>'Hello word!'</h1>
    </div>
  );
}

export default App;
