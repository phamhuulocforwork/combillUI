'use client';

import { Star } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

let nextId = 0;
const generateStarIds = (count: number) =>
  Array.from({ length: count }, () => `star-${nextId++}`);

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  className?: string;
  size?: number;
  maxStars?: number;
  readOnly?: boolean;
  color?: string;
}

const StarIcon = React.memo(
  ({
    size,
    index,
    isInteractive,
    onClick,
    onMouseMove,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
    size: number;
    onClick: (e: React.MouseEvent<SVGElement>) => void;
    onMouseMove: (e: React.MouseEvent<SVGElement>) => void;
    isInteractive: boolean;
  }) => (
    <Star
      key={index}
      size={size}
      fill={style.fill}
      color={style.color}
      onClick={onClick}
      onMouseMove={onMouseMove}
      className={cn(
        'transition-colors duration-200',
        isInteractive && 'cursor-pointer hover:scale-110',
      )}
      style={style}
    />
  ),
);
StarIcon.displayName = 'StarIcon';

const StarRating = ({
  className,
  color = '#e4c616',
  size = 24,
  maxStars = 5,
  onChange,
  readOnly = false,
  value,
}: StarRatingProps) => {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);
  const [starIds] = React.useState(() => generateStarIds(maxStars));

  const handleStarClick = React.useCallback(
    (index: number, event: React.MouseEvent<SVGElement>) => {
      if (readOnly || !onChange) return;
      const newRating = index + 1;
      onChange(newRating);
    },
    [readOnly, onChange],
  );

  const handleStarHover = React.useCallback(
    (index: number, event: React.MouseEvent<SVGElement>) => {
      if (!readOnly) {
        setHoverRating(index + 1);
      }
    },
    [readOnly],
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!readOnly) {
      setHoverRating(null);
    }
  }, [readOnly]);

  const getStarStyle = React.useCallback(
    (index: number) => {
      const ratingToUse =
        !readOnly && hoverRating !== null ? hoverRating : value;

      const difference = ratingToUse - index;

      if (difference <= 0) return { color: 'gray', fill: 'transparent' };
      if (difference >= 1) return { color: color, fill: color };

      return {
        color: color,
        fill: `url(#${starIds[index]})`,
      } as React.CSSProperties;
    },
    [readOnly, hoverRating, value, color, starIds],
  );

  const renderGradientDefs = () => {
    if (!readOnly && hoverRating !== null) return null;

    const partialStarIndex = Math.floor(value);
    const partialFill = (value % 1) * 100;

    if (partialFill > 0) {
      return (
        <linearGradient
          id={starIds[partialStarIndex]}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset={`${partialFill}%`} stopColor={color} />
          <stop offset={`${partialFill}%`} stopColor="transparent" />
        </linearGradient>
      );
    }
    return null;
  };

  const stars = React.useMemo(() => {
    return Array.from({ length: maxStars }).map((_, index) => {
      const style = getStarStyle(index);
      return (
        <StarIcon
          key={index}
          index={index}
          style={style}
          size={size}
          onClick={(e) => handleStarClick(index, e)}
          onMouseMove={(e) => handleStarHover(index, e)}
          isInteractive={!readOnly}
        />
      );
    });
  }, [
    maxStars,
    getStarStyle,
    size,
    handleStarClick,
    handleStarHover,
    readOnly,
  ]);

  return (
    <div
      className={cn('relative flex items-center gap-x-0.5', className)}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>{renderGradientDefs()}</defs>
      </svg>
      {stars}
    </div>
  );
};

export default StarRating;
