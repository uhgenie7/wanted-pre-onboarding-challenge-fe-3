export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='ko'>
      <head>
        <title>Hello Next13!</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
