import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">LOGO</div>
          </div>
          {typeof siteMetadata.headerTitle === "string" ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </Link>
        <nav>
          <Link href="/">Posts</Link>
        </nav>
      </div>
    </header>
  );
}
