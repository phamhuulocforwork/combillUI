import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      tw="flex items-center justify-center bg-transparent text-[24px] leading-8 text-white"
      style={{
        width: 32,
        height: 32,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 18H5a3 3 0 0 1-3-3v-1M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></path>
        <path d="m7 21 3-3-3-3"></path>
        <rect width="8" height="8" x="14" y="14" rx="2"></rect>
        <rect width="8" height="8" x="2" y="2" rx="2"></rect>
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
