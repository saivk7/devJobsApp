import './App.css';

import Jobs from './components/jobs';

//mock state
const listjobs = [
  {
    "title" : "SWE 1",
    "company": "Google"
  },
  {
    "title" : "SWE 1",
    "company": "Facebook"
  },
  {
    "title" : "SWE 1",
    "company": "Amazon"
  },
]

function App() {
  return (
    <div className="App">
      <h4> My app</h4>
      <Jobs mockjobs={listjobs} />
    </div>
  );
}

export default App;
