import StarRating from "@/registry/default/ui/star-rating";

export default function StarRatingCustomized() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>Default:</span>
        <StarRating value={4} />
      </div>

      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>Custom color:</span>
        <StarRating value={3.7} color='#FF5733' />
      </div>

      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>Large size:</span>
        <StarRating value={4.2} size={32} />
      </div>

      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>10 stars:</span>
        <StarRating value={7.5} maxStars={10} size={20} />
      </div>
    </div>
  );
}
