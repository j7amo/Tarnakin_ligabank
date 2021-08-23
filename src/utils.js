const round = (num) => Math.round((num + Number.EPSILON) * 10000) / 10000;

export { round };
