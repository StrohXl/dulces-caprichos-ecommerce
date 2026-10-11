
export default function ContainerWidth({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div>
      <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ${className}`}>{children}</div>
    </div>
  );
}
