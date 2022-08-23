
import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h2 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>EXPENSE TRACKER</h2>
      </div>
      

      {/* grid colums   */} 
      <div className="grid md:grid-cols-2 gap-4">
        {/* chart  */}
        <Graph />
        {/* form */} 
        <Form />
      </div>

    </div>
  );
}

export default App;
