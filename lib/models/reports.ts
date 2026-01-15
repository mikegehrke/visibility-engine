// Report Types
export type ReportType = 'weekly' | 'monthly' | 'custom';
export type ExportFormat = 'pdf' | 'csv';

// Report Data Model
export interface Report {
  id: string;
  titleKey: string;
  type: ReportType;
  periodLabel: string;
  summaryKey: string;
  highlightKeys: string[];
  relatedMetrics: {
    visibilityScore: number;
    reach: number;
    clicks: number;
  };
  relatedRuleIds: string[];
  relatedActionIds: string[];
}

// Export Preview Model
export interface ReportExportPreview {
  reportId: string;
  format: ExportFormat;
  descriptionKey: string;
  enabled: boolean; // Always false for preview
}

// Mock Reports
export const mockReports: Report[] = [
  {
    id: 'rep-001',
    titleKey: 'weeklyVisibilityReport',
    type: 'weekly',
    periodLabel: 'Last 7 days',
    summaryKey: 'weeklyVisibilitySummary',
    highlightKeys: [
      'weeklyHighlight1',
      'weeklyHighlight2',
      'weeklyHighlight3',
      'weeklyHighlight4',
    ],
    relatedMetrics: {
      visibilityScore: 87,
      reach: 145600,
      clicks: 8920,
    },
    relatedRuleIds: ['rule-signals-001', 'rule-signals-002', 'rule-dist-001'],
    relatedActionIds: ['act-001', 'act-002', 'act-003'],
  },
  {
    id: 'rep-002',
    titleKey: 'monthlyPerformanceReport',
    type: 'monthly',
    periodLabel: 'Last 30 days',
    summaryKey: 'monthlyPerformanceSummary',
    highlightKeys: [
      'monthlyHighlight1',
      'monthlyHighlight2',
      'monthlyHighlight3',
      'monthlyHighlight4',
      'monthlyHighlight5',
    ],
    relatedMetrics: {
      visibilityScore: 82,
      reach: 563400,
      clicks: 34560,
    },
    relatedRuleIds: ['rule-signals-001', 'rule-dist-001', 'rule-dist-002', 'rule-flow-001'],
    relatedActionIds: ['act-001', 'act-002', 'act-004', 'act-005', 'act-006'],
  },
  {
    id: 'rep-003',
    titleKey: 'customSnapshot',
    type: 'custom',
    periodLabel: 'Custom period',
    summaryKey: 'customSnapshotSummary',
    highlightKeys: [
      'customHighlight1',
      'customHighlight2',
      'customHighlight3',
    ],
    relatedMetrics: {
      visibilityScore: 79,
      reach: 98200,
      clicks: 5430,
    },
    relatedRuleIds: ['rule-signals-003', 'rule-flow-002'],
    relatedActionIds: ['act-007', 'act-008'],
  },
];

// Mock Export Previews
export const mockExportPreviews: ReportExportPreview[] = [
  {
    reportId: 'rep-001',
    format: 'pdf',
    descriptionKey: 'pdfExportDescription',
    enabled: false,
  },
  {
    reportId: 'rep-001',
    format: 'csv',
    descriptionKey: 'csvExportDescription',
    enabled: false,
  },
  {
    reportId: 'rep-002',
    format: 'pdf',
    descriptionKey: 'pdfExportDescription',
    enabled: false,
  },
  {
    reportId: 'rep-002',
    format: 'csv',
    descriptionKey: 'csvExportDescription',
    enabled: false,
  },
  {
    reportId: 'rep-003',
    format: 'pdf',
    descriptionKey: 'pdfExportDescription',
    enabled: false,
  },
  {
    reportId: 'rep-003',
    format: 'csv',
    descriptionKey: 'csvExportDescription',
    enabled: false,
  },
];
