import React, { useEffect } from 'react';
import './ScheduleMeeting.css';

const ScheduleMeeting = () => {
  useEffect(() => {
    // Load Calendly widget script dynamically
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return (
    <div className="schedule-meeting">
      {/* Calendly inline widget */}
      <div className="calendly-inline-widget" data-url="https://calendly.com/chefmarilinevilla/consulation" style={{ minWidth: '320px', height: '700px' }}></div>
      {/* End of Calendly inline widget */}
    </div>
  );
};

export default ScheduleMeeting;
