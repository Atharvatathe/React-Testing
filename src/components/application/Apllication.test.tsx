import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("name render correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const newElement2 = screen.getByLabelText("Name");
    expect(newElement2).toBeInTheDocument();

    const nameElementByPlaceholder = screen.getByPlaceholderText("Fullname");
    expect(nameElementByPlaceholder).toBeInTheDocument();

    const nameElement3 = screen.getByDisplayValue("Vishwas");
    expect(nameElement3).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const getByTestIdElement = screen.getByTestId("custom-element");
    expect(getByTestIdElement).toBeInTheDocument();

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
      name: "Job application form",
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
      name: "Section 1",
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });
});
