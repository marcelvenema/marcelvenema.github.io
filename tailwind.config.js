module.exports = {
  content: [
    "./layouts/**/*.html",
    "./layouts/**/**/*.html",
    "./content/**/*.md",
  ],
  safelist: [
    "chroma",
    "err",
    "lntd",
    "lntable",
    "hl",
    "lnt",
    "ln",
    "k",
    "kc",
    "kd",
    "kn",
    "kp",
    "kr",
    "kt",
    "na",
    "nb",
    "nc",
    "no",
    "ne",
    "nf",
    "nn",
    "nt",
    "nv",
    "p",
    "s",
    "sa",
    "sb",
    "sc",
    "dl",
    "sd",
    "s2",
    "se",
    "sh",
    "si",
    "sx",
    "sr",
    "s1",
    "ss",
    "m",
    "mb",
    "mf",
    "mh",
    "mi",
    "il",
    "mo",
    "ow",
    "c",
    "ch",
    "cm",
    "c1",
    "cs",
    "cp",
    "cpf",
    "gd",
    "ge",
    "gr",
    "gh",
    "gi",
    "go",
    "gp",
    "gs",
    "gu",
    "gt",
    "o",
    "gl",
    "w",
    "hl",
    "dark",
    "-translate-x-[11px]",
    "translate-y-[7px]",
  ],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "980px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#d49c59",
        secondary: "#C4B5F0",
        tertiary: "#E1E3D3",
      },
      fontFamily: {
        heading: ["Open Sans"],
        body: ["Open Sans"],
      },
      listStyleType: {
        circle: "circle",
        square: "square",
        "lower-latin": "lower-latin",
        "lower-roman": "lower-roman",
        "upper-latin": "upper-latin",
        "upper-roman": "upper-roman",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
      },
      animation: {
        fadeInDown: "fadeInDown 900ms ease-in-out",
        fadeInUp: "fadeInUp 900ms ease-in",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -200%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "1",
            transform: "none",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, -200%, 0)",
          },
        },
      },
    },
  },
  variants: {
    aspectRatio: ["before"],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-important"),
    function ({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.3xl"),
          fontWeight: config("theme.fontWeight.bold"),
          marginBottom: config("theme.spacing.4"),
          fontFamily: config("theme.fontFamily.heading"),
        },
        h2: {
          fontSize: config("theme.fontSize.2xl"),
          fontWeight: config("theme.fontWeight.bold"),
          marginBottom: config("theme.spacing.4"),
          fontFamily: config("theme.fontFamily.heading"),
        },
        h3: {
          fontSize: config("theme.fontSize.xl"),
          fontWeight: config("theme.fontWeight.bold"),
          marginBottom: config("theme.spacing.4"),
          fontFamily: config("theme.fontFamily.heading"),
        },
        h4: {
          fontSize: config("theme.fontSize.lg"),
        },
        a: {
          color: config("theme.colors.primary"),
        },
        p: {
          marginBottom: config("theme.spacing.6"),
        },
        ol: {
          listStyleType: config("theme.listStyleType.decimal"),
          paddingLeft: config("theme.spacing.6"),
          marginBottom: config("theme.spacing.4"),
        },
        ul: {
          listStyleType: config("theme.listStyleType.disc"),
          paddingLeft: config("theme.spacing.6"),
          marginBottom: config("theme.spacing.4"),
        },
        li: {
          marginBottom: config("theme.spacing.2"),
        },
        table: {
          tableLayout: "auto",
          marginTop: config("theme.spacing.4"),
          marginBottom: config("theme.spacing.6"),
        },
        "table th": {
          fontSize: config("theme.fontSize.base"),
          paddingLeft: config("theme.spacing.2"),
          paddingRight: config("theme.spacing.2"),
          paddingTop: config("theme.spacing.2"),
          paddingBottom: config("theme.spacing.2"),
          borderWidth: config("theme.borderWidth.DEFAULT"),
          borderColor: config("theme.colors.gray.300"),
          background: config("theme.colors.gray.50"),
        },
        "table td": {
          fontSize: config("theme.fontSize.base"),
          paddingLeft: config("theme.spacing.2"),
          paddingRight: config("theme.spacing.2"),
          paddingTop: config("theme.spacing.2"),
          paddingBottom: config("theme.spacing.2"),
          borderWidth: config("theme.borderWidth.DEFAULT"),
          borderColor: config("theme.colors.gray.300"),
        },
      });
    },
  ],
};
