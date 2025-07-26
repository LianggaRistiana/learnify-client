export type LoginResponse = {
  token?: string;
  message?: string;
  user?: {
    name: string;
    email: string;
  };
};


export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return { message: "Something went wrong. Please try again." };
  }

  const data = await res.json();

  return {
    token: data.token,
    message: data.message || "Login Success",
    user: data.user,
  };
};
