export interface Project {
  publisher: string;
  date: string;
  image: string;
  title: string;
  desc: string;
  url: string;
  noCrop?: boolean;
}

export const projects: Project[] = [
  {
    publisher: 'UK Gov, Joseph Early',
    date: 'February 2026',
    image: '/images/aioap.png',
    title: 'AI Opportunities Action Plan',
    desc: 'In January 2025, the government committed to take forward 50 recommendations to boost growth, raise living standards, transform public services, and create the companies of the future in Britain. Built as part of my No10 Innovation Fellowship.',
    url: 'https://delivery.ai.gov.uk/',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'October 2025',
    image: '/images/gardeneye_logo.png',
    title: 'GardenEye - AI Wildlife Monitoring',
    desc: 'A wildlife monitoring application that uses YOLO-based object detection to identify and track animals in camera footage. Features smart filtering, automatic thumbnail generation, and an accessible web interface for analyzing garden camera recordings.',
    url: 'https://github.com/JAEarly/GardenEye',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'November 2023',
    image: '/images/millet.png',
    title: 'MIL for Time Series Classification',
    desc: 'Code for my paper "Inherently Interpretable Time Series Classification via Multiple Instance Learning".',
    url: 'https://github.com/JAEarly/MILTimeSeriesClassification',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'October 2023',
    image: '/images/TaylorZipft.png',
    title: 'Tidy Tuesday - Taylor Swift',
    desc: "Write-up for a Tidy Tuesday data visualization project exploring if Taylor Swift lyrics follow Zipf's law.",
    url: 'https://github.com/JAEarly/tidytuesday/blob/main/taylor_swift/taylor_zipft.ipynb',
    noCrop: true,
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'November 2022',
    image: '/images/mil_lcc.png',
    title: 'MIL for Land Cover Classification',
    desc: 'Code for my paper "Scene-to-Patch Earth Observation: Multiple Instance Learning for Land Cover Classification" (NeurIPS 2022: Workshop on Tackling Climate Change with Machine Learning).',
    url: 'https://github.com/JAEarly/MIL-Land-Cover-Classification',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'June 2022',
    image: '/images/mil_rm.png',
    title: 'MIL for Non-Markovian Reward Modelling',
    desc: 'Code for my paper "Non-Markovian Reward Modelling from Trajectory Labels via Interpretable Multiple Instance Learning" (NeurIPS 2022).',
    url: 'https://github.com/JAEarly/MIL-for-Non-Markovian-Reward-Modelling',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'January 2022',
    image: '/images/milli.png',
    title: 'MILLI - Multiple Instance Learning Local Interpretations',
    desc: 'Code for my paper "Model Agnostic Interpretability for Multiple Instance Learning" (ICLR 2022).',
    url: 'https://github.com/JAEarly/MILLI',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'October 2020',
    image: '/images/clean_jupyter.png',
    title: 'Ensure Clean Notebooks Action',
    desc: 'A GitHub action for ensuring that any Jupyter notebooks in a repository have clean metadata.',
    url: 'https://github.com/ResearchSoftwareActions/EnsureCleanNotebooksAction',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'June 2020',
    image: '/images/latextable_logo.png',
    title: 'LatexTable - A Python library for creating Latex tables',
    desc: 'Texttable is a Python package that can create simple ASCII tables. This package extends its functionality to allow the table to be directly output in Latex, removing the tedious copy and paste chore. The Latex output matches the table design, and there are utilities for adding table captions and labels.',
    url: 'https://github.com/JAEarly/latextable',
  },
  {
    publisher: 'Github, Joseph Early',
    date: 'July 2019',
    image: '/images/real_time_style_interpolation.png',
    title: 'Online Style Interpolator',
    desc: 'A re-implementation of "A Learned Representation For Artistic Style" (Dumoulin et al. 2016). It also includes an extension that wraps the Style Interpolation feature as a web application.',
    url: 'https://github.com/JAEarly/Online-Style-Interpolator',
  },
];
