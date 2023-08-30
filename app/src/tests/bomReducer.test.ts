import { setProperty } from "../state/bom/bomActions";
import { bomReducer } from "../state/bom/bomReducer";

describe("When using setProperty", () => {
  it("should set a top level property", () => {
    const bom = {};
    const action = setProperty({ salesLead: "Mr Sales Lead" });

    const result = bomReducer(bom, action);

    const expected = { salesLead: "Mr Sales Lead" };

    expect(result).toEqual(expected);
  });

  it("should update a top level property", () => {
    const bom = { salesLead: "Mr Sales Lead" };
    const action = setProperty({ salesLead: "New Sales Lead" });

    const result = bomReducer(bom, action);

    const expected = { salesLead: "New Sales Lead" };

    expect(result).toEqual(expected);
  });
});
