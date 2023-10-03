import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AppLayout from '../helpers/appLayout';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { foodItems, funnyFacts } from '../helpers/store';

const ItemsPage = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleHoverEnd = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <AppLayout />
      
      </>
  )
}

export default ItemsPage;
