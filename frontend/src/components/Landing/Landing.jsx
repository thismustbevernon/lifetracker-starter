import * as React from 'react';


export default function Landing() {
    return (
      <div className="Landing">
        <div className="hero">
          {/* <img src={trackerImage} alt="hero img" /> */}
          <h1>Life Tracker</h1>
          <p>Helping you take back control of your world</p>
        </div>
  
        {/* <div className="tiles">
          {tileData.map(({ label, image, id }) => (
            <div className="tile" key={id}>
              <img src={image} alt={label} />
              <p>{label}</p>
            </div>
          ))}
        </div> */}
      </div>
    )
  }
