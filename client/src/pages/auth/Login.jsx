import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import useEcomStore from "@/store/ecom-store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const actionLogin = useEcomStore((state) => state.actionLogin);
  
  const navigate = useNavigate()

  
  // ---------- Handlers ----------
  const handleOnChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await actionLogin(form);
      const role = res.data.payload.role

      roleRedirect(role)
      toast.success('Welcome back!')

    } catch (error) {

      const errMsg = error.response?.data?.message;
      toast.error(errMsg);

    }
  };
  
  // redirect by role
  const roleRedirect = (role) => {
    if(role === 'admin') {
      navigate('/admin')
    } else {
      navigate('/user')
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <form onSubmit={handleSubmit}>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-center font-bold text-2xl">
                Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
              <CardDescription className="text-center py-3">
                Don't have an account?
                <Link
                  to={"/register"}
                  className="ml-auto pl-2 inline-block text-sm font-bold underline-offset-4 hover:underline"
                >
                  Sign Up
                </Link>
              </CardDescription>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
export default Login;
