import { newE2EPage } from "@stencil/core/testing";

describe("calcite-action-pad", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad></calcite-action-pad>");
    const element = await page.find("calcite-action-pad");
    expect(element).toHaveClass("hydrated");
  });

  it("position defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad></calcite-action-pad>");

    const element = await page.find("calcite-action-pad");
    const positionType = await element.getProperty("positionType");
    const positionElement = await element.getProperty("positionElement");

    await page.waitForChanges();

    const style = element.getAttribute("style");

    expect(positionType).toBeUndefined();
    expect(positionElement).toBeUndefined();
    expect(style).toBeNull();
  });
});
