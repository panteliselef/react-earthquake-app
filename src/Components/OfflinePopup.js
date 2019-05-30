import React from 'react';

function OfflinePopup() {


  return (
    <div className="offline-popup">
      <div className="offline-popup-wrapper">
        <div>No internet connection</div>
        <div className="offline-popup-button" onClick={()=>window.location.reload()}>Reload</div>
      </div>
    </div>
  );
}

export default OfflinePopup;