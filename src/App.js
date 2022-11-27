import React from "react";
import Headers from "./components/Headers";
import Main from "./components/Main";
import Panel from "./components/Panel";
import macbook from './assets/macbook.jpg';
import samsung from './assets/samsung.jpg';
import skuter from './assets/skuter.jpg';
import monitor from './assets/monitor.jpg';
import mask from './assets/mask.jpg';
import wash from './assets/wash.jpg';

function App() {
  return (
    <div className="container">
      <Headers />
      <div className="main__blocks">
        <Panel />
        <div className="main__posts">
          <Main image={macbook} price='97000 ₽' name='MacBook'/>
          <Main image={samsung} price='35999 ₽' name='Galaxy'/>
          <Main image={skuter} price='58950 ₽' name='Скутер'/>
          <Main image={monitor} price='12000 ₽' name='Монитор Samsung'/>
          <Main image={mask} price='500 ₽' name='Респераторная маска'/>
          <Main image={wash} price='75000 ₽' name='Стиральная машина'/>
        </div>
      </div>
    </div>
  );
}

export default App;
