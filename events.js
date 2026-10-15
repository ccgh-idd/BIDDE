// B-IDDE Events Data
// Simply edit this file to add, remove, or update events
// The page will automatically load and organise them by date
// Meetings default to the second Tuesday of the month. If a meeting falls on
// another day, add a "date" field, e.g. "date": "2026-11-17"
// Titles are in sentence case: capitalise only the first word, names and acronyms

const EVENTS_DATA = {
  "events": [

      {
      "month": "November",
      "year": 2026,
      "training": {
        "title": "Scientific communication through visualization",
        "instructors": "Stefan Flasche",
        "link": "https://stefanflasche.github.io/2026_10-BIDDE-Vis/"
      },
      "seminar": [
        {
          "topic": "Future requirements and opportunities for universal and frequent testing, motivated by the German experience with the (imperfect) integration of lab- and community-based testing into an exposure notification app infrastructure",
          "speaker": "Justus Benzler"
        },
        {
          "topic": "Hitchhiker bias can distort inference of pathogen severity and pathogen–pathogen interactions from symptom-based surveillance: a modeling study",
          "speaker": "Kiran Kumari"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
      {
      "month": "December",
      "year": 2026,
      "training": {
        "title": "IDD career pathways and opportunities",
        "instructors": "Berit Lange, Finlay Campbell, Frank Sandmann, Stefan Scholz, Zoe Ingram & Stefanie Althoff"
      },
      "seminar": [
        {
          "topic": "Bundibugyo in the DRC: current status, local context and lessons learned (for modellers)",
          "speaker": "Hugo Soubrier"
        },
        {
          "topic": "Airport-level exportation risk of Ebola virus disease, 2026",
          "speaker": "Sten de Schrijver"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
      {
      "month": "January",
      "year": 2027,
      "training": {
        "title": "Using AI skills for ID modelling / collaborative coding in GitHub / Stan",
        "instructors": "tbc"
      },
      "seminar": [
        {
          "topic": "tbc",
          "speaker": "tbc"
        },
        {
          "topic": "tbc",
          "speaker": "tbc"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "July",
      "year": 2026,
      "training": {
        "title": "A whirlwind tour of MCMC samplers and diagnostics",
        "instructors": "David Hodgson",
        "link": "https://bidde.ccgh-idd.de/bidde_sampler_talk.pdf"
      },
      "seminar": [
        {
          "topic": "Effectiveness and efficiency of pre-season administration of long-acting monoclonal antibodies for infants born to RSV-vaccinated mothers: a modelling study",
          "speaker": "Julia Mayer"
        },
        {
          "topic": "Towards real-time evidence synthesis for public health emergencies: early application to the current Ebola outbreak",
          "speaker": "Steve Kerr"
        }
      ],
      "place": "WHO Pandemic Hub"
    },

    {
      "month": "September",
      "year": 2026,
      "training": {
        "title": "Reproducible, AI-assisted modeling and data science projects",
        "instructors": "Andreas Handel",
        "link": "https://www.andreashandel.com/presentations/2026-09-BIDDE-tutorial/"
      },
      "seminar": [
        {
          "topic": "Model-based evaluation of influenza vaccination outcomes",
          "speaker": "Andreas Handel",
          "link": "https://www.andreashandel.com/presentations/2026-09-BIDDE-talk/"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "October",
      "year": 2026,
      "training": {
        "title": "A tutorial on epidemic modeling with the R package pomp",
        "instructors": "Matthieu Domenech de Cellès & MPI team",
        "link": "https://github.com/cakussmaul/pompWorkshop"
      },
      "seminar": [
        {
          "topic": "U-shaped effects of humidity and the impact of misspecified weather–transmission relationships in epidemic models",
          "speaker": "Cana Kussmaul"
        },
        {
          "topic": "The pitfalls of incidence-based time series regression for inferring the effects of weather on infectious diseases",
          "speaker": "Pietro Gemo"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "June",
      "year": 2026,
      "training": {
        "title": "An introduction to health economic analyses in IDD",
        "instructors": "Sebastian Gruhn & Ulrich Reinacher"
      },
      "seminar": [
        {
          "topic": "Development of MONID and GEMS: beginnings and the current state",
          "speaker": "Rafael Mikolajczyk"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "May",
      "year": 2026,
      "training": {
        "title": "Behind the data: a hands-on introduction to what data scientists need to know about infectious disease diagnostics",
        "instructors": "Anna Frühauf & Nadine Olk"
      },
      "seminar": [
        {
          "topic": "Within-patient evolution of ciprofloxacin resistance in Pseudomonas aeruginosa across a large-scale clinical trial",
          "speaker": "Matthew Shepherd"
        },
        {
          "topic": "Leveraging individual mobility data for understanding the dynamics of infectious diseases",
          "speaker": "Vitaly Belik"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "April",
      "year": 2026,
      "training": {
        "title": "A hitchhiker's guide to vibe coding in IDD",
        "instructors": "Billy Quilty",
        "link": "https://github.com/ccgh-idd/hitchhikers_guide_to_vibe_coding_in_idd"
      },
      "seminar": [
        {
          "topic": "Mathematical modeling of optimal booster vaccination strategies for mpox control in Africa",
          "speaker": "David Niyukuri"
        },
        {
          "topic": "Better data, better models: the role of the WHO Digital Adaptation Kit for infectious disease surveillance",
          "speaker": "Opeayo Ogundiran"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "March",
      "year": 2026,
      "training": {
        "title": "Introduction to phylogenetic inference",
        "instructors": "Matej Kriznar",
        "link": "https://github.com/ccgh-idd/Phylogenetics-Workshop"
      },
      "seminar": [
        {
          "topic": "Automating the extraction of line list and contact data from Ebola outbreak narratives using LLMs",
          "speaker": "Billy Quilty"
        },
        {
          "topic": "Behavior change and infection-induced immunity led to the decline of the 2022 mpox outbreak in Berlin",
          "speaker": "Nils Gubela"
        }
      ],
      "place": "WHO Pandemic Hub"
    },
    {
      "month": "February",
      "year": 2026,
      "training": {
        "title": "Introduction to R Shiny",
        "instructors": "Hugo Soubrier",
        "link": "https://github.com/ccgh-idd/shiny-intro"
      },
      "seminar": [
        {
          "topic": "Beyond hype: the real promise of AI in infectious disease",
          "speaker": "Samir Bhatt"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "January",
      "year": 2026,
      "training": {
        "title": "odin2 for model fitting",
        "instructors": "Julia Mayer",
        "link": "https://github.com/ccgh-idd/odin-monty-training"
      },
      "seminar": [
        {
          "topic": "The epidemiology of poliomyelitis outbreaks and how modelling can support prevention and response",
          "speaker": "Kathleen O'Reilly"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "December",
      "year": 2025,
      "training": {
        "title": "Introduction to MCMC",
        "instructors": "Ayaka Monoi",
        "link": "https://github.com/ccgh-idd/bayesintro"
      },
      "seminar": [
        {
          "topic": "The role of modelling in the Danish COVID-19 response",
          "speaker": "Lone Simonsen"
        }
      ],
      "place": "WHO Pandemic Hub"
    },
    {
      "month": "November",
      "year": 2025,
      "training": {
        "title": "Epiverse for outbreak analyses",
        "instructors": "Carmen Tamayo Cuartero",
        "link": "https://epiverse-trace.github.io/learn.html"
      },
      "seminar": [
        {
          "topic": "Nowcast modelling of severe acute respiratory infections",
          "speaker": "Felix Günther"
        },
        {
          "topic": "Collecting data on health-related quality of life (HRQoL) and social mixing using contact surveys",
          "speaker": "Francisco Pozo Martin & Mathilde Grimée"
        }
      ],
      "place": "Robert Koch Institute"
    },
    {
      "month": "October",
      "year": 2025,
      "training": {
        "title": "Docker",
        "instructors": "Matej Kriznar"
      },
      "seminar": [
        {
          "topic": "Hybrid ABM-ODE modelling",
          "speaker": "Inan Bostanci"
        },
        {
          "topic": "Estimating the population-level impact of pneumococcal conjugate vaccines",
          "speaker": "Anabelle Wong"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "September",
      "year": 2025,
      "training": null,
      "seminar": [
        {
          "topic": "IgG and correlates of protection for the pneumococcus: a 25th anniversary re-evaluation",
          "speaker": "David Goldblatt"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "July",
      "year": 2025,
      "training": null,
      "seminar": [
        {
          "topic": "Reconstructing in-host kinetics in response to COVID-19 vaccination",
          "speaker": "David Hodgson"
        },
        {
          "topic": "Who infects infants with pertussis? A transfer entropy approach",
          "speaker": "Michael Briga"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "June",
      "year": 2025,
      "training": null,
      "seminar": [
        {
          "topic": "Immune boosting and the perils of interpreting pertussis seroprevalence studies",
          "speaker": "Matthieu Domenech de Cellès"
        }
      ],
      "place": "Max Planck Institute for Infection Biology"
    },
    {
      "month": "April",
      "year": 2025,
      "training": null,
      "seminar": [
        {
          "topic": "Optimal RSV vaccination strategies in Japan",
          "speaker": "Ayaka Monoi"
        },
        {
          "topic": "The epiparameter community and our grEPI project",
          "speaker": "Chloe Rice"
        }
      ],
      "place": "WHO Pandemic Hub"
    },
    {
      "month": "February",
      "year": 2025,
      "training": null,
      "seminar": [
        {
          "topic": "Accessing models via APIs in R or Python, or through specialised LLM interfaces",
          "speaker": "Billy Quilty"
        },
        {
          "topic": "Using GitHub Copilot in RStudio",
          "speaker": "Stefan Flasche"
        },
        {
          "topic": "DeepSeek and a workflow example",
          "speaker": "Kaige Dong"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "December",
      "year": 2024,
      "training": null,
      "seminar": [
        {
          "topic": "Charité on outbreak response",
          "speaker": "Billy Quilty & Hugo Soubrier"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "November",
      "year": 2024,
      "training": null,
      "seminar": [
        {
          "topic": "Malaria modelling needs and ideas",
          "speaker": "Welmoed van Loon"
        },
        {
          "topic": "Arbovirus modelling overview",
          "speaker": "Carlo Fischer & Anna Frühauf"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    },
    {
      "month": "October",
      "year": 2024,
      "training": null,
      "seminar": [
        {
          "topic": "Inaugural meeting to discuss the format"
        }
      ],
      "place": "Charité – Universitätsmedizin Berlin"
    }
  ]
};
