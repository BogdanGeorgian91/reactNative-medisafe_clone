import React, { createContext, useReducer } from "react";
import { medReducer } from "./reducer";

export const MedContext = createContext({
  allMeds: [],
  allUnits: [],
  allFrequencies: [],
  allHowOftenPerDayValues: [],
  availableMeds: [],
  med: { id: "", value: "", IsValid: false },
  strength: { value: "", IsValid: false },
  numOfPills: { value: "", IsValid: false },
  units: { value: "", IsValid: false },
  dates: { value: "" },
  days: { value: "", IsValid: false },
  frequency: { id: "", value: "" },
  timesAday: { id: "" },
  addMed: () => {},
  checkMed: () => {},
  addStrength: () => {},
  addUnit: () => {},
});

const initialState = {
  allMeds: [
    { id: new Date().toString() + Math.random().toString(), name: "Abilify" },
    { id: new Date().toString() + Math.random().toString(), name: "Adderall" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Amlodipine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Amoxicillin",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Ativan" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Azithromycin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Atorvastatin",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Bunavail" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Buprenorphine",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Brilinta" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Benzonatate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Cephalexin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Ciprofloxacin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Citalopram",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Clindamycin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Clonazepam",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Cyclobenzaprine",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Cymbalta" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Doxycycline",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Dupixent" },
    { id: new Date().toString() + Math.random().toString(), name: "Entresto" },
    { id: new Date().toString() + Math.random().toString(), name: "Entyvio" },
    { id: new Date().toString() + Math.random().toString(), name: "Farxiga" },
    { id: new Date().toString() + Math.random().toString(), name: "Fentanyl" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Fentanyl Patch",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Gabapentin",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Gilenya" },
    { id: new Date().toString() + Math.random().toString(), name: "Humira" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Hydrochlorothiazide",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Ibuprofen" },
    { id: new Date().toString() + Math.random().toString(), name: "Imbruvica" },
    { id: new Date().toString() + Math.random().toString(), name: "Invokana" },
    { id: new Date().toString() + Math.random().toString(), name: "Januvia" },
    { id: new Date().toString() + Math.random().toString(), name: "Jardiance" },
    { id: new Date().toString() + Math.random().toString(), name: "Kevzara" },
    { id: new Date().toString() + Math.random().toString(), name: "Lexapro" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Lisinopril",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Lofexidine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Loratadine",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Lyrica" },
    { id: new Date().toString() + Math.random().toString(), name: "Melatonin" },
    { id: new Date().toString() + Math.random().toString(), name: "Metformin" },
    { id: new Date().toString() + Math.random().toString(), name: "Methadone" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Methotrexate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Metoprolol",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Naloxone" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Naltrexone",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Naproxen" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Omeprazole",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Onpattro" },
    { id: new Date().toString() + Math.random().toString(), name: "Otezla" },
    { id: new Date().toString() + Math.random().toString(), name: "Ozempic" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Pantoprazole",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Prednisone",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Probuphine",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Rybelsus" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Secukinumab",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Sublocade" },
    { id: new Date().toString() + Math.random().toString(), name: "Tramadol" },
    { id: new Date().toString() + Math.random().toString(), name: "Trazodone" },
    { id: new Date().toString() + Math.random().toString(), name: "Viagra" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Wellbutrin",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Xanax" },
    { id: new Date().toString() + Math.random().toString(), name: "Zubsolv" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Ginkgo Biloba",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Ginseng" },
    { id: new Date().toString() + Math.random().toString(), name: "Glycerin" },
    { id: new Date().toString() + Math.random().toString(), name: "Glucagon" },
    { id: new Date().toString() + Math.random().toString(), name: "Glucotrol" },
    { id: new Date().toString() + Math.random().toString(), name: "Eligard" },
    { id: new Date().toString() + Math.random().toString(), name: "Estradiol" },
    { id: new Date().toString() + Math.random().toString(), name: "Eulexin" },
    { id: new Date().toString() + Math.random().toString(), name: "Rifaximin" },
    { id: new Date().toString() + Math.random().toString(), name: "Ritalin" },
    { id: new Date().toString() + Math.random().toString(), name: "Robaxin" },
    { id: new Date().toString() + Math.random().toString(), name: "Restasis" },
    { id: new Date().toString() + Math.random().toString(), name: "Renflexis" },
    { id: new Date().toString() + Math.random().toString(), name: "Qulipta" },
    { id: new Date().toString() + Math.random().toString(), name: "Ultram" },
    { id: new Date().toString() + Math.random().toString(), name: "Unasyn" },
    { id: new Date().toString() + Math.random().toString(), name: "Quelicin" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Upadacitinib",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Uribel" },
    { id: new Date().toString() + Math.random().toString(), name: "Vitamin D" },
    { id: new Date().toString() + Math.random().toString(), name: "Vitamin E" },
    { id: new Date().toString() + Math.random().toString(), name: "Voltaren" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Vitamin B12",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Vitamin B6",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Vistaril" },
    { id: new Date().toString() + Math.random().toString(), name: "Warfarin" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Wellbaby DHA",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Wytensin" },
    { id: new Date().toString() + Math.random().toString(), name: "Zoloft" },
    { id: new Date().toString() + Math.random().toString(), name: "Zostavax" },
    { id: new Date().toString() + Math.random().toString(), name: "Zyloprim" },
    { id: new Date().toString() + Math.random().toString(), name: "Yescarta" },
    { id: new Date().toString() + Math.random().toString(), name: "Yuvafem" },
    { id: new Date().toString() + Math.random().toString(), name: "Yondelis" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Sulfasalazine",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Tamoxifen" },
  ],

  allConditions: [
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Abdominal aortic aneurysm",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Acute cholecystitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Acute pancreatitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Allergic rhinitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Angioedema",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Anxiety",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Atopic eczema",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Bipolar disorder",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Bowel polyps",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Bronchiectasis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Bronchitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Chickenpox",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Chronic fatigue syndrome",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Cirrhosis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Conjunctivitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Cystitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Crohn's disease",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Coeliac disease",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Dental abscess",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Depression",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Dermatitis herpetiformis",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Dystonia" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Endometriosis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Ewing sarcoma",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Fibromyalgia",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Fungal nail infection",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Ganglion cyst",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Gastroenteritis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Gonorrhoea",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Hepatitis B",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Hepatitis C",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "High cholesterol",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Hyperhidrosis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Indigestion",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Insomnia" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Kidney infection",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Kidney stones",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Laryngitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Lyme disease",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Liver disease",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Measles" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Meningitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Mesothelioma",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Middle ear infection (otitis media)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Non-Hodgkin lymphoma",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Nosebleed" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Neuroblastoma",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Obsessive compulsive disorder (OCD)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Osteoporosis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Otitis externa",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Overactive thyroid",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Obstructive sleep apnoea",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Panic disorder",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Pelvic inflammatory disease",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Personality disorder",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Pneumonia" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Restless legs syndrome",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Rheumatoid arthritis",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Scoliosis" },
    { id: new Date().toString() + Math.random().toString(), name: "Sinusitis" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Tuberculosis (TB)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Ulcerative colitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Varicose eczema",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Warts and verrucas",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Urinary incontinence",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Trigeminal neuralgia",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Toothache" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Stomach ulcer",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Spleen problems and spleen removal",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Scarlet fever",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Rosacea" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Reactive arthritis",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Psoriasis" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Peripheral neuropathy",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Sunburn" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Tonsillitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Urticaria (hives)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Vitamin B12 or folate deficiency anaemia",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Yellow fever",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Urinary tract infection (UTI)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Type 1 diabetes",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Type 2 diabetes",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Transient ischaemic attack (TIA)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Sore throat",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Slapped cheek syndrome",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Septic shock",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Scabies",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Raynaud's phenomenon",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Lactose intolerance",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Iron deficiency anaemia",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Gastro-oesophageal reflux disease (GORD)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Flatulence",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Dizziness (Lightheadedness)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Diverticular disease and diverticulitis",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Deafblindness",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Coronavirus (COVID-19)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Earwax build-up",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Post-traumatic stress disorder (PTSD)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Whooping cough",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Ringworm and other fungal infections",
    },
  ],

  allUnits: [
    { id: 1, name: "g" },
    { id: 2, name: "IU" },
    { id: 3, name: "mcg" },
    { id: 4, name: "mcg/hr" },
    { id: 5, name: "mcg/ml" },
    { id: 6, name: "mEq" },
    { id: 7, name: "mg" },
    { id: 8, name: "mg/cm2" },
    { id: 9, name: "mg/g" },
    { id: 10, name: "mg/ml" },
    { id: 11, name: "ml" },
    { id: 12, name: "%" },
  ],
  allFrequencies: [
    { id: 1, value: "As Needed" },
    { id: 2, value: "Every Day" },
    { id: 3, value: "Specific Days" },
    { id: 4, value: "Days Interval" },
  ],
  allHowOftenEveryDaysValues: [
    { id: 1, value: 2 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
    { id: 5, value: 6 },
    { id: 6, value: 7 },
    { id: 7, value: 8 },
    { id: 8, value: 9 },
    { id: 9, value: 10 },
    { id: 10, value: 11 },
    { id: 11, value: 12 },
    { id: 12, value: 13 },
    { id: 13, value: 14 },
    { id: 14, value: 15 },
    { id: 15, value: 16 },
    { id: 16, value: 17 },
    { id: 17, value: 18 },
    { id: 18, value: 19 },
    { id: 19, value: 20 },
    { id: 20, value: 21 },
    { id: 21, value: 22 },
    { id: 22, value: 23 },
    { id: 23, value: 24 },
    { id: 24, value: 25 },
    { id: 25, value: 26 },
    { id: 26, value: 27 },
    { id: 27, value: 28 },
    { id: 28, value: 29 },
    { id: 29, value: 30 },
    { id: 30, value: 31 },
    { id: 31, value: 32 },
    { id: 32, value: 33 },
    { id: 33, value: 34 },
    { id: 34, value: 35 },
    { id: 35, value: 36 },
    { id: 36, value: 37 },
    { id: 37, value: 38 },
    { id: 38, value: 39 },
    { id: 39, value: 40 },
    { id: 40, value: 41 },
    { id: 41, value: 42 },
    { id: 42, value: 43 },
    { id: 43, value: 44 },
    { id: 44, value: 45 },
    { id: 45, value: 46 },
    { id: 46, value: 47 },
    { id: 47, value: 48 },
    { id: 48, value: 49 },
    { id: 49, value: 50 },
    { id: 50, value: 51 },
    { id: 51, value: 52 },
    { id: 52, value: 53 },
    { id: 53, value: 54 },
    { id: 54, value: 55 },
    { id: 55, value: 56 },
    { id: 56, value: 57 },
    { id: 57, value: 58 },
    { id: 58, value: 59 },
    { id: 59, value: 60 },
    { id: 60, value: 61 },
    { id: 61, value: 62 },
    { id: 62, value: 63 },
    { id: 63, value: 64 },
    { id: 64, value: 65 },
    { id: 65, value: 66 },
    { id: 66, value: 67 },
    { id: 67, value: 68 },
    { id: 68, value: 69 },
    { id: 69, value: 70 },
    { id: 70, value: 71 },
    { id: 71, value: 72 },
    { id: 72, value: 73 },
    { id: 73, value: 74 },
    { id: 74, value: 75 },
    { id: 75, value: 76 },
    { id: 76, value: 77 },
    { id: 77, value: 78 },
    { id: 78, value: 79 },
    { id: 79, value: 80 },
    { id: 80, value: 81 },
    { id: 81, value: 82 },
    { id: 82, value: 83 },
    { id: 83, value: 84 },
    { id: 84, value: 85 },
    { id: 85, value: 86 },
    { id: 86, value: 87 },
    { id: 87, value: 88 },
    { id: 88, value: 89 },
    { id: 89, value: 90 },
    { id: 90, value: 91 },
    { id: 91, value: 92 },
    { id: 92, value: 93 },
    { id: 93, value: 94 },
    { id: 94, value: 95 },
    { id: 95, value: 96 },
    { id: 96, value: 97 },
    { id: 97, value: 98 },
    { id: 98, value: 99 },
    { id: 99, value: 101 },
    { id: 100, value: 102 },
  ],

  dates: [
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "",
    },
  ],
  allDays: [
    { id: 1, name: "Sunday", selected: true },
    { id: 2, name: "Monday", selected: true },
    { id: 3, name: "Tuesday", selected: true },
    { id: 4, name: "Wednesday", selected: true },
    { id: 5, name: "Thursday", selected: true },
    { id: 6, name: "Friday", selected: true },
    { id: 7, name: "Saturday", selected: true },
  ],
  allHowOftenPerDayValues: [
    { id: 1, value: "Once a Day" },
    { id: 2, value: "Twice a Day" },
    { id: 3, value: "3 times a Day" },
    { id: 4, value: "4 times a Day" },
    { id: 5, value: "5 times a Day" },
    { id: 6, value: "6 times a Day" },
    { id: 7, value: "7 times a Day" },
    { id: 8, value: "8 times a Day" },
    { id: 9, value: "9 times a Day" },
    { id: 10, value: "10 times a Day" },
    { id: 11, value: "11 times a Day" },
    { id: 12, value: "12 times a Day" },
    { id: 24, value: "24 times a Day" },
  ],
  allHours: ["08:00"],

  hour: "",
  availableMeds: [],
  med: { id: "", value: "", IsValid: false },
  availableConditions: [],
  condition: { id: "", value: "", IsValid: false },
  strength: { value: "", IsValid: false },
  numOfPills: { value: "", IsValid: false },
  units: { id: "", IsValid: false },
  frequency: { id: "2", value: "Every Day" },
  howOften: { id: 1, value: 2 },
  timesAday: { id: 1, value: "Once a Day" },
  everyDays: { id: 1, value: 2 },
  dates: { id: "", value: "" },
};

const MedContextProvider = ({ children }) => {
  const [medState, dispatch] = useReducer(medReducer, initialState);

  const addMed = (medValue) => {
    dispatch({
      type: "ADD_MED",
      payload: medValue,
    });
  };

  const checkMed = () => {
    dispatch({ type: "CHECK_MED" });
  };

  const chooseMed = (id, value) => {
    dispatch({ type: "CHOOSE_MED", payload: { id: id, value: value } });
  };

  const addCondition = (condition) => {
    dispatch({
      type: "ADD_CONDITION",
      payload: condition,
    });
  };

  const checkCondition = () => {
    dispatch({ type: "CHECK_CONDITION" });
  };

  const chooseCondition = (id, value) => {
    dispatch({ type: "CHOOSE_CONDITION", payload: { id: id, value: value } });
  };

  const addStrength = (strengthValue) => {
    dispatch({ type: "ADD_STRENGTH", payload: strengthValue });
  };

  const addNumOfPills = (numPills) => {
    dispatch({ type: "ADD_NUM_PILLS", payload: numPills });
  };

  const addUnit = (id) => {
    dispatch({ type: "ADD_UNITS", payload: id });
  };

  const addFrequency = (id) => {
    dispatch({ type: "ADD_FREQUENCY", payload: { id: id } });
  };

  const addHowOftenPerDay = (id) => {
    dispatch({ type: "HOW_OFTEN", payload: { id: id } });
  };

  const addHowOftenEveryDays = (id) => {
    dispatch({ type: "EVERY_DAYS", payload: { id: id } });
  };

  const addDaysList = (id) => {
    dispatch({ type: "ADD_DAYS", payload: { id: id } });
  };

  const addStartDate = (id) => {
    dispatch({ type: "RETURN_START_DATE", payload: id });
  };

  const addEndDate = (id) => {
    dispatch({ type: "RETURN_END_DATE", payload: id });
  };

  const chooseHour = (id) => {
    dispatch({ type: "CHOOSE_HOUR", payload: { id: id } });
  };

  const addHour = (hourRemoved, hourSelected) => {
    dispatch({
      type: "ADD_HOUR",
      payload: { values: [hourRemoved, hourSelected] },
    });
  };

  return (
    <MedContext.Provider
      value={{
        ...medState,
        addMed: addMed,
        checkMed: checkMed,
        chooseMed: chooseMed,
        addCondition: addCondition,
        checkCondition: checkCondition,
        chooseCondition: chooseCondition,
        addStrength: addStrength,
        addUnit: addUnit,
        addFrequency: addFrequency,
        addHowOftenPerDay: addHowOftenPerDay,
        addHowOftenEveryDays: addHowOftenEveryDays,
        addDaysList: addDaysList,
        addStartDate: addStartDate,
        addEndDate: addEndDate,
        addNumOfPills: addNumOfPills,
        chooseHour: chooseHour,
        addHour: addHour,
      }}
    >
      {children}
    </MedContext.Provider>
  );
};

export default MedContextProvider;
