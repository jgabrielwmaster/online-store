declare module 'hbs-utils' {
  function hbsUtils(hbs: any): {
    registerWatchedPartials(directory: string): void;
  };
  export default hbsUtils;
}
