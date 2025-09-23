export const foo = (bar: string): string => {
  return bar;
};

(async () => {
  console.log(foo('bar'));
})();
