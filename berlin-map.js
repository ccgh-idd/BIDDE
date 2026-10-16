// Map of Berlin with the network's member institutions, drawn with D3 (the same approach as the IDD globe).
// Districts, rivers, canals and lakes come from berlin.json (OpenStreetMap data, simplified).
// To add an institution, add a line below with its coordinates. "label" moves the label away from the dot,
// in map units (the map is 1000 wide and 860 tall); "side" hangs the label to the right ("start") or left ("end")
// of the end of its leader line.
const institutions = [
    { name: "Charité", title: "Charité – Universitätsmedizin Berlin", url: "https://www.charite.de/en/", lat: 52.5262, lon: 13.3769, label: [47, -195], side: "start" },
    { name: "MPI Infection Biology", title: "Max Planck Institute for Infection Biology", url: "https://www.mpiib-berlin.mpg.de/", lat: 52.5266, lon: 13.3786, label: [124, -99], side: "start" },
    { name: "Robert Koch Institute", title: "Robert Koch Institute", url: "https://www.rki.de", lat: 52.5426, lon: 13.3478, label: [-47, -108], side: "end" },
    { name: "HU Berlin", title: "Humboldt-Universität zu Berlin", url: "https://www.hu-berlin.de/", lat: 52.5178, lon: 13.3936, label: [184, -30], side: "start" },
    { name: "WHO Pandemic Hub", title: "WHO Hub for Pandemic and Epidemic Intelligence", url: "https://pandemichub.who.int/", lat: 52.5025, lon: 13.4106, label: [130, 30], side: "start" },
    { name: "TU Berlin", title: "Technische Universität Berlin", url: "https://www.tu.berlin/", lat: 52.5125, lon: 13.3266, label: [-113, 53], side: "end" },
    { name: "FU Berlin", title: "Freie Universität Berlin", url: "https://www.fu-berlin.de/", lat: 52.4506, lon: 13.2876, label: [-78, 91], side: "end" }
];

(async function drawBerlinMap() {
    const box = document.getElementById('berlin-map');
    if (!box || !window.d3) return;

    const W = 1000, H = 860;
    const data = window.BERLIN_GEO;
    if (!data) {
        console.warn('B-IDDE: Berlin map data (berlin-data.js) not loaded');
        return;
    }
    const ofKind = (...kinds) => data.features.filter(f => kinds.includes(f.properties.kind));
    const districts = { type: 'FeatureCollection', features: ofKind('district') };
    const projection = d3.geoMercator().fitExtent([[20, 20], [W - 20, H - 20]], districts);
    const path = d3.geoPath(projection);

    const svg = d3.select(box).append('svg')
        .attr('viewBox', `0 0 ${W} ${H}`)
        .attr('aria-hidden', 'true');
    svg.append('g').attr('class', 'map-districts')
        .selectAll('path').data(districts.features).join('path').attr('d', path);

    // Water is clipped to the city boundary so rivers stop at the edge of Berlin
    svg.append('clipPath').attr('id', 'berlin-clip')
        .selectAll('path').data(districts.features).join('path').attr('d', path);
    const water = svg.append('g').attr('clip-path', 'url(#berlin-clip)');
    water.append('g').attr('class', 'map-lakes')
        .selectAll('path').data(ofKind('lake')).join('path').attr('d', path);
    water.append('g').attr('class', 'map-rivers')
        .selectAll('path').data(ofKind('river', 'canal')).join('path')
        .attr('class', d => d.properties.kind).attr('d', path);

    const points = institutions.map(inst => {
        const [x, y] = projection([inst.lon, inst.lat]);
        return { ...inst, x, y, lx: x + inst.label[0], ly: y + inst.label[1] };
    });
    svg.append('g').attr('class', 'map-leaders')
        .selectAll('line').data(points).join('line')
        .attr('x1', d => d.x).attr('y1', d => d.y).attr('x2', d => d.lx).attr('y2', d => d.ly);
    svg.append('g').attr('class', 'map-dots')
        .selectAll('circle').data(points).join('circle')
        .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 7);

    // Labels are HTML links so they stay readable and clickable at any size
    d3.select(box).append('div')
        .attr('class', 'institution-nodes')
        .attr('aria-label', 'Member institutions')
        .selectAll('a').data(points).join('a')
        .attr('class', 'inst-node')
        .attr('data-side', d => d.side)
        .attr('href', d => d.url)
        .attr('target', '_blank')
        .attr('rel', 'noopener')
        .attr('title', d => d.title)
        .style('left', d => `${(d.lx / W * 100).toFixed(2)}%`)
        .style('top', d => `${(d.ly / H * 100).toFixed(2)}%`)
        .text(d => d.name);
})();
