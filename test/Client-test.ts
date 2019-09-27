import { expect } from "chai";
// @ts-ignore
import * as RingCentral from "ringcentral";
import testConfig from "./config";
import Client from "../src/Client";

let client: Client;
testConfig.then((config) => {
    client = new Client(new RingCentral({ cachePrefix: "rc-client-test" }));
});

describe("client", () => {
    it("covers all", runCoverage);
});

function runCoverage() {
    client.clientInfo();
}
