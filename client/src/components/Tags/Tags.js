import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



function Tags() {
    const [value, setValue] = useState([1, 6]);
  
    const handleChange = (val) => setValue(val);
  
    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={1}>SKIN</ToggleButton>
        <ToggleButton value={2}>HAIR</ToggleButton>
        <ToggleButton value={3}>BODY</ToggleButton>
        <ToggleButton value={4}>MIND</ToggleButton>
        <ToggleButton value={5}>STYLE</ToggleButton>
        <ToggleButton value={6}>NAILS</ToggleButton>
      </ToggleButtonGroup>
    );
  }
  
//   render(<Tags />);


export default Tags;