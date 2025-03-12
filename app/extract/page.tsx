"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PrescriptionUploader() {
  const [images, setImages] = useState<File[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const uploadImages = async () => {
    if (images.length === 0) {
      toast.error("Please select at least one image.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("files", image);
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_FASTAPI_API_URL}/extract_prescriptions/`, // Replace with your API endpoint
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);

      toast.success("Prescription data extracted successfully!");
    } catch (error: any) {
      console.error("Error uploading images:", error);
      toast.error(`Failed to extract data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    if (data.length === 0) {
      toast.error("No data to download.");
      return;
    }

    // Extract headers from the first object in the array
    const headers = Object.keys(data[0]);

    // Convert JSON data to CSV format
    const csvContent =
      headers.join(",") +
      "\n" +
      data
        .map((row) => {
          return headers
            .map((header) => {
              const cellValue = row[header];
              // Escape comma, quotes, and newlines
              let escapedValue = String(cellValue).replace(/"/g, '""'); // Escape double quotes
              if (escapedValue.includes(",") || escapedValue.includes('"') || escapedValue.includes("\n")) {
                  escapedValue = `"${escapedValue}"`; // Enclose in double quotes if needed
              }
              return escapedValue;
            })
            .join(",");
        })
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "extracted_prescriptions.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Prescription Data Extractor</h1>
      <div className="mb-4">
        <Label htmlFor="image-upload" className="mr-2 text-sm font-medium">
          Select Images:
        </Label>
        <Input
          id="image-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="mb-2"
        />
        {images.length > 0 && (
          <p className="text-sm text-gray-500">
            Selected {images.length} image(s)
          </p>
        )}
      </div>
      <Button onClick={uploadImages} disabled={loading} className="mr-2">
        {loading ? "Extracting..." : "Extract Data"}
      </Button>
      <Button onClick={downloadCSV} disabled={data.length === 0}>
        Download CSV
      </Button>

      {data.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <Table>
            <TableCaption>Extracted prescription data.</TableCaption>
            <TableHeader>
              <TableRow>
                {Object.keys(data[0]).map((header) => (
                  <TableHead key={header}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{String(cell)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
