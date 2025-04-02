import { useState } from "react";

import StarRating from "@/registry/default/ui/star-rating";

export default function StarRatingDefault() {
  const [rating, setRating] = useState(3);

  return <StarRating value={rating} onChange={setRating} />;
}
