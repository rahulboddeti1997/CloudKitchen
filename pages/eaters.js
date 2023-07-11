import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AppLayout from '../helpers/appLayout';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { foodItems, funnyFacts } from '../helpers/store';
const MenuPage = () => {

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
      <div style={{ height: '100%', padding: 50, paddingLeft: 70, paddingRight: 0, marginTop: 100 }}>
        <Grid container spacing={2}>
          {foodItems.map((item, index) => (
            <Grid
              key={index}
              xs={12}
              sm={10}
              md={6}
              lg={3.5}
              style={{
                margin: 10,
              }}
            >
              <div
                className={`card ${hoveredItem === index ? 'flipped' : ''}`}
                style={{
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease',
                  boxShadow: '0 5px 12px rgba(0, 0, 0, 0.2)',
                  height: 200,
                  borderRadius: 10,
                  display: 'flex',
                  perspective: '1000px',
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverEnd}
              >
                <div
                  className="card-front"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex'
                  }}
                >
                  <img
                    src={item.img}
                    alt="Food"
                    width={300}
                    style={{
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      overflow: 'hidden',
                    }}
                  />
                  <div
                    style={{
                      padding: 15,
                      paddingLeft: 12,
                      paddingBottom: 15,
                      paddingTop: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      fontFamily: 'fantasy',
                      fontSize: 14,
                    }}
                  >
                    <span style={{ marginBottom: 4, paddingLeft: 10 }}>
                      <b style={{ fontSize: 17, fontWeight: 900 }}>{item.name}</b>
                    </span>
                    <span
                      style={{
                        marginBottom: 8,
                        marginLeft: 8,
                        borderRadius: 20,
                        backgroundColor: '#ffa534',
                        paddingLeft: 10,
                        color: 'white',
                        width: 80,
                        paddingTop: 1,
                        fontFamily: 'sans-serif',
                        paddingBottom: 1,
                        display: 'flex',
                        fontSize: 22,
                      }}
                    >
                      <p>{item.rating}</p> <StarBorderIcon />
                    </span>
                    <span style={{ marginBottom: 4, overflow: 'scroll', paddingLeft: 10 }}>
                      <b style={{ fontSize: 14, fontWeight: 900 }}>{item.description}</b>
                    </span>
                  </div>
                </div>
                <div
                  className="card-back"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                 <div style={{borderRadius: 10, backgroundColor: '#000080', width: '100%', height: '100%', padding: 50, color: 'white', fontSize: 20}}><b>{funnyFacts[item.name][Math.floor(Math.random() * funnyFacts[item.name].length)]}</b></div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MenuPage;
