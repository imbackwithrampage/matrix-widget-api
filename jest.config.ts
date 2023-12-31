/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { env } from "process";

import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/test/**/*-test.[jt]s?(x)"],
    collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,tsx}"],
    coverageReporters: ["text-summary", "lcov"],
    testResultsProcessor: "@casualbot/jest-sonar-reporter",
};

// if we're running under GHA, enable the GHA reporter
if (env["GITHUB_ACTIONS"] !== undefined) {
    config.reporters = [["github-actions", { silent: false }], "summary"];
}

export default config;
