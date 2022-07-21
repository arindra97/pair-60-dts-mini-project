// import logo from './logo.svg';
// import './App.css';

import AccountUser from './containers/AccountUser';
import ManageAccount from './components/Button/ManageAccount';

function App() {
  return (
    <div className="App">
      <div style={{ display:"flex", marginTop:"15%", flexDirection:"column", alignItems:"center" ,justifyContent:"center" }}>
        <div style={{ display:"flex", flexDirection:"row", gap:"1em" }}>
          <AccountUser>Jalu</AccountUser>
          <AccountUser>Neko</AccountUser>
          <AccountUser>Pras</AccountUser>
          <AccountUser>Anda</AccountUser>
        </div>
        <div style={{ marginTop:"2em" }}>
          <ManageAccount />
        </div>
      </div>
    </div>
  );
}

export default App;
