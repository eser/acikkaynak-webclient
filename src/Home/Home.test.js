import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders hello world", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello, world!/i);
  expect(linkElement).toBeInTheDocument();
});
