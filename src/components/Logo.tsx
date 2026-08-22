import logoOnDark from '../assets/logo_nee-modo-preto.svg'

export default function Logo({ className = 'h-7 w-auto' }: { className?: string }) {
  return (
    <a href="#top" aria-label="Nee MODO — início" className="inline-flex">
      <img src={logoOnDark} alt="Nee MODO" className={className} />
    </a>
  )
}
