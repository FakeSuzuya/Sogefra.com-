import { Ruler, Building, MapPin, DraftingCompass, HardHat, Scan } from "lucide-react"

export const services = [
  {
    slug: "foncier",
    icon: <Ruler className="h-8 w-8 text-blue-800" />,
    title: "Foncier",
    shortDescription: "Délimitation, bornage, division de propriétés et conseil en droit foncier.",
    fullDescription:
      "Notre expertise foncière est au cœur de notre métier. Nous intervenons pour garantir les limites de votre propriété, réaliser des divisions parcellaires dans le respect des règles d'urbanisme et vous conseiller sur tous les aspects du droit foncier.",
    keyPoints: ["Bornage amiable et judiciaire", "Division de propriété", "Servitudes", "Plans parcellaires"],
    relatedReferenceSlug: "division-volumes-serris",
  },
  {
    slug: "urbanisme",
    icon: <Building className="h-8 w-8 text-blue-800" />,
    title: "Urbanisme",
    shortDescription: "Accompagnement pour permis d'aménager, déclarations préalables et études d'impact.",
    fullDescription:
      "Nous vous accompagnons dans toutes vos démarches d'urbanisme, de la conception de votre projet d'aménagement à l'obtention des autorisations administratives. Notre connaissance fine des réglementations locales est un atout majeur pour la réussite de vos projets.",
    keyPoints: ["Permis d'aménager", "Déclaration préalable", "Études de faisabilité", "Règlement de lotissement"],
    relatedReferenceSlug: "amenagement-zac-val-deurope",
  },
  {
    slug: "topographie",
    icon: <MapPin className="h-8 w-8 text-blue-800" />,
    title: "Topographie",
    shortDescription: "Levés topographiques, plans de corps de rue, implantation et récolement.",
    fullDescription:
      "La topographie est la base de tout projet d'aménagement. Grâce à nos équipements de pointe (stations totales, GPS, drones), nous réalisons des levés d'une grande précision pour tous types de terrains et d'ouvrages.",
    keyPoints: ["Levés topographiques", "Plans d'intérieur", "Implantation d'ouvrages", "Suivi de chantier"],
    relatedReferenceSlug: "parc-eolien-haute-marne",
  },
  {
    slug: "copropriete",
    icon: <DraftingCompass className="h-8 w-8 text-blue-800" />,
    title: "Copropriété & Volumes",
    shortDescription: "Établissement ou modification d'états descriptifs de division et calcul de tantièmes.",
    fullDescription:
      "La gestion d'immeubles en copropriété ou en volumes requiert une expertise juridique et technique spécifique. Nous réalisons les documents nécessaires à la création ou à la modification de votre copropriété, en garantissant une répartition équitable des charges.",
    keyPoints: [
      "État descriptif de division",
      "Calcul de tantièmes",
      "Division en volumes",
      "Règlement de copropriété",
    ],
    relatedReferenceSlug: "division-volumes-serris",
  },
  {
    slug: "vrd",
    icon: <HardHat className="h-8 w-8 text-blue-800" />,
    title: "Ingénierie VRD",
    shortDescription: "Conception et suivi de projets de voirie et réseaux divers (assainissement, eau potable).",
    fullDescription:
      "Notre bureau d'études conçoit et supervise la réalisation de vos projets de Voirie et Réseaux Divers. De l'étude de faisabilité à la réception des travaux, nous assurons une maîtrise d'œuvre complète pour des infrastructures durables et fonctionnelles.",
    keyPoints: ["Conception de voiries", "Réseaux d'assainissement", "Gestion des eaux pluviales", "Maîtrise d'œuvre"],
    relatedReferenceSlug: "amenagement-zac-val-deurope",
  },
  {
    slug: "3d",
    icon: <Scan className="h-8 w-8 text-blue-800" />,
    title: "Lasergrammétrie 3D",
    shortDescription: "Numérisation 3D de haute précision pour l'industrie, le patrimoine et le bâtiment.",
    fullDescription:
      "La lasergrammétrie 3D nous permet de capturer la réalité avec une précision millimétrique. Le nuage de points obtenu est une base de travail essentielle pour la réhabilitation, le suivi d'ouvrages d'art, ou la création de maquettes numériques (BIM).",
    keyPoints: [
      "Scan 3D et nuages de points",
      "Maquettes numériques BIM",
      "Plans de façades et coupes",
      "Contrôle de planéité",
    ],
    relatedReferenceSlug: "scan-3d-chambord",
  },
]

