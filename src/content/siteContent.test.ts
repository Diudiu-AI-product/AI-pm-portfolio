import {
  capabilityBlocks,
  civilXChallenges,
  civilXDecisions,
  civilXLearning,
  civilXMetrics,
  civilXOutcomes,
  civilXRole,
  civilXSolutionSections,
  homepageEvidence,
  homepageMethodology,
  projects
} from "./siteContent";

test("site content exports the structured data required by the pages", () => {
  expect(projects.length).toBeGreaterThanOrEqual(2);
  expect(homepageEvidence.length).toBeGreaterThan(0);
  expect(homepageMethodology.length).toBeGreaterThan(0);
  expect(capabilityBlocks.length).toBeGreaterThan(0);
  expect(civilXChallenges.length).toBeGreaterThan(0);
  expect(civilXDecisions.length).toBeGreaterThan(0);
  expect(civilXSolutionSections.length).toBeGreaterThan(0);
  expect(civilXMetrics.length).toBeGreaterThan(0);
  expect(civilXOutcomes.length).toBeGreaterThan(0);
  expect(civilXRole.length).toBeGreaterThan(0);
  expect(civilXLearning.length).toBeGreaterThan(0);
});
