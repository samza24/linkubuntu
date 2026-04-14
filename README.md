# LinkUbuntu — Emergency Contact Web

> *"Umuntu ngumuntu ngabantu"* — A person is a person through other people.

## The problem

Every day in South Africa, people die or are critically injured in road accidents. Their families wait **hours, days — sometimes years** — to find out what happened.

- **3,186 unclaimed bodies** in South African state mortuaries (August 2024)
- **7 years** — the longest recorded case of a family searching for a loved one who had already been buried as a pauper
- Families visit mortuary after mortuary with no answers
- Bodies are buried as paupers because no one could identify them in time

The current system fails because it relies on **one phone number** on an ID. When that number is outdated or disconnected, the family connection is completely broken.

## The solution — LinkUbuntu

LinkUbuntu is an emergency contact web that connects South Africans to their families using fingerprint identification and a living network of personal connections.

### How it works

1. **Citizens build their contact web** — Download the app and link your spouse, parents, siblings, friends. They confirm the link. You can update contacts anytime your network changes.

2. **Responder scans at the scene** — A SAPS officer, paramedic, or traffic officer uses the responder app to scan the fingerprint of an accident victim. The system matches against the Home Affairs fingerprint database.

3. **Family is notified instantly** — LinkUbuntu finds the person's contact web and sends SMS and push notifications in priority order. Family knows within **minutes — not days**.

## Demo

**Live demo:** [https://yourusername.github.io/linkubuntu](https://yourusername.github.io/linkubuntu)

### Test accounts (citizen app)
| ID Number | Name | Blood type |
|-----------|------|-----------|
| 9001015800082 | Thabo Nkosi | O+ |
| 8505120456089 | Zanele Mokoena | A+ |
| 7203084567083 | Siphamandla Zulu | B- |
| 9506144231087 | Amahle van der Berg | AB+ |
| 8812276890081 | Mohamed Cassim | A- |

OTP code for all accounts: **72491**

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | Pure HTML, CSS, JavaScript |
| Database (demo) | Browser localStorage + hardcoded demo data |
| Camera scan | Browser `getUserMedia` API |
| Hosting | GitHub Pages |
| Fonts | Google Fonts — Ubuntu |

## Running locally

No build step needed. Just open `index.html` in a browser, or run a local server:

```bash
git clone https://github.com/yourusername/linkubuntu
cd linkubuntu
python3 -m http.server 8000
# Open http://localhost:8000
```

## File structure

```
linkubuntu/
├── index.html          ← Landing page
├── citizen/
│   └── index.html      ← Citizen app
├── responder/
│   └── index.html      ← Responder app (camera scan)
├── data/
│   └── users.js        ← Demo data
├── css/
│   └── style.css       ← Shared styles
└── README.md
```

## Roadmap — after funding and DHA approval

### Phase 1 (current demo)
- [x] Citizen app — login, profile, contact web management
- [x] Responder app — camera scan simulation, match result, notifications
- [x] Demo data with realistic SA citizens

### Phase 2 (with funding)
- [ ] Real backend — Node.js + PostgreSQL
- [ ] SMS notifications via Twilio or Africa's Talking
- [ ] Real OTP via SMS
- [ ] Identy.io fingerprint SDK integration (NIST-validated camera scanning)

### Phase 3 (with DHA approval)
- [ ] Home Affairs fingerprint database integration
- [ ] POPIA-compliant data sharing agreement
- [ ] Government tablet app with 500 DPI hardware scanner
- [ ] National rollout via SAPS, EMS, hospitals

## Why LinkUbuntu?

**Ubuntu** is a South African philosophy meaning *"I am because we are."* LinkUbuntu is built on this principle — that we are responsible for each other, and that no South African should die unidentified or have their family left searching for years.

The government has already acknowledged the need for exactly this system. In August 2024, parliament's portfolio committee on health stated:

> *"The department acknowledged the need for a robust tracking system for unidentified bodies and committed to exploring a centralised database accessible to families and relevant authorities."*

LinkUbuntu is that system.

## Legal and privacy

- This is a hackathon demo. No real personal data is collected or stored.
- The production system will comply fully with POPIA (Protection of Personal Information Act).
- Citizen biometric data is never stored by LinkUbuntu — fingerprints remain with Home Affairs.
- Every responder scan is logged with employee number, GPS, and timestamp for full accountability.

## Contact

Built for [Hackathon Name] 2025 · South Africa

---

*"I am because we are"*
