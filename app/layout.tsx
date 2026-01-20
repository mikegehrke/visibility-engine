// TEST: Absolut minimales Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: 'white', color: 'black' }}>
        {children}
      </body>
    </html>
  );
}
