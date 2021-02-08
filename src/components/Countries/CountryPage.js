import React, { useState } from 'react';
import styled from 'styled-components';
//import SingleCountryStatic from './SingleCountryStatic';
import CountryComponent from './CountryComponent';
import { graphql, useStaticQuery } from 'gatsby';

const CountryPage = () => {
  const data = useStaticQuery(graphql`
    query CountryPageQuery {
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
        TopLevelDomain {
          name
          countries {
            name
          }
        }
      }
    }
  `);

  return (
    <PageContainer>
      {data.countries.Country.map((country) => {
        {
          console.log('tld', country.topLevelDomains[0]);
          return (
            <>
              <CountryComponent
                name={country.name}
                flag={country.flag.svgFile}
                symbol={country.currencies[0].symbol}
                currency={country.currencies[0].name}
                tld={country.topLevelDomains[0]}
              />
            </>
          );
        }
      })}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100vw;
  background: darkslategrey;
  color: white;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 468px) {
    background: oldlace;
  }
`;

/* const PageContainer = styled.div`
  columns: 450px 3;
  max-width: 100vw;
  background: darkslategrey;
  color: white;
`; */

export default CountryPage;
