import Header from './components/Header.js';
import Button from './components/Button.js';

function App() {
  return (
    <div class="App">
      <head>
        <title>UC Free Food Tracker</title>
      </head>
      <Header/>
      <Button action="Create post" color="secondary"/>
      <Button action="View posts"/>
      <Button action="Delete post"/>
    </div>
  );
}

export default App;
