---
name: frontend-review
description: Review a small frontend change for correctness, accessibility, responsiveness, and maintainability. Use when the student asks for a pre-commit review or before deployment.
---

# Frontend Review

## Checklist

1. Inspect only the files relevant to the task.
2. Check HTML semantics and obvious accessibility issues (labels, alt text,
   focus order, contrast).
3. Check CSS responsiveness (mobile + desktop) and class naming consistency.
4. Check JavaScript for runtime errors, unused code, and unnecessary
   complexity.
5. Run the project's available lint/format checks.
6. Summarize findings by severity: blocker, warning, suggestion.
7. Do not make changes unless explicitly asked, or the agent workflow
   permits fixes in this step.
