interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="text-center mb-16">
    <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gradient mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
  </div>
);

export default SectionHeading;
