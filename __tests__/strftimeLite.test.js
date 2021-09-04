const { strftimeLite } = require("../strftimeLite.js");

describe("strftimeLite", () => {
    it("正常系", () => {
        const date = new Date(1630755852353);
        const result = strftimeLite("%Y-%m-%dT%H:%M:%S.%L+09:00", date);
        expect(result).toEqual("2021-09-04T20:44:12.353+09:00");
    });
});
