import { currentAdmin } from "@/api/auth";
import useEcomStore from "@/store/ecom-store";
import { useState, useEffect } from "react";
import LoadingToRedirect from "./loadingToRedirect";

const ProtectRouteAdmin = ({ element }) => {
  const [ ok, setOk ] = useState(false)
  const user = useEcomStore((state) => state.user)
  const token = useEcomStore((state) => state.token)

  useEffect(() => {
    if(user && token) {
      currentAdmin(token)
      .then(() => setOk(true))
      .catch(() => setOk(false))
    }
  }, [])
  return ok ? element : <LoadingToRedirect />
}
export default ProtectRouteAdmin