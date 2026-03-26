/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { Routes, Route } from "react-router-dom";
import { SplitLayout, ContentPanel, ImagePanel } from "./components";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<SplitLayout left={<ContentPanel />} right={<ImagePanel />} />}
      />
    </Routes>
  );
}