export const references = [
  {
    slug: "division-volumes-serris",
    title: "DIVISION EN VOLUMES À SERRIS (77)",
    category: "Copropriété & Volumes",
    shortDescription:
      "Mission complète pour la mise en place d'une division en volumes d'un ensemble immobilier complexe.",
    fullBody:
      "Ce projet d'envergure à Serris a nécessité une analyse juridique et technique approfondie pour séparer les différents usages (commerces, bureaux, logements) au sein d'un même ensemble immobilier. Notre intervention a permis de créer des lots de volumes distincts, chacun avec ses propres droits et obligations, garantissant une gestion claire et pérenne de la propriété.",
    image: "/references/serris-main.png",
    gallery: [
      "/references/serris-gallery-1.png",
      "/references/serris-gallery-2.png",
      "/references/serris-gallery-3.png",
    ],
  },
  {
    slug: "parc-eolien-haute-marne",
    title: "Parc éolien de la Haute-Marne (52)",
    category: "Topographie & Ingénierie",
    shortDescription: "Levés topographiques de précision et implantation des éoliennes pour un grand parc régional.",
    fullBody:
      "La construction d'un parc éolien exige une précision absolue. Nos équipes ont réalisé les levés topographiques initiaux sur plusieurs centaines d'hectares, puis ont procédé à l'implantation millimétrique de chaque éolienne et des chemins d'accès. Un suivi régulier a été mis en place pour contrôler la stabilité des ouvrages durant la phase de construction.",
    image: "/references/eolien-main.png",
    gallery: [],
  },
  {
    slug: "amenagement-zac-val-deurope",
    title: "Aménagement ZAC du Val d'Europe (77)",
    category: "Urbanisme & VRD",
    shortDescription: "Participation aux études d'aménagement et à la maîtrise d'œuvre VRD pour l'extension de la ZAC.",
    fullBody:
      "En tant que partenaire historique de l'aménagement du Val d'Europe, nous avons contribué à la conception des nouvelles phases de la Zone d'Aménagement Concerté. Notre mission couvrait les études de faisabilité, la conception des voiries et réseaux, ainsi que le suivi des travaux d'infrastructures (assainissement, eau, électricité).",
    image: "/references/zac-val-deurope-main.png",
    gallery: [],
  },
  {
    slug: "scan-3d-chambord",
    title: "Scan 3D du Château de Chambord (41)",
    category: "Lasergrammétrie 3D",
    shortDescription: "Numérisation complète des façades et toitures pour la restauration de ce monument historique.",
    fullBody:
      "Dans le cadre de la restauration des toitures et des façades du Château de Chambord, nous avons réalisé une numérisation 3D complète à l'aide de scanners laser. Le nuage de points de plusieurs milliards de points a servi de base aux architectes des Monuments Historiques pour établir un diagnostic précis et préparer les plans d'intervention.",
    image: "/references/chambord-main.png",
    gallery: [],
  },
]

export const actualites = [
  {
    slug: "nouveau-drone-lidar",
    title: "Sogefra investit dans un nouveau drone LiDAR",
    date: "5 Juillet 2025",
    category: "Technologie",
    image: "/actualites/drone-lidar.png",
    excerpt:
      "Pour rester à la pointe, nous avons acquis un drone Matrice 300 RTK équipé d'un capteur LiDAR pour des levés rapides et précis.",
    fullBody:
      "L'acquisition de notre nouveau drone équipé de la technologie LiDAR (Light Detection and Ranging) marque une étape importante pour Sogefra. Cet outil de pointe nous permet de cartographier de vastes étendendes de terrain en un temps record, avec une densité de points et une précision inégalées, même à travers la végétation. Il est particulièrement adapté aux projets d'infrastructures linéaires (routes, voies ferrées), aux études hydrauliques et aux projets de parcs éoliens ou solaires. Nos équipes ont suivi une formation intensive pour maîtriser parfaitement cet équipement et le traitement des données qui en découle, afin de vous fournir des livrables d'une qualité exceptionnelle.",
  },
  {
    slug: "seminaire-qse-2025",
    title: "Retour sur notre séminaire annuel QSE",
    date: "20 Juin 2025",
    category: "Entreprise",
    image: "/actualites/seminaire-qse.png",
    excerpt:
      "Nos équipes se sont réunies à Lyon pour notre séminaire annuel dédié à la Qualité, la Sécurité et l'Environnement.",
    fullBody:
      "La cohésion et le partage des bonnes pratiques sont essentiels. Notre séminaire annuel QSE, qui s'est tenu cette année à Lyon, a été un franc succès. Ateliers sur la prévention des risques, conférences sur les nouvelles normes environnementales et retours d'expérience sur des chantiers complexes ont rythmé ces deux journées. Ce fut un moment privilégié pour renforcer notre culture commune de l'excellence et de la sécurité, et pour nous aligner sur nos objectifs de développement durable pour l'année à venir.",
  },
]
