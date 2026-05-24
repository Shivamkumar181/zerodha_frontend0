import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 ">
        <div className="row text-center">
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

    <div className="col-12">
      </div>
       <div className="col-4 p-3 mt-5">
        <img src="public/media/images/smallcaselogo.png" />
        <p className="text-small text-muted">Thematic investment platform.</p>
      </div>
      <div className="col-4 p-3 mt-5 ">
        <img src="public/media/images/image.png" alt='logo' width="70%" height="40%" />
        <p className="text-small text-muted">Algo & strategy platform.</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="public/media/images/sensibullLogo.svg" alt='senselogo' width="70%" height="40%" />
        <p className="text-small text-muted">Options trading platform.</p>
      </div>

      <div className="col-4 p-3 mt-5">
        <img src="public/media/images/zerodhaFundhouse.png" alt="zerodhafund Logo" width="70%" height="40%" />
        <p className="text-small text-muted">Asset management.</p>
      </div>
      <div className="col-4 p-3 mt-5 ">
        <img src="public/media/images/tijori.svg" alt='tijori' width="70%" height="40%" />
        <p className="text-small text-muted">Fundamental research platform.</p>
      </div>
      
      <div className="col-4 p-3 mt-5">
        <img src="public/media/images/dittoLogo.png" alt="Ditto Logo" width="100" height="50" />
        <p className="text-small text-muted">Insurance.</p>
      </div>
       <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
    </div>  
    </div>  
    );
}

export default Universe;