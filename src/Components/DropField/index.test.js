import { fireEvent, render, screen } from "@testing-library/react";
import DropField from "./index";
import { COLUMN_TYPE } from "../../Utils/constants";

describe("Drop field", () => {
  it("Renders without crashing", () => {
    render(
      <DropField
        label={COLUMN_TYPE.dimension}
        name={COLUMN_TYPE.dimension}
        droppedElements={[]}
        setDroppedElements={[]}
      />
    );

    const elementWithRequiredText = screen.getByText(COLUMN_TYPE.dimension);
    expect(elementWithRequiredText).toBeInTheDocument();
  });

  it("Clears data", () => {
    //state simulation
    var state = { name: "product", function: "dimension" };
    const setState = (value) => {
      state = value;
    };
    render(
      <DropField
        label={COLUMN_TYPE.dimension}
        name={COLUMN_TYPE.dimension}
        droppedElements={state}
        setDroppedElements={setState}
      />
    );

    const elementWithRequiredText = screen.getByText("Clear");
    fireEvent.click(elementWithRequiredText);
    expect(state).toEqual({});
  });
});
