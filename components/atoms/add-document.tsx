import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import { FileText, Plus, Upload, X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function AddDocument() {
    const [file, setFile] = useState<File | null>(null)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0])
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
            "application/msword": [".doc"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
            "text/plain": [".txt"],
        },
        multiple: false,
    })

    const removeFile = () => {
        setFile(null)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-full h-40 p-4 bg-sidebar overflow-hidden rounded-lg shadow-md cursor-pointer border hover:border-primary transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full bg-secondary w-10 h-10 flex items-center justify-center">
                        <Plus />
                    </div>
                    <p className="text-muted-foreground text-sm">Add Documents</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Document</DialogTitle>
                    <DialogDescription>Upload your document (PDF, DOCX, or TXT)</DialogDescription>
                </DialogHeader>

                {file ? (
                    <div className="flex items-center justify-between mt-4 p-4 border rounded-lg bg-muted">
                        <div className="flex items-center gap-3">
                            <FileText className="text-primary" />
                            <div>
                                <p className="text-sm font-medium">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    {(file.size / 1024).toFixed(2)} KB
                                </p>
                            </div>
                        </div>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={removeFile}
                            className="text-destructive hover:bg-destructive/10"
                        >
                            <X />
                        </Button>
                    </div>
                ) : (
                    <div
                        {...getRootProps()}
                        className="mt-4 border border-dashed border-muted rounded-lg p-6 text-center cursor-pointer hover:border-primary transition"
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p className="text-sm">Drop the file here...</p>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Drag & drop a PDF, DOCX, or TXT file here, or click to select
                            </p>
                        )}
                    </div>
                )}
                {
                    file &&
                        <Button><Upload /> Upload</Button>
                }
            </DialogContent>
        </Dialog>
    )
}
