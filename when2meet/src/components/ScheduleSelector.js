import ScheduleSelector from 'react-schedule-selector';

// faster dev time enabled by scheduleSelector library
const ScheduleSelectorComponent = ({ schedule, handleChange }) => {
  return (
    <ScheduleSelector
      // Pass in schedule state defined in Dash
      selection={schedule}
      numDays={7}
      minTime={9}
      maxTime={18}
      // Break it up into 30 minutes
      hourlyChunks={2}
      timeFormat={'h:mm A'}
      dateFormat={'ddd'}
      onChange={handleChange}
      // Make sure colors are opaque for stacking
      selectedColor={'rgba(84, 161, 8, 0.4)'}
      unselectedColor={'rgba(255,221,222,255)'}
    />
  );
};

export default ScheduleSelectorComponent;
