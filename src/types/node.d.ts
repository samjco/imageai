declare module 'fs/promises' {
  export function access(path: string): Promise<void>;
  export function mkdir(path: string, options?: { recursive?: boolean }): Promise<void>;
  export function writeFile(path: string, data: any): Promise<void>;
  export function readFile(path: string): Promise<Buffer>;
  // Add other methods as needed
}

declare module 'path' {
  export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  // Add other methods as needed
}

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    OPENAI_API_KEY?: string;
    OPENAI_API_BASE_URL?: string;
  }

  interface Process {
    env: ProcessEnv;
    cwd(): string;
  }
}

declare var process: NodeJS.Process;

declare const Buffer: {
  from(data: string, encoding?: string): any;
}; 