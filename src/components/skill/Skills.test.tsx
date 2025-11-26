import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  test("render correctly", () => {
    const skills = ["HTML", "CSS", "JavaScript"];
    render(<Skills skills={skills} />);
    const listItemElements = screen.getByRole("list");
    expect(listItemElements).toBeInTheDocument();
  });

  test("render of list items", () => {
    const skills = ["HTML", "CSS", "JavaScript"];
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });
});
