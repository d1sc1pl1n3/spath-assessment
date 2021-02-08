import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SingleCountryStatic = (props) => {
  const data = useStaticQuery(graphql`
    query StaticQuery {
      countries {
        Country {
          _id
          area
          populationDensity
          gini
          nameTranslation
          numericCode
          name
          currencies {
            symbol
            name
          }
          topLevelDomains {
            name
          }
          flag {
            svgFile
          }
        }
      }
    }
  `);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <CountryComponent role="button" onClick={() => setIsToggled((prevState) => !prevState)}>
        <h1>{data.countries.Country[0].name} </h1>
        <AnimatePresence>
          {isToggled && (
            <Accordion
              style={{ overflow: 'hidden' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p>Currency: {data.countries.Country[0].currencies[0].name}</p>
              <br />
              <p>CountryFlag: </p>
              <Flag src={data.countries.Country[0].flag.svgFile} />
            </Accordion>
          )}
        </AnimatePresence>
      </CountryComponent>
    </>
  );
};

const CountryComponent = styled.div`
  background: darksalmon;
  padding: 5px;
  margin: 15px;
  color: white;
  min-width: 30%;
  //min-height: 150px;
  border-radius: 15px;
  h2 {
    font-size: 1.5em;
    font-family: 'Futura PT';
  }
  transition: 0.2s;
  :hover {
    filter: drop-shadow(1px 3px 2px #222222);
  }
`;

const Flag = styled.img`
  z-index: 10;
  position: relative;
  height: 20px;
  object-fit: cover;
`;

const Accordion = motion.custom(styled.div`
  color: black;
`);

export default SingleCountryStatic;
