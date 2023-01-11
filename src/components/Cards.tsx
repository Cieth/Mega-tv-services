import React from 'react';
import '../styles/components/Cards.scss';
import { IBuilding } from '../types/IBuilding';
import Card from './Card';

interface IBuild {
  building: IBuilding[];
}

const Cards = ({ building }: IBuild) => {
  const plans = building && building[0].plans;
  return (
    <>
      <form className='Cards_body'>
        {plans ? (
          plans.map((x: any) => {
            return (
              <>
                <Card plan={x.label} />
              </>
            );
          })
        ) : (
          <></>
        )}
      </form>
    </>
  );
};

export default Cards;
