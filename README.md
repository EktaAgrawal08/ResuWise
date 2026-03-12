# ResuWise — AI Resume & Job Description Analyzer 🚀

ResuWise is a **full-stack AI-powered web application** that analyzes how well a resume matches a job description. It helps job seekers identify missing skills, improve ATS compatibility, and optimize resumes for specific roles using **TF-IDF vectorization and cosine similarity algorithms**.

---

## 📌 Overview

ResuWise intelligently compares a **candidate’s resume with a job description** and provides actionable insights such as:

* 📊 **Match Percentage** – Overall compatibility score between resume and job description
* 🤖 **ATS Score** – Measures resume optimization for Applicant Tracking Systems
* 🧠 **Skill Extraction** – Automatically extracts technical skills from resume and JD
* 📉 **Gap Analysis** – Identifies missing skills required for the role
* ⚡ **AI-Driven Matching** – Uses TF-IDF and cosine similarity for accurate comparison

This tool allows candidates to **evaluate their resumes before applying for jobs**.

---

## ✨ Features

### 🎨 Frontend (React + Tailwind CSS)

* Modern responsive user interface
* Two-panel input for Resume and Job Description
* Interactive results dashboard
* Progress bars and visual indicators
* Card-based layout with smooth UI interactions
* Fully responsive design for mobile and desktop

---

### ⚙️ Backend (Node.js + Express)

* RESTful API architecture
* Custom TF-IDF vectorization implementation
* Cosine similarity calculation
* Intelligent keyword extraction
* Robust error handling
* CORS enabled for frontend communication

---

### 🧠 AI Logic

ResuWise uses lightweight NLP techniques to analyze text.

**TF-IDF Vectorization**

Converts textual data into numerical vectors based on the importance of terms.

**Cosine Similarity**

Measures similarity between resume and job description vectors.

**Keyword Extraction**

Detects relevant technologies including:

* Programming Languages
* Frameworks
* Databases
* Cloud Platforms
* Development Tools

**ATS Score**

Calculates keyword density to estimate how well the resume performs in ATS systems.

---

## 📂 Project Structure

ResuWise/
│
├── backend
│   ├── controllers
│   │   └── resumeAnalyzer.js
│   ├── routes
│   │   └── analyze.js
│   ├── utils
│   │   ├── tfidf.js
│   │   └── cosineSimilarity.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── AnalysisPage.jsx
│   │   │   └── ResultsSection.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── README.md
└── TECH_STACK.md

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* CORS

### AI / NLP Logic

* TF-IDF Vectorization
* Cosine Similarity
* Keyword Extraction

---

## 📦 Installation & Setup

### Prerequisites

Install the following:

* Node.js (v16 or higher)
* npm
* Git

---

## Backend Setup

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Create `.env` file:

PORT=5000
NODE_ENV=development

Start backend server:

npm start

Backend runs at:

http://localhost:5000

---

## Frontend Setup

Open a new terminal and run:

cd frontend

Install dependencies:

npm install

Start development server:

npm run dev

Open in browser:

http://localhost:3000

---

## 🚀 How to Use

1. Start both backend and frontend servers
2. Open the application in the browser
3. Paste your **resume text**
4. Paste the **job description**
5. Click **Analyze Resume**
6. View analysis results including:

* Resume Match Percentage
* ATS Optimization Score
* Matched Skills
* Required Skills
* Missing Skills

---

## 📊 API Reference

### POST /api/analyze

Analyzes resume and job description.

Request:

{
"resume": "Resume text",
"jobDescription": "Job description text"
}

Response:

{
"success": true,
"data": {
"matchPercentage": 85,
"atsScore": 78,
"missingKeywords": ["docker","aws"],
"extractedResumeSkills": ["javascript","react"],
"extractedJDSkills": ["javascript","react","docker","aws"]
}
}

---

### GET /health

Health check endpoint.

Response:

{
"status": "Server running"
}

---

## 🧮 Algorithm Explanation

### TF-IDF

TF-IDF measures importance of words in a document.

TF-IDF = Term Frequency × Inverse Document Frequency

---

### Cosine Similarity

Measures similarity between two text vectors.

similarity = (A · B) / (|A| × |B|)

Where:

1.0 → perfect match
0.5 → moderate match
0.0 → no similarity

---

## 💡 Tips for Better Results

* Include **relevant technologies mentioned in the job description**
* Use **accurate technical terminology**
* Add **projects and tools used**
* Keep resumes **updated with latest skills**

---

## 🎓 Academic Relevance

This project demonstrates concepts from:

* Natural Language Processing
* Machine Learning Fundamentals
* Full Stack Development
* Information Retrieval

Suitable for **final year computer science projects and ML demonstrations**.

---

## 🚀 Future Enhancements

* Advanced NLP semantic analysis
* Machine learning based skill matching
* Resume improvement suggestions
* Job recommendation system
* Resume templates
* User authentication
* Export results as PDF

---

## 📜 License

MIT License — Free for educational purposes.

---

## 👩‍💻 Author

Developed as a **Final Year Computer Science Project**.

⭐ If you found this project useful, feel free to **star the repository**.
