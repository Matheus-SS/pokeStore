import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Card, Header, Bio } from './styles';

const cards = new Array(18);
const PokemonCardSkeleton: React.FC = () => {
  return (
    <>
      {cards.fill(0).map((item, index) => (
        <SkeletonTheme color="#e2e2e2" highlightColor="#fff">
          <Card>
            <Header>
              <Skeleton height={90} />
              <Skeleton circle height={50} width={50} className="image" />
            </Header>

            <Bio>
              <Skeleton width="20%" />
              <Skeleton width="20%" />
            </Bio>

            <p>
              <Skeleton height={17} count={4} className="moves" />
            </p>
          </Card>
        </SkeletonTheme>
      ))}
    </>
  );
};

export default PokemonCardSkeleton;
