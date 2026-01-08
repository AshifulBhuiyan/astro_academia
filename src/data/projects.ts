
export const projects = [

  {
    title: "Spectral Element Methods for Elliptic and Hyperbolic PDEs",
    description:
      "Implemented the Spectral Element Method from first principles to solve Poisson and wave equations in one dimension. Derived weak formulations, assembled global operators using Gauss-Lobatto-Legendre quadrature, and analyzed convergence under h- and p-refinement. Investigated stability, dispersion, and computational efficiency, demonstrating spectral convergence for smooth solutions and comparing error versus computational cost.",
    link: "https://github.com/AshifulBhuiyan/Spectral-Element-Method",
  },

  {
    title: "Numerical Integration of Geodesics in Schwarzschild Spacetime",
    description:
      "Computational study of test-particle and photon geodesics in Schwarzschild spacetime, focusing on long-time numerical behavior and structure preservation. Derived geodesic equations from the Schwarzschild metric and implemented multiple time integration schemes, including Runge-Kutta and symplectic methods. Compared orbital dynamics, energy conservation, and perihelion precession, highlighting the importance of geometric integrators for stable relativistic simulations.Validated the model by reproducing the anomalous perihelion precession of Mercury, confirming second-order post-Newtonian corrections absent in standard theoretical approximations.",
    link: "https://github.com/AshifulBhuiyan/Geodesic-Simulation-GR",
  },

        { 
  title: "Natural Convection and Heat Transfer in Enclosures: Numerical and Analytical Solutions",
  description: "Developed a comprehensive Python toolkit for simulating 2D natural convection in rectangular enclosures, considering both clear fluids and porous media. The project numerically solves the vorticity-streamfunction and energy equations under various thermal boundary conditions, enclosure orientations, and aspect ratios using the finite difference method and SOR iterative solvers. Simulations systematically explore the influence of Rayleigh, Prandtl, and Darcy numbers, and calculate key metrics such as the average Nusselt number for different scenarios. In addition to numerical work, the project implements and visualizes exact analytical solutions for temperature and concentration fields in elliptic domains, and verifies these solutions symbolically. Results are visualized using Matplotlib, with code modules enabling rapid investigation of heat transfer enhancement strategies in engineering systems. Full code, data, and analysis notebooks are available.",
  link: "https://github.com/AshifulBhuiyan/Natural-Convection-Enclosure",
      },


    {
        title: "Two-Body Decay Simulations",
        description: "Simulating the decay process of neutral pions (π⁰ → γγ) using Python. Generated synthetic data using a uniform dsitribution and applied two-body kinematic analysis in both rest and lab frames. Used these results to explore momentum conservation and relativistic invariance",
        link: "https://github.com/AshifulBhuiyan/Two-Body-Decay",
      },

      {
        title: "Collider Event Analysis – Estimating Neutrino Species",
        description: "Analyzed proton-proton collision data to estimate the number of neutrino species. Processed datasets using Python to reconstruct missing energy and mass distributions. Applied statistical techniques to fit energy spectra and infer the number of undetectable decay products based on conservation laws.",
        link: "https://github.com/AshifulBhuiyan/Analyzing-Collider-Events",
      },

      {
        title: "Music Popularity Prediction from Spotify Audio Features",
        description: "Developed models to estimate the popularity of songs using over 2 million entries from the Spotify API. Applied data cleaning, clustering, and feature engineering to extract signals from audio features (e.g., tempo, loudness). Benchmarked models including AdaBoost, Random Forest, and Neural Networks; achieved 86% recall on top-performing tracks. Integrated a pricing tool to estimate royalties based on the predicted popularity. Built dataset for training the model.",
        link: "https://huggingface.co/ConquestAce/Spotify-Popularity-Predictor",
      },


    // Add more projects as needed
  ];

  