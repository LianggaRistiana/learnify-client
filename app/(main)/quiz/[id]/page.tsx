'use client'

import DocumentSkeleton from "@/components/atoms/document-skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { reqDocumentQnaDummy } from "@/actions/get-quiz-service";
import Question from "@/components/atoms/question";
import QuizRoom from "@/components/organisms/quiz-room";

export default function Quiz() {
    const params = useParams();
    const id = params?.id as string;

    const [documentQuiz, setDocumentQuiz] = useState<DocumentQNA>();
    const [loading, setLoading] = useState(true);

    const fetchQuiz = async () => {
        try {
            const res = await reqDocumentQnaDummy(id);
            setDocumentQuiz(res);
        } catch (err) {
            console.error("Gagal fetch dokumen", err);
            toast.error("Gagal mendapatkan dokumen");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchQuiz();
        }
    }, [id]);

    if (loading) return <div>
        <DocumentSkeleton />
        <DocumentSkeleton />
        <DocumentSkeleton />
        <DocumentSkeleton />
    </div>
        ;

    if (!document) return <div>Dokumen tidak ditemukan.</div>;

    return (
        <div className="w-full relative">
            {
                documentQuiz &&
                <QuizRoom quiz={documentQuiz} />
            }
        </div>
    );
}
