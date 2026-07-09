interface ArchitectureDiagramProps {
  steps: { label: string; isMain?: boolean }[];
  gradient?: string;
}

export default function ArchitectureDiagram({ steps, gradient = 'from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]' }: ArchitectureDiagramProps) {
  return (
    <div className="arch-flow">
      {steps.map((step, i) => (
        <span key={step.label}>
          <span
            className={`arch-step ${step.isMain ? `bg-gradient-to-br ${gradient} text-white border-transparent` : ''}`}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && <span className="arch-arrow">→</span>}
        </span>
      ))}
    </div>
  );
}
