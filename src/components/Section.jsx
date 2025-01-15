export default function Section({children,id,title,subtitle}) {
  return (
    <section id={id} className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-3 font-bold text-3xl text-center">{title}</div>
      <div className="mb-4 text-center">{subtitle}</div>
      {children}
    </section>
  )
}