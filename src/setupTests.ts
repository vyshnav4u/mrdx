// src/setupTests.ts
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
// Or, if using @testing-library/jest-dom v6+, you might just need:
// import '@testing-library/jest-dom/vitest';


// Extends Vitest's expect with Jest DOM matchers
expect.extend(matchers);

// Runs a cleanup after each test case (e.g., unmounts React components)
afterEach(() => {
  cleanup();
});