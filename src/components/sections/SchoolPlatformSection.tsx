import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import EcosystemDiagram from '../demos/EcosystemDiagram'
import Button from '../ui/Button'
import { ArrowRight, Building2, ShieldCheck, Cpu } from 'lucide-react'

export const SchoolPlatformSection: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" id="schools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Institutional Infrastructure"
          title="A smarter learning ecosystem for schools."
          subtitle="Edspire connects students, teachers, parents, and school administrators into one unified, intelligent learning infrastructure with zero IT friction."
        />

        <div className="mt-12">
          <EcosystemDiagram />
        </div>

        <div className="mt-12 text-center">
          <Button href="/schools" size="lg" variant="primary" icon={ArrowRight}>
            Partner with Edspire
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SchoolPlatformSection
