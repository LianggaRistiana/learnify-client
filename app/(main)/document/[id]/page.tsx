'use client'

import DocumentSkeleton from "@/components/atoms/document-skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { reqDocumentDummy } from "@/actions/get-document-service";

export default function Document() {
    const params = useParams();
    const id = params?.id as string;

    const [document, setDocument] = useState<DocumentDetail>();
    const [loading, setLoading] = useState(true);

    const fetchDocument = async () => {
        try {
            const res = await reqDocumentDummy(id);
            setDocument(res);
        } catch (err) {
            console.error("Gagal fetch dokumen", err);
            toast.error("Gagal mendapatkan dokumen");
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
            <div className="whitespace-pre-line">{document.content}</div>

            <div className="sticky bottom-0 right-4 left-4 pt-8 pb-4 bg-gradient-to-t from-background to-transparent">
                <div className="flex justify-center">
                    <Button className="px-16">Take Quiz</Button>
                </div>
            </div>
        </div>
    );
}
