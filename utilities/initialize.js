async function initialize() {
  let datas = { drugs: "dr", diseases: "di", companies: "co" };
  let data = {};

  for (const d in datas) {
    const response = await fetch(`data/${d}_lean.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    data[datas[d]] = await response.json();
  }
  return data;
}

export default initialize;
