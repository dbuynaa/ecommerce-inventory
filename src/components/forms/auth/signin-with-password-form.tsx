"use client";
import * as React from "react"
import { useRouter } from "next/navigation"
import { signInWithPassword } from "@/actions/auth"
import {
  signInWithPasswordSchema,
  type SignInWithPasswordFormInput,
} from "@/validations/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { DEFAULT_SIGNIN_REDIRECT } from "@/data/constants"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { PasswordInput } from "@/components/password-input"

import type { JSX } from "react";

export function SignInWithPasswordForm(): JSX.Element {
  const { toast } = useToast()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<SignInWithPasswordFormInput>({
    resolver: zodResolver(signInWithPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(formData: SignInWithPasswordFormInput) {
    startTransition(async () => {
      try {
        const message = await signInWithPassword({
          email: formData.email,
          password: formData.password,
        })

        switch (message) {
          case "not-registered":
            toast({
              title: "First things first",
              description:
                "Please make sure you are signed up before signing in",
            })
            break
          case "incorrect-provider":
            toast({
              title: "Email already in use with another provider",
              description: "Perhaps you signed up with a different method?",
            })
            break
          case "unverified-email":
            toast({
              title: "First things first",
              description: "Please verify your email address before signing in",
            })
            break
          case "invalid-credentials":
            toast({
              title: "Invalid email or Password",
              description: "Double-check your credentials and try again",
              variant: "destructive",
            })
            break
          case "success":
            toast({
              title: "Success!",
              description: "You are now signed in",
            })
            break
          default:
            toast({
              title: "Error signing in with password",
              description: "Please try again",
              variant: "destructive",
            })
        }

        router.push(DEFAULT_SIGNIN_REDIRECT)
      } catch (error) {
        console.error(error)
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="johnsmith@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              <span>Signing in...</span>
            </>
          ) : (
            <span>Sign in</span>
          )}
          <span className="sr-only">Sign in with email and password</span>
        </Button>
      </form>
    </Form>
  )
}
