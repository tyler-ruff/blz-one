export interface Project {
  id: string;                        // Unique project ID
  name: string;                     // Project title
  description?: string;             // Summary or scope
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';  // Overall state
  priority: 'low' | 'medium' | 'high' | 'urgent';

  ownerId: string;                  // User who created or owns the project
  teamIds: string[];               // Members or teams assigned (user IDs or group IDs)
  clientId?: string;               // If tied to a client (optional)

  startDate?: string;              // ISO date
  dueDate?: string;
  completedAt?: string;

  tags?: string[];                 // Labels for filtering/grouping
  tasksCount?: number;            // Cached task count
  completedTasksCount?: number;   // Cached completed count

  visibility: 'private' | 'team' | 'public';  // Permissions
  archived?: boolean;

  createdAt: string;               // ISO date
  updatedAt: string;
}