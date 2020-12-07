import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactsContainer from './components/Contacts/ContactsContainer';
import FavouriteContainer from './components/Favourite/FavouriteContainer';

const App = () => {
    return(
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Route path='/contacts' render={() => <ContactsContainer />}/>          
          <Route path='/favcontacts' render={() => <FavouriteContainer />}/>
        </div>
        
      </div>
    );
}

export default App;
