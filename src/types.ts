export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  treatmentStartDate: string;
}

export interface Outcome {
  id: string;
  patientId: string;
  score: number;
  date: string;
  metric: string;
}

export interface TreatmentMetric {
  name: string;
  successRate: number;
  averageDuration: number;
  costEffectiveness: number;
}

export interface UtilizationMetric {
  resource: string;
  usage: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  efficiency: number;
}