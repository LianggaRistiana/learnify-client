"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Loader, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchGoogleDialog = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResultLoading, setSearchResultLoading] = React.useState(false);
  const [webResults, setWebResults] = React.useState([]);
  const [extractWebLoading, setExtractWebLoading] = React.useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    setSearchResultLoading(true);
    const response = await fetch("http://localhost:8000/search-google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "mercusuarjayajayajaya",
      },
      body: JSON.stringify({ query: searchTerm }),
    });

    const data = await response.json();
    if (data.results) {
      setWebResults(data.results);
    }
    setSearchResultLoading(false);
  };

  const handleSubmitWebpage = async (url: string) => {
    setExtractWebLoading(true);
    const response = await fetch("http://localhost:3000/document/upload/url", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      router.push("document/" + data.document.id);
      toast.success(data.message || "Webpage content added successfully!");
    } else {
      toast.error("Failed to submit webpage content.");
    }
    setExtractWebLoading(false);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="w-full h-40 p-4 bg-sidebar overflow-hidden rounded-lg shadow-md cursor-pointer border hover:border-primary transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-2">
            <div className="rounded-full bg-secondary w-10 h-10 flex items-center justify-center">
              <Search />
            </div>
            <p className="text-muted-foreground text-sm">
              Search Documents from Internet
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Search on Internet</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search your topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button onClick={handleSearch} disabled={searchResultLoading}>
                {searchResultLoading ? "Searching..." : "Search"}
              </Button>
            </div>
            <div className="mt-2">
              <p className="mb-3 font-semibold">Search Result</p>
              {extractWebLoading && (
                <div className="flex justify-center gap-4">
                  <Loader className="animate-spin h-6 w-6 text-primary" />
                  <p>Extracting web result...</p>
                </div>
              )}
              {webResults.length > 0 && !extractWebLoading && (
                <div className="space-y-2">
                  {webResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-2 border rounded-md cursor-pointer"
                      onClick={() => handleSubmitWebpage(result.link)}
                    >
                      <p className="font-semibold">{result.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {result.snippet}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default SearchGoogleDialog;
