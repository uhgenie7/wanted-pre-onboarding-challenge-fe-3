/**
 *
 * 중첩된 폴더를 사용하여 'page.js'로 경로를 정의함
 * 공개적으로 액세스 가능
 * 파일 내 page.js가 없다면 공개적으로 액세스할 수 없다.
 * pages Directory에서 pages/blog/[slug].js 등으로 동적 라우팅을 했다면,
 * next13에서는 app/blog/[slug]/pages.js 로 동적라우팅을 한다.
 */

export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
