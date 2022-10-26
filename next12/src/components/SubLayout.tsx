import React from 'react';
import Link from 'next/link';

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>SubLayout은 특정 페이지에서만 특정 레이아웃을 쓸 수 있습니다.</p>
      {children}
    </div>
  );
};

export default SubLayout;
