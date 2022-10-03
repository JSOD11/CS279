import { Flex, Box } from '@chakra-ui/react';
import Availability from './Availability';
import { useState } from 'react';

// Main dashboard where everything comes together
const Dash = () => {
  // State for setting schedule
  // State is on highest level component because all components within this parent need to access it
  const [schedule, setSchedule] = useState([]);
  // Handle new state change on drag
  const handleChange = newSchedule => {
    setSchedule(newSchedule);
  };

  return (
    // Two availability boxes with relevent props
    <Flex>
      <Box mr={12}>
        <Availability
          instructions={'Click and drag to toggle; saved immediately'}
          heading="Your availability"
          isGroup={false}
          schedule={schedule}
          handleChange={handleChange}
        />
      </Box>
      <Box ml={12}>
        <Availability
          instructions={"Mouseover the calendar to see who's"}
          heading="Group's availability"
          // Group availability
          isGroup={true}
          schedule={schedule}
          handleChange={handleChange}
        />
      </Box>
    </Flex>
  );
};

export default Dash;
