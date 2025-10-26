export enum Status {
  'todo' = 0,
  'in-progress' = 1,
  'review' = 2,
  'done' = 3, 
  'blocked' = 4
}

export enum Priority{
  'low' = 3,
  'medium' = 2,
  'high' = 1,
  'urgent' = 0
}

export interface Task {
  id: string;                    // Unique task ID
  key?: string;                  // Realtime DB key
  title: string;                 // Short task name
  description?: string;          // Detailed info
  status: Status | null;         // Task state
  priority: Priority | null;     // Priority level

  projectId?: string;            // Optional: Reference to parent project
  assigneeId?: string;           // User ID of assigned person
  reporterId: string;            // User who created the task
  collaborators?: string[];      // Optional: Additional users

  dueDate?: string;              // ISO date string
  startDate?: string;            // Optional: start tracking
  completedAt?: string;          // ISO timestamp

  tags?: string[];               // Custom labels/tags
  checklist?: {                  // Optional subtasks
    id: string;
    label: string;
    checked: boolean;
  }[];

  commentsCount?: number;        // For preview list displays
  attachments?: string[];        // File URLs or references
  createdAt: string;             // ISO timestamp
  updatedAt?: string;             // ISO timestamp
}
