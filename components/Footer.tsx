import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-1 text-white px-8 border-t border-solid border-[#eaeaea] justify-center min-h-[10vh] items-center">
      <p>Powered by </p>
      <Logo />
    </footer>
  );
}
