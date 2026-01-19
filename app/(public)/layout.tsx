// Public Layout - serves as passthrough
// Header/Footer are rendered by [lang]/layout.tsx for language-specific pages
// This layout exists to group public pages together

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
