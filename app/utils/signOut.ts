import cookieCutter from "cookie-cutter";
import { useRouter } from "next/router";

export default function useSignOut() {
  const router = useRouter();

  const signOut = () => {
    // Delete a cookie
    cookieCutter.set("voterAuthToken", "", { expires: new Date(0) });
    router.push("/signin");
  };

  return signOut;
}
