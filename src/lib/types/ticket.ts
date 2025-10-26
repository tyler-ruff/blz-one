export interface Ticket {
  id: string;                        // Unique ticket ID
  subject: string;                   // Short summary/title
  description: string;               // Full message or issue description
  status: 'open' | 'in-progress' | 'waiting' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';

  type: 'bug' | 'support' | 'feature-request' | 'billing' | 'other';
  requesterId: string;              // User who created the ticket
  assigneeId?: string;              // User responsible for resolving it
  cc?: string[];                    // Optional: other users to notify

  relatedProjectId?: string;        // Optional: link to a project
  relatedTaskId?: string;           // Optional: link to a specific task
  tags?: string[];                  // Labels for filtering

  isInternal?: boolean;             // For internal vs external tickets
  visibility: 'private' | 'team' | 'public';

  attachments?: string[];           // File URLs or storage references
  threadCount?: number;             // Number of comment/reply messages

  createdAt: string;                // ISO timestamp
  updatedAt: string;
  resolvedAt?: string;
  closedAt?: string;
}