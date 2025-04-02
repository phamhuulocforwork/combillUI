"use client";

import { useState } from "react";

import StarRating from "@/registry/default/ui/star-rating";

export default function StarRatingInteractive() {
  const [rating, setRating] = useState(3);

  return (
    <div className='flex flex-col gap-2'>
      <StarRating value={rating} onChange={setRating} />
      <p className='text-sm text-muted-foreground'>Current rating: {rating}</p>
    </div>
  );
}
