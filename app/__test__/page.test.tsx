import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Main from "../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Main />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
