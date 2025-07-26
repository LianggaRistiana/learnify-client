'use client'


import { getAllDocuments } from "@/actions/get-documents-thumbnail-service";
import HeroGreeting from "@/components/atoms/hero-greeting";
import Skeletonthumbnail from "@/components/atoms/thumbnail-skeleton";
import DocumentsThumbnail from "@/components/molecules/documents-thumbnail";
import { useEffect, useState } from "react"
import { toast } from "sonner";

export default function Home() {
    const [documentsThumbnail, setDocumentsThumbnail] = useState<DocumentsThumbnail>();
    const [loading, setLoading] = useState(true);

    const fetchDocuments = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Token tidak ditemukan. Silakan login kembali.");
            setLoading(false);
            return;
        }

        try {
            const res = await getAllDocuments(token);
            if (res.data) {
                setDocumentsThumbnail({
                    documents: res.data
                });
            }

        } catch (err) {
            console.error("Gagal fetch dokumen", err);
            toast.error("Gagal mendapatkan dokumen");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);


    return (
        <div className="h-full">
            <HeroGreeting />
            <p className="w-full mb-4 text-md font-semibold text-primary">
                Documents
            </p>
            {
                loading
                    ? <Skeletonthumbnail />
                    : <DocumentsThumbnail documents={documentsThumbnail?.documents} />
            }
        </div>

    )
}