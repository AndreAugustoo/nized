import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-4 pt-16">
                <h1>
                    Welcome Back!
                </h1>
            </div>
            <SignIn path="/sign-in"/>
        </div>
    </div>  
  );
}