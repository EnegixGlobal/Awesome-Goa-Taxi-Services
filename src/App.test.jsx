import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App.jsx";

describe("App layout", () => {
  test("renders hero slider title", async () => {
    render(<App />);
    const heroTitle = await screen.findByText(/Taxi Company/i);
    expect(heroTitle).toBeInTheDocument();
  });
});
