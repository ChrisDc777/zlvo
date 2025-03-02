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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface JournalEntry {
  id: string;
  label: string;
  content: string;
}

const JournalPage = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [viewingEntry, setViewingEntry] = useState<JournalEntry | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load entries from local storage on component mount
    const storedEntries = localStorage.getItem("journalEntries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    // Save entries to local storage whenever the entries state changes
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleLabelChange = (value: string) => {
    setLabel(value);
  };

  const handleSubmit = () => {
    if (content && label) {
      const newEntry: JournalEntry = {
        id: Date.now().toString(), // Generate a unique ID
        label,
        content,
      };
      setEntries([...entries, newEntry]);
      setContent("");
      setLabel("");
      setOpen(false); // Close the modal after submitting
    } else {
      alert("Please fill in both label and content.");
    }
  };

  const handleViewEntry = (entry: JournalEntry) => {
    setViewingEntry(entry);
    setViewModalOpen(true);
  };

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
                htmlFor="label"
                className="block text-sm font-medium text-gray-700"
              >
                Label:
              </label>
              <Select onValueChange={handleLabelChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a label" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="ideas">Ideas</SelectItem>
                  <SelectItem value="goals">Goals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4">
              {isClient && (
                <Textarea
                  id="content"
                  placeholder="Type your journal entry here."
                  value={content}
                  onChange={handleContentChange}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-32 p-2"
                />
              )}
            </div>
          </div>
          <Button onClick={handleSubmit}>Save Entry</Button>
        </DialogContent>
      </Dialog>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Entries:</h2>
        {entries.length === 0 ? (
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
                  <CardTitle>{entry.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{entry.content.substring(0, 50)}...</p> {/* Display a snippet */}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* View Entry Modal */}
      <Dialog open={viewModalOpen} onOpenChange={() => setViewModalOpen(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{viewingEntry?.label}</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {viewingEntry?.content}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JournalPage;
