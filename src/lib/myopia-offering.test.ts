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
describe("Catalog prices from optika100.com", () => {
  it("shows the lowest catalog price per lens", () => {
    deepStrictEqual([...spectacleLenses, ...contactLenses].map((l) => l.price), [
      "от 20 600 ₽ за пару", "от 18 700 ₽ за пару", "от 16 800 ₽ за пару", "от 19 900 ₽ за пару",
      "от 3 200 ₽ (30 шт.)", "от 2 400 ₽ (32 шт.)", "от 4 900 ₽ (6 шт.)",
    ]);
  });
});
import { myopiaProductPages } from "./myopia-offering.ts";
describe("Separate product pages", () => {
  it("exist for the six requested lenses", () => {
    deepStrictEqual(myopiaProductPages.map((p) => p.slug), ["myopilux-plus", "myocare", "miyosmart", "misight", "seed-1-day-pure-edof", "prima-bio-bi-focal"]);
  });
});
