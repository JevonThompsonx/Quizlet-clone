import { RefObject, SetStateAction } from "react";

declare global {
  interface ContextType {
    email_input: RefObject<HTMLInputElement>;
    loggedIn: boolean;
    setLoggedIn: SetStateAction.boolean;
    loggingIn: boolean;
    setLoggingIn: SetStateAction.boolean;
  }

}

export { }
