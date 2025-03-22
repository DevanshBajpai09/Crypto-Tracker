import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { Signup } from "@/utils/supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await Signup(email, password,username);
      toast.success('Singup Successfull')
      navigate("/Component/LoginForm");
      
    } catch (error) {
      toast.error(error.message);
    }
    
  };
  return (
    <>
    <div className="flex flex-col gap-6">
      <Card className="shadow-2xl border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Welcome to <span className="bg-green-600 text-white font-bold">Cypto</span></CardTitle>
          <CardDescription>
            Signup with your Github Account
          </CardDescription>
        
        </CardHeader>
        <CardContent>
          
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button  variant="outline" className="rounded-none outline-1 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Github
                </Button>
                
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <form onSubmit={handleSignup}>

              
              <div className="grid gap-6">
              <div className="grid gap-2">
                  <Label htmlFor="username">User Name</Label>
                  <Input
                    type="username" id="username" name="username" className="rounded-none outline-1" value={username} onChange={(e) => setUsername(e.target.value)} required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email" name="email" id="email" className="rounded-none outline-1" value={email} onChange={(e) => setEmail(e.target.value)} required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input name="password" id="password" className="rounded-none outline-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full border rounded-none shadow-2xl bg-black text-white hover:bg-gray-900 cursor-pointer border-none hover:text-white">
                Sign up
                </Button>
              </div>
              </form>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/Component/LoginForm" className="underline hover:text-blue-600 underline-offset-4">
                  Login
                </a>
              </div>
            </div>
          
        </CardContent>
      </Card>
    </div>
    </>
    
  );
}
