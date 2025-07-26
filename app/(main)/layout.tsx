import Navbar from "@/components/atoms/navbar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className="pt-20 px-8 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto">

                {children}
            </div>
        </>
    );
}