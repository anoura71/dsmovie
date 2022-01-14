import { Star } from "components/Star";
import { getFills } from "utils/functions";

import "./styles.css";

type Props = {
  score: number;
};

function MovieStars({ score }: Props) {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
}

export { MovieStars };
