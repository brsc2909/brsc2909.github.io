declare module 'html2pdf.js' {
  export default function html2pdf(): {
    set: (options: any) => {
      from: (element: HTMLElement) => {
        save: () => void;
      };
    };
  };
}