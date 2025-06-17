async function fetchRunes() {
  const response = await fetch("https://api-mainnet.magiceden.dev/v2/ord/btc/runes/market/rune_info");
  const data = await response.json();
  return data;
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