import SphinxProvider from "@/providers/Sphinx";

if (document.currentScript) {
  (window as any).sphinx = new SphinxProvider();
} else {
  console.warn("Coudld not find a Sphinx Provider");
}

export {};
