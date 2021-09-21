
import "./App.css";
import contactsJSON from './contacts.json';
import React, {useState} from "react";

function App() {

  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
   

  const addRandomContact = () => {
    const index = [Math.floor(Math.random() * contactsJSON.length)];
    const randomContact = contactsJSON[index];
    contactsJSON.slice(index, 1);
    setContacts([...contacts, randomContact]);
  }

  const sortPopularity = () => {
    setContacts([...contacts.sort((a, b) => (b.popularity > a.popularity ? 1 : -1))]);
  }

  const sortAlphabetically = () => {
    
    setContacts([...contacts.sort((a, b) => (a.name < b.name ? -1 : 1))]);
    // contacts.splice(0, (contacts.length / 2));
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
}


  return(
    <div className="App">
    <h1>IronContacts</h1>

    <button onClick={addRandomContact}>Add random contact</button>
    <button onClick={sortPopularity} >Sort by popularity</button>
    <button onClick={sortAlphabetically}>Sort by name</button>

    <table>

      <thead>
            <tr>
              <th><h2>Picture</h2></th>
              <th><h2>Name</h2></th>
              <th><h2>Popularity</h2></th>
              <th><h2>wonOscar</h2></th>
              <th><h2>wonEmmy</h2></th>
              <th><h2>Actions</h2></th>

            </tr>
      </thead>

      {/* <table> */}
        {contacts.map((contact) => {
          return (
            <tbody>
            <tr>

             <td><img src={contact.pictureUrl} alt='of an actor'/></td>
             <td>{contact.name}</td>
             <td>{contact.popularity}</td>
             <td>{contact.wonOscar ? '🏆' : ''}</td>
             <td>{contact.wonEmmy ? '🏆' : ''}</td>
             <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>

            </tr>
            </tbody>
            
          )
        })}
      </table>

    </div>
  )
}
export default App;
