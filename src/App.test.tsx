// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  // You can add more tests here
  it("It says hi", () => {
    render(<App />);
    const divElement = screen.getByTestId("demo");
    expect(divElement).toBeInTheDocument();
  });
});
