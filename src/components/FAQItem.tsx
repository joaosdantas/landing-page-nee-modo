import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-colors duration-300',
        isOpen
          ? 'border-amber-400/30 bg-white/[0.04]'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">{answer}</p>
        </div>
      </div>
    </div>
  )
}
