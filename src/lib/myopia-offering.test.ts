import { describe, expect, it } from "bun:test";
import { childServices, contactLenses, myopiaClinic, spectacleLenses } from "./myopia-offering";

describe("Requested myopia offering", () => {
  it("includes the three spectacle manufacturers and their four named lenses", () => {
    expect(spectacleLenses.map(({ manufacturer, model }) => [manufacturer, model])).toEqual([
      ["Essilor", "Stellest"], ["Essilor", "Myopilux Plus"], ["ZEISS", "MyoCare"], ["Hoya", "MiYOSMART"],
    ]);
  });
  it("includes all three contact manufacturers and the requested products", () => {
    expect(contactLenses.map(({ manufacturer, model }) => [manufacturer, model])).toEqual([
      ["Cooper Vision", "MiSight"], ["Seed", "SEED 1 DAY Pure EDOF"], ["OKVision", "Prima Bio Bi-focal"],
    ]);
  });
  it("includes the child doctor and Swiss Lenstar LS 900 biometry", () => {
    expect(childServices.map(({ name }) => name)).toEqual(["Приём детского врача", "Биометрия Lenstar LS 900"]);
    expect(childServices[1].origin).toBe("Швейцария");
  });
  it("uses the user's sole St Petersburg clinic address", () => {
    expect(myopiaClinic.address).toBe("Санкт-Петербург, ул. Кирочная, 17");
  });
});