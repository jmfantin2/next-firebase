import { GoogleLogo, HourglassHigh } from "phosphor-react";
import shift from "classnames";

interface GButtonProps {
  click: React.MouseEventHandler;
  loading: boolean;
}

export function GButton(props: GButtonProps) {
  return (
    <button
      onClick={props.click}
      disabled={props.loading}
      className={shift(
        "group bg-white hover:bg-slate-100 text-accent transition-colors text-sm py-2 px-1  rounded-full max-h-12 font-bold uppercase",
        {
          "text-orange-600 hover:text-orange-600 hover:bg-white cursor-default":
            props.loading,
        }
      )}
    >
      <p className="flex flex-row items-center ml-2 mr-3 ">
        {!props.loading ? (
          <GoogleLogo size={24} weight="bold" className="mr-2" />
        ) : (
          <HourglassHigh size={24} weight="bold" className="mr-2" />
        )}
        Entre com Google
      </p>
      {/*consume token for logout*/}
    </button>
  );
}
