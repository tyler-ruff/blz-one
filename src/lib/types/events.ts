export interface ShiftAnnouncement {
  id: string;                            // Unique ID
  title: string;                         // Summary (e.g. “Shift Coverage Needed”)
  body: string;                          // Message/details
  authorId: string;                      // Who created it

  targetDate: string;                   // The shift or date it refers to
  shiftStart?: string;                 // Optional: specific time (ISO timestamp)
  shiftEnd?: string;

  departmentId?: string;                // Optional: relevant department
  affectedUserIds?: string[];          // Direct mentions (e.g. who needs to respond)

  urgency: 'low' | 'normal' | 'high' | 'critical';
  type: 'open-shift' | 'cancellation' | 'update' | 'reminder';

  requiresAcknowledgement?: boolean;    // Must users confirm?
  acknowledgedBy?: string[];            // List of user IDs who confirmed

  visibility: 'team' | 'department' | 'custom';
  visibleTo?: string[];                 // If custom visibility

  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;                          // Unique event ID
  title: string;                       // Event title
  description?: string;               // Optional details
  organizerId: string;                // Created by

  startTime: string;                  // ISO timestamp
  endTime?: string;

  location?: string;                  // Physical or virtual
  eventType: 'meeting' | 'training' | 'holiday' | 'milestone' | 'social';

  attendees?: string[];               // Invited or required users
  rsvpRequired?: boolean;
  rsvpResponses?: { [userId: string]: 'yes' | 'no' | 'maybe' };

  isAllDay?: boolean;
  visibility: 'public' | 'team' | 'private' | 'custom';
  visibleTo?: string[];

  createdAt: string;
  updatedAt: string;
}