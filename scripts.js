document.addEventListener("DOMContentLoaded", function () {
  const conversionRates = {
    usdToEur: 0.9,
    usdToGbp: 0.76,
    usdToGhc: 15.58,
    usdToTry: 34.07,
    eurToUsd: 1.11,
    eurToGbp: 0.84,
    eurToGhc: 17.23,
    eurToTry: 37.68,
    gbpToUsd: 1.31,
    gbpToEur: 1.19,
    gbpToGhc: 20.47,
    gbpToTry: 44.75,
    ghcToUsd: 0.06,
    ghcToEur: 0.06,
    ghcToGbp: 0.05,
    ghcToTry: 2.19,
    tryToUsd: 0.03,
    tryToEur: 0.03,
    tryToGbp: 0.02,
    tryToGhc: 0.46,
  };

  function addSymbol(currency, value) {
    const symbols = {
      inputusd: "$",
      inputeu: "€",
      inputpounds: "£",
      inputcedis: "₵",
      inputlira: "₺",
    };
    return `${symbols[currency]}${value.toFixed(2)}`;
  }

  function convertCurrency(sourceId, value) {
    const conversions = {
      inputusd: {
        inputeu: conversionRates.usdToEur,
        inputpounds: conversionRates.usdToGbp,
        inputcedis: conversionRates.usdToGhc,
        inputlira: conversionRates.usdToTry,
      },
      inputeu: {
        inputusd: conversionRates.eurToUsd,
        inputpounds: conversionRates.eurToGbp,
        inputcedis: conversionRates.eurToGhc,
        inputlira: conversionRates.eurToTry,
      },
      inputpounds: {
        inputusd: conversionRates.gbpToUsd,
        inputeu: conversionRates.gbpToEur,
        inputcedis: conversionRates.gbpToGhc,
        inputlira: conversionRates.gbpToTry,
      },
      inputcedis: {
        inputusd: conversionRates.ghcToUsd,
        inputeu: conversionRates.ghcToEur,
        inputpounds: conversionRates.ghcToGbp,
        inputlira: conversionRates.ghcToTry,
      },
      inputlira: {
        inputusd: conversionRates.tryToUsd,
        inputeu: conversionRates.tryToEur,
        inputpounds: conversionRates.tryToGbp,
        inputcedis: conversionRates.tryToGhc,
      },
    };

    if (conversions[sourceId]) {
      for (let targetId in conversions[sourceId]) {
        document.getElementById(targetId).value = addSymbol(
          targetId,
          value * conversions[sourceId][targetId]
        );
      }
    }
  }

  // Attach event listeners to all input fields
  document.getElementById("inputusd").addEventListener("input", function () {
    convertCurrency("inputusd", parseFloat(this.value) || 0);
  });

  document.getElementById("inputeu").addEventListener("input", function () {
    convertCurrency("inputeu", parseFloat(this.value) || 0);
  });

  document.getElementById("inputpounds").addEventListener("input", function () {
    convertCurrency("inputpounds", parseFloat(this.value) || 0);
  });

  document.getElementById("inputcedis").addEventListener("input", function () {
    convertCurrency("inputcedis", parseFloat(this.value) || 0);
  });

  document.getElementById("inputlira").addEventListener("input", function () {
    convertCurrency("inputlira", parseFloat(this.value) || 0);
  });
});
