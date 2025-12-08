import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { http } from "msw";
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

  test("render error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return new Response("Internal Server Error", { status: 500 });
      }),
    );
    render(<Users />);
    const errorMessage = await screen.findByText("Error fetching users");
    expect(errorMessage).toBeInTheDocument();
  });
});
