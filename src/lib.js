import * as d3Chord from 'd3-chord';
export default function lib() {
    let ribbon = d3Chord.ribbon();
    ribbon({
        source: {startAngle: 0.7524114, endAngle: 1.1212972, radius: 240},
        target: {startAngle: 1.8617078, endAngle: 1.9842927, radius: 240}
    });
}
