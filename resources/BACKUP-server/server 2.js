import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Allow front end requests
app.use(express.json());

// GET comments here
app.get("/api/comments/:postId", async (req, res) => {
  const { postId } = req.params;
  const apiUrl = `${process.env.COMMENTS_API_URL}?post=${postId}&orderby=date`;

  try {
    const apiKey = process.env.API_KEY;
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const comments = await response.json();
    res.json(comments);
  } catch (error) {
    console.error("Server error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// POST comment here
app.post("/api/comments", async (req, res) => {
  const apiUrl = process.env.COMMENTS_API_URL;
  const apiKey = process.env.API_KEY;
  const commentData = req.body;

  if (!commentData || !commentData.post || !commentData.content) {
    return res.status(400).json({ error: "Invalid comment data" });
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
      },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error submitting comment:", response.status, errorText);
      return res
        .status(response.status)
        .json({ error: "Failed to submit comment" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server error in submitting comment:", error);
    res.status(500).json({ error: "Server error in submitting comment" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
