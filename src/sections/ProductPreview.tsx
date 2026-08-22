import DashboardMockup from '../components/DashboardMockup'
import SectionHeading from '../components/SectionHeading'

export default function ProductPreview() {
  return (
    <section id="preview" className="relative overflow-hidden border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-navy-700/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produto"
          title="Um painel pensado para a rotina do gestor."
          description="Métricas, processos e status da operação — organizados em uma interface clara e objetiva."
        />

        <div className="mt-16">
          <DashboardMockup />
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Representação ilustrativa da interface do Nee MODO.
        </p>
      </div>
    </section>
  )
}
