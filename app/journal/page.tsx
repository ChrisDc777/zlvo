"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createJournalEntry, getJournalEntriesByUserId } from "@/lib/actions";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { revalidatePath } from "next/cache";

interface JournalEntry {
  id: number;
  title: string;
  label: string;
  content: string;
  createdAt: Date | null;
  userId: string;
}

const labelOptions = {
  Happy: "lightgreen",
  Sad: "blue",
  Tired: "yellow",
  Anxious: "orange",
  Calm: "purple",
};

const JournalPage = () => {
  // const { user, isLoading } = useKindeBrowserClient();
  // const userId = user?.id;

  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [open, setOpen] = useState(false);
  const [viewingEntry, setViewingEntry] = useState<JournalEntry | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchingEntries, setFetchingEntries] = useState(true);

  // useEffect(() => {
  //   const fetchEntries = async () => {
  //     if (userId) {
  //       setFetchingEntries(true);
  //       try {
  //         const data = await getJournalEntriesByUserId(userId);
  //         setEntries(data);
  //       } catch (error) {
  //         console.error("Failed to fetch entries:", error);
  //       } finally {
  //         setFetchingEntries(false);
  //       }
  //     }
  //   };

  //   if (!isLoading && userId) {
  //     fetchEntries();
  //   }
  // }, [userId, isLoading]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTitle(event.target.value);
  };

  const handleLabelChange = (value: string) => {
    setLabel(value);
  };

  const handleSubmit = async () => {
    if (!content || !label || !title) {
      alert("Please fill in all fields.");
      return;
    }

    // if (!userId) {
    //   alert("You must be logged in to create entries.");
    //   return;
    // }

    setIsSubmitting(true);

    // try {
    //   const result = await createJournalEntry(title, content, label, userId);

    //   if (result.success) {
    //     // Fetch the updated entries instead of optimistic update
    //     const updatedEntries = await getJournalEntriesByUserId(userId);
    //     setEntries(updatedEntries);

    //     // Reset form
    //     setContent("");
    //     setTitle("");
    //     setLabel("");
    //     setOpen(false);
    //   } else {
    //     alert(result.error || "Failed to create entry.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting entry:", error);
    //   alert("An unexpected error occurred.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleViewEntry = (entry: JournalEntry) => {
    setViewingEntry(entry);
    setViewModalOpen(true);
  };

  const getLabelColor = (label: string) => {
    return labelOptions[label as keyof typeof labelOptions] || "gray";
  };

  const labelStyle = (label: string) => {
    const backgroundColor = getLabelColor(label);
    return {
      backgroundColor: backgroundColor,
      color: "black",
      padding: "2px 5px", // Add some padding for better visual appearance
      borderRadius: "10px", // Optional: Add rounded corners
      display: "inline-block", // Important: Makes background fit the text
    };
  };

  // if (isLoading) {
  //   return <div className="container mx-auto py-10">Loading...</div>;
  // }

  // if (!userId) {
  //   return (
  //     <div className="container mx-auto py-10">
  //       Please log in to view your journal.
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">My Journal</h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Entry</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Journal Entry</DialogTitle>
            <DialogDescription>
              Add a new journal entry to track your thoughts.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title:
              </label>
              <Textarea
                id="title"
                placeholder="Type your journal title here."
                value={title}
                onChange={handleTitleChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-8 p-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="label"
                className="block text-sm font-medium text-gray-700"
              >
                Label:
              </label>
              <Select onValueChange={handleLabelChange} value={label}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a label" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(labelOptions).map(([label, color]) => (
                    <SelectItem key={label} value={label}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content:
              </label>
              <Textarea
                id="content"
                placeholder="Type your journal entry here."
                value={content}
                onChange={handleContentChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-32 p-2"
              />
            </div>
          </div>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Entry"}
          </Button>
        </DialogContent>
      </Dialog>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Entries:</h2>
        {fetchingEntries ? (
          <p>Loading entries...</p>
        ) : entries.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {entries.map((entry) => (
              <Card
                key={entry.id}
                className="cursor-pointer"
                onClick={() => handleViewEntry(entry)}
              >
                <CardHeader>
                  <CardTitle>{entry.title}</CardTitle>
                  <CardDescription>
                    <span style={labelStyle(entry.label)}>{entry.label}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{entry.content.substring(0, 50)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{viewingEntry?.title}</DialogTitle>
            <DialogDescription>
              <span style={labelStyle(viewingEntry?.label || "gray")}>
                {viewingEntry?.label}
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogDescription>{viewingEntry?.content}</DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JournalPage;