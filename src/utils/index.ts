export const uid = () => Date.now().toString(36) + Math.random().toString(36);

export const removeNonNumeric = (v: string): number => Number(v.replace(/[^0-9]/g, ""))