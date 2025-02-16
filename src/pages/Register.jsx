import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isUserLoggedIn } from "../utils/auth";
import { register } from "../api/fetchAuth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { InputPassword } from "@/components/ui/InputPassword";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "../assets/Logo";
import ErrorModal from "../components/ErrorModal"; // Import ErrorModal
import { getErrorMessage } from "../utils/errorHandler";
import { initPrivateAPI } from "../utils/Api";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { se } from "date-fns/locale";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

export default function RegisterForm({ className, ...props }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    // Add validation feedback here
    try {
      const response = await register(data.email, data.password);
      const { token, refreshToken, message } = response;
      console.log("response ", response);
      if (token && refreshToken) {
        await initPrivateAPI(token);

        setEncryptedLocalStorage("refreshToken", refreshToken);
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("onSubmit err ", error);
      setErrorMessage(getErrorMessage(error));
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white min-h-svh md:p-10 dark:bg-gray-900">
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        message={errorMessage}
      />
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <a className="flex flex-col items-center gap-2 font-medium">
                  <div className="flex items-center justify-center p-4 border border-opacity-75 rounded-full bg-secondary dark:bg-white dark:border-white">
                    <Logo className="w-16 h-16 text-lg fill-gray-900 " />
                  </div>
                  <span className="sr-only">CapitalSight</span>
                </a>
                <div className="flex flex-col">
                  <h1 className="mb-0 text-xl font-bold dark:text-white">
                    Welcome to CapitalSight
                  </h1>
                  <h1 className="text-sm italic">
                    Giving you insight into your capital
                  </h1>
                </div>

                <div className="mt-4 text-sm text-center">
                  Already have an account?{" "}
                  <a
                    className="underline underline-offset-4"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...registerForm("email")}
                  />
                  {errors.email && (
                    <ErrorMessage message={errors.email.message} />
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <InputPassword
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...registerForm("password")}
                  />
                  {errors.email && (
                    <ErrorMessage message={errors.password.message} />
                  )}
                </div>
                <Button type="submit" className="w-full" loading={loading}>
                  Sign Up
                </Button>
              </div>
              <div className="relative text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 p-2 font-bold bg-white rounded-lg dark:bg-gray-800 text-muted-foreground">
                  OR
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Continue with Apple
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white dark:bg-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </div>
            </div>
          </form>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
