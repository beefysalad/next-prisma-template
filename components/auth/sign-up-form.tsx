"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { useAuthMutations } from "@/hooks/useAuth";
import { RegisterSchema, TRegisterSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import FormErrorMessage from "../ui/form-error-message";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignUpForm = () => {
  const { registerMutation } = useAuthMutations();
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: TRegisterSchema) => {
    registerMutation.mutateAsync(values);
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold mb-2'>Create Account</h1>
          <p className='text-muted-foreground'>Join us to get started</p>
        </div>

        <Card>
          <CardHeader className='pb-4'>
            <CardTitle className='text-xl'>Sign Up</CardTitle>
            <CardDescription>
              Fill in your details to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>
                  Full Name <span className='text-destructive'>*</span>
                </Label>
                <Input
                  id='name'
                  type='text'
                  placeholder='John Doe'
                  {...form.register("name")}
                  disabled={registerMutation.isPending}
                  className='w-full'
                />
                {form.formState.errors.name && (
                  <FormErrorMessage
                    message={form.formState.errors.name.message}
                  />
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>
                  Email <span className='text-destructive'>*</span>
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  {...form.register("email")}
                  disabled={registerMutation.isPending}
                  className='w-full'
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
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  {...form.register("password")}
                  disabled={registerMutation.isPending}
                  className='w-full'
                />
                {form.formState.errors.password && (
                  <FormErrorMessage
                    message={form.formState.errors.password.message}
                  />
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>
                  Confirm Password <span className='text-destructive'>*</span>
                </Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  placeholder='••••••••'
                  {...form.register("confirmPassword")}
                  disabled={registerMutation.isPending}
                  className='w-full'
                />
                {form.formState.errors.confirmPassword && (
                  <FormErrorMessage
                    message={form.formState.errors.confirmPassword.message}
                  />
                )}
              </div>

              {registerMutation.error && (
                <div className='p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded'>
                  {registerMutation.error.message}
                </div>
              )}

              <Button
                type='submit'
                disabled={registerMutation.isPending}
                className='w-full'
              >
                {registerMutation.isPending
                  ? "Creating account..."
                  : "Create Account"}
              </Button>
            </form>

            <div className='mt-6 pt-6 border-t'>
              <p className='text-sm text-muted-foreground text-center'>
                Already have an account?{" "}
                <Link href='/login' className='font-semibold hover:underline'>
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpForm;
