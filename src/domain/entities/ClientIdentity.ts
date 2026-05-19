export class ClientIdentity {
  private constructor(public readonly key: string) {}

  static fromIp(ip: string): ClientIdentity {
    return new ClientIdentity(`ip:${ip}`);
  }

  static fromUserId(userId: string): ClientIdentity {
    return new ClientIdentity(`user:${userId}`);
  }

  static fromApiKey(apiKey: string): ClientIdentity {
    return new ClientIdentity(`apiKey:${apiKey}`);
  }

  withNamespace(namespace: string): ClientIdentity {
    return new ClientIdentity(`${namespace}:${this.key}`);
  }

  toString(): string {
    return this.key;
  }
}
