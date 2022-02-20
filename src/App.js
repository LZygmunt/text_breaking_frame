import './styles.scss';
import React, { useState } from "react";

// ToDo: base on mutation observer handle resize of div.frame

const App = () => {
  const [leftSide, setLeftSide] = useState(false);

  return (
    <>
      <div className="toggle">
        <input
          id="switch"
          type="checkbox"
          checked={!leftSide}
          onChange={() => { setLeftSide((prevState) => !prevState); }}
        />
        <label htmlFor="switch">
          {`Move content to ${leftSide ? 'right': 'left'}`}
        </label>
      </div>
      <div className="frame" style={{ height: 900, width: 1600 }}>
        <div className="block" />
        <div className={`frame-cover${leftSide ? ' left-side-content' : ''}`}>
          <div className="text-block top-text">
            <p className="text"><span>Lorem ipsum</span></p>
          </div>
          <div className="text-block bottom-text">
            <p className="text">
            <span>
              Ea eum eveniet excepturi itaque
              <br />
              <br />
              labore, nostrum suscipit tempore ut.
            </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
