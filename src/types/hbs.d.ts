declare module 'hbs' {
  export function registerPartials(dir: string): void;
  export function registerHelper(
    name: string,
    fn: (...args: any[]) => any,
  ): void;
}
