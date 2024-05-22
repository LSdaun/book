import './rating.scss';

export const Star = ({ percent = 0 }) => {
  return (
    <>
      <div
        className="star"
        id="maskDiv"
        style={{
          clipPath: 'url(#mask-1)',
          width: '12px',
          height: '11px',
          background: `linear-gradient(to right, #F2C94C ${percent}%, #EEEDF5 ${percent}%)`,
        }}
      />
    </>
  );
};
