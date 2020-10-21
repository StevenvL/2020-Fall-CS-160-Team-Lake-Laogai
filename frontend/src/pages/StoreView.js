import React from 'react';



  function StoreView({ match, loading }){
    return(
        <div>
            <h1> StoreName: {match.params.storeName} </h1>
        </div>
    )
}

export default StoreView;