import { useState } from "react";
import { generateNotes } from "../../services/notesService";
import {
  BookOpen,
  Sparkles,
  Copy,
  Download,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";

const Notes = () => {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Enter a topic");
      return;
    }

    try {
      setLoading(true);

      const data = await generateNotes(topic);

      setNotes(data);
    } catch (error) {
      console.error(error);
      alert("Unable to generate notes");
    } finally {
      setLoading(false);
    }
  };

  const copyNotes = () => {
    navigator.clipboard.writeText(notes);
    alert("Notes copied");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const lines = doc.splitTextToSize(notes, 180);

    doc.text(lines, 10, 10);

    doc.save("zynvora-notes.pdf");
   };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">
            <BookOpen
              size={34}
              className="text-blue-600"
            />

            <div>
              <h1 className="text-3xl font-bold">
                AI Notes Generator
              </h1>

              <p className="text-gray-500">
                Generate smart study notes using Gemini AI
              </p>
            </div>
          </div>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter topic..."
              value={topic}
              onChange={(e) =>
                setTopic(e.target.value)
              }
              className="
              flex-1
              border
              rounded-xl
              px-5
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              rounded-xl
              flex
              items-center
              gap-2
              "
            >
              <Sparkles size={18} />

              {loading
                ? "Generating..."
                : "Generate"}
            </button>

          </div>

          {notes && (

            <>

              <div className="mt-8 flex justify-end gap-3">

                <button
                    onClick={copyNotes}
                    className="
                    bg-green-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    flex
                    items-center
                    gap-2
                    "
                >
                    <Copy size={18} />
                    Copy Notes
                </button>

                <button
                    onClick={downloadPDF}
                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    flex
                    items-center
                    gap-2
                    "
                >
                    <Download size={18} />
                    Download PDF
                </button>

                </div>

              <div
                className="
                mt-4
                bg-gray-50
                rounded-xl
                border
                p-6
                prose
                max-w-none
                "
                >
                <ReactMarkdown>
                    {notes}
                </ReactMarkdown>
                </div>

            </>

          )}

        </div>

      </div>

    </div>
  );
};

export default Notes;