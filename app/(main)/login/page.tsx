'use client'

import { loginSchema } from "@/components/schema/login-schema"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { loginUser } from "@/actions/login-service"
import { toast } from "sonner"
import { useState } from "react"
import { Loader2 } from "lucide-react";

export default function Login() {
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const [loading, setLoading] = useState(false);

    async function handleLogin(values: z.infer<typeof loginSchema>) {
        setLoading(true);
        try {
            const res = await loginUser(values);

            if (!res.token) {
                toast.error(res.message || "Login Failed");
                return;
            }

            // Simpan token (misal di localStorage atau cookie)
            localStorage.setItem("token", res.token);

            toast.success(res.message || "Login Failed");
            router.push("/home");
        } catch (err) {
            console.error("Login error:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center mt-24 px-2">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
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
                                            <Input type="password" placeholder="••••••••" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col gap-4">

                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Loading...
                                        </span>
                                    ) : (
                                        "Login"
                                    )}
                                </Button>

                            </div>
                        </form>
                    </Form>
                    <Button variant="outline" className="w-full mt-4" onClick={() => router.push(`/register`)}>
                        Create Account
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
