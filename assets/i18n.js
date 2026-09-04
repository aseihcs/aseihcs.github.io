const I18N = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.greeting": "Hi there, hallo! 👋",
    "hero.roleList": ["Data Engineer", "Solutions Engineer", "Product Owner"],
    "hero.lede": "I'm a product and data person who has always been a little too curious about how things work behind the scenes. My experience goes from product delivery and software implementation to AI and data engineering.",
    "hero.cta": "Let's connect",

    "about.heading": "About",
    "about.p1": "I have a habit of asking, “Why are we doing it this way?” It has probably caused me more work than necessary, but it has also taken me to some interesting places.",
    "about.p2": "Growing up, math was one of the first things that made me realise I actually enjoy figuring things out. Getting the right answer was important, but I also wanted to understand why it was right. I think that way of thinking stayed with me. In product, for example, getting the right feature is important, but understanding why it is the right feature matters just as much. Otherwise, you might end up building something that was never really needed in the first place.",
    "about.p3": "I started with Computer Science because I wanted to understand how things worked (and maybe because I watched too many crime series where there was always that one guy coding in the background). Then I got curious about product, business and software, and somehow ended up trying all of them. I love talking to people about what they need, figuring out what is actually going wrong and building something that genuinely helps. Sometimes that means writing code. Sometimes it means fixing a process. Sometimes I ask one question and accidentally find five more.",
    "about.p4": "A few years into working, I got curious about data and wanted to learn more, so I went back to university and studied Data Science at Universiteit Leiden. These days, I still very much enjoy being somewhere between people and technology. I love understanding the problem before jumping into the solution, and I care about building things that actually make people's work a little easier.",
    "about.photoSoon": "Photo coming soon",
    "about.readMore": "Read more",
    "about.readLess": "Read less",

    "experience.heading": "Experience",

    "exp.indsponsors.dates": "Jun 2026 –<br>Present",
    "exp.indsponsors.role": "Data & Product Engineer",
    "exp.indsponsors.orgsub": "· Dutch platform connecting job seekers with IND-recognised sponsors",
    "exp.indsponsors.desc": [
      "Built an automated job for IND update monitoring and database diffing that cut manual work from an hour to about two minutes.",
      "Built an automated verification workflow that reduced manual review from 100% of company records to 10–20%.",
      "Currently integrating extraction, enrichment, verification and database updates into a single automated pipeline."
    ],

    "exp.thesis.dates": "Sep 2024 –<br>Jun 2025",
    "exp.thesis.role": "Data Science Intern (Thesis)",
    "exp.thesis.orgsub": "· the Netherlands",
    "exp.thesis.desc": [
      "Built an end-to-end deep learning pipeline with automated preprocessing and quality checks to classify morphologically similar Kirganelia species from 12,000+ digitised herbarium images."
    ],

    "exp.klinikpintar.dates": "Apr 2022 –<br>Oct 2022",
    "exp.klinikpintar.role": "Product Owner",
    "exp.klinikpintar.orgsub": "· Indonesian health-tech, clinic & healthcare operations",
    "exp.klinikpintar.desc": [
      "Built an integrated cashier module across 15 in-house clinics and cut manual transaction entry to zero by linking payments directly to medical and pharmacy records.",
      "Built a financial reporting module that pulled revenue, expense and commission data into one real-time dashboard and replaced manual spreadsheet reconciliation."
    ],

    "exp.dolphins.dates": "Aug 2020 –<br>Jan 2022",
    "exp.dolphins.role": "Technical Consultant (Implementation Engineer / FDE)",
    "exp.dolphins.orgsub": "· Indonesian AI company, chatbot & omnichannel",
    "exp.dolphins.desc": [
      "Built custom dialog flows and FAQ logic per client using 3Dolphins Process Flow and backend scripting.",
      "Built a Python-based recommendation engine that analysed conversation history to deliver personalised product recommendations during chat sessions.",
      "Investigated recurring chatbot failures and integration issues and implemented fixes that reduced repeat escalations."
    ],

    "exp.haruka.dates": "Jan 2017 –<br>Oct 2019",
    "exp.haruka.role": "Product Owner & IT Business Analyst",
    "exp.haruka.orgsub": "· Indonesian ed-tech, learning management systems",
    "exp.haruka.desc": [
      "Progressed from Business Analyst to Product Owner, leading product delivery for the Learning Management and University Management System with 12 developers, 3 QAs and 2 designers.",
      "Reduced manual work for Finance and Operations teams by roughly 70% in payment reconciliation and installment tracking through automated payment processing and balance calculations.",
      "Established a single source of truth for attendance, participation and grading logic across LMS and UMS, resulting in zero reporting discrepancies and related complaints.",
      "Led critical incident triage and resolution with the development team and deployed fixes within a maximum of 1 day."
    ],

    "exp.cimbniaga.dates": "Oct 2016 –<br>Dec 2016",
    "exp.cimbniaga.role": "System Analyst",
    "exp.cimbniaga.orgsub": "· Indonesia's leading public research university",
    "exp.cimbniaga.desc": [
      "Analyzed admission and student information systems, gathered staff feedback, mapped feature flows and designed test cases, and presented recommendations to the Head of IT."
    ],

    "education.heading": "Education",
    "edu.leiden.degree": "MSc Computer Science: Data Science (WO)",
    "edu.leiden.orgsub": "· the Netherlands",
    "edu.leiden.dates": "Sep 2023 – Aug 2025",
    "edu.leiden.detail": "Thesis: Species Classification Using Deep Learning on Kirganelia Herbarium Images",
    "edu.leiden.ta": "Teaching Assistant for Advances in Data Mining and Introduction to Deep Learning.",
    "edu.ui.degree": "Bachelor of Computer Science",
    "edu.ui.orgsub": "· Indonesia",
    "edu.ui.dates": "Sep 2012 – Aug 2016",
    "edu.ui.ta": "Teaching Assistant for Human-Computer Interaction.",

    "work.heading": "Projects",
    "proj.seeall": "See all projects",

    "projects.page.title": "All projects",
    "projects.page.intro": "Everything I'm building or have built, in one place. More is on the way, this list will keep growing.",
    "projects.back": "← Back to home",

    "proj.indsponsors.tag": "Live product",
    "proj.status.soon": "Case study coming soon",
    "proj.indsponsors.desc": "An automated pipeline that keeps a database of IND-recognised visa sponsors accurate, from monitoring the official register to verifying and updating company records with minimal manual review.",
    "proj.visit": "Visit site ↗",

    "proj.thesis.tag": "MSc Thesis",
    "proj.thesis.title": "Species Classification from Herbarium Images",
    "proj.thesis.desc": "A deep learning pipeline built with Naturalis Biodiversity Center to classify morphologically similar Kirganelia species from over 12,000 digitised herbarium specimens.",

    "proj.dsip.tag": "Final project",
    "proj.status.live": "Case study",
    "proj.readcase": "Read case study →",
    "proj.dsip.title": "Human Trafficking Data: A FAIR Knowledge Graph",
    "proj.dsip.desc": "Cleaning and structuring real human trafficking interview data into a FAIR-compliant RDF knowledge graph, using an ontology, AllegroGraph, and SPARQL.",

    "skills.heading": "Skills",
    "skills.data.title": "Data & Analytics",
    "skills.aiml.title": "AI & ML",
    "skills.dev.title": "Backend & Frontend",
    "skills.infra.title": "Deployment & Infra",
    "skills.product.title": "Product & Consulting",
    "skills.product.body": "Roadmapping, stakeholder & customer communication, cross-functional leadership, Agile/Scrum, JIRA, user research, UAT",
    "skills.lang.title": "Languages",
    "skills.lang.body": "Indonesian (native), English (C1), Dutch (A2 → B1, in progress)",

    "contact.heading": "Get in touch",
    "contact.lede": "I'm looking for a permanent role in data engineering or product based in the Netherlands. If any of the above sounds like something you're working on too, I'd like to hear from you!",
    "contact.email": "Email",
    "contact.photoSoon": "Photo coming soon",

    "footer.text": "Designed & built by Chiesa."
  },

  nl: {
    "nav.about": "Over mij",
    "nav.experience": "Ervaring",
    "nav.education": "Opleiding",
    "nav.projects": "Projecten",
    "nav.skills": "Vaardigheden",
    "nav.contact": "Contact",

    "hero.greeting": "Hi there, hallo! 👋",
    "hero.roleList": ["Data Engineer", "Solutions Engineer", "Product Owner"],
    "hero.lede": "Ik heb gewerkt als business analist, product owner, implementation engineer en nu data engineer, en de vraag die me overal volgt blijft hetzelfde: is dit het probleem dat het daadwerkelijk waard is om op te lossen?",
    "hero.cta": "Neem contact op",

    "about.heading": "Over mij",
    "about.p1": "Ik begon met de studie Computer Science in Indonesië, meer nieuwsgierig naar hoe systemen werkten dan gericht op één specifiek soort engineer worden. Die nieuwsgierigheid bracht me zijwaarts richting product en business analyse in plaats van rechtstreeks een ontwikkelteam in.",
    "about.p2": "In de jaren die volgden bewoog ik tussen rollen die allemaal op dezelfde plek zaten: tussen de mensen die iets opgelost wilden hebben en de mensen die het konden bouwen. Ik leidde de productlevering voor een leerplatform dat door duizenden studenten werd gebruikt, herbouwde klinische operaties rond één centrale bron van waarheid, en hielp klanten als implementation engineer chatbots opzetten. Ondertussen bleef ik altijd een beetje coderen, ik liet het nooit helemaal los.",
    "about.p3": "Na een paar jaar begon ik het studentenleven te missen. Ik was hongerig om iets nieuws te leren en dieper op de technische kant in te gaan, dus pakte ik mijn koffers en ging terug naar school voor een MSc in Data Science aan de Universiteit Leiden.",
    "about.p4": "Als er één rode draad door dit alles loopt, is het dat ik oprecht nieuwsgierig ben naar het probleem achter de vraag, niet alleen naar het middel om het op te lossen. Daarom hecht ik niet aan een functietitel: data engineer, implementation engineer, product owner, business analist, zolang ik maar dingen kan blijven bouwen en begrijpen waarom ze ertoe doen.",
    "about.photoSoon": "Foto volgt binnenkort",
    "about.readMore": "Lees meer",
    "about.readLess": "Lees minder",

    "experience.heading": "Ervaring",

    "exp.indsponsors.dates": "Jun 2026 –<br>heden",
    "exp.indsponsors.role": "Data Engineer",
    "exp.indsponsors.orgsub": "· Nederlands platform dat werkzoekenden koppelt aan IND-erkende sponsors",
    "exp.indsponsors.desc": [
      "Bouwde een geautomatiseerde taak voor IND-updatemonitoring en database-diffing die handmatig werk terugbracht van een uur naar ongeveer twee minuten.",
      "Bouwde een geautomatiseerde verificatieworkflow die handmatige controle van 100% van de bedrijfsrecords terugbracht naar 10–20%.",
      "Integreert momenteel extractie, verrijking, verificatie en database-updates in één geautomatiseerde pipeline."
    ],

    "exp.thesis.dates": "Sep 2024 –<br>Jun 2025",
    "exp.thesis.role": "Data Science Intern (Scriptie)",
    "exp.thesis.orgsub": "· Nederland",
    "exp.thesis.desc": [
      "Bouwde een end-to-end deep learning pipeline met geautomatiseerde preprocessing en kwaliteitscontroles om morfologisch vergelijkbare Kirganelia-soorten te classificeren op basis van meer dan 12.000 gedigitaliseerde herbariumbeelden."
    ],

    "exp.klinikpintar.dates": "Apr 2022 –<br>Okt 2022",
    "exp.klinikpintar.role": "Product Owner",
    "exp.klinikpintar.orgsub": "· Indonesische health-tech, klinische en zorgoperaties",
    "exp.klinikpintar.desc": [
      "Bouwde een geïntegreerde kassamodule voor 15 eigen klinieken en bracht handmatige transactie-invoer terug naar nul door betalingen rechtstreeks te koppelen aan medische en apotheekdossiers.",
      "Bouwde een financiële rapportagemodule die omzet-, kosten- en commissiegegevens samenbracht in één realtime dashboard en handmatige spreadsheet-reconciliatie verving."
    ],

    "exp.dolphins.dates": "Aug 2020 –<br>Jan 2022",
    "exp.dolphins.role": "Technisch Consultant (Implementation Engineer / FDE)",
    "exp.dolphins.orgsub": "· Indonesisch AI-bedrijf, chatbot en omnichannel",
    "exp.dolphins.desc": [
      "Bouwde op maat gemaakte dialoogstromen en FAQ-logica per klant met 3Dolphins Process Flow en backend scripting.",
      "Bouwde een op Python gebaseerde aanbevelingsengine die gespreksgeschiedenis analyseerde om gepersonaliseerde productaanbevelingen te geven tijdens chatsessies.",
      "Onderzocht terugkerende chatbotstoringen en integratieproblemen en implementeerde fixes die herhaalde escalaties verminderden."
    ],

    "exp.haruka.dates": "Jan 2017 –<br>Okt 2019",
    "exp.haruka.role": "Product Owner & IT Business Analist",
    "exp.haruka.orgsub": "· Indonesische ed-tech, learning management systemen",
    "exp.haruka.desc": [
      "Groeide van Business Analist naar Product Owner en leidde de productlevering voor het Learning Management en University Management Systeem met 12 developers, 3 QA's en 2 designers.",
      "Verminderde handmatig werk voor Finance en Operations teams met ongeveer 70% in betalingsreconciliatie en termijnbewaking door geautomatiseerde betalingsverwerking en saldoberekeningen.",
      "Creëerde één centrale bron van waarheid voor aanwezigheid, participatie en beoordelingslogica binnen LMS en UMS, met als resultaat nul rapportagediscrepanties en gerelateerde klachten.",
      "Leidde kritieke incident-triage en -oplossing samen met het ontwikkelteam en leverde fixes binnen maximaal 1 dag."
    ],

    "exp.cimbniaga.dates": "Okt 2016 –<br>Dec 2016",
    "exp.cimbniaga.role": "Systeemanalist",
    "exp.cimbniaga.orgsub": "· Toonaangevende openbare onderzoeksuniversiteit van Indonesië",
    "exp.cimbniaga.desc": [
      "Analyseerde toelatings- en studenteninformatiesystemen, verzamelde feedback van medewerkers, bracht functiestromen in kaart en ontwierp testcases, en presenteerde aanbevelingen aan het Hoofd IT."
    ],

    "education.heading": "Opleiding",
    "edu.leiden.degree": "MSc Computer Science: Data Science (WO)",
    "edu.leiden.orgsub": "· Nederland",
    "edu.leiden.dates": "Sep 2023 – Aug 2025",
    "edu.leiden.detail": "GPA: 7,98 · Scriptie: Species Classification Using Deep Learning on Kirganelia Herbarium Images",
    "edu.leiden.ta": "Werkte als Teaching Assistant voor Advances in Data Mining en Introduction to Deep Learning.",
    "edu.ui.degree": "Bachelor Computer Science",
    "edu.ui.orgsub": "· Indonesië",
    "edu.ui.ta": "Werkte als Teaching Assistant voor Human-Computer Interaction.",
    "edu.ui.dates": "Sep 2012 – Aug 2016",

    "work.heading": "Projecten",
    "work.intro": "Drie dingen die ik bouw of heb gebouwd. Uitgebreide case studies volgen, maar dit is voor nu wat elk project is.",
    "proj.seeall": "Bekijk alle projecten",

    "projects.page.title": "Alle projecten",
    "projects.page.intro": "Alles wat ik bouw of heb gebouwd, op een plek. Er komt meer aan, deze lijst blijft groeien.",
    "projects.back": "← Terug naar home",

    "proj.indsponsors.tag": "Live product",
    "proj.status.soon": "Case study volgt binnenkort",
    "proj.indsponsors.desc": "Een geautomatiseerde pipeline die een database van IND-erkende visumsponsors accuraat houdt, van het monitoren van het officiële register tot het verifiëren en bijwerken van bedrijfsrecords met minimale handmatige controle.",
    "proj.visit": "Bezoek website ↗",

    "proj.thesis.tag": "MSc Scriptie",
    "proj.thesis.title": "Soortclassificatie op basis van Herbariumbeelden",
    "proj.thesis.desc": "Een deep learning pipeline gebouwd met Naturalis Biodiversity Center om morfologisch vergelijkbare Kirganelia-soorten te classificeren op basis van meer dan 12.000 gedigitaliseerde herbariumspecimens.",

    "proj.dsip.tag": "Afstudeerproject",
    "proj.status.live": "Case study",
    "proj.readcase": "Lees de case study →",
    "proj.dsip.title": "Mensenhandel Data: Een FAIR Knowledge Graph",
    "proj.dsip.desc": "Echte interviewdata over mensenhandel opschonen en structureren tot een FAIR-compliant RDF knowledge graph, met een ontologie, AllegroGraph en SPARQL.",

    "skills.heading": "Vaardigheden",
    "skills.data.title": "Data & Analytics",
    "skills.aiml.title": "AI & ML",
    "skills.dev.title": "Backend & Frontend",
    "skills.infra.title": "Deployment & Infra",
    "skills.product.title": "Product & Consulting",
    "skills.product.body": "Roadmapping, communicatie met stakeholders & klanten, cross-functioneel leiderschap, Agile/Scrum, JIRA, gebruikersonderzoek, UAT",
    "skills.lang.title": "Talen",
    "skills.lang.body": "Indonesisch (moedertaal), Engels (C1), Nederlands (A2 → B1, bezig)",

    "contact.heading": "Neem contact op",
    "contact.lede": "Ik zoek een vaste rol in data engineering of product, in Den Haag of remote binnen Nederland. Als iets hierboven aansluit bij waar jij aan werkt, hoor ik graag van je.",
    "contact.email": "E-mail",
    "contact.photoSoon": "Foto volgt binnenkort",

    "footer.text": "Ontworpen & gebouwd door Chiesa."
  }
};
