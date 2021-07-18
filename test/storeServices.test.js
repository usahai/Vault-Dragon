const { expect } = require("chai");
const sinon = require("sinon");
const storeServices = require("../services/storeServices");
const storeDAO = require("../dao/storeDao");

const inputFakeData = [{ value: "value" }];
const outputFakeData = { value: "value" };

describe("Services", () => {
	describe("storeServices", () => {
		it("fetchKeyValuePair - positive", async () => {
			sinon.stub(storeDAO, "fetchKeyValuePairDAO").returns(inputFakeData);

			let resp = await storeServices.fetchKeyValuePair("key1");

			expect(JSON.stringify(resp)).to.equal(JSON.stringify(outputFakeData));
		});
	});
});
