// import logo from './logo.svg';
// import './App.css';

import AccountUser from './containers/AccountUser';

function App() {
  return (
    <div className="App" style={{ display:"flex", flexDirection:"row", marginTop:"20%", gap:"1em", justifyContent:"center" }}>
      <AccountUser />
      <AccountUser />
      <AccountUser />
      <AccountUser />
    </div>
  );
}

export default App;
