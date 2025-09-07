# Delivery Screen Component

This project implements a **Delivery Info screen** built with **React** and **Tailwind CSS**, based on the provided Figma design specification.  
It contains reusable UI elements such as a **top navigation bar, delivery route status, progress indicator, info card, and driver profile card**.

---

## 🚀 Features

- **Top Bar**
  - Back button (`ArrowLeft` icon)
  - Screen title ("Delivery Info")
  - Favourite button (`Heart` icon)

- **Delivery Route**
  - Placeholder box with `Bike` icon
  - Styled with border highlight

- **Status Card**
  - Time left (`10 minutes left`)
  - Delivery address
  - Progress bars (showing delivery progress)

- **Info Card**
  - Delivery information with `Bike` icon
  - Short description text

- **Driver Card**
  - Driver profile picture
  - Driver name and role
  - Call button (`Phone` icon)

---

## 🛠️ Tech Stack

- **React** (functional component)
- **Tailwind CSS** (for styling)
- **lucide-react** (for icons)

---

## 📂 File Structure

src/
└── components/
└── Delivery.jsx # Main delivery screen component



---

## ⚡ Getting Started

1. Clone the repository or copy the `Delivery.jsx` file into your project.

2. Install dependencies (make sure you have `lucide-react` installed):
   ```bash
   npm install lucide-react
Ensure Tailwind CSS is configured in your project.
Tailwind Setup Guide

Import and use the component:

import Delivery from "./components/Delivery";

function App() {
  return <Delivery />;
}

export default App;
📸 Preview
The UI matches the provided Figma design:

Clean top navigation bar

Delivery progress status with time left

Informational order delivery card

Driver details with a call button

🔮 Future Improvements
Replace placeholder profile image with dynamic driver image

Connect progress bar to live delivery status

Integrate maps for real-time delivery route

📜 License
This project is open-source and available under the MIT License.