import { render, screen } from "@testing-library/react";

import App from "./App";

it("renders headline", () => {
  render(<App />);
  expect(screen.getByText(/React \+ TypeScript Baseline/i)).toBeInTheDocument();
});
