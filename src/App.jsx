import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [fruits, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/fruits')
      .then(response => setFruits(response.data))
      .catch(error => console.error(error));
  }, []);

  const getAllFruits = async () => {
    const { data } = await axios.get('http://localhost:3000/fruits')
    setUsers(data)
  }

  const addFruit = async (event) => {
    event.preventDefault()
    try {
        const name = document.getElementById('name').value
        const quantity = document.getElementById('quantity').value
        const price = document.getElementById('price').value
        const { data } = await axios.post('http://localhost:3000/fruits', { name, quantity, price })
 
        if (data.error) {
            alert(data.error)
            return
        }
        alert('Sikeres adatfelvétel')
        getAllFruits()
    } catch (error) {
        console.error('Hiba történt:', error)
        alert('Hiba történt az adatküldés során.')
    }
 }

 const updateFruit = async (e) => {
    e.preventDefault()
    const id = document.getElementById('id').value
    const name = document.getElementById('name').value
    const quantity = document.getElementById('quantity').value
    const price = document.getElementById('price').value
    const { data } = await axios.put(`${'http://localhost:3000/fruits'}/${id}`, { name, quantity, price })
    getAllUsers()
  }

  const deleteFruit = async (id) => {
    await axios.delete(`${'http://localhost:3000/fruits'}/${id}`)
    getAllFruits()
  }

  return (
    <>
      <form>
        <fieldset>
          <legend>Gyümölcsök adatai</legend>
          <input type="hidden" name="id" id="id" />
          <input type="text" name='nev' id='nev' placeholder='name' />
          <input type="number" name="quantity" id="quantity" placeholder='quantity' />
          <input type="number" name="price" id="price" placeholder='price' />
        </fieldset>
        <MyButton color='#4da754'>Lekérés</MyButton>
        <MyButton color='#4d81a7'>Küldés</MyButton>
        <MyButton color='#a2a74d'>Felülírás</MyButton>
        <MyButton color='#a74d4d'>Törlés</MyButton>
      </form>

      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Fizetés</th>
            <th>Módosítás</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
        {fruits.map(({ id, name, quantity, price }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td><MyButton color='blue'>Módosít</MyButton></td>
              <td><MyButton color='red'>Törlés</MyButton></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
