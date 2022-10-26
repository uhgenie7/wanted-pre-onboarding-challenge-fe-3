/**
 *
 * 동일한 URL 계층 구조를 갖고 있더라도 다른 레이아웃을 만들 수 있음.
 *
 */
export default function ShopLayout({ children }: { children: any }) {
  return (
    <html lang='ko'>
      <head>
        <title>ShopLayout</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
