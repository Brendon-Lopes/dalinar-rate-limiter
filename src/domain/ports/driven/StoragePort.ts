export interface StoragePort {
  increment(key: string, windowMs: number): Promise<IncrementResult>;
}

export type IncrementResult = {
  count: number;
  ttl: number;
};
