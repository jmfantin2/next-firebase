interface LoaderProps {
  show: boolean;
}

export function Loader({ show }: LoaderProps) {
  return show ? <div className="tw_loader"></div> : null;
}
