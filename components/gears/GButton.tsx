import { GoogleLogo } from "phosphor-react";

interface GButtonProps {
  click: React.MouseEventHandler;
}

export function GButton(props: GButtonProps) {
  return (
    <a
      onClick={props.click}
      href="#"
      className={
        "group bg-white hover:bg-slate-100 text-blue-600 transition-colors text-sm py-2 px-1  rounded-full max-h-12 font-bold uppercase"
      }
    >
      <p className="flex flex-row items-center ml-2 mr-3 group-hover:text-green-500 transition-colors">
        <GoogleLogo size={24} weight="bold" className="mr-2" />
        Entre com Google
      </p>
      {/*consume token for logout*/}
    </a>
  );
}
