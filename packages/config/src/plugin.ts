import plugin from "tailwindcss/plugin";

const customVariants: { [key: string]: string | string[] } = {
  // not-()
  "not-open": "&:not([open])",
  "not-disabled": "&:not(:disabled)",
  "not-hover": "&:not(:hover)",

  // group-() & peer-()
  "group-not-disabled": ".group:not(:disabled) &",
  "peer-not-disabled": ".peer:not(:disabled) ~ &",

  // size
  xs: "@media (min-width: 512px)",
  "max-xs": "@media not all and (min-width: 512px)",

  // scrollbar
  scrollbar: "&::-webkit-scrollbar",
  "scrollbar-thumb": "&::-webkit-scrollbar-thumb",
  "scrollbar-track": "&::-webkit-scrollbar-track",
};

export default plugin(function ({
  addBase,
  addVariant,
  addUtilities,
  matchVariant,
  matchUtilities,
}) {
  addBase({
    // heading
    h1: {
      "font-size": "1.6rem",
      "font-weight": "800",
    },
    h2: {
      "font-size": "1.48rem",
      "font-weight": "700",
    },
    h3: {
      "font-size": "1.36rem",
      "font-weight": "700",
    },
    h4: {
      "font-size": "1.24rem",
      "font-weight": "700",
    },
    h5: {
      "font-size": "1.12rem",
      "font-weight": "700",
    },
    h6: {
      "font-size": "1rem",
      "font-weight": "700",
    },

    // button
    "button:disabled": {
      cursor: "not-allowed",
      opacity: "0.38",
    },
    "button:disabled > *": {
      pointerEvents: "none",
    },
  });

  matchVariant("is", (value) => `&:is(${value})`);
  matchVariant("not", (value) => `&:not(${value})`);

  Object.entries(customVariants).forEach(([name, definition]) => {
    addVariant(name, definition);
  });

  matchUtilities({
    "bg-underline": (value) => ({
      "background-image": `linear-gradient(to right, var(--tw-gradient-stops))`,
      "background-size": `0% ${value}`,
      "background-repeat": "no-repeat",
      "background-position": "0 100%",
      transition: "background-size 150ms linear",
      "&:hover": {
        "background-size": `100% ${value}`,
      },
      "&.active": {
        "background-size": `100% ${value}`,
      },
    }),
    "group-bg-underline": (value) => ({
      "background-image": `linear-gradient(to right, var(--tw-gradient-stops))`,
      "background-size": `0% ${value}`,
      "background-repeat": "no-repeat",
      "background-position": "0 100%",
      transition: "background-size 150ms linear",
      ".group:hover &": {
        "background-size": `100% ${value}`,
      },
      "&.active": {
        "background-size": `100% ${value}`,
      },
    }),
    "peek-bg-underline": (value) => ({
      "background-image": `linear-gradient(to right, var(--tw-gradient-stops))`,
      "background-size": `0% ${value}`,
      "background-repeat": "no-repeat",
      "background-position": "0 100%",
      transition: "background-size 150ms linear",
      ".peek:hover ~ &": {
        "background-size": `100% ${value}`,
      },
      "&.active": {
        "background-size": `100% ${value}`,
      },
    }),
  });

  addUtilities({
    ".x-scrollbar": {
      "overflow-x": "auto",
      "&::-webkit-scrollbar": {
        width: "100%",
        height: "7px",
      },
      "&::-webkit-scrollbar-thumb": {
        cursor: "pointer",
        "border-radius": "9999px",
        "background-color": "#3B82F6",
      },
      ".dark &::-webkit-scrollbar-thumb": {
        "background-color": "#2563EB",
      },
      "&::-webkit-scrollbar-track": {
        cursor: "pointer",
        "background-color": "transparent",
      },
    },
    ".y-scrollbar": {
      "overflow-y": "auto",
      "&::-webkit-scrollbar": {
        width: "7px",
        height: "100%",
      },
      "&::-webkit-scrollbar-thumb": {
        cursor: "pointer",
        "border-radius": "9999px",
        "background-color": "#3B82F6",
      },
      ".dark &::-webkit-scrollbar-thumb": {
        "background-color": "#2563EB",
      },
      "&::-webkit-scrollbar-track": {
        cursor: "pointer",
        "background-color": "transparent",
      },
    },
    ".scrollbar-hide": {
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    ...Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => {
        const index =
          i <= 12
            ? i
            : i <= 14
              ? 12 + 2 * (i - 12)
              : i <= 26
                ? 16 + 4 * (i - 14)
                : i <= 28
                  ? 64 + 8 * (i - 28)
                  : 96;

        return [
          `.bg-underline-${index}`,
          {
            "background-image": `linear-gradient(to right, var(--tw-gradient-stops))`,
            "background-size": `0% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            "background-repeat": "no-repeat",
            "background-position": "0 100%",
            transition: "background-size 150ms linear",
            "&:hover": {
              "background-size": `100% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            },
            "&.active": {
              "background-size": `100% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            },
          },
        ];
      })
    ),
    ...Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => {
        const index =
          i <= 12
            ? i
            : i <= 14
              ? 12 + 2 * (i - 12)
              : i <= 26
                ? 16 + 4 * (i - 14)
                : i <= 28
                  ? 64 + 8 * (i - 28)
                  : 96;

        return [
          `.group-bg-underline-${index}`,
          {
            "background-image": `linear-gradient(to right, var(--tw-gradient-stops))`,
            "background-size": `0% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            "background-repeat": "no-repeat",
            "background-position": "0 100%",
            transition: "background-size 150ms linear",
            ".group:hover &": {
              "background-size": `100% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            },
            "&.active": {
              "background-size": `100% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            },
          },
        ];
      })
    ),
    ...Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => {
        const index =
          i <= 12
            ? i
            : i <= 14
              ? 12 + 2 * (i - 12)
              : i <= 26
                ? 16 + 4 * (i - 14)
                : i <= 28
                  ? 64 + 8 * (i - 28)
                  : 96;

        return [
          `.peek-bg-underline-${index}`,
          {
            "background-image": `linear-gradient(to right, var(--tw-gradient-stops))`,
            "background-size": `0% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            "background-repeat": "no-repeat",
            "background-position": "0 100%",
            transition: "background-size 150ms linear",
            ".peek:hover ~ &": {
              "background-size": `100% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            },
            "&.active": {
              "background-size": `100% ${index === 0 ? "0px" : `${index / 4}rem`}`,
            },
          },
        ];
      })
    ),
  });
});
