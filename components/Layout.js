import NextLink from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <header>
        <NextLink href='/'>
          <a>Home</a>
        </NextLink>
        <NextLink href='/about'>
          <a>About</a>
        </NextLink>
      </header>
      <main>{children}</main>
      <footer>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <NextLink href={router.asPath} locale={locale}>
                <a style={{ textDecoration: "underline" }}>{locale}</a>
              </NextLink>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
