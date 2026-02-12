"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

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
import { LoginSchema, TLoginSchema } from "@/lib/schemas/auth";
import FormErrorMessage from "../ui/form-error-message";
import { useAuthMutations } from "@/hooks/useAuth";

export const LoginForm = () => {
  const { loginMutation } = useAuthMutations();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: TLoginSchema) => {
    await loginMutation.mutateAsync(values);
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold mb-2'>Welcome Back</h1>
          <p className='text-muted-foreground'>
            Sign in to access your dashboard
          </p>
        </div>

        <Card>
          <CardHeader className='pb-4'>
            <CardTitle className='text-xl'>Login</CardTitle>
            <CardDescription>
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>
                  Email <span className='text-destructive'>*</span>
                </Label>
                <Input
                  {...form.register("email")}
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  disabled={loginMutation.isPending}
                  className={`w-full ${
                    form.formState.errors.email && "border-destructive"
                  }`}
                />
                {form.formState.errors.email && (
                  <FormErrorMessage
                    message={form.formState.errors.email.message}
                  />
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>
                  Password <span className='text-destructive'>*</span>
                </Label>
                <Input
                  {...form.register("password")}
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  disabled={loginMutation.isPending}
                  className={`w-full ${
                    form.formState.errors.password && "border-destructive"
                  }`}
                />
                {form.formState.errors.password && (
                  <FormErrorMessage
                    message={form.formState.errors.password.message}
                  />
                )}
              </div>
              {loginMutation.error && (
                <div className='p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded'>
                  {loginMutation.error.message === "CredentialsSignin"
                    ? "Invalid email or password"
                    : loginMutation.error.message}
                </div>
              )}
              <Button
                type='submit'
                disabled={loginMutation.isPending}
                className='w-full'
              >
                {loginMutation.isPending ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className='mt-6 pt-6 border-t'>
              <p className='text-sm text-muted-foreground text-center'>
                Don&apos;t have an account?{" "}
                <Link
                  href='/register'
                  className='font-semibold hover:underline'
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
