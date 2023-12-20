export default function ProjectsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="p-0">{children}</section>;
}
