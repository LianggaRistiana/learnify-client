"use server";

export type RegisterResponse = {
  token?: string;
  message?: string;
};

export const registerUser = async ({
  name,
  email,
  password,
  confirmPassword,
}: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<RegisterResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, confirmPassword }),
  });

  if (!res.ok) {
    return { message: "Something went wrong. Please try again." };
  }

  const data = await res.json();

  return {
    token: data.token,
    message: data.message || "Registration successful",
  };
};