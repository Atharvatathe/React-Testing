import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText("Hello John");
    expect(textElement).toBeInTheDocument();
  });
});
