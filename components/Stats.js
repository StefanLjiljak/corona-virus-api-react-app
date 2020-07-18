import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.2rem;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Stats = ({ url }) => {
  const stats = useStats(url);
  if (!stats) return <p>Учитава се...</p>;
  return (
    <StatGrid>
      <StatBlock>
        <h3>Заражених:</h3>
        <span>
          {!stats.error
            ? stats.confirmed.value
            : 'Грешка у куцању назива земље, покушајте поново.'}
        </span>
      </StatBlock>
      <StatBlock>
        <h3>Умрлих:</h3>
        <span>
          {!stats.error
            ? stats.deaths.value
            : 'Грешка у куцању назива земље, покушајте поново.'}
        </span>
      </StatBlock>
      <StatBlock>
        <h3>Излечених:</h3>
        <span>
          {!stats.error
            ? stats.recovered.value
            : 'Грешка у куцању назива земље, покушајте поново.'}
        </span>
      </StatBlock>
    </StatGrid>
  );
};

export default Stats;
