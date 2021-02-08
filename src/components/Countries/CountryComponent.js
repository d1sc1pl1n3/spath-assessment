import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CountryComponent = (props) => {
  const { name, flag, symbol, currency, tld } = props;

  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <CountryComponentContainer
        role="button"
        onClick={() => setIsToggled((prevState) => !prevState)}
      >
        <NameBox>
          <Head>{name}</Head>
          <Flag src={flag} />
          {/*           <div>tld: {tld && <p>{tld}</p>}</div>
           */}{' '}
        </NameBox>

        <AnimatePresence>
          {isToggled && (
            <Accordion
              style={{ overflow: 'hidden' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ ease: [0.4, 0.55, 0.83, 0.6] }}
            >
              <p>
                Currency: <br />
                <h3>
                  {symbol} - {currency}
                </h3>
              </p>
              <p>
                Top Level Domain:
                <br />
                <h3>
                  {JSON.stringify(tld)
                    .replace(/"/g, '')
                    .replace(/name/g, '')
                    .replace(/{/g, '')
                    .replace(/}/g, '')
                    .replace(/:/g, '')}
                </h3>
              </p>
            </Accordion>
          )}
        </AnimatePresence>
      </CountryComponentContainer>
    </>
  );
};

/* implement this to render key/value return (
   {Object.entries(profile).map(([key,value]) => {
      <div>{key} : {value.toString()}</div>
   })}
) */

const CountryComponentContainer = styled.div`
  position: relative;
  background: darksalmon;
  padding: 5px;
  margin: 15px;
  color: white;
  min-width: 300px;
  width: 30%;
  min-height: 160px;
  border-radius: 15px;
  h2 {
    font-size: 1.5em;
    font-family: 'Roboto';
  }
  transition: all 0.2s ease-in-out;
  :hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px #888888;
  }
`;

const NameBox = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
`;

const Head = styled.h1`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 70%;
`;

const Flag = styled.img`
  padding-left: 10px;
  z-index: 10;
  height: 25px;
  object-fit: cover;
`;

const Accordion = motion.custom(styled.div`
  color: white;
  font-size: 1.2em;
`);

export default CountryComponent;
