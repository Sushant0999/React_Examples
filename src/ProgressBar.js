import React from 'react';

function ProgressBar({ percent }) {
  const validPercent = Math.min(100, Math.max(0, percent));

  return (
    <div className="progress" style={{ height: '30px', width: '75%' }}>
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style={{ width: `${validPercent}%` }}
        aria-valuenow={validPercent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {`${validPercent}%`}
      </div>
    </div>
  );
}

export default ProgressBar;
