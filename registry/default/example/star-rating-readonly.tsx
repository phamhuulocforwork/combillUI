import StarRating from "@/registry/default/ui/star-rating";

export default function StarRatingReadOnly() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>1 star review:</span>
        <StarRating value={1} readOnly />
      </div>

      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>2.5 star review:</span>
        <StarRating value={2.5} readOnly />
      </div>

      <div className='flex items-center gap-4'>
        <span className='w-32 text-sm font-medium'>5 star review:</span>
        <StarRating value={5} readOnly />
      </div>
    </div>
  );
}
