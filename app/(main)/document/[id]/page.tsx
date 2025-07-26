'use client'

import DocumentSkeleton from "@/components/atoms/document-skeleton";
import { use, useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getDocumentById } from "@/actions/get-document-service";

export default function Document() {
    const params = useParams();
    const id = params?.id as string;

    const router = useRouter();

    const [document, setDocument] = useState<DocumentDetail>();
    const [loading, setLoading] = useState(true);

    const fetchDocument = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Token tidak ditemukan. Silakan login kembali.");
            setLoading(false);
            return;
        }

        try {
            const res = await getDocumentById(Number(id), token);

            if (res.data) {
                setDocument({
                    id: res.data.id,
                    title: res.data.title,
                    date: new Date(res.data.createdAt).toLocaleDateString(),
                    text: res.data.text,
                    summary: res.data.summary,
                });
            }else{
                router.push("/home");
                toast.error(res.message || "Dokumen tidak ditemukan.");
            }
        } catch (error: any) {
            toast.error(error.message || "Terjadi kesalahan saat memuat dokumen.");
            router.push("/home");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchDocument();
        }
    }, [id]);

    if (loading) return <DocumentSkeleton />;

    if (!document) return <div>Dokumen tidak ditemukan.</div>;

    return (
        <div className="w-full relative">
            <h1 className="text-2xl font-bold text-center">{document.title}</h1>
            <p className="text-sm text-gray-500 mb-4 text-right">{document.date}</p>
            <div className="whitespace-pre-line">{document.summary}</div>

            <div className="sticky bottom-0 right-4 left-4 pt-8 pb-4 bg-gradient-to-t from-background to-transparent">
                <div className="flex justify-center">
                    <Button className="px-16">Take Quiz</Button>
                </div>
            </div>
        </div>
    );
}
