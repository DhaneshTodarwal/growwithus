# Security & Compliance

OWASP Top 10 (mitigations)
- Broken Access Control: role-based auth; least privilege
- Cryptographic Failures: HTTPS, TLS, bcrypt/argon2 for secrets
- Injection: parameterized queries; sanitize inputs
- Insecure Design: threat modeling; secure defaults
- Security Misconfiguration: CSP, HSTS, no-sniff, X-Frame-Options
- Vulnerable Components: dependency updates, SCA
- Identification & Auth Failures: MFA; secure sessions
- Integrity Failures: signed builds, provenance
- Logging & Monitoring Failures: structured logs, Sentry
- SSRF: validate outbound URLs; allow-list

GDPR/PDPA
- Consent banners for cookies; lawful basis documented
- Data minimization; retention policies
- Transparent privacy policy; DSAR process
- Security & breach notification (<72h GDPR); PDPA do-not-call
- Appoint DPO if needed; cross-border transfer notices
