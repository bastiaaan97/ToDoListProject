import React from 'react';
import './App.css';
import {WorkList} from "./WorkList";

function App() {
  return<>
    <WorkList
      task1={["Utworzenie zamówienia"]}
      task2={["Opłacenie zamówienia"]}
      task3={["Zamówienie wysłane do realizacji"]}
      task4={["Dostarczonie zamówienia"]}
      task5={["Potwierdzenie od klienta o dostarczeniu zamówienia"]}
    />
      </>;


}

export default App;
