import "./Myapp.scss"
import './App.css'
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";


function App() {
  const [inputVal, setInputVal] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal.trim() === '') {
      alert('Please enter a valid value.');
      return;
    }

    const newItem = {
      id: Date.now(),
      value: inputVal,
    };

    setListItems([...listItems, newItem]);
    setInputVal(''); // Clear the input field
  };

  const handleEdit = (id) => {
    const itemToEdit = listItems.find((item) => item.id === id);
    setInputVal(itemToEdit.value);
    setListItems(listItems.filter((item) => item.id !== id));
  };

  const handleRemove = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <section className='main-box'>
        <Container>
          <div className='form-box'>
            <form className='main-form' onSubmit={handleSubmit}>
              <div className="inner-form">
                <label>Today Task</label>
                <input
                  type='text'
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}></input>
              </div>
              <button type='submit'>+Add</button>
            </form>
            <div className="list-box">
              <table>
                <tr>
                  <th className="th1">Data</th>
                  <th className="th2">Edit</th>
                  <th className="th2">Remove</th>
                </tr>
                {listItems.map((item) => (
                  <tr key={item.id}>
                    <td className="th1">{item.value}</td>
                    <td>
                      <button className="edit" onClick={() => handleEdit(item.id)}>
                        <MdEdit />
                      </button>
                    </td>
                    <td>
                      <button className="remove" onClick={() => handleRemove(item.id)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default App;
