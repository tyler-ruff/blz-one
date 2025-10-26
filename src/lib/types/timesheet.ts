export interface TimesheetEntry {
  uid: string;                        // User ID
  id: string;
  date: string;                        // Specific work day (ISO date)
  projectId?: string;                 // Optional project reference
  taskId?: string;                    // Optional task reference
  hours: number;                      // Decimal (e.g. 7.5 for 7h30m)
  description?: string;              // What the user worked on
  tags?: string[];                   // Optional (e.g. billable, remote)
}

export interface Timesheet {
  id: string;                          // Unique timesheet ID
  userId: string;                      // Who this timesheet belongs to
  periodStart: string;                // Start of timesheet period (ISO date)
  periodEnd: string;                  // End of period (usually week end)

  entries: TimesheetEntry[];          // Array of logged entries
  totalHours?: number;                // Cached total hours (computed)

  status: 'draft' | 'submitted' | 'approved' | 'rejected';  // Review state
  submittedAt?: string;               // When user submitted it
  approvedAt?: string;                // When admin approved
  approverId?: string;                // Who approved it

  notes?: string;                     // General notes or comments
  createdAt: string;
  updatedAt: string;
}