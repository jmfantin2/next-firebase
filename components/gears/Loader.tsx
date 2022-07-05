interface LoaderProps {
  show: boolean;
}

export function Loader({ show }: LoaderProps) {
  return show ? <div className="gl_loader"></div> : null;
}
