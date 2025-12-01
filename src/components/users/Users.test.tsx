import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
// import { rest } from "msw";
import { server } from "../../mocks/server";

describe("Users Component", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("render a list of component", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
