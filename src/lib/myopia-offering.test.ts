import { describe, it } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { childServices, contactLenses, myopiaClinic, spectacleLenses } from "./myopia-offering.ts";

describe("Requested myopia offering", () => {
  it("includes the three spectacle manufacturers and their four named lenses", () => {
    deepStrictEqual(spectacleLenses.map(({ manufacturer, model }) => [manufacturer, model]), [
      ["Essilor", "Stellest"], ["Essilor", "Myopilux Plus"], ["ZEISS", "MyoCare"], ["Hoya", "MiYOSMART"],
    ]);
  });
  it("includes all three contact manufacturers and the requested products", () => {
    deepStrictEqual(contactLenses.map(({ manufacturer, model }) => [manufacturer, model]), [
      ["Cooper Vision", "MiSight"], ["Seed", "SEED 1 DAY Pure EDOF"], ["OKVision", "Prima Bio Bi-focal"],
    ]);
  });
  it("includes the child doctor and Swiss Lenstar LS 900 biometry", () => {
    deepStrictEqual(childServices.map(({ name }) => name), ["Приём детского врача", "Биометрия Lenstar LS 900"]);
    strictEqual(childServices[1].origin, "Швейцария");
  });
  it("uses the user's sole St Petersburg clinic address", () => {
    strictEqual(myopiaClinic.address, "Санкт-Петербург, ул. Кирочная, 17");
  });
});