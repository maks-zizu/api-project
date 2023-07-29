import { useEffect, useState } from 'react';
import './App.css';
import UsersList from '../features/Users/UsersList';
import { User } from '../features/Users/type';
import CardUser from '../features/Users/CardUser';
import FavList from '../features/Users/FavList';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [usersCopy, setUsersCopy] = useState<User[]>(users);
  const [usersFav, setUsersFav] = useState<User[]>([]);
  const [state, setState] = useState(true);
  const [count, setCount] = useState(0);

  async function usersFunc() {
    const res = await fetch('https://64c249e6eb7fd5d6ebcf90e0.mockapi.io/api/vvv/users');
    const data = await res.json();
    setUsers(data);
    // setUsersCopy(data);
  }

  useEffect(() => {
    usersFunc();
  }, []);

  // useEffect(() => {
  //   fetch('https://64c249e6eb7fd5d6ebcf90e0.mockapi.io/api/vvv/users')
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  // }, []);

  const del = (id: string) => {
    setUsersCopy(usersCopy.filter((user) => user.id !== id));
  };

  const fav = (user:User) => {
    setUsersFav([...usersFav, user]);
  };

  const delFav = (id: string) => {
    setUsersFav(usersFav.filter((user) => user.id !== id));
  };

  const sum = () => {
    setUsersCopy(users.filter((el, i) => i < count));
  };

  return (
    <div className="App">
      <div>
      <FavList users={usersFav} del={del} delFav={delFav} fav={fav}/>
      </div>
      <input type="number" className='input_g' onChange={(e) => setCount(Number(e.target.value))} />
      <button className='btn_cp' onClick={sum}>Задать количество</button>
      {!state ? (
        <>
          <button
            className="btn_load"
            onClick={() => setState((prev) => !prev)}
          >
            Скрыть сотрудников
          </button>
          <UsersList users={usersCopy} del={del} delFav={delFav} fav={fav}/>
        </>
      ) : (
        <>
          <button
            className="btn_load"
            onClick={() => setState((prev) => !prev)}
          >
            Показать сотрудников
          </button>
          <h2>Сотрудники не загружены</h2>
        </>
      )}
    </div>
  );
}

export default App;
