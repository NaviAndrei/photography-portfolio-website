export interface Photo {
    id: number;          // Unique identifier for each photo
    title: string;       // The title of the photo
    url: string;         // The path to the image file
    responsiveUrl: string; // Responsive URL for different screen sizes
    category: string;    // Category for filtering (landscape, portrait, etc.)
    description: string; // Description text about the photo
    dateTaken?: string;  // Optional date when the photo was taken
    featured?: boolean;  // Flag to mark photos for display in featured section
  }