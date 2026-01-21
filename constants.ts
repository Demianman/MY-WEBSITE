
import { Education, Experience, Project, Award, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Yiman Wu',
  alias: 'Nelly',
  title: 'AI Engineering & Biomedical Engineering',
  location: 'Pittsburgh, PA',
  phone: '(412)-789-6447',
  email: 'yimanw@andrew.cmu.edu',
  summary: 'Optimizing life via Stochastic Gradient Descent. Calibrating the future through disciplined iteration and action. Specialized in bridging the gap between clinical medicine and advanced engineering, leveraging AI to pioneer the next generation of medical devices and diagnostic tools.',
  philosophy: 'Finding possibility within uncertainty — engineering a path where others see complexity.',
  hobbies: [
    { name: 'Art Cinema', detail: 'Devotee of Fellini (8½) & visual storytelling', icon: 'fa-film' },
    { name: 'Rock & Roll', detail: 'Channeling high-energy rhythm into deep focus', icon: 'fa-guitar' },
    { name: 'Endurance Running', detail: 'Building mental resilience through motion', icon: 'fa-person-running' }
  ]
};

export const EDUCATION: Education[] = [
  {
    school: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    degree: 'M.S. in AI Engineering – Biomedical Engineering',
    period: 'Expected Dec 2026',
    highlights: ['Focus: Deep Learning for Clinical Diagnostics', 'Cross-disciplinary research in AI-driven healthcare'],
  },
  {
    school: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    degree: 'Exchange Scholar: Product Launch & Computer Science',
    period: 'Aug 2024 – Dec 2024',
    highlights: ['Beam (Engineers and Mentors)', 'Collaborative App Development for Education Management'],
  },
  {
    school: 'South-Central University for Nationalities',
    location: 'Wuhan, China',
    degree: 'B.S. in Biomedical Engineering (Elite Engineering Program)',
    period: 'Sep 2021 – Jun 2025',
    highlights: [
      'GPA: 3.32 (Top Decile)',
      'National Scholarship Recipient (Top 1% Nationwide)',
      'Excellence in Neural Networks (91/100) & Medical Electronics (94/100)',
    ],
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: 'Wuhan University, Med-Eng Integration Lab',
    title: 'Product Development Intern',
    period: 'Jul 2024 – Aug 2024',
    location: 'Wuhan, China',
    description: [
      'Engineered a robotic arm system integrated with ultrasound probes for automated vascular detection.',
      'Developed and trained an encoder-based supervised model for vessel morphology analysis.',
      'Facilitated cross-functional design sprints between clinical users and research engineers.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Myocardial Lesion Segmentation',
    role: 'Lead Researcher',
    period: 'Apr 2024 – Jul 2024',
    category: 'AI/ML',
    techStack: ['GANs', 'nnU-Net', 'BPRNet', 'SPADE'],
    description: [
      'Architected a multimodal CMR fusion framework for precise cardiac lesion segmentation.',
      'Implemented SPADE-based data augmentation to mitigate small-sample size constraints.',
      'Achieved results exceeding the MYOPS2020 international benchmark.',
    ],
  },
  {
    title: 'IoMT Retinal Diagnostic System',
    role: 'Product Lead & AI Developer',
    period: 'Mar 2024 – Aug 2024',
    category: 'Research',
    techStack: ['ImageNet', 'Feature Fusion', 'Cloud-Computing'],
    description: [
      'Spearheaded the development of a collaborative AI system for diagnosing 8 distinct retinal pathologies.',
      'Optimized feature fusion algorithms for bilateral eye data processing.',
      'Translated clinical treatment scenarios into functional technical specifications.',
    ],
  },
  {
    title: 'Explainable Pain Prediction',
    role: 'Full Stack AI Developer',
    period: 'Oct 2023 – Apr 2024',
    category: 'Software',
    techStack: ['XGBoost', 'Streamlit', 'SHAP'],
    description: [
      'Developed and deployed an interpretable diagnostic tool hosted at painprediction.top.',
      'Integrated SHAP (SHapley Additive exPlanations) to provide clinical transparency for model outputs.',
      'Led the front-end design to ensure accessibility for non-technical clinical users.',
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'C++', 'R', 'MATLAB', 'SQL'],
  },
  {
    category: 'AI & Data Science',
    skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Medical Imaging', 'Signal Processing', 'nnU-Net'],
  },
  {
    category: 'Product & Clinical',
    skills: ['Workflow Modeling', 'Requirement Spec', 'Risk Analysis (ISO 14971)', 'Prototyping'],
  },
];

export const AWARDS: Award[] = [
  { year: '2024', title: 'National Scholarship (Highest Academic Honor in China)' },
  { year: '2023', title: '1st Prize, 8th National BME Innovation & Design Competition' },
  { year: '2024', title: '2nd Prize, 17th China Computer Design Competition' },
  { year: '2021-24', title: '1st Prize, National "Internet+" Innovation Competition (Team Lead)' }
];

export const LEADERSHIP = [
  {
    role: 'President of Student Union',
    org: 'School of Biomedical Engineering',
    period: '2023 – 2024',
    description: 'Managed a team of 50+ members, coordinating large-scale academic forums and industry networking events.',
  }
];
