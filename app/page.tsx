// app/page.tsx (Server Component, keeps metadata)

export const metadata = {
  title: 'Portfolio - Aakash Kumar',
};

import PageClient from "./pageClient";

export default function Page() {
  return <PageClient />;
}
