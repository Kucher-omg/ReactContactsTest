import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactsContainer from './components/Contacts/ContactsContainer';
import FavouriteContainer from './components/Favourite/FavouriteContainer';
import Edit from './components/Edit/EditContainer';

const App = () => {
    return(
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Route path='/contacts' render={() => <ContactsContainer />}/>          
          <Route path='/favcontacts' render={() => <FavouriteContainer />}/>
          <Route path='/edit' render={() => <Edit />} />
        </div>
        
      </div>
    );
}

export default withRouter(App);
