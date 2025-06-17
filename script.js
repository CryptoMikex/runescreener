function fetchRunes() {
  // MOCKED sample data
  return Promise.resolve([
    { ticker: "RUNE1", marketCapUSD: 1000000 },
    { ticker: "RUNE2", marketCapUSD: 750000 },
    { ticker: "RUNE3", marketCapUSD: 500000 },
    { ticker: "RUNE4", marketCapUSD: 200000 }
  ]);
}

function renderTreemap(runes) {
  const labels = runes.map(r => r.ticker);
  const values = runes.map(r => r.marketCapUSD);

  const trace = {
    type: "treemap",
    labels: labels,
    parents: Array(labels.length).fill(""),
    values: values,
    textinfo: "label+value"
  };

  Plotly.newPlot("runeMap", [trace]);
}

fetchRunes().then(renderTreemap).catch(console.error);
