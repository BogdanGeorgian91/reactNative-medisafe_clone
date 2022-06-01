useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <HeaderButton onPress={() => navigation.navigate("ScheduleScreen")}>
        Next
      </HeaderButton>
    ),
    headerLeft: () => (
      <HeaderButton onPress={() => navigation.goBack()}>Cancel</HeaderButton>
    ),
  });
});


header: {
    width: "100%",
    height: 70,
    paddingTop: 16,
    backgroundColor: "#0047AB",
    alignItems: "center",
    marginBottom: 270,
    justifyContent: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 32,
  },

  <MedsButton
        navigateTo="Appearance"
        iconName="image-outline"
        iconName2="questioncircleo"
        iconSize={24}
        iconColor="black"
      >
        Choose appearance
      </MedsButton>

      // #####################################
      allHours: [
    { id: 1, value: ["08:00"] },
    { id: 2, values: ["08:00", "23:00"] },
    { id: 3, values: ["08:00", "15:30", "23:00"] },
    { id: 4, values: ["08:00", "13:00", "18:00", "23:00"] },
    { id: 5, values: ["08:00", "11:45", "15:30", "19:15", "23:00"] },
    { id: 6, values: ["08:00", "12:00", "16:00", "20:00", "00:00", "4:00"] },
    {
      id: 7,
      values: ["08:00", "11:25", "14:50", "18:15", "21:40", "1:05", "4:30"],
    },
    {
      id: 8,
      values: [
        "08:00",
        "11:00",
        "14:00",
        "17:00",
        "20:00",
        "23:00",
        "2:00",
        "5:00",
      ],
    },
    {
      id: 9,
      values: [
        "08:00",
        "10:40",
        "13:20",
        "16:00",
        "18:40",
        "21:20",
        "00:00",
        "2:40",
        "5:20",
      ],
    },
    {
      id: 10,
      values: [
        "08:00",
        "10:25",
        "12:50",
        "15:10",
        "17:35",
        "20:00",
        "22:25",
        "00:50",
        "3:10",
        "5:35",
      ],
    },
    {
      id: 11,
      values: [
        "08:00",
        "10:10",
        "12:20",
        "14:30",
        "16:40",
        "18:50",
        "21:00",
        "23:10",
        "1:20",
        "3:30",
        "5:40",
      ],
    },
    {
      id: 12,
      values: [
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
        "2:00",
        "4:00",
        "6:00",
      ],
    },
    {
      id: 24,
      values: [
        "08:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
        "1:00",
        "2:00",
        "3:00",
        "4:00",
        "5:00",
        "6:00",
        "7:00",
      ],
    },
  ],

  // ##########################
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