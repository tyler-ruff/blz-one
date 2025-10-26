interface Announcement {
  id: string;                         // Unique ID
  title: string;                      // Headline
  body: string;                       // Full message (markdown or rich text)
  authorId: string;                   // User who created the announcement

  visibility: 'global' | 'team' | 'project' | 'custom'; // Who can see it
  visibleTo?: string[];              // If 'custom', list of team IDs or user IDs

  category: 'general' | 'update' | 'outage' | 'event' | 'reminder' | 'policy';
  priority: 'low' | 'normal' | 'important' | 'urgent';

  pinned?: boolean;                  // Show at top of dashboards
  acknowledgedBy?: string[];         // User IDs who have marked it as read

  startDate?: string;                // Optional: start showing at this time
  endDate?: string;                  // Optional: auto-expire after this

  createdAt: string;                 // Timestamp
  updatedAt: string;
}