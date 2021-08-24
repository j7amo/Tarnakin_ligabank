const ROUNDING_LIMIT = 10000;

const round = (num) => Math.round((num + Number.EPSILON) * ROUNDING_LIMIT) / ROUNDING_LIMIT;

export { round };
