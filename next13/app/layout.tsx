/**
 *
 * app디렉토리 는 루트 레이아웃을 포함해야 함.
 * 루트 레이아웃은 Next.js가 자동으로 생성하지 않기 때문에 <html> 및 <body> 태그를 정의해야 합니다. <head>태그는 선택 사항입니다.
 * 루트 레이아웃은 pages/_app.tsx및 pages/_document.tsx 파일을 대체합니다.
 * js, jsx, 또는 tsx확장자를 레이아웃 파일에 사용할 수 있습니다.
 *
 * app 디렉토리는 디폴트가 서버 컴포넌트. 클라이언트 컴포넌트였던 pages 디렉토리와는 다름
 * 데이터 패치를 app에서 한다.
 *
 *
 */
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
