import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { data1, data2, data3 } from "./Helper/Data";
import Search from "./components/Search";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');

    const handleSearch = (value) => {
        setSearch(value);
    };

  return (
    <div className="App">
      <Router>
        <Header />
        <Search onSearch={handleSearch} />
        <Routes>
          <Route path="/table1" element={<Table data={data1} search={search} />} />
          <Route path="/table2" element={<Table data={data2} search={search} />} />
          <Route path="/table3" element={<Table data={data3} search={search} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
