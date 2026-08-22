export default function BrandMark({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-md bg-amber-400 ${className}`}
    >
      <svg viewBox="646 78 160 151" className="h-[62%] w-[62%]" aria-hidden="true">
        <path
          fill="#090C15"
          d="M765.48,188.55v-42.71l-7.97,16.88c-12.65,26.81-50.8,26.81-63.45,0l-7.97-16.88v42.71c0,18.92-15.34,34.26-34.26,34.26h0v-125.73c0-7.2,5.84-13.04,13.04-13.04h30.92c6.22,0,11.58,4.4,12.79,10.5l17.21,55.55,17.21-55.55c1.21-6.1,6.57-10.5,12.79-10.5h30.92c7.2,0,13.04,5.84,13.04,13.04v125.73h0c-18.92,0-34.26-15.34-34.26-34.26Z"
        />
      </svg>
    </span>
  )
}
