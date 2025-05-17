declare global {
  interface Window {
    supportAI: {
        version: string,
        enableAutoReply(): void
    };
  }
}

export {};
