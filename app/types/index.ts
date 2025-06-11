export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  labels: string[];
  confidence: number;
  createdAt: string;
  status: 'draft' | 'published';
  marketplaceLinks?: {
    leboncoin?: string;
    vinted?: string;
  };
}

export interface ScanResult {
  labels: Array<{
    label: string;
    confidence: number;
  }>;
  category: string;
  suggestedName: string;
  suggestedDescription: string;
}

export interface MarketplaceConfig {
  name: string;
  enabled: boolean;
  apiKey?: string;
  apiSecret?: string;
}
