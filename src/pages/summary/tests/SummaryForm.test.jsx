import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Initial testing", () => {
  let button = Object;
  let checkbox = Object;

  beforeEach(() => {
    render(<SummaryForm />);
    button = screen.getByRole("button", { name: /order/i });
    checkbox = screen.getByRole("checkbox", { name: /i agree/i });
  });
  test("check box is disabled and button is disabled", () => {
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  test("on checking checkbox", () => {
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  test("onHover should open and close popUp", async () => {
    //no popup in starting

    let popup = screen.queryByText(/no icecream will actuall/i);
    expect(popup).not.toBeInTheDocument();

    //Popup appear on hover
    const termAndCondition = screen.getByText(/terms and conditions/i);
    userEvent.hover(termAndCondition);
    popup = screen.queryByText(/no icecream will actuall/i);
    expect(popup).toBeInTheDocument();

    //Popup goes after unHover
    userEvent.unhover(termAndCondition);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no icecream will actuall/i)
    );
  });
});
