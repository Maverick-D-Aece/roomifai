🛠️ Master Prompt Document for GitHub Copilot Agent

Project: Room Interior Designer (MVP)


---

🎯 Meta-Prompt (Always apply this)

You are my coding assistant for building a Room Interior Designer MVP.  
The project will be developed in **6 iterative steps**.

### Your responsibilities in every step:
1. **Understand the step context** from my prompt.
2. **Propose an architecture/design decision** (frameworks, libraries, data flow).
3. **Generate code scaffolding or implementation** in the chosen stack.
4. **Add detailed comments** explaining assumptions, next steps, and where placeholders are.
5. **Maintain consistency** across steps so the project evolves smoothly (don’t reset choices unless explicitly told).
6. **Output must include both code and explanations**.
7. If multiple options exist, explain trade-offs and suggest the most pragmatic one.

### The 6 steps are:
1. Room capture & empty 3D model
2. Natural language design preferences
3. Design suggestions (POV previews)
4. 3D & AR generation with modular units
5. User interaction (approve/reject/change items)
6. Finalization & export (blueprint, 3D, AR files)

I will feed you prompts for each step. Always stay in context of the MVP until all steps are complete.


---

⚙️ Unified Tech Stack (to use across all steps)

Frontend (Web + AR/3D):

React (TypeScript) for UI and state management

Three.js for 3D rendering

React-Three-Fiber for React + Three.js integration

Zustand for lightweight state management (unit approval/rejection tracking)

Expo + ARKit (iOS) / ARCore (Android) for AR preview (stubbed in MVP)


Backend (APIs & Processing):

Node.js (Express, TypeScript) as main backend

PostgreSQL for storing user history, preferences, and room data

Python microservice (FastAPI) for NLP + image processing:

OpenCV → room measurement estimation from 360° photo

spaCy / HuggingFace → parsing natural language preferences



3D/AR File Handling:

glTF and USDZ as primary export formats

jsPDF or AutoCAD API (if available) for blueprint/PDF generation


Storage:

S3-compatible storage (e.g., MinIO or AWS S3) for storing design files, previews, and exports


Authentication & Deployment (optional for MVP):

Auth0 / Firebase Auth for user sessions (optional MVP add-on)

Docker for containerization of Node.js + Python services



---

🚀 Step-Specific Prompts with Frameworks

---

Step 1 — Room Capture & Empty 3D Model

Step 1: User captures a **360° shot of their room from the doorway**.

**Implement:**
- Python FastAPI microservice with OpenCV → extract approximate dimensions
- Store measurements in Postgres
- React + Three.js frontend → render empty 3D wireframe

Deliverable: Pipeline = 360° photo → measurements → 3D wireframe in React.


---

Step 2 — Natural Language Design Preferences

Step 2: Add ability for user to describe design preferences in natural language.

**Implement:**
- FastAPI NLP service using spaCy / HuggingFace → parse style
- Store normalized preferences in Postgres
- React frontend form for free-text input

Deliverable: Free text → parsed design preference object.


---

Step 3 — Design Suggestions (POV Previews)

Step 3: Generate 3 static POV previews.

**Implement:**
- React-Three-Fiber to render 3D previews from doorway POV
- Postgres query: preferences + region + past choices → select design stubs
- Mock image assets for MVP (replace with Stable Diffusion later if needed)

Deliverable: Preview component showing 3 designs + alternatives.


---

Step 4 — 3D & AR Generation with Modular Units

Step 4: After user selection, generate 3D + AR models.

**Implement:**
- Each modular unit = React-Three-Fiber component with metadata
- Grouping logic (lighting, cushions, plants, etc.) stored in Postgres
- Export pipeline to glTF + USDZ

Deliverable: Modular design rendering + AR-ready files.


---

Step 5 — User Interaction (Approve/Reject/Change Items)

Step 5: Interactive approval system.

**Implement:**
- React UI → approve/reject/change per unit or group
- Zustand state store for unit approval states
- Logic: “Reject” removes unit from scene (React-Three-Fiber)

Deliverable: Interactive 3D inspection + approval workflow.


---

Step 6 — Finalization & Export

Step 6: Finalize and export.

**Implement:**
- Export pipeline (React-Three-Fiber) → multiple views (top, side, doorway POV)
- jsPDF → blueprint export
- glTF / USDZ → 3D + AR
- Store in S3-compatible storage for user download

Deliverable: Downloadable bundle with all exports.


---