import SingletonRouter from "next/router";

export function redirect(to: string) {
  SingletonRouter.push(to);
}
