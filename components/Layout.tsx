import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="px-5 max-w-3xl mx-auto">{children}</main>
    </>
  );
}
